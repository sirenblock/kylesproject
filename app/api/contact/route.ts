import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { z } from 'zod'

// Simple in-memory rate limiting (10 requests per hour per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 10
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true }
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, resetTime: record.resetTime }
  }

  // Increment count
  record.count++
  rateLimitMap.set(ip, record)
  return { allowed: true }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime ? new Date(rateLimit.resetTime).toLocaleTimeString() : 'soon'
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please try again later.',
          resetTime
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Get webhook URL from environment
    const webhookUrl = process.env.WEBHOOK_URL
    if (!webhookUrl) {
      console.error('WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { error: 'Contact form is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    // Prepare webhook payload
    const webhookPayload = {
      ...validatedData,
      timestamp: new Date().toISOString(),
      source: '30A Junk Removal - Contact Form',
      ip: ip !== 'unknown' ? ip : undefined
    }

    // Dual-channel notification per form-notification-pipeline skill:
    // Fire webhook + email in parallel via Promise.allSettled so a
    // single-channel outage does not drop the lead. If EITHER channel
    // succeeds, the lead is captured. If BOTH fail, we return 500 but
    // the payload is logged for manual recovery.
    //
    // Channel 1: webhook (Make.com / Zapier / n8n / etc) with retries
    // Channel 2: Resend email to a fallback inbox (if RESEND_API_KEY set)
    const webhookPromise = sendWebhookWithRetry(webhookUrl, webhookPayload)
    const emailPromise = sendEmailFallback(webhookPayload)

    const [webhookResult, emailResult] = await Promise.allSettled([
      webhookPromise,
      emailPromise,
    ])

    const webhookOk = webhookResult.status === 'fulfilled' && webhookResult.value === true
    const emailOk = emailResult.status === 'fulfilled' && emailResult.value === true

    if (webhookOk || emailOk) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully. We will contact you soon!',
        channels: {
          webhook: webhookOk,
          email: emailOk,
        },
      })
    }

    // Both channels failed -- log for manual recovery
    console.error('ALL notification channels failed for contact form submission')
    console.error('Webhook result:', webhookResult)
    console.error('Email result:', emailResult)
    console.log('Failed submission data:', JSON.stringify(webhookPayload, null, 2))

    return NextResponse.json(
      {
        error: 'There was an issue sending your message. Please try again or call us directly at +1 (850) 368-3495.',
        fallback: true,
      },
      { status: 500 }
    )

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        },
        { status: 400 }
      )
    }

    // Handle other errors
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

// Channel 1: webhook with 3 retries + exponential backoff.
// Returns true on success, false on all-retries-failed.
async function sendWebhookWithRetry(
  webhookUrl: string,
  payload: Record<string, unknown>
): Promise<boolean> {
  const maxRetries = 3
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10000),
      })
      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`)
      }
      return true
    } catch (error) {
      console.error(`Webhook attempt ${attempt} failed:`, error)
      if (attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, 1000 * attempt))
      }
    }
  }
  return false
}

// Channel 2: Resend email fallback. Only fires if RESEND_API_KEY and
// FALLBACK_EMAIL_TO env vars are configured. Per form-notification-
// pipeline skill: providing an email fallback means lead capture
// survives any single-vendor outage (Make.com down, Zapier rate
// limit, etc).
//
// Returns true if email send succeeded; false on misconfig or error.
async function sendEmailFallback(
  payload: Record<string, unknown>
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FALLBACK_EMAIL_TO
  const from = process.env.RESEND_FROM_EMAIL || 'noreply@30ajunkremoval.com'

  if (!apiKey || !to) {
    // Not configured -- silently skip. Webhook is still the primary.
    return false
  }

  try {
    const text = Object.entries(payload)
      .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`)
      .join('\n')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[30A Junk Removal] New contact form submission`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) {
      const body = await response.text().catch(() => '')
      console.error('Resend email fallback failed:', response.status, body)
      return false
    }
    return true
  } catch (error) {
    console.error('Email fallback error:', error)
    return false
  }
}

// Health check endpoint
export async function GET() {
  const webhookConfigured = !!process.env.WEBHOOK_URL

  return NextResponse.json({
    status: 'ok',
    webhookConfigured,
    timestamp: new Date().toISOString()
  })
}

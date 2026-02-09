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

    // Send to webhook with timeout and retries
    let lastError: Error | null = null
    const maxRetries = 3

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
          signal: AbortSignal.timeout(10000) // 10 second timeout
        })

        if (!webhookResponse.ok) {
          throw new Error(`Webhook responded with status ${webhookResponse.status}`)
        }

        // Success - return immediately
        return NextResponse.json({
          success: true,
          message: 'Your message has been sent successfully. We will contact you soon!'
        })
      } catch (error) {
        lastError = error as Error
        console.error(`Webhook attempt ${attempt} failed:`, error)

        if (attempt < maxRetries) {
          // Wait before retry (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
        }
      }
    }

    // All retries failed
    console.error('All webhook attempts failed:', lastError)

    // Log the submission for manual review
    console.log('Failed submission data:', JSON.stringify(webhookPayload, null, 2))

    return NextResponse.json(
      {
        error: 'There was an issue sending your message. Please try again or call us directly.',
        fallback: true
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

// Health check endpoint
export async function GET() {
  const webhookConfigured = !!process.env.WEBHOOK_URL

  return NextResponse.json({
    status: 'ok',
    webhookConfigured,
    timestamp: new Date().toISOString()
  })
}

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Format the message for the notification email
    const formattedMessage = `
New Contact Form Submission - 30A Junk Removal

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType || 'Not specified'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
    `.trim()

    // Send notification email if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType,
          message,
          formattedMessage,
          timestamp: new Date().toISOString(),
        }),
      })
    }

    // Also log for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', formattedMessage)
    }

    return NextResponse.json({ success: true })
  } catch {
    console.error('Contact form error')
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

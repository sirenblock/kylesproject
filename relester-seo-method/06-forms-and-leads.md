# Relester SEO Method - Pillar 6: Forms, Lead Capture & Integrations

The complete lead capture pipeline from user input to notification delivery. Two form patterns: a simple contact form and a multi-step intake wizard. Both submit to API routes that dispatch to webhooks (Make.com, Zapier, n8n) or email services (Resend).

---

## 1. Simple Contact Form

A single-page form with 5 fields. Used on the Contact page and optionally embedded in sidebars.

### Component

```tsx
// components/ContactForm.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        router.push('/thank-you')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-gray-400 focus:ring-0 focus:outline-none'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Name</label>
          <input
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Phone</label>
          <input
            type="tel"
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Company</label>
          <input
            type="text"
            placeholder="Company name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Message</label>
        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
```

### Form State Machine

```
idle → (submit) → sending → (success) → redirect to /thank-you
                           → (failure) → error → (retry) → sending
```

### Field Requirements

| Field | Required | Validation |
|-------|----------|-----------|
| Name | Yes | `required` attribute |
| Email | Yes | `type="email"` + `required` |
| Phone | No | `type="tel"` |
| Company | No | None |
| Message | Yes | `required` attribute |

---

## 2. Multi-Step Intake Form

A wizard-style form with 5-10 steps. Used for detailed lead qualification (service quotes, project intake, etc.).

### Architecture

```
Step 1: Category selection (pill buttons)
Step 2: Location (Google Maps autocomplete + satellite map)
Step 3: Option selection (pill buttons)
Step 4: Project details (text inputs, optional fields)
Step 5: More options (pill buttons)
Step 6: Contact info (text inputs, required)
Step 7: Email confirmation + submit
```

### Component Structure

```tsx
// components/IntakeForm.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

// Define your options for each pill-button step
const optionGroupA = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
const optionGroupB = ['Category A', 'Category B', 'Category C', 'Category D']

type FormData = {
  userType: string
  address: string
  optionA: string
  detail1: string
  detail2: string
  optionB: string
  firstName: string
  lastName: string
  phone: string
  email: string
  gclid: string
}

const TOTAL_STEPS = 7

const stepLabels = ['Type', 'Location', 'Options', 'Details', 'Category', 'Contact', 'Email']

export default function IntakeForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [formData, setFormData] = useState<FormData>({
    userType: '',
    address: '',
    optionA: '',
    detail1: '',
    detail2: '',
    optionB: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gclid: '',
  })

  // GCLID capture (see Section 5: Ad Attribution)
  const gclidValue = searchParams.get('gclid') ?? ''
  const gclidRef = useRef(gclidValue)
  useEffect(() => { gclidRef.current = gclidValue }, [gclidValue])

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Step validation
  const canGoNext = () => {
    switch (step) {
      case 1: return !!formData.userType
      case 2: return !!formData.address
      case 3: return !!formData.optionA
      case 4: return true  // Optional fields
      case 5: return !!formData.optionB
      case 6: return !!formData.firstName && !!formData.lastName && !!formData.phone
      case 7: return !!formData.email
      default: return false
    }
  }

  const handleSubmit = async () => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, gclid: gclidRef.current }),
      })
      if (res.ok) {
        router.push('/thank-you')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Step indicator + step content + navigation */}
    </div>
  )
}
```

### Step Progress Indicator

Visual dots/circles connected by lines showing progress through the form.

```tsx
<div className="mb-10">
  <div className="flex items-center justify-between">
    {stepLabels.map((label, i) => {
      const stepNum = i + 1
      const isActive = step === stepNum
      const isCompleted = step > stepNum
      return (
        <div key={label} className="flex flex-1 flex-col items-center">
          <div className="relative flex w-full items-center justify-center">
            {/* Connecting lines */}
            {i > 0 && (
              <div className={`absolute right-1/2 left-0 top-1/2 h-px -translate-y-1/2 ${
                isCompleted ? 'bg-gray-900' : 'bg-gray-200'
              }`} />
            )}
            {i < stepLabels.length - 1 && (
              <div className={`absolute left-1/2 right-0 top-1/2 h-px -translate-y-1/2 ${
                isCompleted ? 'bg-gray-900' : 'bg-gray-200'
              }`} />
            )}
            {/* Step circle */}
            <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
              isActive || isCompleted
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-400'
            }`}>
              {isCompleted ? '✓' : stepNum}
            </div>
          </div>
          <span className={`mt-2 text-[11px] font-medium ${
            isActive ? 'text-gray-900' : isCompleted ? 'text-gray-600' : 'text-gray-400'
          }`}>
            {label}
          </span>
        </div>
      )
    })}
  </div>
</div>
```

### Pill Button Selection Pattern

For steps where users choose from a set of options:

```tsx
{/* Step: Select an option */}
{step === 3 && (
  <div>
    <h2 className="mb-2 text-xl font-bold">Select Your Option</h2>
    <p className="mb-6 text-sm text-gray-500">Choose the option that best fits.</p>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {optionGroupA.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => update('optionA', option)}
          className={`rounded-xl border-2 px-4 py-4 text-center transition-all ${
            formData.optionA === option
              ? 'border-gray-900 bg-gray-50'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
          }`}
        >
          <span className={`text-sm font-medium ${
            formData.optionA === option ? 'text-gray-900' : 'text-gray-600'
          }`}>
            {option}
          </span>
        </button>
      ))}
    </div>
  </div>
)}
```

### Navigation (Back / Continue / Submit)

```tsx
<div className="mt-10 flex items-center justify-between">
  {step > 1 ? (
    <button
      type="button"
      onClick={() => setStep(step - 1)}
      className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700"
    >
      Back
    </button>
  ) : <div />}

  {step < TOTAL_STEPS ? (
    <button
      type="button"
      onClick={() => canGoNext() && setStep(step + 1)}
      disabled={!canGoNext()}
      className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white disabled:opacity-40"
    >
      Continue
    </button>
  ) : (
    <button
      type="button"
      onClick={handleSubmit}
      disabled={!canGoNext() || status === 'submitting'}
      className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white disabled:opacity-40"
    >
      {status === 'submitting' ? 'Submitting...' : 'Submit'}
    </button>
  )}
</div>
```

---

## 3. Google Maps Places Autocomplete

Adds address autocomplete with a satellite map preview. Only loads on the address step.

### Script Loading (On Demand)

```tsx
const mapRef = useRef<HTMLDivElement>(null)
const mapInstanceRef = useRef<google.maps.Map | null>(null)
const markerRef = useRef<google.maps.Marker | null>(null)
const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
const inputRef = useRef<HTMLInputElement>(null)

const initMap = useCallback(() => {
  if (!mapRef.current || !window.google) return

  const map = new google.maps.Map(mapRef.current, {
    center: { lat: 39.5, lng: -98.35 },  // Center of US
    zoom: 4,
    mapTypeId: 'satellite',
    disableDefaultUI: true,
    zoomControl: true,
  })
  mapInstanceRef.current = map
}, [])

const initAutocomplete = useCallback(() => {
  if (!inputRef.current || !window.google || autocompleteRef.current) return

  const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
    types: ['address'],
    componentRestrictions: { country: 'us' },  // Restrict to your country
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace()
    if (place.formatted_address) {
      update('address', place.formatted_address)
    }
    if (place.geometry?.location && mapInstanceRef.current) {
      const loc = place.geometry.location
      mapInstanceRef.current.setCenter(loc)
      mapInstanceRef.current.setZoom(20)  // Zoom to property level

      if (markerRef.current) markerRef.current.setMap(null)
      markerRef.current = new google.maps.Marker({
        map: mapInstanceRef.current,
        position: loc,
      })
    }
  })

  autocompleteRef.current = autocomplete
}, [])

// Load script only when address step is active
useEffect(() => {
  if (step !== 2) return  // Only on address step
  if (window.google?.maps) {
    initMap()
    initAutocomplete()
    return
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) return

  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly`
  script.async = true
  script.onload = () => {
    initMap()
    initAutocomplete()
  }
  document.head.appendChild(script)
}, [step, initMap, initAutocomplete])
```

### Address Step UI

```tsx
{step === 2 && (
  <div>
    <h2 className="mb-2 text-xl font-bold">Property Location</h2>
    <p className="mb-6 text-sm text-gray-500">Enter the address.</p>
    <div>
      <label className="mb-1.5 block text-xs font-medium text-gray-500">Address</label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Start typing an address..."
        value={formData.address}
        onChange={(e) => update('address', e.target.value)}
        className={inputClass}
      />
    </div>
    <div
      ref={mapRef}
      className="mt-4 h-[400px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"
    />
  </div>
)}
```

### TypeScript Setup

```bash
npm install -D @types/google.maps
```

No runtime dependency needed - the Google Maps script is loaded from CDN.

---

## 4. API Route Handlers

### Contact Form Handler

```tsx
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Dispatch to webhook (Make.com / Zapier / n8n)
    const webhookUrl = process.env.WEBHOOK_URL
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name,
          email,
          phone: phone || '',
          company: company || '',
          message,
        }),
      })

      if (!res.ok) {
        throw new Error(`Webhook returned ${res.status}`)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
```

### Intake Form Handler

```tsx
// app/api/intake/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      userType, address, optionA, detail1, detail2,
      optionB, firstName, lastName, phone, email, gclid,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    // Dispatch to webhook
    const webhookUrl = process.env.WEBHOOK_URL
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'intake',
          userType,
          address,
          optionA,
          detail1: detail1 || '',
          detail2: detail2 || '',
          optionB,
          firstName,
          lastName,
          phone,
          email,
          gclid: gclid || '',
        }),
      })

      if (!res.ok) {
        throw new Error(`Webhook returned ${res.status}`)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Intake form error:', err)
    return NextResponse.json(
      { error: 'Failed to process intake form' },
      { status: 500 }
    )
  }
}
```

### API Route Pattern

```
Client form → POST /api/[form-type] → Validate → Webhook dispatch → JSON response
                                                → (optional) Email via Resend
                                                → (optional) Database write
```

---

## 5. Ad Attribution (GCLID Tracking)

Captures Google Ads click IDs from URL parameters and attaches them to form submissions for conversion tracking.

### How It Works

1. User clicks Google Ad → lands on `yourdomain.com/?gclid=abc123`
2. Form component captures `gclid` from URL on mount
3. When form is submitted, `gclid` is sent alongside form data
4. Webhook/CRM receives the GCLID for offline conversion tracking

### Implementation

```tsx
// In the multi-step form component:
const searchParams = useSearchParams()
const gclidValue = searchParams.get('gclid') ?? ''
const gclidRef = useRef(gclidValue)

useEffect(() => {
  gclidRef.current = gclidValue
}, [gclidValue])

// On submit:
body: JSON.stringify({ ...formData, gclid: gclidRef.current })
```

**Why `useRef`?** The GCLID value is captured once on page load. Using a ref prevents it from being lost during re-renders across form steps.

---

## 6. Alternative Notification Methods

### Option A: Webhook (Make.com / Zapier / n8n)

Simplest setup. POST form data to a webhook URL, and the automation platform handles routing (email, CRM, Slack, etc.).

```tsx
const res = await fetch(process.env.WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
})
```

**Pros:** No email config needed, flexible routing, visual automation builder.
**Cons:** Third-party dependency, potential latency, usage limits on free tiers.

### Option B: Resend Email

Direct email delivery from the API route.

```tsx
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Inside POST handler:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: config.notificationEmails,
  subject: `New contact form: ${name}`,
  html: `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Message:</strong> ${message}</p>`,
})
```

**Dependency:** `npm install resend`

**Pros:** Direct, no third party, fast.
**Cons:** Need to verify sender domain, limited formatting without templates.

### Option C: Both (Recommended for Production)

Send to webhook for CRM/automation AND send email notification as backup.

```tsx
// Dispatch both in parallel
await Promise.all([
  fetch(process.env.WEBHOOK_URL!, { method: 'POST', ... }),
  resend.emails.send({ ... }),
])
```

---

## 7. Success Page

After form submission, redirect to a thank-you page.

```tsx
// app/thank-you/page.tsx (or app/success/page.tsx)
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },  // Don't index thank-you pages
}

export default function ThankYou() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Thank You!</h1>
        <p className="mt-4 text-gray-600">
          We've received your submission and will be in touch shortly.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}
```

**Important:** Add `robots: { index: false }` - thank-you pages should never appear in search results. Also add `/thank-you` and `/success` to `robots.ts` disallow list.

---

## 8. Environment Variables for Forms

```bash
# .env
WEBHOOK_URL=https://hook.us1.make.com/your-webhook-id    # Make.com / Zapier / n8n
RESEND_API_KEY=re_xxxxxxxxxxxxx                            # Resend (if using email)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...                  # Maps autocomplete
```

| Variable | Public? | Purpose |
|----------|---------|---------|
| `WEBHOOK_URL` | No | Webhook endpoint for form dispatch |
| `RESEND_API_KEY` | No | Resend API key for email notifications |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Yes | Google Maps JS API (Places library) |

---

## Form Design Rules

1. **Two form types:** Simple contact (5 fields, one page) + Multi-step intake (5-10 steps, wizard)
2. **Pill buttons for categories.** Users click to select, don't type. Reduces friction.
3. **One question per step** in the multi-step form. Keeps cognitive load low.
4. **Optional fields are clearly marked.** Don't require what you don't need.
5. **Progress indicator** shows step count and current position.
6. **Back button** on every step except the first.
7. **Disabled state** on Continue/Submit when validation fails (`disabled:opacity-40`).
8. **Error state** shows inline message, not alert/modal.
9. **Success redirects** to a dedicated thank-you page (not a toast or inline message).
10. **GCLID capture** on every lead form for ad attribution.

---

## Checklist

- [ ] Contact form submits to `/api/contact` with validation
- [ ] Multi-step form has step indicators and Back/Continue navigation
- [ ] Google Maps loads only on the address step (not globally)
- [ ] Autocomplete restricts to target country
- [ ] Map zooms to 20 and shows marker on address selection
- [ ] API routes validate required fields before dispatching
- [ ] Webhook URL is in environment variables (not hardcoded)
- [ ] GCLID is captured from URL params and sent with form data
- [ ] Thank-you page has `robots: { index: false }`
- [ ] Form states: idle → sending → redirect (success) or error (retry)
- [ ] Submit button shows loading state and is disabled during submission

'use client'

import { useState } from 'react'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'

// Sidebar newsletter signup per blog-post-anatomy skill step 10.
//
// Captures emails from readers who are not yet ready to call. Uses
// mailto-fallback approach (no third-party email service required):
// submission opens the user's email client with subject "Subscribe to
// 30A Junk Removal updates" and a prefilled body. This converts
// motivated readers (who will complete the mailto) and avoids the
// failure modes of a JavaScript email service integration.

interface Props {
  variant?: 'sidebar' | 'inline'
}

export function NewsletterSignup({ variant = 'sidebar' }: Props) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    // Open user's mail client -- bulletproof, no API key required
    const subject = encodeURIComponent('Subscribe to 30A Junk Removal updates')
    const body = encodeURIComponent(
      `Please add me to the 30A Junk Removal updates list.\n\nEmail: ${email}\n\nI'd like to receive seasonal junk removal tips, hurricane-prep alerts, and HOA-specific guides for 30A and PCB.`
    )
    window.location.href = `mailto:hello@30ajunkremoval.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (variant === 'sidebar') {
    return (
      <div className="rounded-xl border border-ocean-200 bg-gradient-to-br from-ocean-50 to-seafoam-50 p-5">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-4 h-4 text-ocean-700" />
          <h3 className="text-sm font-bold text-slate-900">
            30A Junk Removal Updates
          </h3>
        </div>
        <p className="text-xs text-slate-600 mb-3 leading-relaxed">
          Seasonal tips, hurricane prep, and HOA-specific guides for beach property owners.
        </p>
        {submitted ? (
          <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Check your email
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <label htmlFor="newsletter-email-sidebar" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email-sidebar"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
            <button
              type="submit"
              data-cta="newsletter-signup-sidebar"
              className="w-full px-3 py-2 bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    )
  }

  // Inline variant -- wider, for use in article footer or sections
  return (
    <div className="rounded-2xl border-2 border-ocean-200 bg-gradient-to-br from-ocean-50 via-white to-seafoam-50 p-6 md:p-7">
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-ocean-700" />
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              30A Junk Removal Updates
            </h3>
          </div>
          <p className="text-sm text-slate-600">
            Seasonal tips, hurricane prep alerts, and HOA-specific guides for 30A &amp; PCB property owners.
          </p>
        </div>
        {submitted ? (
          <div className="flex items-center gap-2 text-emerald-700 font-medium">
            <CheckCircle className="w-5 h-5" />
            Check your email
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-row gap-2 shrink-0 w-full md:w-auto">
            <label htmlFor="newsletter-email-inline" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email-inline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 md:w-64 px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
            <button
              type="submit"
              data-cta="newsletter-signup-inline"
              className="px-5 py-2.5 bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

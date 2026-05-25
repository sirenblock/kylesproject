'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Clock, Star, Truck } from 'lucide-react'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// Post-conversion thank-you page. Pushes a `conversion` event to the
// dataLayer so Google Ads / GA4 can attribute the conversion back to
// the originating campaign (via the gclid + UTM params captured
// earlier via GCLIDCapture component).
//
// Per conversion-tracking-attribution skill: the conversion event
// fires once on mount, after the page has rendered, so it survives
// network throttling and partial loads.

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'conversion',
      conversionType: 'form_complete',
      conversionPage: '/thank-you',
      timestamp: new Date().toISOString(),
    })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-seafoam-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12 border border-slate-200">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            Thank you — request received
          </h1>
          <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
            We received your message and will respond within minutes during business hours (7 AM – 7 PM, 7 days/week).
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-slate-900 mb-4">What happens next:</h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span className="text-slate-700">
                  We review your photos and message, usually within 10 minutes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span className="text-slate-700">
                  We text or call back with a final, all-inclusive price.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span className="text-slate-700">
                  If the price works, we schedule a pickup — often same-day.
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="thank-you-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/"
              data-cta="thank-you-home"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold border-2 border-ocean-200 hover:bg-ocean-50 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-sm text-slate-500 pt-5 border-t border-slate-100">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              4.9★ · 127+ Reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-500" />
              Same-Day Service
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-ocean-500" />
              Licensed &amp; Insured
            </span>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-slate-500">
          Need to reach us immediately?{' '}
          <a href={`tel:${PHONE_NUMBER}`} className="text-ocean-600 font-semibold hover:underline">
            Call {FORMATTED_PHONE}
          </a>
        </div>
      </div>
    </main>
  )
}

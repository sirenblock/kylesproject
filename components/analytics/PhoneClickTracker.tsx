'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Delegated phone click tracking listener.
// Per senior SEO playbook link-equity skill: phone links appear on 6+
// surfaces per page (header, footer, sidebar, inline CTA, end-of-article
// CTA, mobile sticky bar). A single delegated listener at root layout
// captures all tel: clicks without each component needing tracking code.
//
// Emits 'phone_call_click' dataLayer event with the phone number
// captured from the href, plus an optional cta context (from
// data-cta attribute) for source attribution.

export function PhoneClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const a = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!a) return
      const phoneNumber = a.href.replace('tel:', '')
      const cta = a.getAttribute('data-cta') || 'untagged'
      const dataLayer = (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer
      if (dataLayer) {
        dataLayer.push({
          event: 'phone_call_click',
          phoneNumber,
          cta,
          page: window.location.pathname,
        })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}

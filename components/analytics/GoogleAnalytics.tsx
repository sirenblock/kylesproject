'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Track custom events
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track quote calculator events
export function trackQuoteEvent(step: string, details?: Record<string, string | number>) {
  trackEvent({
    action: 'quote_calculator',
    category: 'engagement',
    label: step,
    ...details,
  })
}

// Track phone/text clicks
export function trackContactClick(type: 'phone' | 'text' | 'email') {
  trackEvent({
    action: 'contact_click',
    category: 'engagement',
    label: type,
  })
}

// Declare gtag on window
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
  }
}

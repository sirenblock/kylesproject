'use client'

import Script from 'next/script'

export function PerfectClick() {
  return (
    <Script
      src="https://www.perfectclick.ai/service/conversionTracker.js?cv=1"
      strategy="afterInteractive"
    />
  )
}

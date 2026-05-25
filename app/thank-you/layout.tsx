import type { Metadata } from 'next'

// /thank-you is a post-conversion confirmation page.
// Per conversion-pages-legal-search skill: noindex + robots disallow
// keeps this out of search results while still serving the dataLayer
// conversion event for Google Ads / GA4 attribution.
export const metadata: Metadata = {
  title: 'Thank You - 30A Junk Removal',
  description: 'Thank you for contacting 30A Junk Removal. We will respond within minutes during business hours.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

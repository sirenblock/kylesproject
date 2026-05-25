'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ArrowRight } from 'lucide-react'

// Dual-action mobile sticky bar -- phone + quote CTA.
// Per senior SEO playbook: this surface gives blog posts two of their
// six inbound links to the conversion page, and is one of the
// highest-CTR conversion surfaces on the site.
//
// Replaces the prior call-only SimpleContactBar pattern.

const PHONE_NUMBER = '8503683495'
const FORMATTED_PHONE = '(850) 368-3495'

export function MobileStickyBar() {
  const pathname = usePathname()

  // Hide where the user is already taking an action
  if (pathname === '/contact' || pathname === '/#quote') return null

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-2xl safe-area-bottom"
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-4 font-bold active:scale-95 transition-transform"
        data-cta="mobile-sticky-phone"
        aria-label={`Call ${FORMATTED_PHONE}`}
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm sm:text-base">Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-4 py-4 font-bold active:scale-95 transition-transform"
        data-cta="mobile-sticky-quote"
      >
        <span className="text-sm sm:text-base">Get Free Quote</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

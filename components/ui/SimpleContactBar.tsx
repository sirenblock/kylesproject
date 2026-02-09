'use client'

import { Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

// Simple, clean sticky contact bar - Relester Method conversion pattern
// Keep it simple: One action, always visible, no clutter

const PHONE_NUMBER = '8503683495'
const FORMATTED_PHONE = '(850) 368-3495'

export function SimpleContactBar() {
  const pathname = usePathname()

  // Hide on contact page (user is already there)
  if (pathname === '/contact') return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      {/* Single action: Call now */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-5 shadow-2xl active:scale-95 transition-transform"
      >
        <div className="relative">
          <Phone className="w-6 h-6" />
          {/* Subtle pulse animation */}
          <span className="absolute inset-0 animate-ping opacity-20">
            <Phone className="w-6 h-6" />
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium opacity-90">Call Now</span>
          <span className="text-lg font-bold tracking-wide">{FORMATTED_PHONE}</span>
        </div>
      </a>
    </div>
  )
}

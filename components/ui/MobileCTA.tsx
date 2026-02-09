'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { PHONE_NUMBER, FORMATTED_PHONE, getSMSLink } from '@/lib/utils'

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t-2 border-emerald-500 shadow-2xl safe-area-bottom">
      {/* Phone Number Display */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Same-Day Service</span>
          <span className="text-xs text-white/60">•</span>
          <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
            {FORMATTED_PHONE}
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 p-3 bg-white">
        {/* Call Button with Pulse Animation */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="relative flex items-center justify-center gap-2 h-[60px] bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden group"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-xl bg-emerald-400 animate-ping opacity-20"></span>
          <Phone className="w-6 h-6 relative z-10" />
          <span className="relative z-10">Call Now</span>
        </a>

        {/* Text Button */}
        <a
          href={getSMSLink(PHONE_NUMBER, "Hi, I need a quote for junk removal")}
          className="flex items-center justify-center gap-2 h-[60px] bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Text Us</span>
        </a>
      </div>
    </div>
  )
}

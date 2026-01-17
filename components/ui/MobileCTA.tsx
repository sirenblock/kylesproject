'use client'

import { Phone, MessageCircle, Calculator } from 'lucide-react'
import Link from 'next/link'
import { PHONE_NUMBER } from '@/lib/utils'

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-sand-200 shadow-lg safe-area-bottom">
      <div className="grid grid-cols-3 divide-x divide-sand-200">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center py-3 text-slate-600 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs mt-1 font-medium">Call</span>
        </a>
        <a
          href={`sms:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center py-3 text-slate-600 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs mt-1 font-medium">Text</span>
        </a>
        <Link
          href="/#quote"
          className="flex flex-col items-center justify-center py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white"
        >
          <Calculator className="w-5 h-5" />
          <span className="text-xs mt-1 font-medium">Quote</span>
        </Link>
      </div>
    </div>
  )
}

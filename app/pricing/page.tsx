import { Metadata } from 'next'
import Link from 'next/link'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { PricingTable } from '@/components/sections/PricingTable'
import { Phone, MessageCircle, Camera } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing | 30A Junk Removal',
  description: 'Transparent junk removal pricing for 30A. From $150 for 1/4 truck to full estate cleanouts. Get an instant quote online or text us photos for construction debris.',
}

export default function PricingPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              No hidden fees. No surprises. Just honest pricing for quality junk removal.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Quote Calculator */}
      <QuoteCalculator />

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What's Included</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  All labor - we do the heavy lifting
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Loading and hauling
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Proper disposal and recycling
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Cleanup of the removal area
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Before and after photos (on request)
                </li>
              </ul>
            </div>

            <div className="bg-gold-50 rounded-2xl p-8 border border-gold-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Construction Debris Pricing</h3>
              <p className="text-slate-600 mb-4">
                Construction materials require custom quotes due to weight-based disposal fees. The quickest way to get a price:
              </p>
              <div className="space-y-3">
                <a
                  href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction debris removal.`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gold-300 hover:bg-gold-100 transition-colors"
                >
                  <Camera className="w-5 h-5 text-gold-600" />
                  <span className="font-medium text-slate-700">Text us photos for a quote in 30 min</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gold-300 hover:bg-gold-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-600" />
                  <span className="font-medium text-slate-700">Call to discuss your project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Have questions about pricing? We're happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-lg font-semibold hover:bg-ocean-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

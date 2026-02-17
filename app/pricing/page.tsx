import { Metadata } from 'next'
import Link from 'next/link'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { PricingTable } from '@/components/sections/PricingTable'
import { Phone, MessageCircle, Camera, CheckCircle, Clock, Truck, DollarSign, ArrowRight } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Pricing | 30A Junk Removal',
  description: 'Transparent junk removal pricing for 30A. From $150 for 1/4 truck to full estate cleanouts. Get an instant quote online or text us photos for construction debris.',
  alternates: {
    canonical: getCanonicalUrl('/pricing'),
  },
}

export default function PricingPage() {
  const internalLinks = getContextualLinks('core', '/pricing')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative -mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
              <Clock className="w-4 h-4" />
              Same-Day Service Available
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-ocean-100 mb-8">
              No hidden fees. No surprises. Just honest pricing for quality <Link href="/services" className="text-white hover:text-seafoam-200 underline font-medium">junk removal</Link> services throughout <Link href="/service-areas" className="text-white hover:text-seafoam-200 underline font-medium">30A</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Text for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-white border-b border-sand-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">No Hidden Fees</h3>
              <p className="text-sm text-slate-600">What we quote is what you pay</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-100 text-seafoam-600 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Fast Service</h3>
              <p className="text-sm text-slate-600">Same-day appointments available</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">All-Inclusive</h3>
              <p className="text-sm text-slate-600">Labor, hauling & disposal included</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-100 text-seafoam-600 mb-3">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Volume-Based</h3>
              <p className="text-sm text-slate-600">You only pay for space used</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Quote Calculator */}
      <QuoteCalculator />

      {/* What's Included & Construction Debris */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-sand-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-ocean-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">What's Included</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">All Labor</span>
                    <p className="text-sm text-slate-600">We do 100% of the heavy lifting</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Loading & Hauling</span>
                    <p className="text-sm text-slate-600">Transport to <a href="https://www.epa.gov/recycle/recycling-basics-and-benefits" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">proper facilities</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Eco-Friendly Disposal</span>
                    <p className="text-sm text-slate-600"><Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">Proper disposal</Link> and <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">recycling</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Cleanup Service</span>
                    <p className="text-sm text-slate-600">We sweep and tidy the removal area</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Photo Documentation</span>
                    <p className="text-sm text-slate-600">Before & after photos on request</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Donation Coordination</span>
                    <p className="text-sm text-slate-600">Items to <a href="https://www.goodwill.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Goodwill</a> & <a href="https://www.habitat.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Habitat for Humanity</a></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Construction Debris */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 shadow-md border-2 border-gold-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Camera className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Construction Debris</h2>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                <Link href="/services/construction-debris" className="text-ocean-600 hover:underline font-semibold">Construction materials</Link> require custom quotes due to weight-based disposal fees. Renovating in <Link href="/service-areas/rosemary-beach" className="text-ocean-600 hover:underline font-medium">Rosemary Beach</Link> or <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>? Get your quote fast:
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction debris removal.`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-gold-400 hover:bg-gold-50 hover:border-gold-500 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Text Us Photos</p>
                    <p className="text-sm text-slate-600">Get quote in 30 minutes</p>
                  </div>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-gold-400 hover:bg-gold-50 hover:border-gold-500 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Call {FORMATTED_PHONE}</p>
                    <p className="text-sm text-slate-600">Discuss your project</p>
                  </div>
                </a>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-gold-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Common materials:</span> Drywall, tile, lumber, concrete, roofing, flooring, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Questions about pricing? Check our <Link href="/faq" className="text-white hover:text-seafoam-200 underline font-medium">FAQ</Link> or <Link href="/contact" className="text-white hover:text-seafoam-200 underline font-medium">contact us</Link>. We serve from <Link href="/service-areas/inlet-beach" className="text-white hover:text-seafoam-200 underline font-medium">Inlet Beach</Link> to <Link href="/service-areas/grayton-beach" className="text-white hover:text-seafoam-200 underline font-medium">Grayton Beach</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Resources"
      />
    </main>
  )
}

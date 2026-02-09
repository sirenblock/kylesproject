import { Metadata } from 'next'
import Link from 'next/link'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { PricingTable } from '@/components/sections/PricingTable'
import { Phone, MessageCircle, Camera } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'
import { UrgencyBadge } from '@/components/ui/UrgencyBadge'

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
    <div className="py-12">
      {/* Urgency Banner */}
      <UrgencyBadge variant="banner" type="same-day" />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <UrgencyBadge variant="inline" type="fast-response" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              No hidden fees. No surprises. Just honest pricing for quality <Link href="/services" className="text-ocean-600 hover:underline font-medium">junk removal</Link> services throughout <Link href="/service-areas" className="text-ocean-600 hover:underline font-medium">30A</Link>.
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
                  Loading and hauling to <a href="https://www.epa.gov/recycle/recycling-basics-and-benefits" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">proper facilities</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">Proper disposal</Link> and <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">recycling</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Cleanup of the removal area
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Before and after photos (on request)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 shrink-0" />
                  Donations to <a href="https://www.goodwill.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Goodwill</a> when applicable
                </li>
              </ul>
            </div>

            <div className="bg-gold-50 rounded-2xl p-8 border border-gold-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Construction Debris Pricing</h3>
              <p className="text-slate-600 mb-4">
                <Link href="/services/construction-debris-removal" className="text-ocean-600 hover:underline font-medium">Construction materials</Link> require custom quotes due to weight-based disposal fees. Whether you're renovating in <Link href="/service-areas/rosemary-beach" className="text-ocean-600 hover:underline font-medium">Rosemary Beach</Link> or <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>, the quickest way to get a price:
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
              Have questions about pricing? Check our <Link href="/faq" className="text-ocean-600 hover:underline font-medium">FAQ page</Link> or <Link href="/contact" className="text-ocean-600 hover:underline font-medium">contact us</Link> directly. We serve all of <a href="https://www.visitflorida.com/places-to-go/northwest/30a/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Florida's 30A</a>, from <Link href="/service-areas/inlet-beach" className="text-ocean-600 hover:underline font-medium">Inlet Beach</Link> to <Link href="/service-areas/grayton-beach" className="text-ocean-600 hover:underline font-medium">Grayton Beach</Link>, and we're committed to supporting our local community through partnerships with <a href="https://www.habitat.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Habitat for Humanity</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <UrgencyBadge variant="inline" type="available-now" />
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors"
                data-cta
              >
                <Phone className="w-5 h-5" />
                {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-lg font-semibold hover:bg-ocean-50 transition-colors"
                data-cta
              >
                <MessageCircle className="w-5 h-5" />
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Resources"
      />
    </div>
  )
}

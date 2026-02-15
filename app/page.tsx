import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from "@/components/sections/Hero"
import { ServiceCards } from "@/components/sections/ServiceCards"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { LinksSection } from "@/components/seo/LinksSection"
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from "@/lib/seo"
import { TrustBadges } from "@/components/ui/TrustBadges"
import { QuickQuoteForm } from "@/components/ui/QuickQuoteForm"
import { Truck, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
}

// Lazy load below-the-fold components for better performance
const QuoteCalculator = dynamic(() => import("@/components/sections/QuoteCalculator").then(mod => ({ default: mod.QuoteCalculator })), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="text-slate-600">Loading calculator...</div></div>,
  ssr: true, // Enable SSR for SEO
})

const PricingTable = dynamic(() => import("@/components/sections/PricingTable").then(mod => ({ default: mod.PricingTable })), {
  ssr: true,
})

const ServicesGrid = dynamic(() => import("@/components/sections/ServicesGrid").then(mod => ({ default: mod.ServicesGrid })), {
  ssr: true,
})

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
})

const ServiceArea = dynamic(() => import("@/components/sections/ServiceArea").then(mod => ({ default: mod.ServiceArea })), {
  ssr: true,
})

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  ssr: true,
})

const CTASection = dynamic(() => import("@/components/sections/CTASection").then(mod => ({ default: mod.CTASection })), {
  ssr: true,
})

export default function HomePage() {
  const internalLinks = getContextualLinks('core', '/')
  const externalLinks = getExternalLinks(5)

  return (
    <>
      <Hero />

      {/* Quick Quote Form Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sand-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <QuickQuoteForm />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges variant="horizontal" />
        </div>
      </section>

      <QuoteCalculator />
      <ServiceCards />

      {/* Truck Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-ocean-400 to-seafoam-400 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/gallery/before-removal-1.webp"
                  alt="30A Junk Removal truck loaded with furniture and junk ready for quick haul"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-4">
                <Truck className="w-4 h-4" />
                Real Results
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                From Cluttered to Clear{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-seafoam-500">
                  in One Trip
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our trucks can handle anything from a single <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline font-medium">furniture item</Link> to a full <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate cleanout</Link>. No job is too big or too small for our professional team serving <Link href="/service-areas" className="text-ocean-600 hover:underline font-medium">30A communities</Link>.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-ocean-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Volume-Based Pricing</span>
                    <p className="text-sm text-slate-600">You only pay for the space your items take up in our truck</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-seafoam-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-seafoam-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Same-Day Service</span>
                    <p className="text-sm text-slate-600">Call before noon for same-day pickup in most areas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Truck className="w-4 h-4 text-ocean-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">We Do All the Work</span>
                    <p className="text-sm text-slate-600">100% of the heavy lifting, loading, and hauling</p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Truck className="w-5 h-5" />
                  Call {FORMATTED_PHONE}
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-xl font-semibold hover:bg-ocean-50 transition-all"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <PricingTable />
      <ServicesGrid />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Explore More About 30A Junk Removal"
      />
      <CTASection />
    </>
  )
}

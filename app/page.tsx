import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Hero } from "@/components/sections/Hero"
import { ServiceCards } from "@/components/sections/ServiceCards"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { LinksSection } from "@/components/seo/LinksSection"
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from "@/lib/seo"
import { TrustBadges } from "@/components/ui/TrustBadges"
import { QuickQuoteForm } from "@/components/ui/QuickQuoteForm"

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

import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from "@/components/sections/Hero"
import { ServiceCards } from "@/components/sections/ServiceCards"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { AudienceCTAs } from "@/components/sections/AudienceCTAs"
import { LinksSection } from "@/components/seo/LinksSection"
import { OfferCatalogSchema, HomepageFAQSchema, ImageGallerySchema } from "@/components/seo/HomepageSchemas"
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from "@/lib/seo"
import { TrustBadges } from "@/components/ui/TrustBadges"
import { Truck, CheckCircle, Clock, ArrowRight, Calendar, BookOpen } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
}

// Lazy load below-the-fold components for better performance
const QuickQuoteForm = dynamic(() => import("@/components/ui/QuickQuoteForm").then(mod => ({ default: mod.QuickQuoteForm })), {
  ssr: true,
})

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
      <OfferCatalogSchema />
      <HomepageFAQSchema />
      <ImageGallerySchema />
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

      <ServiceArea />
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
                Our trucks can handle anything from a single <Link href="/services/furniture-removal" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600 font-medium">furniture item</Link> to a full <Link href="/services/estate-cleanouts" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600 font-medium">estate cleanout</Link>. No job is too big or too small for our professional team serving <Link href="/service-areas" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600 font-medium">30A communities</Link>.
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

      {/* Audience-segmented CTAs -- per Play 6 audience-aware-ctas skill */}
      <AudienceCTAs />

      <Testimonials />

      {/* Latest from the Blog -- distributes homepage link equity to cluster posts */}
      <section className="py-16 md:py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-50 text-ocean-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Latest Guides
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Junk Removal Guides for 30A &amp; PCB
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              In-depth operational guides for property owners, vacation rental managers, and homeowners across the 30A corridor and Panama City Beach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.slice(-6).reverse().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] relative bg-gradient-to-br from-ocean-400 to-seafoam-500 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium bg-white/25 backdrop-blur-sm text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.lastUpdated || post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All {blogPosts.length} Guides
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={[]}
        title="Explore More About 30A Junk Removal"
      />
      <CTASection />
    </>
  )
}

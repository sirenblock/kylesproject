import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { CollectionPageSchema } from '@/components/seo/PagedSchemas'
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
} from '@/components/seo/StructuredData'
import {
  serviceDetails,
  getAllServiceSlugs,
  getServicePriceRange,
} from '@/lib/services'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

// CONSOLIDATED /services HUB
// Per 2026-05-28 AI compliance audit: this single page replaces the
// previous 31 templated /services/[name] pages. Each service renders
// as a deep-anchored section. Old URLs 301 to /services#[slug].
//
// Why one page: 31 sibling pages sharing 80%+ template structure
// triggered the May 2026 Core Update "scaled content abuse" pattern.
// The OfferCatalog schema (declared on the homepage globally) already
// announces all 31 services to Google. This consolidated page now
// fulfills the user-facing role without the sibling-similarity risk.

export const metadata: Metadata = {
  title: 'Services',
  description:
    'All junk removal services for 30A & PCB — furniture, hot tubs, estate cleanouts, construction debris, vacation rental turnovers, and more.',
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
}

const slugs = getAllServiceSlugs()
const services = slugs
  .map((s) => serviceDetails[s])
  .filter(Boolean)

export default function ServicesPage() {
  const internalLinks = getContextualLinks('core', '/services')
  const externalLinks = getExternalLinks(5)

  // Aggregate FAQ schema across all services -- one FAQPage entry on
  // the consolidated hub for AI citation eligibility.
  const allFaqs = services.flatMap((s) =>
    (s.faqs || []).map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  )

  return (
    <main className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Services', url: 'https://www.30ajunkremoval.com/services' },
        ]}
      />
      <CollectionPageSchema
        name="30A Junk Removal — All Services"
        description="Complete list of junk removal services across 30A, Panama City Beach, Walton & Bay Counties."
        url="/services"
        numberOfItems={services.length}
      />
      <FAQSchema questions={allFaqs.slice(0, 50)} />
      {services.map((s) => {
        const priceRange = getServicePriceRange(s.pricing)
        return (
          <ServiceSchema
            key={s.slug}
            name={s.title}
            description={s.description}
            url={`/services#${s.slug}`}
            {...(priceRange && {
              lowPrice: priceRange.lowPrice,
              highPrice: priceRange.highPrice,
            })}
          />
        )
      })}

      {/* Hero */}
      <section className="-mt-24 pt-32 pb-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Every Junk Removal Service We Offer
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            {services.length} services across 30A, Panama City Beach, Walton &amp; Bay Counties. Same-day available. Photo quotes within 10 minutes. From $150 minimum.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Text for a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ocean-200">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              4.9★ · 127+ Reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              Same-Day Service
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-seafoam-300" />
              Licensed &amp; Insured
            </span>
          </div>
        </div>
      </section>

      {/* Table of contents -- jump-to navigation for all 31 services */}
      <section className="py-10 bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-3">
            Jump to a service ({services.length})
          </h2>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700 hover:border-ocean-400 hover:text-ocean-700 transition-colors"
              >
                {s.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Each service as an anchor section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, idx) => {
            const priceRange = getServicePriceRange(s.pricing)
            const priceLabel = priceRange
              ? `$${priceRange.lowPrice} - $${priceRange.highPrice}`
              : s.pricing.starting || 'Custom Quote'
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 border-t-2 border-slate-200 pt-12 first:border-t-0 first:pt-0"
              >
                <div className="grid md:grid-cols-[1fr_280px] gap-8 mb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-ocean-600 mb-2">
                      Service {idx + 1} of {services.length}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                      {s.title}
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <aside className="bg-gradient-to-br from-ocean-50 to-seafoam-50 border border-ocean-200 rounded-2xl p-5">
                    <div className="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-1">
                      Typical Price Range
                    </div>
                    <div className="text-2xl font-bold text-ocean-900 mb-3">
                      {priceLabel}
                    </div>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="block w-full text-center px-4 py-2.5 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors mb-2"
                    >
                      Call for Quote
                    </a>
                    <Link
                      href="/contact"
                      className="block w-full text-center px-4 py-2.5 bg-white text-ocean-700 rounded-lg font-semibold border-2 border-ocean-200 hover:bg-ocean-50 transition-colors"
                    >
                      Text Photos
                    </Link>
                  </aside>
                </div>

                {/* Features */}
                {s.features && s.features.length > 0 && (
                  <div className="mb-5">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-3">
                      What&apos;s included
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      {s.features.slice(0, 8).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing tiers (if available) */}
                {(s.pricing.quarterTruck || s.pricing.halfTruck) && (
                  <div className="mb-5 bg-slate-50 rounded-xl p-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-2">
                      Pricing tiers
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      {s.pricing.quarterTruck && (
                        <div>
                          <div className="text-xs text-slate-500">¼ truck</div>
                          <div className="font-bold text-slate-900">
                            {s.pricing.quarterTruck}
                          </div>
                        </div>
                      )}
                      {s.pricing.halfTruck && (
                        <div>
                          <div className="text-xs text-slate-500">½ truck</div>
                          <div className="font-bold text-slate-900">
                            {s.pricing.halfTruck}
                          </div>
                        </div>
                      )}
                      {s.pricing.threeQuarterTruck && (
                        <div>
                          <div className="text-xs text-slate-500">¾ truck</div>
                          <div className="font-bold text-slate-900">
                            {s.pricing.threeQuarterTruck}
                          </div>
                        </div>
                      )}
                      {s.pricing.fullTruck && (
                        <div>
                          <div className="text-xs text-slate-500">Full truck</div>
                          <div className="font-bold text-slate-900">
                            {s.pricing.fullTruck}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* FAQs (collapsible accordion) */}
                {s.faqs && s.faqs.length > 0 && (
                  <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    <summary className="cursor-pointer px-5 py-3 font-semibold text-slate-900 flex items-center justify-between">
                      <span>Common questions about {s.shortTitle}</span>
                      <span className="text-slate-500 group-open:rotate-180 transition-transform">
                        ↓
                      </span>
                    </summary>
                    <div className="px-5 pb-5 space-y-3">
                      {s.faqs.map((faq, i) => (
                        <div key={i} className="border-t border-slate-200 pt-3">
                          <div className="font-semibold text-slate-900 mb-1.5">
                            {faq.question}
                          </div>
                          <p
                            className="faq-answer text-sm text-slate-700 leading-relaxed"
                            data-speakable
                          >
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t see what you need?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            We haul almost anything. Call or text photos for a custom quote.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Text for a Quote
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

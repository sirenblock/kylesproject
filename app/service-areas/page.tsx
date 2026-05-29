import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { CollectionPageSchema } from '@/components/seo/PagedSchemas'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { locations, getAllLocationSlugs } from '@/lib/locations'
import { counties, getAllCountySlugs } from '@/lib/counties'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

// CONSOLIDATED /service-areas HUB
// Per 2026-05-28 AI compliance audit: this single page replaces the
// previous 27 templated /service-areas/[slug] pages + 2 county pages.
// Each town/county renders as an anchor-linked section. Old URLs
// 301 to /service-areas#[slug].
//
// The LocalBusiness > areaServed schema on the homepage already
// declares all 27 cities to Google. This page now fulfills the
// user-facing role without the per-town sibling-template risk.

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'Junk removal across 27 communities in 30A, PCB, Walton & Bay Counties — Seaside, Rosemary Beach, Alys Beach, WaterColor, Sandestin, and more.',
  alternates: {
    canonical: getCanonicalUrl('/service-areas'),
  },
}

const slugs = getAllLocationSlugs()
const locs = slugs.map((s) => locations[s]).filter(Boolean)
const allCounties = getAllCountySlugs()
  .map((slug) => counties[slug])
  .filter(Boolean)

export default function ServiceAreasPage() {
  const internalLinks = getContextualLinks('core', '/service-areas')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Service Areas', url: 'https://www.30ajunkremoval.com/service-areas' },
        ]}
      />
      <CollectionPageSchema
        name="30A Junk Removal — Service Areas"
        description="27 communities across 30A, Panama City Beach, Walton & Bay Counties."
        url="/service-areas"
        numberOfItems={locs.length + allCounties.length}
      />

      {/* Hero */}
      <section className="-mt-24 pt-32 pb-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Where We Serve Across 30A &amp; PCB
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            {locs.length} communities across Walton &amp; Bay Counties. Same-day junk removal available throughout the entire 30A corridor and Emerald Coast.
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

      {/* Jump-to navigation */}
      <section className="py-10 bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-600 mb-3">
            Jump to a community ({locs.length})
          </h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {locs.map((loc) => (
              <a
                key={loc.slug}
                href={`#${loc.slug}`}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700 hover:border-ocean-400 hover:text-ocean-700 transition-colors"
              >
                {loc.name}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {allCounties.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="px-3 py-1.5 rounded-full bg-ocean-50 border border-ocean-200 text-sm font-semibold text-ocean-700 hover:bg-ocean-100 transition-colors"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Counties We Cover
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We operate across both Walton County and Bay County in northwest Florida&apos;s Panhandle.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {allCounties.map((c) => (
              <article
                key={c.slug}
                id={c.slug}
                className="scroll-mt-24 bg-white rounded-2xl border-2 border-ocean-200 p-7"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ocean-700 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  County Hub
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {c.name}, {c.state}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  {c.description}
                </p>
                <div className="text-sm text-slate-600 mb-3">
                  <span className="font-semibold">Cities we serve:</span>{' '}
                  {c.cities.slice(0, 6).join(', ')}
                  {c.cities.length > 6 ? `, +${c.cities.length - 6} more` : ''}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Each community as anchor section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Communities ({locs.length})
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Tap any community below to see what makes our service work in that specific town.
          </p>
          <div className="space-y-12">
            {locs.map((loc, idx) => (
              <article
                key={loc.slug}
                id={loc.slug}
                className="scroll-mt-24 border-t-2 border-slate-200 pt-10 first:border-t-0 first:pt-0"
              >
                <div className="grid md:grid-cols-[1fr_280px] gap-6 mb-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-ocean-600 mb-2">
                      Community {idx + 1} of {locs.length}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      {loc.name}, FL
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                  <aside className="bg-gradient-to-br from-ocean-50 to-seafoam-50 border border-ocean-200 rounded-2xl p-5 text-sm">
                    <div className="font-semibold text-ocean-700 uppercase tracking-wide text-xs mb-2">
                      Quick Facts
                    </div>
                    <dl className="space-y-1.5 text-slate-700">
                      <div>
                        <dt className="inline text-slate-500">County: </dt>
                        <dd className="inline font-medium">{loc.county}</dd>
                      </div>
                      <div>
                        <dt className="inline text-slate-500">ZIP{loc.zipCodes.length > 1 ? 's' : ''}: </dt>
                        <dd className="inline font-medium">{loc.zipCodes.join(', ')}</dd>
                      </div>
                      <div>
                        <dt className="inline text-slate-500">Area code: </dt>
                        <dd className="inline font-medium">{loc.areaCode}</dd>
                      </div>
                    </dl>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="block w-full text-center mt-4 px-4 py-2.5 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors"
                    >
                      Call for {loc.name}
                    </a>
                  </aside>
                </div>

                {/* Landmarks */}
                {loc.landmarks && loc.landmarks.length > 0 && (
                  <div className="text-sm text-slate-600 mb-3">
                    <span className="font-semibold text-slate-700">Landmarks:</span>{' '}
                    {loc.landmarks.slice(0, 5).join(' · ')}
                  </div>
                )}

                {/* HOA considerations (only when notable) */}
                {loc.hoaConsiderations && (
                  <div className="text-sm text-slate-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <span className="font-semibold">HOA notes:</span>{' '}
                    {loc.hoaConsiderations.slice(0, 220)}
                    {loc.hoaConsiderations.length > 220 ? '...' : ''}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t see your town?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            We serve all of Walton &amp; Bay County. Call or text and we&apos;ll confirm coverage.
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

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle, ArrowRight, Camera } from 'lucide-react'
import { getCounty, getAllCountySlugs, getCountyForLocation } from '@/lib/counties'
import { getLocation } from '@/lib/locations'
import { getAllServiceSlugs, getServiceDetail } from '@/lib/services'
import { FORMATTED_PHONE, PHONE_NUMBER, getSMSLink } from '@/lib/utils'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { LocationBusinessSchema } from '@/components/seo/LocationBusinessSchema'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CTASection } from '@/components/sections/CTASection'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'
import { marked } from 'marked'

marked.setOptions({ breaks: true, gfm: true })

interface Props {
  params: Promise<{ county: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCountySlugs()
  return slugs.map((slug) => ({ county: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: countySlug } = await params
  const county = getCounty(countySlug)

  if (!county) {
    return { title: 'County Not Found' }
  }

  return {
    title: `Junk Removal in ${county.name}, ${county.state} | 30A Junk Removal`,
    description: `Professional junk removal serving all of ${county.name}, ${county.state}. Covering ${county.cities.length} communities including zip codes ${county.zipCodes.join(', ')}. Same-day service. Call ${FORMATTED_PHONE}.`,
    keywords: [
      `junk removal ${county.name}`,
      `${county.name} junk removal`,
      `junk hauling ${county.name} ${county.state}`,
      `debris removal ${county.name}`,
      ...county.zipCodes.map(zip => `junk removal ${zip}`),
    ],
    alternates: {
      canonical: getCanonicalUrl(`/service-areas/county/${countySlug}`),
    },
    openGraph: {
      title: `Junk Removal in ${county.name}, ${county.state} | 30A Junk Removal`,
      description: county.description,
      type: 'website',
    },
  }
}

export default async function CountyPage({ params }: Props) {
  const { county: countySlug } = await params
  const county = getCounty(countySlug)

  if (!county) {
    notFound()
  }

  const cityLocations = county.cities
    .map((slug) => getLocation(slug))
    .filter(Boolean)

  const internalLinks = getContextualLinks('location', `/service-areas/county/${countySlug}`)
  const externalLinks = getExternalLinks(5)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: county.name, url: `/service-areas/county/${countySlug}` },
        ]}
      />
      <FAQSchema questions={county.faqs} />
      <LocationBusinessSchema
        locationName={county.name}
        locationSlug={`county/${countySlug}`}
        description={county.description}
        latitude={county.coordinates.lat}
        longitude={county.coordinates.lng}
        zipCodes={county.zipCodes}
        county={county.name.replace(' County', '')}
      />

      {/* Hero Section */}
      <section className="-mt-24 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white">
        <div className="pt-24" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="text-gold-400 font-semibold">{county.name}, {county.state}</span>
              </div>
              <span className="text-ocean-200 text-sm">Area Code: {county.areaCode}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Junk Removal in {county.name}, {county.state}
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 mb-4">
              Professional junk removal serving {county.cities.length} communities across {county.name}. Same-day service available throughout the ({county.areaCode}) area.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {county.zipCodes.map((zip) => (
                <span key={zip} className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white text-sm font-medium border border-white/20">
                  {zip}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <a
                href={getSMSLink(PHONE_NUMBER, `Hi, I need a quote for junk removal in ${county.name}`)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                <Camera className="w-5 h-5" />
                Text Photos for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* County Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b-2 prose-h2:border-ocean-200 prose-h2:pb-4 prose-h2:first:mt-0
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-slate-800
              prose-p:text-lg prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-lg prose-li:text-slate-700 prose-li:leading-relaxed
              prose-li:marker:text-ocean-600"
            dangerouslySetInnerHTML={{ __html: marked.parse(county.content) as string }}
          />
        </div>
      </section>

      {/* Cities in County Grid */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Communities We Serve in {county.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional junk removal in every {county.name} community. Click to learn more about our services in each area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cityLocations.map((loc) => loc && (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="block bg-white rounded-xl p-6 border border-sand-200 hover:border-ocean-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-ocean-500" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm line-clamp-2 mb-2">
                  {loc.description.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {loc.zipCodes.map((zip) => (
                    <span key={zip} className="text-xs bg-ocean-50 text-ocean-700 px-2 py-0.5 rounded-full">{zip}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-ocean-600 font-semibold text-sm">
                  View services
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Services in {county.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From <Link href="/services/vacation-rentals" className="text-ocean-600 hover:underline font-medium">vacation rental turnovers</Link> to <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate cleanouts</Link>, we handle all your junk removal needs across {county.name}.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* FAQ Section */}
      {county.faqs.length > 0 && (
        <section className="py-16 bg-sand-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Frequently Asked Questions - {county.name}
            </h2>
            <div className="space-y-6">
              {county.faqs.map((faq, index) => (
                <div key={index} className="border border-sand-200 rounded-xl p-6 bg-white">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Links Section */}
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Services & Nearby Areas"
      />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

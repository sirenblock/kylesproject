import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle, Clock, Shield, Camera, ArrowRight, DollarSign } from 'lucide-react'
import { getLocation, getAllLocationSlugs } from '@/lib/locations'
import { getServiceDetail, getAllServiceSlugs } from '@/lib/services'
import { getServiceLocationContent, getAllServiceLocationCombinations, isValidCombination } from '@/lib/service-location-content'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/seo/StructuredData'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { CTASection } from '@/components/sections/CTASection'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

interface Props {
  params: Promise<{ location: string; service: string }>
}

export async function generateStaticParams() {
  const combinations = getAllServiceLocationCombinations()
  return combinations.map((combo) => ({
    location: combo.location,
    service: combo.service
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug, service: serviceSlug } = await params
  const location = getLocation(locationSlug)
  const service = getServiceDetail(serviceSlug)

  if (!location || !service) {
    return {
      title: 'Service Not Found'
    }
  }

  const title = `${service.title} in ${location.name} FL | 30A Junk Removal`
  const description = `Professional ${service.title.toLowerCase()} in ${location.name}, Florida. ${service.description.slice(0, 140)}. Same-day service. Call ${FORMATTED_PHONE}.`

  return {
    title,
    description,
    keywords: [
      `${service.shortTitle} ${location.name}`,
      `${location.name} ${service.shortTitle}`,
      `${service.shortTitle} ${location.name} FL`,
      `${location.name} Florida ${service.shortTitle}`,
      `junk removal ${location.name}`,
      `${service.shortTitle} service ${location.name}`,
      `professional ${service.shortTitle} 30A`,
      `${location.name} hauling service`
    ],
    alternates: {
      canonical: getCanonicalUrl(`/service-areas/${locationSlug}/${serviceSlug}`)
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/service-areas/${locationSlug}/${serviceSlug}`,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} in ${location.name} - 30A Junk Removal`
        }
      ]
    }
  }
}

export default async function ServiceLocationPage({ params }: Props) {
  const { location: locationSlug, service: serviceSlug } = await params

  // Validate combination
  if (!isValidCombination(serviceSlug, locationSlug)) {
    notFound()
  }

  const location = getLocation(locationSlug)
  const service = getServiceDetail(serviceSlug)

  if (!location || !service) {
    notFound()
  }

  const content = getServiceLocationContent(
    serviceSlug,
    locationSlug,
    service.title,
    location.name
  )

  const internalLinks = getContextualLinks('location', `/service-areas/${locationSlug}/${serviceSlug}`)
  const externalLinks = getExternalLinks(5)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: location.name, url: `/service-areas/${locationSlug}` },
          { name: service.title, url: `/service-areas/${locationSlug}/${serviceSlug}` }
        ]}
      />
      <ServiceSchema
        name={`${service.title} in ${location.name}`}
        description={service.description}
        url={`/service-areas/${locationSlug}/${serviceSlug}`}
      />
      {service.faqs && <FAQSchema questions={service.faqs} />}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 font-semibold">{location.name}, FL</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service.title} in {location.name}
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 mb-8">
              {content.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                <Camera className="w-5 h-5" />
                Text Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Why Choose Us for {service.title} in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-seafoam-500 shrink-0 mt-1" />
                  <p className="text-slate-600">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Common {service.title} Scenarios in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.commonScenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-sand-200">
                  <div className="flex gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{scenario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Considerations */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              {location.name} Service Considerations
            </h2>
            <div className="bg-sand-50 rounded-xl p-8 border border-sand-200">
              <ul className="space-y-4">
                {content.localConsiderations.map((consideration, index) => (
                  <li key={index} className="flex gap-3">
                    <Shield className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                    <span className="text-slate-700">{consideration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Pricing for {service.title} in {location.name}
            </h2>
            <div className="bg-white rounded-xl p-8 border border-sand-200 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-gold-500 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {content.pricingContext}
                  </p>
                </div>
              </div>

              {/* Pricing Grid */}
              {service.pricing.quarterTruck && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.pricing.quarterTruck && (
                    <div className="bg-sand-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-slate-600 mb-1">1/4 Truck</div>
                      <div className="text-xl font-bold text-ocean-600">{service.pricing.quarterTruck}</div>
                    </div>
                  )}
                  {service.pricing.halfTruck && (
                    <div className="bg-sand-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-slate-600 mb-1">1/2 Truck</div>
                      <div className="text-xl font-bold text-ocean-600">{service.pricing.halfTruck}</div>
                    </div>
                  )}
                  {service.pricing.threeQuarterTruck && (
                    <div className="bg-sand-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-slate-600 mb-1">3/4 Truck</div>
                      <div className="text-xl font-bold text-ocean-600">{service.pricing.threeQuarterTruck}</div>
                    </div>
                  )}
                  {service.pricing.fullTruck && (
                    <div className="bg-sand-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-slate-600 mb-1">Full Truck</div>
                      <div className="text-xl font-bold text-ocean-600">{service.pricing.fullTruck}</div>
                    </div>
                  )}
                </div>
              )}
              {service.pricing.starting && (
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Starting at</div>
                  <div className="text-3xl font-bold text-ocean-600">{service.pricing.starting}</div>
                  {service.pricing.custom && (
                    <div className="text-sm text-slate-500 mt-2">Custom quote based on project scope</div>
                  )}
                </div>
              )}
            </div>

            {/* Quote Calculator */}
            <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                Get Your Instant Quote for {location.name}
              </h3>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      {service.features && service.features.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                What's Included in Our {service.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-sand-50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-seafoam-500 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              How {service.title} Works in {location.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our streamlined process makes {service.title.toLowerCase()} in {location.name} simple and stress-free
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              {service.title} FAQs - {location.name}
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="border border-sand-200 rounded-xl p-6 bg-sand-50">
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

      {/* Related Services and Locations */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Other Services in This Location */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Other Services in {location.name}
              </h2>
              <div className="space-y-3">
                {getAllServiceSlugs()
                  .filter(s => s !== serviceSlug)
                  .slice(0, 5)
                  .map((slug) => {
                    const relatedService = getServiceDetail(slug)
                    if (!relatedService) return null
                    return (
                      <Link
                        key={slug}
                        href={`/service-areas/${locationSlug}/${slug}`}
                        className="block bg-white rounded-lg p-4 border border-sand-200 hover:border-ocean-500 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-800">{relatedService.shortTitle}</span>
                          <ArrowRight className="w-5 h-5 text-ocean-500" />
                        </div>
                      </Link>
                    )
                  })}
                <Link
                  href={`/service-areas/${locationSlug}`}
                  className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 mt-2"
                >
                  View all {location.name} services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* This Service in Other Locations */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                {service.title} in Nearby Areas
              </h2>
              <div className="space-y-3">
                {location.nearbyLocations
                  .slice(0, 5)
                  .map((nearbySlug) => {
                    const nearbyLocation = getLocation(nearbySlug)
                    if (!nearbyLocation) return null
                    return (
                      <Link
                        key={nearbySlug}
                        href={`/service-areas/${nearbySlug}/${serviceSlug}`}
                        className="block bg-white rounded-lg p-4 border border-sand-200 hover:border-ocean-500 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-ocean-500" />
                            <span className="font-semibold text-slate-800">{nearbyLocation.name}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-ocean-500" />
                        </div>
                      </Link>
                    )
                  })}
                <Link
                  href={`/services/${serviceSlug}`}
                  className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 mt-2"
                >
                  View all locations for {service.shortTitle}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Services & Areas"
      />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle, Clock, Shield, Camera, ArrowRight } from 'lucide-react'
import { getLocation, getLocationFAQs, getAllLocationSlugs, getNearbyLocations } from '@/lib/locations'
import { FORMATTED_PHONE, PHONE_NUMBER, getSMSLink } from '@/lib/utils'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { CTASection } from '@/components/sections/CTASection'
import { RelatedContentGrid } from '@/components/sections/RelatedContent'
import { HelpfulResources } from '@/components/sections/HelpfulResources'
import { getPopularServicesForLocation, getRelatedBlogPostsForLocation } from '@/lib/internal-links'
import { getExternalLinksForLocation } from '@/lib/external-links'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'
import { marked } from 'marked'
import { QuickQuoteForm } from '@/components/ui/QuickQuoteForm'
import { UrgencyBadge, BusinessHoursBadge } from '@/components/ui/UrgencyBadge'

marked.setOptions({ breaks: true, gfm: true })

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)

  if (!location) {
    return {
      title: 'Location Not Found'
    }
  }

  return {
    title: `Junk Removal in ${location.name} FL | 30A Junk Removal | Same-Day Service`,
    description: `Professional junk removal in ${location.name}, Florida. ${location.description.slice(0, 150)}. Same-day service available. Call ${FORMATTED_PHONE}.`,
    keywords: [
      `junk removal ${location.name}`,
      `${location.name} junk removal`,
      `junk hauling ${location.name} FL`,
      `${location.name} Florida junk removal`,
      `furniture removal ${location.name}`,
      `estate cleanout ${location.name}`,
      `${location.name} hauling service`,
      `debris removal ${location.name}`
    ],
    alternates: {
      canonical: getCanonicalUrl(`/service-areas/${slug}`)
    },
    openGraph: {
      title: `Junk Removal in ${location.name} FL | 30A Junk Removal`,
      description: `Professional junk removal serving ${location.name} and the 30A corridor. Same-day service, transparent pricing.`,
      type: 'website',
      url: `/service-areas/${slug}`,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `30A Junk Removal - Serving ${location.name}`
        }
      ]
    }
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocation(slug)
  const faqs = getLocationFAQs(slug)
  const nearbyLocations = getNearbyLocations(slug)

  if (!location) {
    notFound()
  }

  const internalLinks = getContextualLinks('location', `/service-areas/${slug}`)
  const externalLinks = getExternalLinks(5)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: location.name, url: `/service-areas/${slug}` }
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <section className="-mt-16 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white">
        {/* Urgency Banner */}
        <div className="pt-16">
          <UrgencyBadge variant="banner" type="serving-today" location={location.name} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="text-gold-400 font-semibold">Serving {location.name}</span>
              </div>
              <BusinessHoursBadge />
              <UrgencyBadge variant="inline" type="last-minute" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Junk Removal in {location.name} FL
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 mb-8">
              Professional junk removal serving {location.name} and surrounding 30A communities. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
                data-cta
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
                href={getSMSLink(PHONE_NUMBER, `Hi, I need a quote for junk removal in ${location.name}`)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                <Camera className="w-5 h-5" />
                Text Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-sand-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <QuickQuoteForm />
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              About {location.name}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {location.description} We provide expert junk removal services throughout {location.name}, serving property managers, homeowners, and <Link href="/services/vacation-rentals" className="text-ocean-600 hover:underline font-medium">vacation rental properties</Link>. Our team also serves nearby communities like {nearbyLocations.slice(0, 2).map((nearby, idx) => (
                <span key={nearby.slug}>
                  {idx > 0 && ' and '}
                  <Link href={`/service-areas/${nearby.slug}`} className="text-ocean-600 hover:underline font-medium">{nearby.name}</Link>
                </span>
              ))}.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Notable Landmarks</h3>
                <ul className="space-y-2">
                  {location.landmarks.map((landmark) => (
                    <li key={landmark} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-seafoam-500 shrink-0" />
                      <span>{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Service Details</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <Shield className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>Fully licensed & insured</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                    <span><Link href="/pricing" className="text-ocean-600 hover:underline font-medium">Transparent pricing</Link></span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>ZIP: {location.zipCodes.join(', ')} - <a href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`} target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">View on Google Maps</a></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      {location.detailedDescription && (
        <section className="py-16 bg-sand-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b-2 prose-h2:border-ocean-200 prose-h2:pb-4 prose-h2:first:mt-0
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-slate-800
                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-slate-700
                prose-p:text-lg prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-lg prose-li:text-slate-700 prose-li:leading-relaxed
                prose-li:marker:text-ocean-600"
              dangerouslySetInnerHTML={{ __html: marked.parse(location.detailedDescription) as string }}
            />
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Services in {location.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From <Link href="/services/vacation-rentals" className="text-ocean-600 hover:underline font-medium">vacation rental turnovers</Link> to <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate cleanouts</Link>, we handle all your junk removal needs in {location.name}. We also specialize in <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline font-medium">furniture removal</Link>, <Link href="/services/appliance-removal" className="text-ocean-600 hover:underline font-medium">appliance disposal</Link>, and <Link href="/services/construction-debris" className="text-ocean-600 hover:underline font-medium">construction debris removal</Link>.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-white" id="quote">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Get Your Instant Quote
            </h2>
            <p className="text-lg text-slate-600">
              Transparent pricing for {location.name} junk removal
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              How It Works in {location.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We make junk removal in {location.name} simple and stress-free. Whether you need <Link href="/services/one-time-hauls" className="text-ocean-600 hover:underline font-medium">one-time haul-away</Link> service or ongoing support, we're here to help.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Why Choose Us for {location.name} Junk Removal
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sand-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Local Knowledge & Expertise
                </h3>
                <p className="text-slate-600">
                  {location.hoaConsiderations} Learn more about the <a href="https://www.visitflorida.com/en-us/places-to-go/northwest/south-walton.html" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">{location.name} area on Visit Florida</a>.
                </p>
              </div>
              <div className="bg-sand-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Professional & Reliable
                </h3>
                <p className="text-slate-600">
                  We understand the unique needs of {location.name} properties. Our team is professional, punctual, and committed to exceeding your expectations with every job. Check out our <Link href="/services" className="text-ocean-600 hover:underline font-medium">full range of services</Link>.
                </p>
              </div>
              <div className="bg-sand-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-slate-600">
                  Same-day service available for urgent needs. We work around your schedule and coordinate with property managers, contractors, and guest check-in times. Have questions? Visit our <Link href="/faq" className="text-ocean-600 hover:underline font-medium">FAQ page</Link>.
                </p>
              </div>
              <div className="bg-sand-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Eco-Friendly Disposal
                </h3>
                <p className="text-slate-600">
                  We donate usable items to <a href="https://www.habitat.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Habitat for Humanity</a> and other local charities, and recycle whenever possible. Protecting {location.name}'s beautiful environment is important to us. Learn more about <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">responsible recycling practices from the EPA</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What {location.name} Customers Say
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by homeowners and property managers throughout {location.name}
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Frequently Asked Questions - {location.name}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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

      {/* Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-sand-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                We Also Serve Nearby Communities
              </h2>
              <p className="text-lg text-slate-600">
                Professional junk removal throughout the <a href="https://www.visitsouthwalton.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">30A corridor and South Walton area</a>. Ready to get started? <Link href="/contact" className="text-ocean-600 hover:underline font-medium">Contact us today</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {nearbyLocations.map((nearbyLocation) => (
                <Link
                  key={nearbyLocation.slug}
                  href={`/service-areas/${nearbyLocation.slug}`}
                  className="block bg-white rounded-xl p-6 border border-sand-200 hover:border-ocean-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-ocean-500" />
                    <h3 className="text-lg font-semibold text-slate-800">
                      {nearbyLocation.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {nearbyLocation.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-ocean-600 font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700"
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Popular Services and Resources */}
      <RelatedContentGrid
        services={getPopularServicesForLocation(slug)}
        blogPosts={getRelatedBlogPostsForLocation(slug)}
        locationContext={{ name: location.name, slug: location.slug }}
      />

      {/* Helpful Local Resources */}
      <HelpfulResources
        links={getExternalLinksForLocation(slug)}
        title={`Local Resources for ${location.name}`}
        subtitle="Official community information and government services"
      />

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

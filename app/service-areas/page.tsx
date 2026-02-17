import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Check, Phone, ArrowRight, Clock, Truck, MessageCircle, Sparkles } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import CoverageMap from '@/components/ui/CoverageMap'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Service Areas | 30A Junk Removal',
  description: 'Junk removal services for all 30A communities. Serving Seaside, Rosemary Beach, Alys Beach, WaterColor, Grayton Beach, Santa Rosa Beach, and more.',
  alternates: {
    canonical: getCanonicalUrl('/service-areas'),
  },
}

const communities = [
  {
    name: 'Seaside',
    slug: 'seaside',
    description: 'The iconic planned community and birthplace of New Urbanism on 30A. We provide fast junk removal for vacation rentals and residential properties.',
  },
  {
    name: 'Rosemary Beach',
    slug: 'rosemary-beach',
    description: 'European-inspired architecture with cobblestone streets and lush gardens. Our team handles estate cleanouts and property management services.',
  },
  {
    name: 'Alys Beach',
    slug: 'alys-beach',
    description: 'Stunning white architecture influenced by Bermuda and Antigua styles. Specialized in upscale property cleanouts and furniture removal.',
  },
  {
    name: 'WaterColor',
    slug: 'watercolor',
    description: 'Beautiful coastal community known for its beach club and Western Lake. Expert in construction debris removal and yard waste hauling.',
  },
  {
    name: 'Grayton Beach',
    slug: 'grayton-beach',
    description: 'One of Florida\'s oldest beach communities with a charming, artistic vibe. Eco-friendly disposal and donation services available.',
  },
  {
    name: 'Santa Rosa Beach',
    slug: 'santa-rosa-beach',
    description: 'The largest community on 30A with diverse neighborhoods and amenities. Full-service junk removal for all property types.',
  },
  {
    name: 'Inlet Beach',
    slug: 'inlet-beach',
    description: 'Growing coastal community at the eastern end of 30A.',
  },
  {
    name: 'Seacrest',
    slug: 'seacrest',
    description: 'Quiet, family-friendly beach community with beautiful dune lakes.',
  },
  {
    name: 'Seagrove Beach',
    slug: 'seagrove-beach',
    description: 'One of the original beach communities on 30A with a relaxed atmosphere.',
  },
  {
    name: 'Blue Mountain Beach',
    slug: 'blue-mountain-beach',
    description: 'Named for the distinctive blue lupine flowers that once covered the dunes.',
  },
  {
    name: 'Destin',
    slug: 'destin',
    description: 'World-famous fishing village and popular vacation destination.',
  },
  {
    name: 'Panama City Beach',
    slug: 'panama-city-beach',
    description: 'Beautiful beaches and year-round destination at the eastern end of our service area.',
  },
]

export default function ServiceAreasPage() {
  const internalLinks = getContextualLinks('core', '/service-areas')
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
              <MapPin className="w-4 h-4" />
              Serving All 30A Communities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              We Serve the Entire 30A Corridor
            </h1>
            <p className="text-xl text-ocean-100 mb-8">
              From <Link href="/service-areas/destin" className="text-white hover:text-seafoam-200 underline font-medium">Destin</Link> to <Link href="/service-areas/panama-city-beach" className="text-white hover:text-seafoam-200 underline font-medium">Panama City Beach</Link>, we provide professional <Link href="/services" className="text-white hover:text-seafoam-200 underline font-medium">junk removal services</Link> to all coastal communities.
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
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">12 Communities</h3>
              <p className="text-sm text-slate-600">Full coverage across 30A</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-100 text-seafoam-600 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Same-Day Service</h3>
              <p className="text-sm text-slate-600">Fast response across all areas</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Local Team</h3>
              <p className="text-sm text-slate-600">Familiar with every neighborhood</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-100 text-seafoam-600 mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Trusted Service</h3>
              <p className="text-sm text-slate-600">Rated highly across 30A</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Communities We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our professional team serves the entire <a href="https://www.emeraldcoastfl.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Emerald Coast</a> region with reliable <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate cleanout</Link>, <Link href="/services/yard-debris" className="text-ocean-600 hover:underline font-medium">yard waste removal</Link>, and <Link href="/services/hot-tub-removal" className="text-ocean-600 hover:underline font-medium">hot tub disposal</Link> services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <Link
                key={community.slug}
                href={`/service-areas/${community.slug}`}
                className="group relative bg-white rounded-2xl p-6 border-2 border-sand-200 hover:border-ocean-400 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean-50 to-seafoam-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-ocean-600 transition-colors mb-2">
                      {community.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{community.description}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ocean-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              We follow <a href="https://www.epa.gov/hw/household-hazardous-waste-hhw" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">EPA guidelines</a> for safe disposal and partner with local charities like <a href="https://www.goodwillnwfl.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Goodwill Northwest Florida</a> for donation items.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-semibold"
            >
              Check our transparent pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Map */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Interactive Map
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Coverage Area</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We serve the entire 30A corridor and surrounding areas, including <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>, <Link href="/service-areas/watercolor" className="text-ocean-600 hover:underline font-medium">WaterColor</Link>, and <Link href="/service-areas/grayton-beach" className="text-ocean-600 hover:underline font-medium">Grayton Beach</Link>. Click on any marker to learn more about that location.
            </p>
          </div>

          <div className="relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ocean-400 via-seafoam-400 to-ocean-400 rounded-3xl opacity-20 blur-sm" />
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-sand-100">
              <CoverageMap />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Click on location markers for details and directions
            </p>
            <p className="text-sm text-slate-500 mt-2">
              View our complete <Link href="/faq" className="text-ocean-600 hover:underline font-medium">FAQ</Link> for service details
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure If We Serve Your Area?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Give us a call! We're happy to help and may be able to accommodate areas outside our typical service zone. Whether you're in <Link href="/service-areas/inlet-beach" className="text-white hover:text-seafoam-200 underline font-medium">Inlet Beach</Link>, <Link href="/service-areas/seagrove-beach" className="text-white hover:text-seafoam-200 underline font-medium">Seagrove Beach</Link>, or nearby communities, our team is ready to assist with all your <Link href="/services" className="text-white hover:text-seafoam-200 underline font-medium">junk removal</Link> needs.
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

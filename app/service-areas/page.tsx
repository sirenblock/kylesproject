import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Check, Phone, ArrowRight } from 'lucide-react'
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
    <div className="py-12">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-100 text-ocean-600 mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Service Areas
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Proudly serving all communities along the beautiful <a href="https://www.visitsouthwalton.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">30A corridor</a>, from <Link href="/service-areas/destin" className="text-ocean-600 hover:underline font-medium">Destin</Link> to <Link href="/service-areas/panama-city-beach" className="text-ocean-600 hover:underline font-medium">Panama City Beach</Link>. Our comprehensive <Link href="/services" className="text-ocean-600 hover:underline font-medium">junk removal services</Link> include <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline font-medium">furniture removal</Link>, <Link href="/services/appliance-removal" className="text-ocean-600 hover:underline font-medium">appliance hauling</Link>, and <Link href="/services/construction-debris" className="text-ocean-600 hover:underline font-medium">construction debris</Link> for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-lg text-slate-600">
              Our professional team serves the entire <a href="https://www.emeraldcoastfl.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Emerald Coast</a> region with reliable <Link href="/services/estate-cleanout" className="text-ocean-600 hover:underline font-medium">estate cleanout</Link>, <Link href="/services/yard-waste" className="text-ocean-600 hover:underline font-medium">yard waste removal</Link>, and <Link href="/services/hot-tub-removal" className="text-ocean-600 hover:underline font-medium">hot tub disposal</Link> services. We follow <a href="https://www.epa.gov/hw/household-hazardous-waste-hhw" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">EPA guidelines</a> for safe disposal and partner with local charities like <a href="https://www.goodwillnwfl.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Goodwill Northwest Florida</a> for donation items. Check our <Link href="/pricing" className="text-ocean-600 hover:underline font-medium">pricing guide</Link> for transparent rates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <div
                key={community.slug}
                className="group bg-white rounded-xl p-6 border border-sand-200 hover:border-ocean-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-ocean-600 transition-colors">
                      {community.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{community.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Coverage Map */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Our Coverage Area</h2>
            <p className="mt-4 text-lg text-slate-600">
              We serve the entire 30A corridor and surrounding areas, including <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>, <Link href="/service-areas/watercolor" className="text-ocean-600 hover:underline font-medium">WaterColor</Link>, and <Link href="/service-areas/grayton-beach" className="text-ocean-600 hover:underline font-medium">Grayton Beach</Link>. Our service area spans from the pristine beaches near <a href="https://www.google.com/maps/place/Destin,+FL" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Destin</a> to the eastern communities. Click on any marker to learn more about that location or view our complete <Link href="/faq" className="text-ocean-600 hover:underline font-medium">FAQ</Link> for service details.
            </p>
          </div>

          <CoverageMap />

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              <MapPin className="w-4 h-4 inline-block mr-1" />
              Click on location markers for details and directions
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure If We Serve Your Area?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Give us a call! We're happy to help and may be able to accommodate areas outside our typical service zone. Whether you're in <Link href="/service-areas/inlet-beach" className="text-white hover:underline font-medium">Inlet Beach</Link>, <Link href="/service-areas/seagrove-beach" className="text-white hover:underline font-medium">Seagrove Beach</Link>, or nearby communities, our team is ready to assist with all your junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-semibold hover:bg-ocean-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Get a Quote
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
    </div>
  )
}

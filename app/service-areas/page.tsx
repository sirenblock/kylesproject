import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Check, Phone, ArrowRight } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Service Areas | 30A Junk Removal',
  description: 'Junk removal services for all 30A communities. Serving Seaside, Rosemary Beach, Alys Beach, WaterColor, Grayton Beach, Santa Rosa Beach, and more.',
}

const communities = [
  {
    name: 'Seaside',
    slug: 'seaside',
    description: 'The iconic planned community and birthplace of New Urbanism on 30A.',
  },
  {
    name: 'Rosemary Beach',
    slug: 'rosemary-beach',
    description: 'European-inspired architecture with cobblestone streets and lush gardens.',
  },
  {
    name: 'Alys Beach',
    slug: 'alys-beach',
    description: 'Stunning white architecture influenced by Bermuda and Antigua styles.',
  },
  {
    name: 'WaterColor',
    slug: 'watercolor',
    description: 'Beautiful coastal community known for its beach club and Western Lake.',
  },
  {
    name: 'Grayton Beach',
    slug: 'grayton-beach',
    description: 'One of Florida\'s oldest beach communities with a charming, artistic vibe.',
  },
  {
    name: 'Santa Rosa Beach',
    slug: 'santa-rosa-beach',
    description: 'The largest community on 30A with diverse neighborhoods and amenities.',
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
              Proudly serving all communities along the beautiful 30A corridor, from Destin to Panama City Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      {/* Map Placeholder */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Our Coverage Area</h2>
            <p className="mt-4 text-lg text-slate-600">
              We serve the entire 30A corridor and surrounding areas
            </p>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-100 to-seafoam-100 border border-sand-200">
            {/* Placeholder Map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-ocean-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-slate-700">Interactive Map</p>
                <p className="text-sm text-slate-500">Coming soon - Google Maps integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure If We Serve Your Area?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Give us a call! We're happy to help and may be able to accommodate areas outside our typical service zone.
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
    </div>
  )
}

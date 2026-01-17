'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Check } from 'lucide-react'

const communities = [
  { name: 'Seaside', slug: 'seaside' },
  { name: 'Rosemary Beach', slug: 'rosemary-beach' },
  { name: 'Alys Beach', slug: 'alys-beach' },
  { name: 'WaterColor', slug: 'watercolor' },
  { name: 'Grayton Beach', slug: 'grayton-beach' },
  { name: 'Santa Rosa Beach', slug: 'santa-rosa-beach' },
  { name: 'Inlet Beach', slug: 'inlet-beach' },
  { name: 'Seacrest', slug: 'seacrest' },
  { name: 'Seagrove Beach', slug: 'seagrove-beach' },
  { name: 'Blue Mountain Beach', slug: 'blue-mountain-beach' },
  { name: 'Destin', slug: 'destin' },
  { name: 'Panama City Beach', slug: 'panama-city-beach' },
]

export function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-100 to-seafoam-100 border border-sand-200"
          >
            {/* Placeholder Map Design */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-ocean-500/20 flex items-center justify-center mb-4">
                  <MapPin className="w-10 h-10 text-ocean-600" />
                </div>
                <p className="text-lg font-semibold text-slate-700">30A Service Area</p>
                <p className="text-sm text-slate-500">Destin to Panama City Beach</p>
              </div>
            </div>

            {/* Map marker dots (decorative) */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-ocean-500 animate-pulse" />
              <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-ocean-500 animate-pulse delay-100" />
              <div className="absolute top-1/2 left-2/3 w-3 h-3 rounded-full bg-ocean-500 animate-pulse delay-200" />
              <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-ocean-500 animate-pulse delay-300" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Proudly Serving 30A
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              From Destin to Panama City Beach, we provide premium junk removal services
              to all communities along the beautiful 30A corridor.
            </p>

            {/* Communities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {communities.map((community, index) => (
                <motion.div
                  key={community.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    href={`/service-areas/${community.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-sand-50 hover:bg-ocean-50 border border-sand-200 hover:border-ocean-200 transition-colors group"
                  >
                    <Check className="w-4 h-4 text-seafoam-500 shrink-0" />
                    <span className="text-sm text-slate-700 group-hover:text-ocean-600 transition-colors">
                      {community.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-4 rounded-xl bg-ocean-50 border border-ocean-200">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-ocean-600">Not sure if we serve your area?</span>{' '}
                Give us a call! We're happy to help and may be able to accommodate areas outside our typical service zone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

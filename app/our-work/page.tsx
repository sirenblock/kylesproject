import { Metadata } from 'next'
import { Gallery } from '@/components/ui/Gallery'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Work | Real Junk Removal Jobs in 30A',
  description: 'See real before and after photos from our junk removal jobs across 30A Florida. Furniture removal, estate cleanouts, construction debris, and more.',
  keywords: [
    'junk removal photos 30A',
    'before after junk removal',
    'furniture removal photos',
    '30A junk haul',
    'real junk removal work',
  ],
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/our-work',
  },
}

const galleryImages = [
  {
    src: '/images/gallery/furniture-removal-1.webp',
    alt: 'Metal bed frame removal - 30A junk haul',
    category: 'Furniture Removal',
  },
  {
    src: '/images/gallery/furniture-removal-2.webp',
    alt: 'Desk and furniture frame removal - Vacation rental cleanout',
    category: 'Furniture Removal',
  },
  {
    src: '/images/gallery/before-removal-1.webp',
    alt: 'Before junk removal - 30A property cleanout',
    category: 'Before Photos',
  },
  {
    src: '/images/gallery/furniture-removal-3.webp',
    alt: 'Furniture haul - 30A junk removal service',
    category: 'Furniture Removal',
  },
  {
    src: '/images/gallery/furniture-removal-4.webp',
    alt: 'Office furniture removal - 30A commercial cleanout',
    category: 'Furniture Removal',
  },
]

export default function OurWorkPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="-mt-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Work Across 30A
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 mb-8">
              Real photos from real junk removal jobs in Seaside, Rosemary Beach, Alys Beach, and throughout the 30A corridor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Professional Junk Removal Throughout 30A
            </h2>
            <p className="text-lg text-slate-600">
              From single-item furniture removal to full estate cleanouts, we handle every job with professionalism and care. Here's a glimpse of our recent work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-seafoam-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  Furniture Removal
                </h3>
                <p className="text-slate-600">
                  Beds, desks, couches, and more. We handle furniture of all sizes from homes and businesses.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-seafoam-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  Vacation Rental Cleanouts
                </h3>
                <p className="text-slate-600">
                  Fast turnovers between guests, emergency removals, and seasonal refreshes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-seafoam-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  Estate Cleanouts
                </h3>
                <p className="text-slate-600">
                  Complete property clearing with respect, care, and attention to valuable items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Recent Jobs Around 30A
            </h2>
            <p className="text-lg text-slate-600 mb-2">
              Real junk removal projects from Seaside, Rosemary Beach, and surrounding areas
            </p>
            <p className="text-sm text-seafoam-600 font-medium">
              Click any photo to view full size
            </p>
          </div>

          <Gallery images={galleryImages} />

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-sand-200">
              <p className="text-slate-700 mb-3 text-lg">
                These are just a few examples of our work. Every job gets the same professional treatment and attention to detail.
              </p>
              <p className="text-sm text-slate-500 mb-6">
                📸 Photos taken with customer permission. Your property and privacy are always protected.
              </p>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors shadow-md"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Junk Removal?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Same-day service available throughout 30A
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-lg font-bold hover:bg-sand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

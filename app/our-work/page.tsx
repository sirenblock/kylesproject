import { Metadata } from 'next'
import { Gallery } from '@/components/ui/Gallery'
import { CheckCircle, Phone, ArrowRight, Camera, Clock, Star, Truck, Home, Package, Building2 } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

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

const caseStudies = [
  {
    icon: Home,
    title: 'Vacation Rental Turnover — Rosemary Beach',
    scenario: 'Saturday morning emergency — property manager needed a 6-bedroom rental cleared of guest-damaged furniture before 4 PM check-in.',
    items: 'Stained mattress, broken dining chairs, water-damaged rug, sand-encrusted patio cushions, and miscellaneous left-behinds.',
    outcome: 'Crew arrived at 10:30 AM with the photo quote already accepted. All items hauled and the rental staged for the next guest by 1:45 PM. Photo documentation delivered to the property manager for owner records.',
    duration: '3 hours, 15 minutes',
    color: 'from-ocean-500 to-ocean-600',
  },
  {
    icon: Package,
    title: 'Estate Cleanout — Santa Rosa Beach',
    scenario: 'Family executor needed a full estate cleared after parent moved into assisted living. Furniture, kitchenware, garage tools, and 30+ years of accumulated household items.',
    items: 'Full bedroom and living room sets, complete kitchen, garage shelves of tools, holiday decorations, sentimental boxes for family review, and roughly 4 truck-loads of donation-quality items.',
    outcome: 'Two-day project. Day 1: pre-walk with family to identify sentimental items kept aside. Day 2: full haul with separation into donation, recycle, and disposal streams. Habitat ReStore donation receipt provided.',
    duration: '2 days · 14 hours total',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Building2,
    title: 'Kitchen Renovation Debris — Watercolor',
    scenario: 'Contractor mid-renovation needed cabinets, countertops, flooring, and demolition rubble cleared after a 2-day demo phase. Active job site with subcontractor coordination required.',
    items: 'Original maple cabinets and granite countertops, ceramic tile flooring, drywall scrap, light fixtures, and the contents of a 30-yard pile in the side yard.',
    outcome: 'Same-day pickup at 7 AM before the flooring crew arrived. Granite slabs routed to a local stone yard for reuse credit. Materials disposed of at the appropriate Walton County transfer station with paperwork for the contractor.',
    duration: '4 hours · single-load',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Truck,
    title: 'Hot Tub Removal — Inlet Beach',
    scenario: 'Homeowner sold a beach property and needed a deck-mounted hot tub removed before closing. Tub was plumbed in, electrical wired, and surrounded by a custom deck.',
    items: '6-person hot tub (estimated 850 lbs dry, ~3,200 lbs wet), gas-powered heater, cover, and decking material around the unit.',
    outcome: 'Pre-job: water pumped down to roof drain (avoiding street stormwater per Walton County rules). On-site: tub cut into 4 sections for safe transport, deck patched, all wiring capped to inspection-ready standard.',
    duration: '5 hours, 30 minutes',
    color: 'from-rose-500 to-rose-600',
  },
]

const byTheNumbers = [
  { value: '2,400+', label: 'Jobs completed since 2018' },
  { value: '4.9★', label: 'Average Google rating · 127+ reviews' },
  { value: '85%', label: 'Same-day completion rate' },
  { value: '60%', label: 'Items donated or recycled vs landfilled' },
]

export default function OurWorkPage() {
  // ImageGallery JSON-LD per secret-sauce pattern: helps Google Image Search
  // surface these photos when users search "30A junk removal" image queries
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Our Work — Real Junk Removal Jobs in 30A',
    description: 'Real before-and-after photos from junk removal jobs across 30A Florida, including Rosemary Beach, Seaside, Alys Beach, and Santa Rosa Beach.',
    url: 'https://www.30ajunkremoval.com/our-work',
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `https://www.30ajunkremoval.com${img.src}`,
      description: img.alt,
      name: img.alt,
    })),
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Our Work', url: '/our-work' },
        ]}
      />
      {/* Hero Section */}
      <section className="-mt-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <Camera className="w-4 h-4" />
              Real Results from Real Jobs
            </div>
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
                Photos taken with customer permission. Your property and privacy are always protected.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors shadow-md"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              By the Numbers
            </h2>
            <p className="text-lg text-slate-600">
              Track record since 2018 across 30A, PCB, Walton &amp; Bay Counties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {byTheNumbers.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-ocean-50 to-seafoam-50 rounded-2xl p-6 text-center border border-ocean-200"
              >
                <div className="text-3xl md:text-4xl font-bold text-ocean-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section -- E-E-A-T Experience signal per senior strategy */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Recent Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real jobs across 30A. Identifying details changed to protect customer privacy, but the scenarios, scope, and outcomes are accurate to actual jobs we have completed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => {
              const Icon = cs.icon
              return (
                <article
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cs.color} text-white mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {cs.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Scenario</div>
                      <p className="text-slate-700 leading-relaxed">{cs.scenario}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Items Hauled</div>
                      <p className="text-slate-700 leading-relaxed">{cs.items}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Outcome</div>
                      <p className="text-slate-700 leading-relaxed">{cs.outcome}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{cs.duration}</span>
                    </div>
                  </div>
                </article>
              )
            })}
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
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
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Star, MapPin, Phone, ArrowRight, Quote } from 'lucide-react'
import { reviews, getAverageRating } from '@/lib/reviews'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.30ajunkremoval.com'

export const metadata: Metadata = {
  title: 'Reviews | 30A Junk Removal | 4.9 Stars from 127+ Customers',
  description:
    'Read customer reviews of 30A Junk Removal from property managers, homeowners, and contractors across 30A and Panama City Beach. 4.9/5 average rating from 127+ verified customers.',
  alternates: {
    canonical: getCanonicalUrl('/reviews'),
  },
  openGraph: {
    title: 'Reviews | 30A Junk Removal',
    description: '4.9/5 stars from 127+ customers across 30A and Panama City Beach.',
    type: 'website',
    url: '/reviews',
  },
}

export default function ReviewsPage() {
  const avg = getAverageRating()
  const internalLinks = getContextualLinks('core', '/reviews')
  const externalLinks = getExternalLinks(5)

  // LocalBusiness schema with embedded reviews -- one of the strongest
  // E-E-A-T signals available per the senior SEO playbook
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: '30A Junk Removal',
    url: siteUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: r.author,
      },
      datePublished: r.date,
      reviewBody: r.body,
      itemReviewed: {
        '@type': 'Service',
        name: r.service,
      },
    })),
  }

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Reviews', url: '/reviews' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      {/* Hero */}
      <section className="-mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
              4.9 Stars · 127+ Verified Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-ocean-100 mb-8">
              Real reviews from property managers, homeowners, and contractors across the 30A corridor and Panama City Beach.
            </p>
            <div className="flex items-center justify-center gap-2 text-gold-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-2 text-white font-semibold text-lg">
                {avg.toFixed(1)} average
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl border border-sand-200 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold-500 text-gold-500"
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      &quot;{review.body}&quot;
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      <div>
                        <div className="font-semibold text-slate-900">
                          {review.author}
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-ocean-50 text-ocean-700 text-xs font-medium rounded-full">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Same-day service across 30A and Panama City Beach. Transparent pricing from $150.
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
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="More From 30A Junk Removal"
      />
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Camera } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { getServiceDetail } from '@/lib/services'
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'
import { CTASection } from '@/components/sections/CTASection'
import { RelatedContentGrid } from '@/components/sections/RelatedContent'
import { HelpfulResources } from '@/components/sections/HelpfulResources'
import { AllServicesGrid } from '@/components/sections/AllServicesGrid'
import { getRelatedServices, getRelatedLocationsForService, getRelatedBlogPostsForService } from '@/lib/internal-links'
import { getExternalLinksForService } from '@/lib/external-links'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'
import { marked } from 'marked'

marked.setOptions({ breaks: true, gfm: true })

const service = getServiceDetail('estate-cleanouts')!

export const metadata: Metadata = {
  title: `${service.title} | 30A Junk Removal | Same-Day Service`,
  description: service.description,
  alternates: {
    canonical: getCanonicalUrl('/services/estate-cleanouts')
  },
  openGraph: {
    title: `${service.title} | 30A Junk Removal`,
    description: service.description,
    type: 'website'
  }
}

export default function ServicePage() {
  const internalLinks = getContextualLinks('service', '/services/estate-cleanouts')
  const externalLinks = getExternalLinks(5)

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.shortTitle, url: `/services/${service.slug}` }
        ]}
      />
      <FAQSchema questions={service.faqs} />

      {/* Hero */}
      <section className="relative -mt-24 pt-32 pb-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-300 rounded-full text-sm font-semibold mb-6 border border-gold-400/30">
              {service.shortTitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <Camera className="w-5 h-5" />
                Text Photos for Quote
              </a>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional service with no hidden fees or surprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-seafoam-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      {service.content && (
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b-2 prose-h2:border-slate-200 prose-h2:pb-4
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-slate-800
                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-slate-700
                prose-p:text-lg prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-lg prose-li:text-slate-700 prose-li:leading-relaxed
                prose-li:marker:text-ocean-600"
              dangerouslySetInnerHTML={{ __html: marked.parse(service.content) as string }}
            />
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600">
              No hidden fees - the price we quote is the price you pay
            </p>
          </div>

          {service.pricing.custom ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-ocean-50 to-seafoam-50 rounded-2xl p-8 border-2 border-ocean-200 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Pricing</h3>
                <p className="text-5xl font-bold text-ocean-600 mb-6">{service.pricing.starting}</p>
                <p className="text-lg text-slate-700 mb-6">
                  Pricing varies based on project scope, materials, and volume. Text us photos for an accurate quote within 30 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call for Quote
                  </a>
                  <a
                    href={`sms:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-xl font-semibold hover:bg-ocean-50 transition-colors"
                  >
                    <Camera className="w-5 h-5" />
                    Text Photos
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {service.pricing.quarterTruck && (
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-ocean-400 hover:shadow-xl transition-all group">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">1/4 Truck</h3>
                  <p className="text-3xl font-bold text-ocean-600 mb-3 group-hover:text-ocean-700 transition-colors">{service.pricing.quarterTruck}</p>
                  <p className="text-sm text-slate-600">Single couch, dresser, or grill</p>
                </div>
              )}
              {service.pricing.halfTruck && (
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-ocean-400 hover:shadow-xl transition-all group">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">1/2 Truck</h3>
                  <p className="text-3xl font-bold text-ocean-600 mb-3 group-hover:text-ocean-700 transition-colors">{service.pricing.halfTruck}</p>
                  <p className="text-sm text-slate-600">Bedroom furniture set</p>
                </div>
              )}
              {service.pricing.threeQuarterTruck && (
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-ocean-400 hover:shadow-xl transition-all group">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">3/4 Truck</h3>
                  <p className="text-3xl font-bold text-ocean-600 mb-3 group-hover:text-ocean-700 transition-colors">{service.pricing.threeQuarterTruck}</p>
                  <p className="text-sm text-slate-600">Living room or garage cleanout</p>
                </div>
              )}
              {service.pricing.fullTruck && (
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-ocean-400 hover:shadow-xl transition-all group">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Full Truck</h3>
                  <p className="text-3xl font-bold text-ocean-600 mb-3 group-hover:text-ocean-700 transition-colors">{service.pricing.fullTruck}</p>
                  <p className="text-sm text-slate-600">Multiple rooms or full garage</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-ocean-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Cross-Linking Grid */}
      <AllServicesGrid currentSlug="estate-cleanouts" />

      {/* Related Content */}
      <RelatedContentGrid
        services={getRelatedServices('estate-cleanouts')}
        locations={getRelatedLocationsForService('estate-cleanouts')}
        blogPosts={getRelatedBlogPostsForService('estate-cleanouts')}
      />

      {/* Helpful External Resources */}
      <HelpfulResources
        links={getExternalLinksForService('estate-cleanouts')}
        title="Helpful Resources"
        subtitle="Official guidelines and resources from government agencies and organizations"
      />

      {/* Links Section */}
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Services & Areas"
      />

      {/* CTA */}
      <CTASection />
    </div>
  )
}

import { Metadata } from 'next'
import { FAQ } from '@/components/sections/FAQ'
import { Phone, MessageCircle } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'FAQ | 30A Junk Removal',
  description: 'Frequently asked questions about junk removal on 30A. Pricing, scheduling, what we accept, construction debris, property management services, and more.',
  alternates: {
    canonical: getCanonicalUrl('/faq'),
  },
}

export default function FAQPage() {
  const internalLinks = getContextualLinks('core', '/faq')
  const externalLinks = getExternalLinks(5)

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="-mt-20 pt-32 pb-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Got questions? We've got answers. If you don't see what you're looking for, give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We're here to help. Reach out anytime and we'll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-lg font-semibold hover:bg-ocean-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Text Us
            </a>
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

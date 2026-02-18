import { Metadata } from 'next'
import { FAQ } from '@/components/sections/FAQ'
import { Phone, MessageCircle, HelpCircle } from 'lucide-react'
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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="-mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-ocean-100">
              Got questions? We've got answers. If you don't see what you're looking for, give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-ocean-100 mb-8">
            We're here to help. Reach out anytime and we'll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
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
    </main>
  )
}

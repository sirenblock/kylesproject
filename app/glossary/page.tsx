import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight, Phone } from 'lucide-react'
import { glossaryTerms, getGlossaryTermsByCategory } from '@/lib/glossary'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.30ajunkremoval.com'

export const metadata: Metadata = {
  title: 'Junk Removal Glossary',
  description:
    'Definitions for junk removal industry terminology: EPA Section 608, refrigerant recovery, HHW, Florida plastic-bag rule, bulk pickup, fair-market value, and more. Essential reference for property owners.',
  alternates: {
    canonical: getCanonicalUrl('/glossary'),
  },
  openGraph: {
    title: 'Junk Removal Glossary | 30A Junk Removal',
    description: 'Industry terminology defined — pricing, regulations, disposal channels, service operations.',
    type: 'website',
    url: '/glossary',
  },
}

export default function GlossaryPage() {
  const grouped = getGlossaryTermsByCategory()
  const internalLinks = getContextualLinks('core', '/glossary')
  const externalLinks = getExternalLinks(5)

  // DefinedTermSet schema -- per senior SEO playbook: definitional content
  // schemas help surface entries in featured snippets and AI search answers
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: '30A Junk Removal Industry Glossary',
    description: 'Junk removal and disposal industry terminology for 30A and Panama City Beach property owners.',
    url: `${siteUrl}/glossary`,
    hasDefinedTerm: glossaryTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: `${siteUrl}/glossary`,
      termCode: term.term.toLowerCase().replace(/\s+/g, '-'),
    })),
  }

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      {/* Hero */}
      <section className="-mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              {glossaryTerms.length} Terms Defined
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Junk Removal Glossary
            </h1>
            <p className="text-xl text-ocean-100 leading-relaxed">
              Industry terminology defined — pricing tiers, Florida regulations, disposal channels, service operations, and items/materials. Use this reference when planning a junk removal project on 30A or Panama City Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Category navigation */}
      <section className="py-8 bg-white border-b border-sand-200 sticky top-20 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center gap-2">
            {Object.keys(grouped).map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className="px-4 py-2 text-sm font-medium bg-sand-50 hover:bg-ocean-50 text-slate-700 hover:text-ocean-700 border border-sand-200 hover:border-ocean-300 rounded-full transition-colors"
              >
                {cat} ({grouped[cat].length})
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Definitions by category */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.entries(grouped).map(([category, terms]) => (
            <div key={category}>
              <h2
                id={category.toLowerCase().replace(/[^a-z]+/g, '-')}
                className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-ocean-200"
              >
                {category}
              </h2>
              <dl className="space-y-6">
                {terms.map((term) => (
                  <div
                    key={term.term}
                    id={term.term.toLowerCase().replace(/\s+/g, '-')}
                    className="bg-white rounded-xl border border-sand-200 p-6 hover:border-ocean-300 hover:shadow-md transition-all scroll-mt-32"
                  >
                    <dt className="text-xl font-bold text-slate-900 mb-3">
                      {term.term}
                    </dt>
                    <dd className="text-slate-700 leading-relaxed mb-4">
                      {term.definition}
                    </dd>
                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap text-sm pt-3 border-t border-sand-100">
                        <span className="text-slate-500 font-medium">Related:</span>
                        {term.relatedTerms.map((related) => (
                          <a
                            key={related}
                            href={`#${related.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-ocean-600 hover:text-ocean-700 underline"
                          >
                            {related}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project to Discuss?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Now that you know the terminology, let&apos;s talk about your specific job. Photo quotes within 30 minutes.
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Get Quote
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

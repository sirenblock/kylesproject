import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Clock,
  FileCheck,
  Star,
  MapPin,
} from 'lucide-react'
import { marked } from 'marked'
import { getIndustry, getAllIndustrySlugs } from '@/lib/industries'
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from '@/components/seo/StructuredData'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// Dedicated industry landing pages -- per traffic-acquisition Play 2
// (programmatic) + senior-strategy E-E-A-T. Each vertical gets its
// own URL, schemas, and B2B-targeted content for high-intent queries
// like "vacation rental property manager junk removal 30A".

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}
  return {
    title: `${industry.name} Junk Removal | 30A Junk Removal`,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: `https://www.30ajunkremoval.com/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.name} Junk Removal — 30A & PCB`,
      description: industry.metaDescription,
      url: `/industries/${slug}`,
      type: 'website',
    },
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  const bodyHtml = marked.parse(industry.body) as string

  return (
    <main className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Industries', url: 'https://www.30ajunkremoval.com/industries' },
          {
            name: industry.shortName,
            url: `https://www.30ajunkremoval.com/industries/${slug}`,
          },
        ]}
      />
      <FAQSchema questions={industry.faqs} />
      <ServiceSchema
        name={`${industry.name} Junk Removal`}
        description={industry.metaDescription}
        url={`/industries/${slug}`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/industries" className="hover:text-white">
              Industries
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{industry.shortName}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            B2B Partner Service
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {industry.heroHeadline}
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            {industry.heroSubhead}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="industry-hero-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="industry-hero-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Discuss B2B Terms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rose-50 border-2 border-rose-100 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-rose-900 mb-3">The Challenge</h2>
              <p className="text-slate-700 leading-relaxed">{industry.challenge}</p>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-100 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-emerald-900 mb-3">Our Solution</h2>
              <p className="text-slate-700 leading-relaxed">{industry.solution}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-slate-50 rounded-2xl p-5">
              <div className="text-xs uppercase text-slate-500 font-semibold mb-1">Audience</div>
              <p className="text-slate-700">{industry.audience}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <div className="text-xs uppercase text-slate-500 font-semibold mb-1">Pricing</div>
              <p className="text-slate-700">{industry.pricing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-base prose-p:md:text-lg prose-p:text-slate-700 prose-p:leading-relaxed
              prose-a:text-ocean-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-ul:my-5 prose-li:my-1.5 prose-li:text-slate-700
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-table:my-8 prose-th:bg-slate-900 prose-th:text-white prose-th:p-3
              prose-td:border prose-td:border-slate-200 prose-td:p-3"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>
      </section>

      {/* Standard Terms callout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-gold-300" />
              <h2 className="text-2xl font-bold">Standard Terms</h2>
            </div>
            <p className="text-ocean-100 leading-relaxed">{industry.standardTerms}</p>
          </div>
        </div>
      </section>

      {/* Related Services + Posts */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Services for {industry.shortName}
              </h2>
              <ul className="space-y-3">
                {industry.services.map((s, i) => (
                  <li key={i}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related Guides</h2>
              <ul className="space-y-3">
                {industry.relatedPosts.map((p, i) => (
                  <li key={i}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {industry.shortName} FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {industry.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden hover:border-ocean-300 transition-colors"
              >
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg text-slate-900 flex items-center justify-between list-none">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center text-sm group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div
                  className="faq-answer px-6 pb-5 text-slate-700 leading-relaxed"
                  data-speakable
                >
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Star className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">4.9</div>
              <div className="text-xs text-slate-600">Average Rating</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">90 min</div>
              <div className="text-xs text-slate-600">Preferred-Vendor SLA</div>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-8 h-8 text-ocean-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">Licensed</div>
              <div className="text-xs text-slate-600">& Insured</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-seafoam-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">2018</div>
              <div className="text-xs text-slate-600">Serving 30A &amp; PCB</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to discuss {industry.shortName.toLowerCase()} terms?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Call {FORMATTED_PHONE} for B2B account setup, or text photos for a single-job quote.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="industry-bottom-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="industry-bottom-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Discuss B2B Terms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

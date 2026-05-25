import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Calculator, Hammer, Truck, Star } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { CollectionPageSchema } from '@/components/seo/PagedSchemas'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// /tools index page -- terminal node for tool breadcrumb hierarchy.
// Per interactive-tool-pages skill: each tool's breadcrumb should
// route through /tools (the index) rather than self-referencing.

export const metadata: Metadata = {
  title: 'Interactive Cost Calculators & Tools',
  description:
    'Interactive cost calculators and planning tools for 30A and PCB junk removal. Hot tub removal cost, general junk removal pricing, and more — get instant estimates before you call.',
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/tools',
  },
  keywords: [
    'junk removal calculator 30A',
    'hot tub removal cost calculator',
    'junk removal pricing tool',
    '30A pricing calculator',
  ],
  openGraph: {
    title: 'Junk Removal Calculators & Tools — 30A Junk Removal',
    description:
      'Interactive cost calculators for hot tub removal and general junk removal in 30A and PCB.',
    type: 'website',
    url: '/tools',
  },
}

const tools = [
  {
    slug: 'junk-removal-cost-calculator',
    name: 'Junk Removal Cost Calculator',
    icon: Calculator,
    description:
      'Estimate any junk removal job with volume, community type, urgency, and specialty-item inputs. Updated for 2026 pricing.',
    inputs: '5 inputs',
    useCase: 'Best for general junk removal estimates across any service type.',
    color: 'from-ocean-500 to-ocean-600',
  },
  {
    slug: 'hot-tub-cost-calculator',
    name: 'Hot Tub Removal Cost Calculator',
    icon: Hammer,
    description:
      'Estimate hot tub removal with size, access type, community type, deck removal, and prep-credit inputs.',
    inputs: '5 inputs',
    useCase:
      'Specialized for hot tub removal where standard junk removal pricing does not apply.',
    color: 'from-rose-500 to-rose-600',
  },
]

export default function ToolsIndexPage() {
  return (
    <main className="bg-white min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Tools', url: 'https://www.30ajunkremoval.com/tools' },
        ]}
      />
      <CollectionPageSchema
        name="Interactive Cost Calculators & Tools"
        description="Interactive cost calculators and planning tools for 30A and PCB junk removal."
        url="/tools"
        numberOfItems={tools.length}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Tools</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Calculators &amp; Planning Tools
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            Interactive cost estimators for 30A and PCB junk removal jobs. Get a quick estimate, then text photos for a confirmed price.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="tools-hero-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="tools-hero-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Text for a Confirmed Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  data-cta={`tools-card-${tool.slug}`}
                  className="group bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-ocean-300 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} text-white flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-ocean-700 transition-colors">
                        {tool.name}
                      </h2>
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                        {tool.inputs}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-3 leading-relaxed">{tool.description}</p>
                  <p className="text-sm text-slate-500 mb-5">{tool.useCase}</p>
                  <span className="inline-flex items-center gap-2 text-ocean-600 group-hover:text-ocean-700 font-semibold">
                    Open Calculator
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Internal link grid -- equity to related hubs */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/pricing"
                className="block p-4 rounded-xl border border-slate-200 hover:border-ocean-300 hover:shadow-sm transition-all"
              >
                <div className="font-bold text-slate-900 mb-1">Full Pricing</div>
                <div className="text-sm text-slate-600">All services pricing breakdown</div>
              </Link>
              <Link
                href="/compare"
                className="block p-4 rounded-xl border border-slate-200 hover:border-ocean-300 hover:shadow-sm transition-all"
              >
                <div className="font-bold text-slate-900 mb-1">Compare Options</div>
                <div className="text-sm text-slate-600">Junk removal vs DIY vs dumpster</div>
              </Link>
              <Link
                href="/services"
                className="block p-4 rounded-xl border border-slate-200 hover:border-ocean-300 hover:shadow-sm transition-all"
              >
                <div className="font-bold text-slate-900 mb-1">All Services</div>
                <div className="text-sm text-slate-600">31 service categories</div>
              </Link>
              <Link
                href="/blog"
                className="block p-4 rounded-xl border border-slate-200 hover:border-ocean-300 hover:shadow-sm transition-all"
              >
                <div className="font-bold text-slate-900 mb-1">Blog &amp; Guides</div>
                <div className="text-sm text-slate-600">47 in-depth articles</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Ready for a confirmed quote?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Text photos to {FORMATTED_PHONE} — we reply with a final price within 10 minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="tools-bottom-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ocean-600 text-white rounded-xl font-bold hover:bg-ocean-700 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="tools-bottom-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              4.9★ · 127+ Reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-500" />
              Same-Day Service
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

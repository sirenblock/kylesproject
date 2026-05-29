import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  AlertTriangle,
  Wind,
  Truck,
  CheckCircle,
  Clock,
  ShieldCheck,
  Calendar,
  MapPin,
} from 'lucide-react'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// /seasonal/hurricane-prep -- timely landing page targeting hurricane-season
// queries. Atlantic hurricane season runs June 1 - November 30. Peak
// activity August-October. This page targets pre-season prep + during-
// season alerts + post-storm recovery queries.

export const metadata: Metadata = {
  title: 'Hurricane Prep Junk Removal in 30A: Pre-Season, During-Storm, Post-Storm',
  description:
    'Hurricane preparation junk removal for 30A and PCB. Pre-season debris clearing (June 1+), during-storm watch alerts, post-storm cleanup. Same-day emergency service.',
  keywords: [
    'hurricane prep junk removal 30A',
    'hurricane debris removal 30A',
    'storm cleanup 30A',
    'post-hurricane junk removal',
    '30A hurricane preparation',
    'pre-season debris clearing',
  ],
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/seasonal/hurricane-prep',
  },
  openGraph: {
    title: 'Hurricane Prep Junk Removal — 30A & PCB',
    description:
      'Pre-season prep + during-storm alerts + post-storm recovery. Same-day emergency service June 1 through November 30.',
    type: 'website',
  },
}

const timeline = [
  {
    phase: 'Pre-Season',
    icon: Calendar,
    timing: 'May 1 - June 15',
    title: 'Clear loose debris before season starts',
    description:
      'Atlantic hurricane season starts June 1. Yard waste, accumulated outdoor items, old patio furniture, broken pool equipment, and any loose property items become projectiles in 100+ mph winds. The most-impactful prep window is the month before season starts.',
    actions: [
      'Yard waste cleanup — fallen branches, dead palm fronds, dropped pine needles',
      'Old patio furniture removal — anything not bolted down',
      'Broken pool equipment — sun-damaged covers, broken poles, deteriorated noodles',
      'Outdoor accumulation — leftover construction materials, unused planters',
      'Loose pots and decor — anything decorative that could fly',
    ],
    cost: '$400 - $1,200 typical yard + property cleanout',
    color: 'from-amber-500 to-amber-600',
  },
  {
    phase: 'Active Season',
    icon: Wind,
    timing: 'June 1 - November 30',
    title: 'Storm-watch debris clearing',
    description:
      'When a storm enters the watch zone (typically 72-96 hours out), final pre-storm prep includes clearing anything that has accumulated since pre-season cleanup. Most property managers and homeowners hire emergency service in this window.',
    actions: [
      'Final yard waste sweep (next-72-hour storm prep)',
      'Last-minute pool and patio clear',
      'Construction debris that has accumulated from active jobs',
      'Anything outdoor that has not been secured',
      'Emergency vacation rental closeouts (guests evacuating)',
    ],
    cost: 'Same-day emergency pricing applies, often $400 - $800',
    color: 'from-rose-500 to-rose-600',
  },
  {
    phase: 'Post-Storm Recovery',
    icon: Truck,
    timing: 'After storm passes',
    title: 'Storm debris removal and cleanup',
    description:
      'After a major storm event, debris removal can take days to weeks depending on damage scope. We coordinate with FEMA-declared disaster routing when applicable. Property managers prioritize getting vacation rentals back online; homeowners prioritize debris that blocks property access.',
    actions: [
      'Tree and branch debris (no chipper service — we haul whole)',
      'Damaged roof material (with subcontractor coordination)',
      'Water-damaged interior items (mattresses, sofas, drywall)',
      'Damaged outdoor furniture and equipment',
      'Damaged fencing and pool equipment',
    ],
    cost: 'Variable based on volume and access — FEMA assistance may apply',
    color: 'from-emerald-500 to-emerald-600',
  },
]

const faqs = [
  {
    question: 'When should I schedule pre-hurricane junk removal in 30A?',
    answer:
      'The optimal window is May 1 through June 15 — the month before Atlantic hurricane season starts on June 1. Pre-season scheduling avoids the rush that hits when the first watch enters the zone (typically late June / early July). Property managers with multiple vacation rentals should book the entire portfolio for the May window to clear all properties before peak season arrivals.',
  },
  {
    question: 'How much does hurricane prep junk removal cost in 30A?',
    answer:
      'Pre-season yard + property cleanout typically runs $400-$1,200 depending on accumulated debris volume. Storm-watch emergency clearing runs same-day pricing ($400-$800 typical). Post-storm cleanup is highly variable based on damage scope, ranging from $400 (single-property debris) to $5,000+ (whole-property storm damage). FEMA disaster declarations may provide reimbursement assistance for major events.',
  },
  {
    question: 'Do you provide emergency junk removal during a hurricane warning?',
    answer:
      'Yes — when a storm enters the watch zone (typically 72-96 hours out), we operate emergency service to clear last-minute outdoor items, accumulated construction debris, and vacation rental closeouts. As the storm approaches landfall, service availability narrows — final pickups typically end 24-36 hours before projected landfall.',
  },
  {
    question: 'Can you help with post-hurricane storm debris?',
    answer:
      'Yes — post-storm cleanup is one of our most-requested services after a hurricane event. We coordinate with FEMA disaster declarations where applicable, route tree and branch debris (we haul whole — we do not chip on-site), handle water-damaged interior items, and work alongside roofing/restoration contractors. Property managers typically prioritize getting vacation rentals back online; homeowners typically prioritize access-blocking debris first.',
  },
  {
    question: 'What hurricane debris can you not haul?',
    answer:
      'We handle most storm debris but specific items require coordination: (1) Damaged power lines must be cleared by utility company before we can haul nearby debris; (2) Trees in contact with structures need licensed arborist or restoration contractor first; (3) Hazmat spills (fuel from generators, chemicals from damaged storage) require certified hazmat response. We coordinate the routing for these so you have a single point of contact.',
  },
  {
    question: 'How quickly can you respond after a hurricane?',
    answer:
      'Response time depends on storm severity and infrastructure conditions. For minor events (tropical storm, weak hurricane), we resume operations within 24-48 hours. For major events (Cat 3+), response can take 3-7 days as we wait for road clearance, power restoration to facilities, and transfer station reopening. Property managers and pre-arranged customers get first slots in post-storm scheduling.',
  },
]

export default function HurricanePrepPage() {
  return (
    <main className="bg-white min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Seasonal', url: 'https://www.30ajunkremoval.com/seasonal/hurricane-prep' },
          {
            name: 'Hurricane Prep',
            url: 'https://www.30ajunkremoval.com/seasonal/hurricane-prep',
          },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-700 via-amber-700 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-amber-200 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Hurricane Prep</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-200 text-xs font-semibold mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            Atlantic Hurricane Season: June 1 — November 30
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hurricane Prep Junk Removal in 30A
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mb-6 leading-relaxed">
            Pre-season prep, storm-watch emergency service, and post-storm recovery for 30A, PCB, Walton & Bay Counties. Same-day available when capacity allows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="hurricane-hero-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="hurricane-hero-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-rose-700 rounded-xl font-bold hover:bg-amber-50 transition-colors shadow-md"
            >
              Book Pre-Season Cleanup
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-12 bg-amber-50 border-y-2 border-amber-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-2">100+ mph</div>
              <div className="text-sm text-slate-600">
                Wind speeds during a Cat 2 hurricane. Anything not bolted down becomes a projectile.
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-2">June 1</div>
              <div className="text-sm text-slate-600">
                Atlantic hurricane season starts. Peak activity is August-October.
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-2">72-96 hrs</div>
              <div className="text-sm text-slate-600">
                Typical storm-watch lead time. Final prep window before landfall.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              The Three Hurricane Prep Windows
            </h2>
            <p className="text-lg text-slate-600">
              Different prep needs at different times of season.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((t, idx) => {
              const Icon = t.icon
              return (
                <article
                  key={idx}
                  className="bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-sm"
                >
                  <div className="grid md:grid-cols-[auto_1fr] gap-6">
                    <div
                      className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          {t.phase}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                          {t.timing}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{t.title}</h3>
                      <p className="text-slate-700 mb-4 leading-relaxed">{t.description}</p>
                      <div className="mb-4">
                        <div className="text-xs uppercase text-ocean-700 font-semibold mb-2">
                          What we handle
                        </div>
                        <ul className="space-y-1.5 text-sm text-slate-700">
                          {t.actions.map((action, i) => (
                            <li key={i} className="flex gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-slate-500 italic">
                        <strong className="text-slate-700">Typical cost:</strong> {t.cost}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Property manager note */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <ShieldCheck className="w-8 h-8 shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">For Property Managers</h2>
                <p className="text-ocean-100 leading-relaxed">
                  Preferred-vendor agreements get priority post-storm scheduling. After Hurricane Michael (2018), property managers with preferred-vendor relationships had vacation rentals back online 2-3 weeks earlier than reactive customers.
                </p>
              </div>
            </div>
            <Link
              href="/industries/vacation-rental-property-management"
              data-cta="hurricane-pm-link"
              className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-semibold"
            >
              See vacation rental PM terms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Hurricane Prep FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors"
              >
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg text-slate-900 flex items-center justify-between list-none">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm group-open:rotate-45 transition-transform">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-700 via-amber-700 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book your pre-season cleanup
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            The May/June window has the most capacity and avoids the storm-watch surcharge. Schedule now.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="hurricane-bottom-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="hurricane-bottom-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-rose-700 rounded-xl font-bold hover:bg-amber-50 transition-colors shadow-md"
            >
              Get a Pre-Season Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Related */}
          <div className="mt-12 pt-12 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <Link
              href="/blog/hurricane-season-prep-junk-removal-30a-guide"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Detailed Prep Guide</div>
              <div className="text-sm text-amber-200">Full hurricane prep playbook</div>
            </Link>
            <Link
              href="/services#yard-debris"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Yard Debris Service</div>
              <div className="text-sm text-amber-200">Pre-season cleanup pricing</div>
            </Link>
            <Link
              href="/industries/vacation-rental-property-management"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Property Manager Terms</div>
              <div className="text-sm text-amber-200">Priority post-storm slots</div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

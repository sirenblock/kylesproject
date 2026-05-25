import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  Calendar,
  Sun,
  Snowflake,
  Home,
  CheckCircle,
  ShieldCheck,
  Star,
  Truck,
  Package,
} from 'lucide-react'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// /seasonal/snowbird-season -- seasonal landing page targeting the
// October-April snowbird audience. 30A and PCB have one of the
// densest seasonal-resident populations in Florida; the arrival
// (Oct-Nov) and departure (Mar-Apr) windows generate predictable
// junk removal demand that's distinct from year-round residents.

export const metadata: Metadata = {
  title: 'Snowbird Season Junk Removal in 30A: October-April Property Prep',
  description:
    'Snowbird season junk removal for 30A and PCB. October arrival prep + April departure cleanout. Storage-area clearing, deck refresh, vacation rental conversion, photo documentation for absentee owners.',
  keywords: [
    'snowbird property cleanout 30a',
    'seasonal rental prep florida panhandle',
    'winter rental turnover 30a',
    'snowbird junk removal pcb',
    'october property prep 30a',
    'april departure cleanout 30a',
  ],
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/seasonal/snowbird-season',
  },
  openGraph: {
    title: 'Snowbird Season Junk Removal — 30A & PCB',
    description:
      'October arrival prep + April departure cleanout. Photo documentation for absentee owners. Same-day available.',
    type: 'website',
  },
}

const timeline = [
  {
    phase: 'Pre-Arrival (October)',
    icon: Sun,
    timing: 'October 1 - November 30',
    title: 'Property prep before snowbirds arrive',
    description:
      'For property owners and managers handling snowbird arrivals, the October-November window is the highest-leverage prep period. Properties that have been vacant or vacation-rented all summer need a deeper cleanout before the long-term seasonal resident moves in.',
    actions: [
      'Storage area cleanout — clear summer renter left-behinds',
      'Patio + pool deck refresh — replace sun-damaged furniture',
      'Old vacation rental decor removal (rotating to fresh)',
      'Kitchen + bath touch-up debris (cabinet pulls, fixtures)',
      'Garage organization + accumulated item disposal',
      'HVAC filter changes + system maintenance debris',
    ],
    cost: '$400 - $1,800 typical pre-arrival cleanout',
    color: 'from-amber-500 to-amber-600',
  },
  {
    phase: 'In-Season Service (December - March)',
    icon: Calendar,
    timing: 'December 1 - March 31',
    title: 'On-call service for seasonal residents',
    description:
      "Snowbirds settle in for 4-6 months. They're decluttering closets, doing renovation projects to their slower-paced winter home, and disposing of items accumulated over years of seasonal trips. Demand for service is steady but lower-volume than peak vacation rental season.",
    actions: [
      'Single-item pickups (furniture replacements, broken appliances)',
      'Renovation debris (winter remodel projects)',
      'Estate cleanouts (when a long-term snowbird passes)',
      'Storage unit conversions (downsizing decisions)',
      'Donation pickups with tax receipts for snowbird itemized returns',
      'Holiday decor disposal (post-Christmas, pre-Easter)',
    ],
    cost: 'Standard per-job pricing $150-$600',
    color: 'from-ocean-500 to-ocean-600',
  },
  {
    phase: 'Departure (April)',
    icon: Snowflake,
    timing: 'March 15 - May 15',
    title: 'Cleanout for departure + summer rental conversion',
    description:
      "April is the highest-revenue window of the snowbird year. Many owners depart in late March or April; properties then convert to summer vacation rental mode. The conversion involves removing snowbird personal items, refreshing furniture for vacation rental presentation, and clearing accumulated 6-month debris.",
    actions: [
      'Personal item storage prep (boxing snowbird belongings)',
      'Vacation-rental conversion cleanout (different furniture, decor)',
      'Pool/patio summer prep (replace winter-used furniture)',
      'Deep refrigerator + pantry clear (snowbirds leave food)',
      'Carpet/upholstery items showing 6-month wear',
      'Photo documentation for absentee owner before summer season',
    ],
    cost: '$600 - $2,200 typical departure + conversion cleanout',
    color: 'from-rose-500 to-rose-600',
  },
]

const faqs = [
  {
    question: 'When does snowbird season start in 30A?',
    answer:
      'Snowbird season in 30A and Panama City Beach typically runs October through April, with peak arrivals in late October to mid-November (after hurricane season ends) and departures in late March to April (before summer vacation rental season). The exact timing varies by individual snowbird preference, but property managers and service vendors plan operations around this 6-month window.',
  },
  {
    question: 'Do snowbirds need different junk removal services than year-round residents?',
    answer:
      'Yes — snowbird-specific service patterns include: (1) higher-volume seasonal cleanouts at arrival + departure (vs spread-out year-round demand); (2) absentee-owner coordination for properties cleaned before snowbird arrives; (3) tax-deduction-eligible donation routing (snowbirds often itemize returns); (4) conversion cleanouts when properties shift between snowbird and vacation rental modes. The same crews handle the work — the workflow differs.',
  },
  {
    question: 'How much does pre-arrival snowbird property cleanout cost?',
    answer:
      'Pre-arrival cleanouts (October-November) typically run $400-$1,800 depending on property size and how long the property sat vacant or vacation-rented during summer. Heavier-use summer vacation rentals generate more cleanout volume; properties that sat empty all summer typically run $400-$700. Coastal properties with sun-damaged outdoor items run higher than inland properties.',
  },
  {
    question: 'Can you do absentee-owner cleanouts before snowbirds arrive?',
    answer:
      'Yes — absentee-owner cleanouts are one of our most common snowbird-season services. We coordinate gate codes, photo documentation, and digital payment so the property owner does not need to travel. Photo documentation includes before, during, and after shots of the cleanout — most snowbird owners want this for their records and for insurance purposes.',
  },
  {
    question: 'What is a snowbird-to-summer-rental conversion cleanout?',
    answer:
      "Many 30A and PCB properties operate as snowbird residences October-April and vacation rentals May-September. The conversion involves removing the snowbird's personal belongings (boxing for storage), refreshing furniture for vacation rental presentation, replacing items showing 6-month wear, and staging the property for short-term guest use. Conversion cleanouts typically run $600-$2,200 depending on property size and the volume of personal items being stored.",
  },
  {
    question: 'Do you provide donation receipts for snowbird tax deductions?',
    answer:
      'Yes — donatable items are routed to Habitat ReStore, Salvation Army, or Goodwill with itemized donation receipts suitable for IRS Form 8283. Many snowbirds itemize their federal returns and the donation deduction value (typical: $200-$1,500 per cleanout) often offsets a meaningful portion of the service cost. We document fair-market values per item to support the deduction calculation.',
  },
]

export default function SnowbirdSeasonPage() {
  return (
    <main className="bg-white min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Seasonal', url: 'https://www.30ajunkremoval.com/seasonal/snowbird-season' },
          {
            name: 'Snowbird Season',
            url: 'https://www.30ajunkremoval.com/seasonal/snowbird-season',
          },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Snowbird Season</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-200 text-xs font-semibold mb-4">
            <Snowflake className="w-3.5 h-3.5" />
            Snowbird Season: October — April
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Snowbird Season Junk Removal in 30A
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            Pre-arrival prep, in-season service, and April departure cleanouts for absentee snowbird property owners across 30A, PCB, Walton &amp; Bay Counties.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="snowbird-hero-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="snowbird-hero-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Schedule Pre-Arrival Cleanup
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-amber-50 border-y-2 border-amber-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-2">Oct-Nov</div>
              <div className="text-sm text-slate-600">
                Peak snowbird arrival window in 30A and PCB.
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-2">4-6 mo</div>
              <div className="text-sm text-slate-600">
                Typical snowbird residency length on the Emerald Coast.
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-2">Mar-Apr</div>
              <div className="text-sm text-slate-600">
                Departure window — properties convert to vacation rental mode.
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
              The Three Snowbird-Season Service Windows
            </h2>
            <p className="text-lg text-slate-600">
              Different needs across the October-April cycle.
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

      {/* For absentee owners */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Home className="w-8 h-8 shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">For Absentee Snowbird Owners</h2>
                <p className="text-ocean-100 leading-relaxed">
                  Most snowbird owners do not arrive at their 30A or PCB property until October. We complete pre-arrival cleanouts in September-October with photo documentation, gate-code coordination, and digital payment — no travel required on your end. By the time you arrive, the property is move-in ready.
                </p>
              </div>
            </div>
            <Link
              href="/industries/vacation-rental-property-management"
              data-cta="snowbird-pm-link"
              className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-semibold"
            >
              For Property Managers handling snowbird portfolios
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
              Snowbird Season FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-700 via-ocean-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book your snowbird-season service
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Pre-arrival, in-season, or departure-conversion — call or text for an absentee-owner-friendly quote.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="snowbird-bottom-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="snowbird-bottom-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Schedule a Cleanup
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <Link
              href="/seasonal/hurricane-prep"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Hurricane Prep</div>
              <div className="text-sm text-ocean-200">June-November storm-watch service</div>
            </Link>
            <Link
              href="/blog/spring-cleaning-30a-beach-properties"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Spring Cleaning Guide</div>
              <div className="text-sm text-ocean-200">Spring property refresh playbook</div>
            </Link>
            <Link
              href="/industries/vacation-rental-property-management"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Property Manager Terms</div>
              <div className="text-sm text-ocean-200">Net-15 vendor agreement</div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

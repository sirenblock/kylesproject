import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Truck,
  Container,
  Hammer,
  Clock,
  DollarSign,
  AlertTriangle,
  ShieldCheck,
} from 'lucide-react'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// /compare -- comparison hub page targeting high-intent comparison queries.
//
// Per traffic-acquisition Play 1 long-tail blog play: comparison queries
// like "junk removal vs dumpster rental" + "junk removal vs DIY" have
// commercial intent -- the reader is actively choosing between options.
// This page targets those queries with side-by-side comparison tables
// plus decision frameworks.
//
// Per E-E-A-T Expertise signal: comprehensive coverage of the three
// most common alternatives readers consider (DIY, dumpster rental,
// handyman/labor-only) demonstrates depth in the vertical.

export const metadata: Metadata = {
  title: 'Junk Removal vs DIY vs Dumpster vs Handyman | 30A Comparison Guide',
  description:
    'Side-by-side comparison of junk removal vs DIY hauls, dumpster rental, and handyman services. Cost, time, labor, and convenience compared for 30A and PCB property owners.',
  keywords: [
    'junk removal vs DIY',
    'junk removal vs dumpster rental',
    'junk removal vs handyman',
    'cheapest way to get rid of junk 30A',
    'junk removal alternatives 30A',
  ],
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/compare',
  },
  openGraph: {
    title: 'Junk Removal vs DIY vs Dumpster Rental — 30A Comparison',
    description:
      'When does it make sense to hire pros vs do it yourself vs rent a dumpster? Real cost breakdown, time math, and decision framework.',
    type: 'website',
  },
}

const options = [
  {
    name: 'Full-Service Junk Removal',
    icon: Truck,
    color: 'from-ocean-500 to-ocean-600',
    summary: 'We come, we load, we haul.',
    bestFor: 'Anyone who values time, lacks a truck, or has heavy/bulky items.',
    cost: '$150 - $850',
    time: '2-4 hours, one visit',
    labor: 'Zero -- we do all lifting',
    fees: 'All-inclusive (labor, hauling, disposal)',
    pros: [
      'Single quote, single payment',
      'Same-day service available',
      'Donation routing included',
      'No truck rental, no permits',
      'Licensed and insured (your property is protected)',
      'Photo documentation for property managers',
    ],
    cons: [
      'More expensive than DIY for small loads',
      'Schedule depends on crew availability for same-day',
    ],
  },
  {
    name: 'DIY Truck Rental + Self-Haul',
    icon: Hammer,
    color: 'from-amber-500 to-amber-600',
    summary: 'Rent a truck, load it, drive to the dump.',
    bestFor: 'Small loads where you already have help and time.',
    cost: '$60 - $200+ (varies wildly)',
    time: '4-8 hours including dump trip',
    labor: 'You do all lifting + driving',
    fees: 'Truck rental + mileage + fuel + transfer station fee + your time',
    pros: [
      'Lowest dollar cost if you have help',
      'Total control over timing',
      'Familiar process if you have done it before',
    ],
    cons: [
      'Walton County transfer station charges $80-160 per ton',
      'No CDL truck rentals available in 30A area on weekends',
      'You are liable for any property damage during loading',
      'Risk of injury from heavy items (mattresses, appliances)',
      'Mileage + fuel often equals the rental cost itself',
      'No donation routing -- everything goes to landfill',
      'Hot tubs, refrigerators, paint cannot legally go in standard transfer station',
    ],
  },
  {
    name: 'Dumpster Rental',
    icon: Container,
    color: 'from-emerald-500 to-emerald-600',
    summary: 'They drop a dumpster, you fill it, they haul.',
    bestFor: 'Multi-week renovations or large estate cleanouts where you have a flat parking spot.',
    cost: '$350 - $750 for a 10-15 yard dumpster',
    time: '3-7 day rental window',
    labor: 'You do all lifting',
    fees: 'Rental + delivery + pickup + tonnage overage + permit (if street-placed)',
    pros: [
      'Multi-day access for slow-pace projects',
      'Good for active construction sites',
      'No appointment needed once delivered',
    ],
    cons: [
      'Most 30A HOAs prohibit street-placed dumpsters without permit',
      'Driveway placement risks damage from skid marks or weight',
      'Sits visible on your property for days',
      'Overage charges if you exceed weight limit',
      'You still do all the lifting',
      'Cannot include hot tubs, mattresses, refrigerators, paint, electronics',
      'No donation routing',
    ],
  },
  {
    name: 'Handyman / Labor-Only',
    icon: Hammer,
    color: 'from-rose-500 to-rose-600',
    summary: 'You provide truck + disposal, they provide muscle.',
    bestFor: 'Rare niche where you have hauling figured out but need backs.',
    cost: '$30 - $50/hr per laborer, 2-hour minimum',
    time: '2-4 hours plus your hauling time',
    labor: 'They lift, you haul',
    fees: 'Hourly labor + your truck rental + your disposal fees',
    pros: [
      'Useful for stair-heavy lifts',
      'Lower hourly rate than full-service junk removal',
    ],
    cons: [
      'You still need a truck',
      'You still pay disposal fees',
      'No insurance on your property damage',
      'No donation routing',
      'Often not licensed for hazardous waste',
      'Adds up to MORE than full-service when you include everything',
    ],
  },
]

const decisionRules = [
  {
    scenario: 'Single mattress or small furniture pickup',
    recommendation: 'Junk Removal',
    reasoning:
      'A single mattress is $150 with us. DIY costs $60 truck rental + $40 transfer station fee + $40 fuel + 4 hours of your time + the legally-required mattress plastic bag = ~$140 + 4 hours. You break even on dollars and pay 4 hours of your weekend.',
    color: 'ocean',
  },
  {
    scenario: 'Whole-house estate cleanout (4+ rooms)',
    recommendation: 'Junk Removal',
    reasoning:
      'Estate cleanouts have valuable items mixed with disposal items. Pros separate, document, route to donation, and handle the entire haul in 1-2 days. DIY estimates 40+ hours of labor across multiple trips.',
    color: 'ocean',
  },
  {
    scenario: 'Renovation debris over 4+ weeks',
    recommendation: 'Dumpster Rental + Junk Removal Hybrid',
    reasoning:
      'Rent a dumpster for active demo phase (drywall, lumber, flooring). Use junk removal for the appliances, cabinets, and anything the dumpster company will not take (refrigerants, paint, hazardous materials).',
    color: 'emerald',
  },
  {
    scenario: 'Saturday vacation rental turnover -- guest left junk',
    recommendation: 'Junk Removal',
    reasoning:
      'DIY is not an option on a Saturday with a 4 PM check-in. Junk removal handles same-day turnovers with photo confirmation for owner records. This is what we do every Saturday during peak season.',
    color: 'ocean',
  },
  {
    scenario: 'Single broken appliance (no truck, no help)',
    recommendation: 'Junk Removal',
    reasoning:
      'Refrigerators require EPA Section 608 refrigerant evacuation before disposal -- DIY is illegal without certification. Junk removal handles this start-to-finish for $150-200.',
    color: 'ocean',
  },
  {
    scenario: 'Hot tub removal',
    recommendation: 'Junk Removal (specialist)',
    reasoning:
      'Hot tubs cannot be dumpstered. DIY requires cutting (sawzall), draining (cannot go to stormwater), and disposal of the shell. A specialist crew handles it in 2-4 hours.',
    color: 'ocean',
  },
  {
    scenario: 'Garage cleanup -- lots of small items, plenty of free time',
    recommendation: 'DIY (if you have a truck)',
    reasoning:
      'If you already own a pickup, the disposal cost is just the transfer station fee. The labor is yours. This is the rare case where DIY makes math sense -- but only if you actually have the truck and the day to spare.',
    color: 'amber',
  },
  {
    scenario: 'Multi-day construction job site',
    recommendation: 'Dumpster Rental',
    reasoning:
      'Active job sites generate continuous debris over days/weeks. A 15-yard dumpster gives the crew somewhere to throw rubble all week. Junk removal is for the final scope clear at the end.',
    color: 'emerald',
  },
]

const faqs = [
  {
    question: 'Is junk removal worth it vs renting a dumpster?',
    answer:
      'For most residential cleanouts (single-day or weekend projects), full-service junk removal is cheaper than a dumpster when you account for the dumpster rental fee ($350-750), the time you spend loading, your fuel/labor, and the items dumpsters cannot accept (mattresses, refrigerants, paint, electronics). Dumpsters make sense only for active construction sites generating continuous debris over multiple days.',
  },
  {
    question: 'Is it cheaper to do it yourself than hire junk removal?',
    answer:
      'It depends on what you already own. If you have a pickup truck and the day to spare, DIY can be cheaper for small/light loads. For mattresses (legally require plastic bags in Florida), refrigerators (EPA Section 608 refrigerant rule), hot tubs (cannot go in dumpsters), or any 4+ hour project — full-service junk removal almost always wins on dollars-and-time math.',
  },
  {
    question: 'What is the cheapest way to get rid of junk in 30A?',
    answer:
      'For a single light item: text us photos for a $150 minimum service — we often beat any DIY math after fuel + dump fees. For a garage full of mixed items where you have a truck and help: DIY. For multi-day construction: dumpster rental + post-job junk removal for the items dumpsters cannot take.',
  },
  {
    question: 'Can I rent a dumpster on 30A?',
    answer:
      'Yes — Republic Services and Waste Pro both offer roll-off dumpsters on 30A. The complications: most HOAs (Alys, Rosemary, Seaside, WaterColor) prohibit street placement without a permit; driveway placement risks damage from skids and weight. Permits run $50-150 and take 5-7 days to issue.',
  },
  {
    question: 'Do you handle hazardous waste like paint and chemicals?',
    answer:
      'Paint, motor oil, batteries, pesticides, propane tanks, and other hazardous materials require special handling. We route these to the appropriate Walton or Bay County Household Hazardous Waste collection event. Standard junk removal does not include hazmat — but we coordinate the routing so you only deal with us, not multiple vendors.',
  },
]

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'Compare', url: 'https://www.30ajunkremoval.com/compare' },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Compare Options</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Junk Removal vs DIY vs Dumpster vs Handyman
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            Side-by-side comparison of your four real options for getting rid of junk in 30A and PCB. Real cost math, real time math, real recommendation by scenario.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="compare-hero-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="compare-hero-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Get a Quote First
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              The Four Real Options
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              For every junk removal job, you have four real choices. Here is the honest comparison.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {options.map((opt, idx) => {
              const Icon = opt.icon
              return (
                <article
                  key={idx}
                  className="bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-ocean-300 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${opt.color} text-white flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {opt.name}
                      </h3>
                      <p className="text-sm text-slate-600">{opt.summary}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-5 pb-5 border-b border-slate-100">
                    <div>
                      <div className="text-xs uppercase text-slate-500 font-semibold mb-1">
                        Cost Range
                      </div>
                      <div className="font-bold text-slate-900">{opt.cost}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase text-slate-500 font-semibold mb-1">
                        Time
                      </div>
                      <div className="font-bold text-slate-900">{opt.time}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase text-slate-500 font-semibold mb-1">
                        Your Labor
                      </div>
                      <div className="font-bold text-slate-900">{opt.labor}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase text-slate-500 font-semibold mb-1">
                        Fees
                      </div>
                      <div className="font-bold text-slate-900 text-xs">{opt.fees}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs uppercase text-ocean-700 font-semibold mb-2">
                      Best For
                    </div>
                    <p className="text-sm text-slate-700 font-medium">{opt.bestFor}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase text-emerald-700 font-semibold mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Pros
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {opt.pros.map((p, i) => (
                          <li key={i} className="flex gap-1.5">
                            <span className="text-emerald-600 shrink-0">+</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase text-rose-700 font-semibold mb-2">
                        <XCircle className="w-3.5 h-3.5" />
                        Cons
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {opt.cons.map((c, i) => (
                          <li key={i} className="flex gap-1.5">
                            <span className="text-rose-600 shrink-0">-</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Decision rules */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Which One for Your Situation?
            </h2>
            <p className="text-lg text-slate-600">
              Honest recommendations by scenario, not by what makes us the most money.
            </p>
          </div>
          <div className="space-y-4">
            {decisionRules.map((rule, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-[1fr_auto_2fr] gap-4 md:gap-6 items-start">
                  <div>
                    <div className="text-xs uppercase text-slate-500 font-semibold mb-1">
                      Scenario
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      {rule.scenario}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center text-slate-400">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-ocean-700 font-semibold mb-1">
                      Recommended
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                        rule.color === 'ocean'
                          ? 'bg-ocean-100 text-ocean-700'
                          : rule.color === 'emerald'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {rule.recommendation}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {rule.reasoning}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Florida-specific gotchas */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 border-2 border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Florida-Specific Gotchas
                </h2>
                <p className="text-slate-600">
                  Stuff DIY guides do not mention that will bite you on 30A and PCB.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-2">
                  Mattresses require plastic bags
                </h3>
                <p className="text-sm text-slate-700">
                  Florida transfer stations will refuse a mattress that is not sealed in a heavy-duty plastic bag (bedbug prevention rule). You can buy these at U-Haul for ~$15 or at the Walton transfer station entrance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-2">
                  Refrigerators / AC units require EPA Section 608
                </h3>
                <p className="text-sm text-slate-700">
                  Refrigerant must be evacuated by a Section 608-certified technician before disposal. DIY without a cert is a federal violation. Junk removal services with the certification handle this in-house.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-2">
                  Most 30A HOAs ban street-placed dumpsters
                </h3>
                <p className="text-sm text-slate-700">
                  Alys Beach, Rosemary Beach, Seaside, WaterColor, Watersound, and Sandestin all prohibit dumpsters on the street without an architectural review approval. Driveway-only placement risks damage. Some HOAs require an architectural review committee submission with a 7-14 day approval window.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-2">
                  Walton County transfer station hours
                </h3>
                <p className="text-sm text-slate-700">
                  The Walton County transfer station closes at 4 PM on weekdays and is closed Sundays. If you DIY on a Saturday and miss the window, your loaded truck sits over the weekend. Pros work around the schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-ocean-300 transition-colors"
              >
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg text-slate-900 flex items-center justify-between list-none">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center text-sm group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Save yourself the math
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Text us photos for an upfront price. From $150, all-in.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="compare-bottom-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="compare-bottom-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Text for a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

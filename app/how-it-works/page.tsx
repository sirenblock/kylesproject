import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  MessageSquare,
  Camera,
  Calendar,
  Truck,
  CreditCard,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from 'lucide-react'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// /how-it-works -- E-E-A-T process documentation page.
//
// Per senior-strategy-eeat skill: "Process documentation: ProcessSteps
// component showing the 4-step workflow" is an E-E-A-T Experience signal.
// This page targets informational queries like "how does junk removal work"
// and "how to schedule junk removal" while doubling as a trust-building
// surface for prospects researching providers.
//
// Per traffic-acquisition Play 1 hub-and-spoke: this page links to /services,
// /pricing, /contact, and /service-areas (the 4 money pages) creating
// another internal-link node feeding the link-equity pipeline.

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Our 5-step junk removal process: text photos, get a price, schedule, we haul, pay when done. Same-day service across 30A & PCB.',
  keywords: [
    'how does junk removal work',
    'junk removal process',
    'how to schedule junk removal 30A',
    'junk removal steps',
    'what happens during junk removal',
  ],
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/how-it-works',
  },
  openGraph: {
    title: 'How 30A Junk Removal Works — 5 Steps from Quote to Hauled',
    description:
      'Text photos, get a final price, schedule a slot, we haul, you pay. No surprises, no hidden fees, same-day available.',
    type: 'website',
  },
}

const steps = [
  {
    number: 1,
    title: 'Text Us Photos',
    icon: Camera,
    description:
      'Snap photos of what needs to go and text them to +1 (850) 368-3495. Capture pile size, item types, and any access notes (gate codes, parking, stairs). The more we see, the more accurate the quote.',
    detail: 'Most quotes happen within 10 minutes during business hours.',
    color: 'from-ocean-500 to-ocean-600',
  },
  {
    number: 2,
    title: 'Get an Upfront Price',
    icon: MessageSquare,
    description:
      'We text back a flat, all-inclusive price — labor, hauling, fuel, and disposal fees included. No "from $X" ranges. No surprise add-ons. If the price works, you reply yes and we schedule.',
    detail: 'Pricing starts at $150 minimum.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    number: 3,
    title: 'Schedule Same-Day or Pick a Time',
    icon: Calendar,
    description:
      'Choose same-day pickup (often within 2-4 hours) or schedule a future slot. Two-hour arrival windows. We text when we are 30 minutes out so you do not wait around.',
    detail: 'Saturday and after-hours slots reserved for property managers.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    number: 4,
    title: 'We Haul Everything',
    icon: Truck,
    description:
      'Our team arrives in a marked truck, confirms the inventory and price, and gets to work. We do all the lifting, navigate stairs, and protect floors and walls. Donation-quality items routed to local charities; the rest disposed of legally.',
    detail: 'Licensed and insured — your property is protected.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    number: 5,
    title: 'Pay When Done',
    icon: CreditCard,
    description:
      'You inspect the cleared space, sign off, and pay only after the work is done. Cash, card, Venmo, Zelle, or check. We text you a receipt and (for property managers) photo documentation for owner records.',
    detail: 'No deposits, no upfront charges, no surprises.',
    color: 'from-purple-500 to-purple-600',
  },
]

const trustPoints = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Most jobs scheduled within 2-4 hours of quote acceptance.',
  },
  {
    icon: Star,
    title: '4.9★ on 127+ Reviews',
    description: 'Independent Google and Facebook reviews across hundreds of jobs.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed &amp; Insured',
    description: 'General liability coverage protects your property during the haul.',
  },
  {
    icon: MapPin,
    title: 'Local 30A Crew',
    description: 'We live and work along 30A and PCB. We know the HOA gates and back routes.',
  },
]

const faqs = [
  {
    question: 'How quickly can you do same-day junk removal in 30A?',
    answer:
      'Most same-day requests are scheduled within 2-4 hours of quote acceptance during business hours (7 AM - 7 PM, 7 days/week). For property managers with recurring needs, we keep dedicated Saturday slots open year-round.',
  },
  {
    question: 'Do I need to be home for the junk removal?',
    answer:
      'No — many of our jobs happen without the customer present. For vacation rental turnovers and remote-owned beach properties, we coordinate gate codes, photo confirmation, and digital payment so you never have to travel for a haul.',
  },
  {
    question: 'What if you arrive and the price is different than the text quote?',
    answer:
      'Our photo quotes are accurate ~95% of the time. If you have additional items beyond what you texted, we will quote the additions on-site before starting work — you always know the total before we lift anything. If the on-site price changes by more than 10% from the photo quote, you can decline with no obligation.',
  },
  {
    question: 'How do I pay for junk removal?',
    answer:
      'You pay when the work is done and you have inspected the cleared space. We accept cash, all major credit cards, Venmo, Zelle, and check. Property managers can request 30-day net invoicing after the first job.',
  },
  {
    question: 'What happens to the junk after you haul it?',
    answer:
      'We sort by category: donation-quality items go to Habitat for Humanity ReStore, Salvation Army, or Goodwill (you get a donation receipt for tax purposes). Metals go to local scrap recyclers. Electronics go to certified e-waste recyclers. Yard debris to Walton or Bay County composting facilities. The remainder goes to the appropriate transfer station for the county where the job took place.',
  },
  {
    question: 'Do you do junk removal outside of business hours?',
    answer:
      'Yes — for property managers handling Saturday or Sunday turnovers, and for time-sensitive estate cleanouts, we accommodate after-hours pickups. Standard hours are 7 AM - 7 PM, 7 days/week. Sunday and after-7-PM pickups carry a small surcharge ($25-50).',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.30ajunkremoval.com' },
          { name: 'How It Works', url: 'https://www.30ajunkremoval.com/how-it-works' },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-ocean-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">How It Works</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            How 30A Junk Removal Works
          </h1>
          <p className="text-xl text-ocean-100 max-w-3xl mb-6 leading-relaxed">
            Five steps from text to hauled. Upfront pricing, no hidden fees, same-day service across 30A, Panama City Beach, Walton &amp; Bay Counties.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="how-it-works-hero-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="how-it-works-hero-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Text for a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start"
                >
                  <div
                    className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-ocean-600 uppercase tracking-wide">
                        Step {step.number}
                      </span>
                      {idx === steps.length - 1 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                          <CheckCircle className="w-3 h-3" />
                          Done
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-slate-500 italic">{step.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Why 30A Property Owners Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have been hauling junk along the Emerald Coast since 2018. Here is what consistency looks like.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, idx) => {
              const Icon = point.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: point.description }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Common Questions About Our Process
            </h2>
            <p className="text-lg text-slate-600">
              Still have questions? <Link href="/contact" className="text-ocean-600 hover:underline font-medium">Text us</Link> — we answer fast.
            </p>
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
                <div className="faq-answer px-6 pb-5 text-slate-700 leading-relaxed" data-speakable>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Text photos to {FORMATTED_PHONE} for an instant quote.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="how-it-works-bottom-phone"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              data-cta="how-it-works-bottom-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
            >
              Text for a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Internal link grid -- hub-and-spoke per link-equity skill */}
          <div className="mt-12 pt-12 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/services"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">All Services</div>
              <div className="text-sm text-ocean-200">31 services available</div>
            </Link>
            <Link
              href="/pricing"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Pricing</div>
              <div className="text-sm text-ocean-200">Upfront, no surprises</div>
            </Link>
            <Link
              href="/service-areas"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Service Areas</div>
              <div className="text-sm text-ocean-200">30A &amp; PCB communities</div>
            </Link>
            <Link
              href="/reviews"
              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <div className="font-bold mb-1">Reviews</div>
              <div className="text-sm text-ocean-200">4.9★ · 127+ reviews</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

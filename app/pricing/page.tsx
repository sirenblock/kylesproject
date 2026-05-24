import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { QuoteCalculator } from '@/components/sections/QuoteCalculator'
import { PricingTable } from '@/components/sections/PricingTable'
import { Phone, MessageCircle, Camera, CheckCircle, Clock, Truck, DollarSign, ArrowRight } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { PricingFAQSchema } from '@/components/seo/PagedSchemas'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

const pricingFaqs = [
  {
    question: 'How much does junk removal cost on 30A and Panama City Beach?',
    answer:
      'Junk removal pricing is volume-based: a quarter-truck load (single couch, dresser, or grill) starts at $150, half-truck (bedroom set) runs $300-$475, three-quarter truck (multi-room cleanout) runs $500-$700, and a full truck (large estate or full garage) runs $700-$900+. Specialty items like refrigerators with refrigerant, hot tubs, and hazardous materials carry surcharges. HOA-strict 30A communities (Alys Beach, Rosemary Beach, Sandestin, WaterSound) add 10-25% to standard pricing.',
  },
  {
    question: 'Are there any hidden fees in your pricing?',
    answer:
      'No — the price we quote is the price you pay. Pricing includes all labor, hauling, and disposal fees at the receiving facility. Surcharges for specialty items (refrigerator refrigerant recovery, hot tub disconnection, hazardous waste handling) are quoted upfront before service begins. Photo-quoted pricing means you know the cost before our crew arrives.',
  },
  {
    question: 'What is the minimum charge for junk removal?',
    answer:
      'Our minimum is $150 for a quarter-truck load. This covers items like a single couch, dresser, grill, or up to ~3 cubic yards of mixed debris. For single small items or very low volume, this is the floor price regardless of the actual load size.',
  },
  {
    question: 'Do you charge by item or by volume?',
    answer:
      'Junk removal pricing is volume-based — you pay for the space your items take up in our truck, not per item. This means a large bulky item priced as a quarter-truck can include additional smaller items at no additional cost up to the volume threshold. Specialty items (refrigerators, hot tubs, hazardous materials) carry separate surcharges due to special handling requirements.',
  },
  {
    question: 'Can I get a price quote without an in-person visit?',
    answer:
      'Yes. Text photos of your items to (850) 368-3495 along with the property address and we will respond with a quote within 30 minutes during business hours (7 days a week, 7am-6pm). For non-routine items (hot tubs, swim spas, construction debris, hurricane debris), photo-quoted pricing is the standard — and the quote we provide is the price you pay on service day.',
  },
  {
    question: 'Do you accept credit cards or other payment methods?',
    answer:
      'Yes, we accept all major credit cards, debit cards, cash, and check. Payment is typically collected at job completion. Property management companies on preferred-vendor agreements receive weekly invoicing with net-15 payment terms instead of point-of-service payment.',
  },
  {
    question: 'How much does it cost to remove a hot tub or large appliance?',
    answer:
      'Hot tub removal in 30A and PCB typically runs $350-$1,200 depending on size, access, and location-within-30A factors. Refrigerator removal (including EPA-required refrigerant recovery) runs $150-$250 for full-size units. Washer/dryer/dishwasher disposal runs $100-$150 each. Window AC units run $75-$125 each. See our detailed hot tub removal cost breakdown and refrigerator/appliance disposal guides for the full pricing analysis.',
  },
  {
    question: 'Are there discounts for property managers or larger jobs?',
    answer:
      'Yes — property management companies with 15+ units typically negotiate preferred-vendor agreements with 8-15% volume discounts, guaranteed Saturday same-day SLA during peak season, photo documentation per job, weekly invoicing, and net-15 payment terms. Larger operations (50+ units) sometimes negotiate exclusive-vendor agreements with 15-25% discounts and dedicated peak-weekend capacity. See our property manager playbook for the full agreement patterns.',
  },
]

export const metadata: Metadata = {
  title: 'Pricing | 30A Junk Removal',
  description: 'Transparent junk removal pricing for 30A. From $150 for 1/4 truck to full estate cleanouts. Get an instant quote online or text us photos for construction debris.',
  alternates: {
    canonical: getCanonicalUrl('/pricing'),
  },
}

export default function PricingPage() {
  const internalLinks = getContextualLinks('core', '/pricing')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative -mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
              <Clock className="w-4 h-4" />
              Same-Day Service Available
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-ocean-100 mb-8">
              No hidden fees. No surprises. Just honest pricing for quality <Link href="/services" className="text-white hover:text-seafoam-200 underline font-medium">junk removal</Link> services throughout <Link href="/service-areas" className="text-white hover:text-seafoam-200 underline font-medium">30A</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Text for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-white border-b border-sand-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">No Hidden Fees</h3>
              <p className="text-sm text-slate-600">What we quote is what you pay</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-100 text-seafoam-600 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Fast Service</h3>
              <p className="text-sm text-slate-600">Same-day appointments available</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-100 text-ocean-600 mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">All-Inclusive</h3>
              <p className="text-sm text-slate-600">Labor, hauling & disposal included</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam-100 text-seafoam-600 mb-3">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1">Volume-Based</h3>
              <p className="text-sm text-slate-600">You only pay for space used</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Quote Calculator */}
      <QuoteCalculator />

      {/* Banner Image - Junk Removal Truck */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12 max-w-5xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&h=500&fit=crop"
              alt="Professional junk removal truck ready for affordable pickup service on 30A Florida"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* What's Included & Construction Debris */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-sand-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-ocean-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">What's Included</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">All Labor</span>
                    <p className="text-sm text-slate-600">We do 100% of the heavy lifting</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Loading & Hauling</span>
                    <p className="text-sm text-slate-600">Transport to <a href="https://www.epa.gov/recycle/recycling-basics-and-benefits" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">proper facilities</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Eco-Friendly Disposal</span>
                    <p className="text-sm text-slate-600"><Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">Proper disposal</Link> and <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">recycling</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Cleanup Service</span>
                    <p className="text-sm text-slate-600">We sweep and tidy the removal area</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Photo Documentation</span>
                    <p className="text-sm text-slate-600">Before & after photos on request</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Donation Coordination</span>
                    <p className="text-sm text-slate-600">Items to <a href="https://www.goodwill.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Goodwill</a> & <a href="https://www.habitat.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Habitat for Humanity</a></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Construction Debris */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 shadow-md border-2 border-gold-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Camera className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Construction Debris</h2>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                <Link href="/services/construction-debris" className="text-ocean-600 hover:underline font-semibold">Construction materials</Link> require custom quotes due to weight-based disposal fees. Renovating in <Link href="/service-areas/rosemary-beach" className="text-ocean-600 hover:underline font-medium">Rosemary Beach</Link> or <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>? Get your quote fast:
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction debris removal.`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-gold-400 hover:bg-gold-50 hover:border-gold-500 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Text Us Photos</p>
                    <p className="text-sm text-slate-600">Get quote in 30 minutes</p>
                  </div>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-gold-400 hover:bg-gold-50 hover:border-gold-500 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Call {FORMATTED_PHONE}</p>
                    <p className="text-sm text-slate-600">Discuss your project</p>
                  </div>
                </a>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-gold-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Common materials:</span> Drywall, tile, lumber, concrete, roofing, flooring, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Image - 30A Home */}
      <section className="py-12 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12 max-w-5xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=500&fit=crop"
              alt="Beautiful 30A Florida home with clean exterior after professional junk removal service"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Pricing FAQs (visible Q&A + JSON-LD schema for FAQ rich results) */}
      <PricingFAQSchema faqs={pricingFaqs} />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
            Pricing Questions Answered
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            The questions we hear most often about junk removal pricing on 30A and PCB.
          </p>
          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-sand-50 border border-sand-200 rounded-xl p-6 hover:border-ocean-300 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-slate-900 list-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 w-6 h-6 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center text-slate-600">
            Still have questions? Check our <Link href="/faq" className="text-ocean-600 hover:underline font-medium">general FAQ</Link>, see our <Link href="/blog/junk-removal-cost-30a-2026-pricing-guide" className="text-ocean-600 hover:underline font-medium">2026 pricing deep dive</Link>, or <Link href="/contact" className="text-ocean-600 hover:underline font-medium">contact us</Link> directly.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            We serve from <Link href="/service-areas/inlet-beach" className="text-white hover:text-seafoam-200 underline font-medium">Inlet Beach</Link> to <Link href="/service-areas/grayton-beach" className="text-white hover:text-seafoam-200 underline font-medium">Grayton Beach</Link> and across <Link href="/service-areas/panama-city-beach" className="text-white hover:text-seafoam-200 underline font-medium">Panama City Beach</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
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

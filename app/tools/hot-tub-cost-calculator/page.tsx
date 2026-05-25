'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Phone, ArrowRight, Info, MessageCircle } from 'lucide-react'

// Note: Metadata can't be exported from client components -- this page's
// metadata is set via the parent route segment's static metadata file.

interface CalculationInputs {
  size: 'small' | 'medium' | 'large' | 'xlarge'
  access: 'easy' | 'moderate' | 'difficult' | 'crane'
  community: 'standard' | 'gated' | 'strict'
  drained: 'yes' | 'no'
  disconnected: 'yes' | 'no'
}

const SIZE_BASE = {
  small: { low: 350, high: 500, label: '2-3 person (≤250 gal)' },
  medium: { low: 450, high: 650, label: '4-5 person (300-400 gal)' },
  large: { low: 550, high: 800, label: '6-7 person (400-500 gal)' },
  xlarge: { low: 700, high: 1500, label: '8+ person / swim spa (600+ gal)' },
}

const ACCESS_ADJUSTMENT = {
  easy: { delta: 0, label: 'Ground level, truck within 30 ft' },
  moderate: { delta: 100, label: 'Ground level, 50-75 ft haul / gate' },
  difficult: { delta: 300, label: 'Set into deck or hardscape' },
  crane: { delta: 500, label: '2nd-floor balcony / rooftop' },
}

const COMMUNITY_ADJUSTMENT = {
  standard: { mult: 1.0, label: 'Standard (most 30A & PCB neighborhoods)' },
  gated: { mult: 1.08, label: 'Gated community (Sandestin, WaterSound)' },
  strict: { mult: 1.18, label: 'Strict HOA (Alys Beach, Rosemary Beach)' },
}

const DRAIN_DISCOUNT = -75
const ELECTRICAL_DISCOUNT = -50

export default function HotTubCostCalculatorPage() {
  const [inputs, setInputs] = useState<CalculationInputs>({
    size: 'medium',
    access: 'easy',
    community: 'standard',
    drained: 'no',
    disconnected: 'no',
  })

  const base = SIZE_BASE[inputs.size]
  const accessAdj = ACCESS_ADJUSTMENT[inputs.access].delta
  const communityMult = COMMUNITY_ADJUSTMENT[inputs.community].mult
  const drainDisc = inputs.drained === 'yes' ? DRAIN_DISCOUNT : 0
  const elecDisc = inputs.disconnected === 'yes' ? ELECTRICAL_DISCOUNT : 0

  const low = Math.round((base.low + accessAdj) * communityMult + drainDisc + elecDisc)
  const high = Math.round((base.high + accessAdj) * communityMult + drainDisc + elecDisc)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="-mt-24 pt-32 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <Calculator className="w-4 h-4" />
              Interactive Cost Tool
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hot Tub Removal Cost Calculator
            </h1>
            <p className="text-xl text-ocean-100">
              Estimate your hot tub removal cost in 30A or Panama City Beach in under 60 seconds. Adjust the inputs to see how size, access, and community type affect pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 md:py-16 bg-sand-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-sand-200 shadow-lg p-6 md:p-10">
            <div className="space-y-8">
              {/* Size */}
              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  1. Hot tub size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(Object.keys(SIZE_BASE) as Array<keyof typeof SIZE_BASE>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setInputs({ ...inputs, size: key })}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        inputs.size === key
                          ? 'border-ocean-500 bg-ocean-50'
                          : 'border-sand-200 bg-white hover:border-ocean-300'
                      }`}
                    >
                      <div className="font-semibold text-slate-900 capitalize">
                        {key === 'xlarge' ? 'Extra Large' : key}
                      </div>
                      <div className="text-sm text-slate-600">{SIZE_BASE[key].label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Access */}
              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  2. Access difficulty
                </label>
                <div className="space-y-2">
                  {(Object.keys(ACCESS_ADJUSTMENT) as Array<keyof typeof ACCESS_ADJUSTMENT>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setInputs({ ...inputs, access: key })}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                        inputs.access === key
                          ? 'border-ocean-500 bg-ocean-50'
                          : 'border-sand-200 bg-white hover:border-ocean-300'
                      }`}
                    >
                      <span>
                        <span className="font-semibold text-slate-900 capitalize">{key}</span>
                        <span className="text-sm text-slate-600 ml-2">— {ACCESS_ADJUSTMENT[key].label}</span>
                      </span>
                      {ACCESS_ADJUSTMENT[key].delta > 0 && (
                        <span className="text-sm font-medium text-slate-500">
                          +${ACCESS_ADJUSTMENT[key].delta}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  3. Community type
                </label>
                <div className="space-y-2">
                  {(Object.keys(COMMUNITY_ADJUSTMENT) as Array<keyof typeof COMMUNITY_ADJUSTMENT>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setInputs({ ...inputs, community: key })}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                        inputs.community === key
                          ? 'border-ocean-500 bg-ocean-50'
                          : 'border-sand-200 bg-white hover:border-ocean-300'
                      }`}
                    >
                      <span>
                        <span className="font-semibold text-slate-900 capitalize">{key}</span>
                        <span className="text-sm text-slate-600 ml-2">— {COMMUNITY_ADJUSTMENT[key].label}</span>
                      </span>
                      {COMMUNITY_ADJUSTMENT[key].mult > 1 && (
                        <span className="text-sm font-medium text-slate-500">
                          +{Math.round((COMMUNITY_ADJUSTMENT[key].mult - 1) * 100)}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prep credits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-slate-900 mb-2">
                    4. Drained?
                    <span className="ml-2 text-xs font-normal text-emerald-600">
                      Save $75 if yes
                    </span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['no', 'yes'] as const).map((key) => (
                      <button
                        key={key}
                        onClick={() => setInputs({ ...inputs, drained: key })}
                        className={`p-3 rounded-xl border-2 capitalize font-semibold transition-all ${
                          inputs.drained === key
                            ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                            : 'border-sand-200 bg-white text-slate-700 hover:border-ocean-300'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-base font-semibold text-slate-900 mb-2">
                    5. Electrical disconnected?
                    <span className="ml-2 text-xs font-normal text-emerald-600">
                      Save $50 if yes
                    </span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['no', 'yes'] as const).map((key) => (
                      <button
                        key={key}
                        onClick={() => setInputs({ ...inputs, disconnected: key })}
                        className={`p-3 rounded-xl border-2 capitalize font-semibold transition-all ${
                          inputs.disconnected === key
                            ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                            : 'border-sand-200 bg-white text-slate-700 hover:border-ocean-300'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="mt-10 p-8 bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-2xl text-white text-center shadow-lg">
              <div className="text-sm font-medium text-ocean-200 uppercase tracking-wide mb-2">
                Estimated Cost Range
              </div>
              <div className="text-5xl md:text-6xl font-black mb-2">
                ${low}-${high}
              </div>
              <div className="text-sm text-ocean-200 mt-3">
                All-inclusive: labor, hauling, disposal, and refrigerant recovery if applicable.
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-sand-100 rounded-lg flex gap-3 items-start text-sm text-slate-700">
              <Info className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" />
              <div>
                This is an estimate based on typical jobs in 30A and PCB. Final pricing is confirmed via photo quote before the crew arrives. Text photos to <a href="tel:+18503683495" className="text-ocean-600 underline font-medium">(850) 368-3495</a> for a 30-minute confirmed quote.
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+18503683495"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                Call (850) 368-3495
              </a>
              <a
                href="sms:+18503683495"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ocean-600 text-white rounded-xl font-bold hover:bg-ocean-700 transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Text Photos for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            How the Calculator Works
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            This calculator reflects actual 30A and PCB hot tub removal pricing based on jobs completed by 30A Junk Removal in 2025-2026. The base rate is set by tub size (water volume and weight drives crew time and disposal cost). Access difficulty modifies the rate based on how far our crew has to hand-truck dismantled sections from the tub location to the truck. Community type accounts for HOA-coordination overhead and vendor-authorization requirements at gated and strict-aesthetic communities. The prep credits ($75 for pre-drained, $50 for pre-disconnected electrical) save crew time you can claim by doing the prep yourself the day before.
          </p>
          <p className="text-slate-700 mb-6 leading-relaxed">
            For the complete cost analysis — what drives quotes from $350 to $1,200+, DIY vs. professional cost comparison, and the photo-quote workflow — see our{' '}
            <Link href="/blog/hot-tub-removal-cost-30a-pricing-breakdown" className="text-ocean-600 hover:underline font-medium">
              hot tub removal cost breakdown
            </Link>
            . For the operational process — what happens during the actual removal — see the{' '}
            <Link href="/blog/hot-tub-removal-30a-complete-guide" className="text-ocean-600 hover:underline font-medium">
              complete hot tub removal guide
            </Link>
            . The dedicated{' '}
            <Link href="/services/hot-tub-removal" className="text-ocean-600 hover:underline font-medium">
              hot tub removal service
            </Link>{' '}
            page covers what&apos;s included.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
            What&apos;s Included in the Quoted Price
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Electrical disconnection</strong> at the disconnect box (homeowner can do this in advance for the $50 credit)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Drain and water removal</strong> (200-500 gallons; homeowner can pre-drain for the $75 credit)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Mechanical dismantling</strong> — cover removal, panel separation, plumbing disconnection</span>
            </li>
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Sawing into transportable sections</strong> (most tubs don&apos;t fit through standard gates whole)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Hauling</strong> to the disposal/recycling facility</span>
            </li>
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Disposal and recycling fees</strong> at the receiving facility</span>
            </li>
            <li className="flex gap-3">
              <span className="text-ocean-600">✓</span>
              <span><strong>Final site sweep</strong> — no debris left behind</span>
            </li>
          </ul>

          <div className="mt-12 text-center">
            <Link
              href="/services/hot-tub-removal"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors"
            >
              See Hot Tub Removal Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

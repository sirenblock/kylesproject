'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Phone, ArrowRight, Info, MessageCircle } from 'lucide-react'

interface CalculationInputs {
  volume: 'quarter' | 'half' | 'three-quarter' | 'full'
  community: 'standard' | 'gated' | 'strict' | 'pcb-high-rise'
  urgency: 'standard' | 'next-day' | 'same-day' | 'weekend-peak'
  specialItems: number
}

const VOLUME_BASE = {
  quarter: {
    low: 150,
    high: 275,
    label: 'Quarter truck',
    desc: 'Single couch, dresser, or grill (3 cu yd)',
  },
  half: {
    low: 300,
    high: 525,
    label: 'Half truck',
    desc: 'Bedroom set or moderate cleanout (6 cu yd)',
  },
  'three-quarter': {
    low: 500,
    high: 750,
    label: 'Three-quarter truck',
    desc: 'Multi-room cleanout (9 cu yd)',
  },
  full: {
    low: 700,
    high: 1100,
    label: 'Full truck',
    desc: 'Large estate or hurricane debris (12+ cu yd)',
  },
}

const COMMUNITY_ADJ = {
  standard: { mult: 1.0, label: 'Standard 30A/PCB neighborhood' },
  gated: { mult: 1.08, label: 'Gated community (Sandestin, WaterSound)' },
  strict: { mult: 1.18, label: 'Strict HOA (Alys Beach, Rosemary Beach, Seaside)' },
  'pcb-high-rise': { mult: 1.12, label: 'PCB high-rise condo (service elevator)' },
}

const URGENCY_ADJ = {
  standard: { delta: 0, label: 'Standard scheduling (3-7 days out)' },
  'next-day': { delta: 0, label: 'Next-day service' },
  'same-day': { delta: 50, label: 'Same-day service (book by 11 AM)' },
  'weekend-peak': { delta: 100, label: 'Saturday peak season (March-August)' },
}

const SPECIAL_ITEM_COST = 75 // per specialty item (refrigerator, hot tub, hazmat)

export default function JunkRemovalCostCalculatorPage() {
  const [inputs, setInputs] = useState<CalculationInputs>({
    volume: 'half',
    community: 'standard',
    urgency: 'standard',
    specialItems: 0,
  })

  const base = VOLUME_BASE[inputs.volume]
  const commMult = COMMUNITY_ADJ[inputs.community].mult
  const urgencyDelta = URGENCY_ADJ[inputs.urgency].delta
  const specialDelta = inputs.specialItems * SPECIAL_ITEM_COST

  const low = Math.round(base.low * commMult + urgencyDelta + specialDelta)
  const high = Math.round(base.high * commMult + urgencyDelta + specialDelta)

  return (
    <main className="min-h-screen">
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
              Junk Removal Cost Calculator
            </h1>
            <p className="text-xl text-ocean-100">
              Get an instant cost estimate for junk removal anywhere in 30A or Panama City Beach. Adjust the inputs to see how volume, community, urgency, and specialty items affect pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-sand-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-sand-200 shadow-lg p-6 md:p-10">
            <div className="space-y-8">
              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  1. Volume
                </label>
                <div className="space-y-2">
                  {(Object.keys(VOLUME_BASE) as Array<keyof typeof VOLUME_BASE>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setInputs({ ...inputs, volume: key })}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        inputs.volume === key
                          ? 'border-ocean-500 bg-ocean-50'
                          : 'border-sand-200 bg-white hover:border-ocean-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-900">{VOLUME_BASE[key].label}</div>
                          <div className="text-sm text-slate-600">{VOLUME_BASE[key].desc}</div>
                        </div>
                        <div className="text-sm font-medium text-slate-500 hidden sm:block">
                          ${VOLUME_BASE[key].low}-${VOLUME_BASE[key].high}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  2. Property type / Community
                </label>
                <div className="space-y-2">
                  {(Object.keys(COMMUNITY_ADJ) as Array<keyof typeof COMMUNITY_ADJ>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setInputs({ ...inputs, community: key })}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                        inputs.community === key
                          ? 'border-ocean-500 bg-ocean-50'
                          : 'border-sand-200 bg-white hover:border-ocean-300'
                      }`}
                    >
                      <span className="text-slate-900 font-medium">{COMMUNITY_ADJ[key].label}</span>
                      {COMMUNITY_ADJ[key].mult > 1 && (
                        <span className="text-sm font-medium text-slate-500">
                          +{Math.round((COMMUNITY_ADJ[key].mult - 1) * 100)}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  3. Urgency / Timing
                </label>
                <div className="space-y-2">
                  {(Object.keys(URGENCY_ADJ) as Array<keyof typeof URGENCY_ADJ>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setInputs({ ...inputs, urgency: key })}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                        inputs.urgency === key
                          ? 'border-ocean-500 bg-ocean-50'
                          : 'border-sand-200 bg-white hover:border-ocean-300'
                      }`}
                    >
                      <span className="text-slate-900 font-medium">{URGENCY_ADJ[key].label}</span>
                      {URGENCY_ADJ[key].delta > 0 && (
                        <span className="text-sm font-medium text-slate-500">
                          +${URGENCY_ADJ[key].delta}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-slate-900 mb-3">
                  4. Specialty items (refrigerators, hot tubs, hazardous waste)
                  <span className="ml-2 text-sm font-normal text-slate-600">
                    +$75 each
                  </span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setInputs({ ...inputs, specialItems: Math.max(0, inputs.specialItems - 1) })
                    }
                    className="w-12 h-12 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-700 text-xl font-bold transition-colors"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center bg-sand-50 rounded-xl py-3 border border-sand-200">
                    <div className="text-2xl font-bold text-slate-900">{inputs.specialItems}</div>
                    <div className="text-xs text-slate-600">
                      {inputs.specialItems === 0
                        ? 'No specialty items'
                        : `${inputs.specialItems} specialty item${inputs.specialItems !== 1 ? 's' : ''}`}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setInputs({ ...inputs, specialItems: Math.min(5, inputs.specialItems + 1) })
                    }
                    className="w-12 h-12 rounded-xl bg-ocean-100 hover:bg-ocean-200 text-ocean-700 text-xl font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-2xl text-white text-center shadow-lg">
              <div className="text-sm font-medium text-ocean-200 uppercase tracking-wide mb-2">
                Estimated Cost Range
              </div>
              <div className="text-5xl md:text-6xl font-black mb-2">
                ${low}-${high}
              </div>
              <div className="text-sm text-ocean-200 mt-3">
                All-inclusive: labor, hauling, disposal fees. Specialty handling included for selected items.
              </div>
            </div>

            <div className="mt-6 p-4 bg-sand-100 rounded-lg flex gap-3 items-start text-sm text-slate-700">
              <Info className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" />
              <div>
                This is an estimate based on typical jobs. For precise pricing, text photos to{' '}
                <a href="tel:+18503683495" className="text-ocean-600 underline font-medium">
                  (850) 368-3495
                </a>
                . Photo-quoted prices are confirmed and locked before service begins.
              </div>
            </div>

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

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            How Pricing Works
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Junk removal pricing in 30A and Panama City Beach is{' '}
            <strong>volume-based</strong> — you pay for the space your items take up in our truck,
            not per individual item. This is industry standard and the fairest approach for
            both customers and crews. Specialty items (refrigerators with refrigerant, hot tubs,
            hazardous waste) carry separate surcharges due to special handling requirements.
          </p>
          <p className="text-slate-700 mb-6 leading-relaxed">
            <strong>Community type matters</strong> because strict-HOA neighborhoods like Alys
            Beach and Rosemary Beach require vendor pre-authorization, interior staging, and
            careful workmanship — all of which adds operational overhead. PCB high-rise condos
            add service-elevator scheduling and loading dock coordination. Standard 30A and PCB
            neighborhoods (Santa Rosa Beach, Inlet Beach, Lynn Haven, etc.) operate at base rates.
          </p>
          <p className="text-slate-700 mb-6 leading-relaxed">
            <strong>Urgency surcharges</strong> apply only to same-day or peak-season Saturday work.
            Standard scheduling 3-7 days out runs at base rates. For complete details on what
            drives pricing in each category, see our{' '}
            <Link
              href="/blog/junk-removal-cost-30a-2026-pricing-guide"
              className="text-ocean-600 hover:underline font-medium"
            >
              2026 pricing deep dive
            </Link>{' '}
            and the dedicated{' '}
            <Link
              href="/tools/hot-tub-cost-calculator"
              className="text-ocean-600 hover:underline font-medium"
            >
              hot tub cost calculator
            </Link>{' '}
            for that specific service category.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
            Volume Tier Reference
          </h2>
          <div className="space-y-3 text-slate-700">
            <div className="bg-sand-50 p-4 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">
                Quarter Truck — $150-$275
              </div>
              <div className="text-sm">
                Single couch, dresser, grill, mattress, single appliance. About 3 cubic yards of
                volume. This is our minimum pricing tier.
              </div>
            </div>
            <div className="bg-sand-50 p-4 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">
                Half Truck — $300-$525
              </div>
              <div className="text-sm">
                Complete bedroom set (bed + dresser + nightstands), moderate single-room cleanout,
                small garage cleanup. About 6 cubic yards.
              </div>
            </div>
            <div className="bg-sand-50 p-4 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">
                Three-Quarter Truck — $500-$750
              </div>
              <div className="text-sm">
                Multi-room cleanout (living room + bedroom set + accumulated items), full garage
                cleanout, moderate estate work. About 9 cubic yards.
              </div>
            </div>
            <div className="bg-sand-50 p-4 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">
                Full Truck — $700-$1,100+
              </div>
              <div className="text-sm">
                Complete property clearance, large estate cleanouts, hurricane debris, multi-room
                furniture replacement projects. 12+ cubic yards.
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-xl font-semibold hover:bg-ocean-700 transition-colors"
            >
              See All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

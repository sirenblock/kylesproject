'use client'

import { useState } from 'react'
// Animations removed for performance
import Link from 'next/link'
import { ChevronDown, Camera, MessageCircle, HelpCircle, Truck, Check, Sparkles } from 'lucide-react'
import { standardPricing, FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

const pricingRows = [
  {
    volume: '1/4 Truck',
    range: `$${standardPricing.quarter.min}-$${standardPricing.quarter.max}`,
    perfectFor: 'Single couch OR Dresser OR Grill',
    fill: 25,
  },
  {
    volume: '1/2 Truck',
    range: `$${standardPricing.half.min}-$${standardPricing.half.max}`,
    perfectFor: 'Bedroom furniture OR Multiple appliances',
    fill: 50,
  },
  {
    volume: '3/4 Truck',
    range: `$${standardPricing.threeQuarter.min}-$${standardPricing.threeQuarter.max}`,
    perfectFor: 'Living room OR Garage cleanout',
    fill: 75,
  },
  {
    volume: 'Full Truck',
    range: `$${standardPricing.full.min}-$${standardPricing.full.max}`,
    perfectFor: 'Full garage OR Multiple rooms',
    fill: 100,
  },
  {
    volume: 'Renovation Debris',
    range: '$600-$1,200+',
    perfectFor: 'Construction materials - Custom quote*',
    isConstruction: true,
    fill: 100,
  },
]

const constructionExamples = [
  { type: 'Kitchen Renovation', range: '$600-$800' },
  { type: 'Bathroom Renovation', range: '$600-$750' },
  { type: 'Full Room Gut', range: '$800-$1,200+' },
  { type: 'Deck/Fence Removal', range: '$500-$900' },
]

export function PricingTable() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sand-50 via-white to-sand-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-seafoam-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-4"
          >
            <Check className="w-4 h-4" />
            No Hidden Fees
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800"
          >
            Volume-Based{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-seafoam-500">
              Pricing Guide
            </span>
          </h2>
          <p
            className="mt-4 text-lg md:text-xl text-slate-600"
          >
            No surprises. Just honest pricing based on truck volume.
          </p>
        </div>

        {/* Desktop Pricing Table */}
        <div
          className="hidden md:block"
        >
          <div className="relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ocean-400 via-seafoam-400 to-ocean-400 rounded-3xl opacity-20 blur-sm" />

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-sand-100">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="col-span-3 px-6 py-5 font-semibold flex items-center gap-2">
                  <Truck className="w-5 h-5 text-ocean-400" />
                  Volume
                </div>
                <div className="col-span-3 px-6 py-5 font-semibold">Price Range</div>
                <div className="col-span-4 px-6 py-5 font-semibold">Perfect For</div>
                <div className="col-span-2 px-6 py-5 font-semibold text-center">Fill</div>
              </div>

              {/* Table Rows */}
              {pricingRows.map((row, index) => (
                <div
                  key={row.volume}
                  className={`grid grid-cols-12 items-center transition-colors hover:bg-sand-50/80 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-sand-50/50'
                  } ${row.isConstruction ? 'bg-gradient-to-r from-gold-50 to-amber-50 border-t-2 border-gold-200 hover:from-gold-100 hover:to-amber-100' : ''}`}
                >
                  <div className="col-span-3 px-6 py-5 font-semibold text-slate-800">{row.volume}</div>
                  <div
                    className={`col-span-3 px-6 py-5 font-bold text-xl ${
                      row.isConstruction ? 'text-gold-600' : 'text-ocean-600'
                    }`}
                  >
                    {row.range}
                  </div>
                  <div className="col-span-4 px-6 py-5 text-slate-600">{row.perfectFor}</div>
                  <div className="col-span-2 px-6 py-5">
                    <div className="w-full h-3 bg-sand-200 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${row.fill}%` }}
                        className={`h-full rounded-full ${
                          row.isConstruction
                            ? 'bg-gradient-to-r from-gold-400 to-amber-500'
                            : 'bg-gradient-to-r from-ocean-400 to-seafoam-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Pricing Cards */}
        <div
          className="md:hidden space-y-4"
        >
          {pricingRows.map((row, index) => (
            <div
              key={row.volume}
              className={`relative rounded-2xl p-5 border-2 overflow-hidden ${
                row.isConstruction
                  ? 'border-gold-300 bg-gradient-to-br from-gold-50 to-amber-50'
                  : 'border-sand-200 bg-white'
              }`}
            >
              {/* Fill indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1">
                <div
                  style={{ width: `${row.fill}%` }}
                  className={`h-full ${
                    row.isConstruction
                      ? 'bg-gradient-to-r from-gold-400 to-amber-500'
                      : 'bg-gradient-to-r from-ocean-400 to-seafoam-500'
                  }`}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Truck className={`w-4 h-4 ${row.isConstruction ? 'text-gold-500' : 'text-ocean-500'}`} />
                    <h3 className="font-bold text-slate-800">{row.volume}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{row.perfectFor}</p>
                </div>
                <div className={`text-right`}>
                  <p className={`text-2xl font-bold ${row.isConstruction ? 'text-gold-600' : 'text-ocean-600'}`}>
                    {row.range.split('-')[0]}
                  </p>
                  <p className="text-xs text-slate-400">
                    to {row.range.split('-')[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Construction Debris Accordion */}
        <div
          className="mt-6 bg-white rounded-xl shadow-md border border-gold-200 overflow-hidden"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gold-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gold-500" />
              <span className="font-semibold text-slate-800">
                Why different pricing for construction debris?
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          
            {isExpanded && (
              <div
                className="border-t border-gold-200"
              >
                <div className="px-6 py-4 space-y-4">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                      Heavier materials = weight-based disposal fees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                      Different materials need different facilities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                      We sort and recycle to keep costs down
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-sand-200">
                    <h3 className="font-semibold text-slate-800 mb-3">Common Examples:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {constructionExamples.map((example) => (
                        <div
                          key={example.type}
                          className="flex justify-between items-center px-4 py-2 bg-gold-50 rounded-lg"
                        >
                          <span className="text-sm text-slate-600">{example.type}</span>
                          <span className="text-sm font-semibold text-gold-600">
                            {example.range}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sand-200">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction debris removal.`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-600 transition-colors"
                      >
                        <Camera className="w-5 h-5" />
                        Text Photos for Quote
                      </a>
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gold-300 text-gold-700 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Call {FORMATTED_PHONE}
                      </a>
                    </div>
                    <p className="mt-3 text-center text-sm text-slate-500">
                      Get an exact quote in 30 minutes!
                    </p>
                  </div>
                </div>
              </div>
            )}
          
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Your Instant Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

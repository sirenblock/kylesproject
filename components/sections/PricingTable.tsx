'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Camera, MessageCircle, HelpCircle } from 'lucide-react'
import { standardPricing, FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

const pricingRows = [
  {
    volume: '1/4 Truck',
    range: `$${standardPricing.quarter.min}-$${standardPricing.quarter.max}`,
    perfectFor: 'Single couch OR Dresser OR Grill',
  },
  {
    volume: '1/2 Truck',
    range: `$${standardPricing.half.min}-$${standardPricing.half.max}`,
    perfectFor: 'Bedroom furniture OR Multiple appliances',
  },
  {
    volume: '3/4 Truck',
    range: `$${standardPricing.threeQuarter.min}-$${standardPricing.threeQuarter.max}`,
    perfectFor: 'Living room OR Garage cleanout',
  },
  {
    volume: 'Full Truck',
    range: `$${standardPricing.full.min}-$${standardPricing.full.max}`,
    perfectFor: 'Full garage OR Multiple rooms',
  },
  {
    volume: 'Renovation Debris',
    range: '$600-$1,200+',
    perfectFor: 'Construction materials - Custom quote*',
    isConstruction: true,
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
    <section className="py-20 bg-sand-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            No hidden fees. No surprises. Just honest pricing.
          </motion.p>
        </div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sand-200"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-slate-800 text-white">
            <div className="px-6 py-4 font-semibold">Volume</div>
            <div className="px-6 py-4 font-semibold">Price Range</div>
            <div className="px-6 py-4 font-semibold">Perfect For</div>
          </div>

          {/* Table Rows */}
          {pricingRows.map((row, index) => (
            <div
              key={row.volume}
              className={`grid grid-cols-3 ${
                index % 2 === 0 ? 'bg-white' : 'bg-sand-50'
              } ${row.isConstruction ? 'bg-gold-50 border-t-2 border-gold-200' : ''}`}
            >
              <div className="px-6 py-4 font-medium text-slate-800">{row.volume}</div>
              <div
                className={`px-6 py-4 font-semibold ${
                  row.isConstruction ? 'text-gold-600' : 'text-ocean-600'
                }`}
              >
                {row.range}
              </div>
              <div className="px-6 py-4 text-slate-600">{row.perfectFor}</div>
            </div>
          ))}
        </motion.div>

        {/* Construction Debris Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
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
                    <h4 className="font-semibold text-slate-800 mb-3">Common Examples:</h4>
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

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

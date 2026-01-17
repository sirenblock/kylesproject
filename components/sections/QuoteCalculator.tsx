'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Truck,
  Sofa,
  Refrigerator,
  Bed,
  Tv,
  Package,
  Umbrella,
  Flame,
  TreeDeciduous,
  Waves,
  Hammer,
  Camera,
  MessageCircle,
  ArrowRight,
  Check,
  AlertCircle,
  Upload,
} from 'lucide-react'
import {
  cn,
  standardPricing,
  householdItems,
  outdoorItems,
  constructionItemsList,
  calculateEstimate,
  FORMATTED_PHONE,
  PHONE_NUMBER,
  type VolumeLevel,
} from '@/lib/utils'

const volumeOptions: { value: VolumeLevel; label: string; description: string; fill: number }[] = [
  { value: 'quarter', label: '1/4 Truck', description: 'Single couch OR Dresser OR Grill', fill: 25 },
  { value: 'half', label: '1/2 Truck', description: 'Bedroom furniture OR Multiple appliances', fill: 50 },
  { value: 'threeQuarter', label: '3/4 Truck', description: 'Living room OR Garage cleanout', fill: 75 },
  { value: 'full', label: 'Full Truck', description: 'Full garage OR Multiple rooms', fill: 100 },
]

const itemIcons: Record<string, typeof Sofa> = {
  furniture: Sofa,
  appliances: Refrigerator,
  mattress: Bed,
  electronics: Tv,
  general: Package,
  patio: Umbrella,
  grill: Flame,
  yard: TreeDeciduous,
  hottub: Waves,
  drywall: Hammer,
  flooring: Hammer,
  cabinets: Hammer,
  lumber: Hammer,
  concrete: Hammer,
  mixed: Hammer,
}

type TabType = 'volume' | 'items'

export function QuoteCalculator() {
  const [activeTab, setActiveTab] = useState<TabType>('volume')
  const [selectedVolume, setSelectedVolume] = useState<VolumeLevel | null>(null)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [showBookingForm, setShowBookingForm] = useState(false)

  const estimate = useMemo(() => {
    if (activeTab === 'volume' && selectedVolume) {
      return calculateEstimate([], selectedVolume)
    }
    if (activeTab === 'items' && selectedItems.length > 0) {
      return calculateEstimate(selectedItems)
    }
    return null
  }, [activeTab, selectedVolume, selectedItems])

  const fillPercentage = useMemo((): number => {
    if (activeTab === 'volume' && selectedVolume) {
      return volumeOptions.find(v => v.value === selectedVolume)?.fill ?? 0
    }
    if (estimate && 'volumePercentage' in estimate && typeof estimate.volumePercentage === 'number') {
      return estimate.volumePercentage
    }
    return 0
  }, [activeTab, selectedVolume, estimate])

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const hasConstructionItems = selectedItems.some(id =>
    constructionItemsList.some(item => item.id === id)
  )

  return (
    <section id="quote" className="py-20 bg-gradient-to-b from-white to-sand-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            Get Your Instant Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            How much junk do you have?
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-sand-200 overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-sand-200">
            <button
              onClick={() => {
                setActiveTab('volume')
                setSelectedItems([])
              }}
              className={cn(
                "flex-1 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === 'volume'
                  ? "bg-ocean-50 text-ocean-600 border-b-2 border-ocean-600"
                  : "text-slate-600 hover:bg-sand-50"
              )}
            >
              Select by Volume
            </button>
            <button
              onClick={() => {
                setActiveTab('items')
                setSelectedVolume(null)
              }}
              className={cn(
                "flex-1 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === 'items'
                  ? "bg-ocean-50 text-ocean-600 border-b-2 border-ocean-600"
                  : "text-slate-600 hover:bg-sand-50"
              )}
            >
              Select by Items
            </button>
          </div>

          <div className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Selection Area */}
              <div>
                <AnimatePresence mode="wait">
                  {activeTab === 'volume' ? (
                    <motion.div
                      key="volume"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      {volumeOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSelectedVolume(option.value)}
                          className={cn(
                            "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                            selectedVolume === option.value
                              ? "border-ocean-500 bg-ocean-50"
                              : "border-sand-200 hover:border-ocean-300 hover:bg-sand-50"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                selectedVolume === option.value
                                  ? "border-ocean-500 bg-ocean-500"
                                  : "border-sand-300"
                              )}
                            >
                              {selectedVolume === option.value && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800">
                                {option.label}
                              </span>
                              <p className="text-sm text-slate-500 mt-0.5">
                                {option.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-ocean-600 font-semibold">
                            ${standardPricing[option.value].min}-${standardPricing[option.value].max}
                          </span>
                        </button>
                      ))}

                      {/* Construction Debris Option */}
                      <button
                        onClick={() => {
                          setActiveTab('items')
                          setSelectedVolume(null)
                        }}
                        className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gold-400 bg-gold-400/10 transition-all text-left hover:bg-gold-400/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-5 h-5 rounded-full border-2 border-gold-400 flex items-center justify-center">
                            <Hammer className="w-3 h-3 text-gold-600" />
                          </div>
                          <div>
                            <span className="font-semibold text-slate-800">
                              Renovation/Construction Debris
                            </span>
                            <p className="text-sm text-slate-500 mt-0.5">
                              Custom quote required
                            </p>
                          </div>
                        </div>
                        <span className="text-gold-600 font-semibold">
                          $600-$1,200+
                        </span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="items"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      {/* Household Items */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                          Household Items
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {householdItems.map((item) => {
                            const Icon = itemIcons[item.id] || Package
                            const isSelected = selectedItems.includes(item.id)
                            return (
                              <button
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left",
                                  isSelected
                                    ? "border-ocean-500 bg-ocean-50"
                                    : "border-sand-200 hover:border-ocean-300"
                                )}
                              >
                                <Icon
                                  className={cn(
                                    "w-5 h-5 shrink-0",
                                    isSelected ? "text-ocean-600" : "text-slate-400"
                                  )}
                                />
                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    isSelected ? "text-ocean-700" : "text-slate-600"
                                  )}
                                >
                                  {item.name}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Outdoor Items */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                          Outdoor / Yard
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {outdoorItems.map((item) => {
                            const Icon = itemIcons[item.id] || Package
                            const isSelected = selectedItems.includes(item.id)
                            return (
                              <button
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left",
                                  isSelected
                                    ? "border-ocean-500 bg-ocean-50"
                                    : "border-sand-200 hover:border-ocean-300"
                                )}
                              >
                                <Icon
                                  className={cn(
                                    "w-5 h-5 shrink-0",
                                    isSelected ? "text-ocean-600" : "text-slate-400"
                                  )}
                                />
                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    isSelected ? "text-ocean-700" : "text-slate-600"
                                  )}
                                >
                                  {item.name}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Construction Items */}
                      <div>
                        <h4 className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Construction / Renovation
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {constructionItemsList.map((item) => {
                            const Icon = itemIcons[item.id] || Hammer
                            const isSelected = selectedItems.includes(item.id)
                            return (
                              <button
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left",
                                  isSelected
                                    ? "border-gold-500 bg-gold-50"
                                    : "border-gold-200 hover:border-gold-300 bg-gold-50/50"
                                )}
                              >
                                <Icon
                                  className={cn(
                                    "w-5 h-5 shrink-0",
                                    isSelected ? "text-gold-600" : "text-gold-400"
                                  )}
                                />
                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    isSelected ? "text-gold-700" : "text-slate-600"
                                  )}
                                >
                                  {item.name}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right: Truck Visualization & Quote */}
              <div className="flex flex-col">
                {/* Truck Visualization */}
                <div className="flex-1 flex flex-col items-center justify-center bg-sand-50 rounded-xl p-6 mb-6">
                  <div className="relative w-full max-w-xs aspect-[3/2]">
                    {/* Truck Bed Outline */}
                    <div className="absolute inset-0 border-4 border-slate-300 rounded-lg bg-white">
                      {/* Fill Level */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${fillPercentage}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={cn(
                          "absolute bottom-0 left-0 right-0 rounded-b-md",
                          hasConstructionItems
                            ? "bg-gradient-to-t from-gold-400 to-gold-300"
                            : "bg-gradient-to-t from-ocean-500 to-ocean-300"
                        )}
                      />
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between p-1 pointer-events-none">
                        <div className="border-b border-dashed border-slate-200 opacity-50" />
                        <div className="border-b border-dashed border-slate-200 opacity-50" />
                        <div className="border-b border-dashed border-slate-200 opacity-50" />
                        <div />
                      </div>
                    </div>
                    {/* Truck Icon */}
                    <div className="absolute -bottom-1 -right-8">
                      <Truck className="w-16 h-16 text-slate-400 transform -scale-x-100" />
                    </div>
                    {/* Labels */}
                    <div className="absolute -left-8 inset-y-0 flex flex-col justify-between text-xs text-slate-400 py-1">
                      <span>Full</span>
                      <span>3/4</span>
                      <span>1/2</span>
                      <span>1/4</span>
                    </div>
                  </div>

                  {/* Fill Percentage Text */}
                  <p className="mt-4 text-sm text-slate-500">
                    {fillPercentage > 0 ? (
                      <>Estimated: <span className="font-semibold text-slate-700">{fillPercentage}%</span> of truck bed</>
                    ) : (
                      "Select items or volume to see estimate"
                    )}
                  </p>
                </div>

                {/* Quote Display */}
                <AnimatePresence mode="wait">
                  {estimate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={cn(
                        "rounded-xl p-6 text-center",
                        estimate.requiresCustomQuote
                          ? "bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-300"
                          : "bg-gradient-to-br from-ocean-50 to-seafoam-50 border-2 border-ocean-200"
                      )}
                    >
                      <p className="text-sm font-medium text-slate-600 mb-2">
                        Your Estimate
                      </p>
                      <p
                        className={cn(
                          "text-4xl font-bold",
                          estimate.requiresCustomQuote ? "text-gold-600" : "text-ocean-600"
                        )}
                      >
                        {estimate.range}
                      </p>

                      {estimate.requiresCustomQuote ? (
                        <>
                          <p className="mt-3 text-sm text-slate-600">
                            {estimate.message}
                          </p>
                          <div className="mt-4 space-y-3">
                            <a
                              href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction/renovation debris removal. Here are the details:`}
                              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-600 transition-colors"
                            >
                              <MessageCircle className="w-5 h-5" />
                              Text Photos for Exact Quote
                            </a>
                            <button className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white border-2 border-gold-300 text-gold-700 rounded-lg font-medium hover:bg-gold-50 transition-colors">
                              <Upload className="w-5 h-5" />
                              Upload Photos
                            </button>
                          </div>
                          <p className="mt-4 text-xs text-slate-500">
                            Why custom pricing? Heavy materials like concrete, tile, and drywall have weight-based disposal fees. We'll give you the most accurate price.
                          </p>
                        </>
                      ) : (
                        <div className="mt-4">
                          <button
                            onClick={() => setShowBookingForm(true)}
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-md hover:shadow-lg"
                          >
                            Book Now
                            <ArrowRight className="w-5 h-5" />
                          </button>
                          <a
                            href={`sms:${PHONE_NUMBER}?body=Hi! I'm interested in junk removal. My estimate was ${estimate.range}.`}
                            className="block mt-3 text-sm text-ocean-600 hover:text-ocean-700"
                          >
                            Or text us for questions
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!estimate && (
                  <div className="rounded-xl p-6 text-center bg-sand-100 border-2 border-dashed border-sand-300">
                    <p className="text-slate-500">
                      Select your items or volume level to see pricing
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phone CTA */}
        <div className="mt-8 text-center">
          <p className="text-slate-600">
            Prefer to talk?{' '}
            <a href={`tel:${PHONE_NUMBER}`} className="text-ocean-600 font-semibold hover:text-ocean-700">
              Call {FORMATTED_PHONE}
            </a>
            {' '}or{' '}
            <a href={`sms:${PHONE_NUMBER}`} className="text-ocean-600 font-semibold hover:text-ocean-700">
              text us anytime
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

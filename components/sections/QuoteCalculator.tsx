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
  MessageCircle,
  ArrowRight,
  Check,
  AlertCircle,
  Upload,
  Sparkles,
  Phone,
  Zap,
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
  { value: 'quarter', label: '1/4 Truck', description: 'Single couch, dresser, or grill', fill: 25 },
  { value: 'half', label: '1/2 Truck', description: 'Bedroom set or multiple appliances', fill: 50 },
  { value: 'threeQuarter', label: '3/4 Truck', description: 'Living room or garage cleanout', fill: 75 },
  { value: 'full', label: 'Full Truck', description: 'Full garage or multiple rooms', fill: 100 },
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

// 3D Truck Bed Visualization Component
function TruckVisualization({ fillPercentage, isConstruction }: { fillPercentage: number; isConstruction: boolean }) {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* 3D perspective container */}
      <div className="relative" style={{ perspective: '1000px' }}>
        {/* Truck bed with 3D effect */}
        <div
          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(10deg)',
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl" />

          {/* Inner bed shadow */}
          <div className="absolute inset-2 rounded-lg bg-gradient-to-b from-slate-300/50 to-transparent" />

          {/* Truck bed container */}
          <div className="absolute inset-3 bg-white rounded-lg shadow-inner overflow-hidden border-4 border-slate-300">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />

            {/* Fill level with animated gradient */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${fillPercentage}%` }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute bottom-0 left-0 right-0"
            >
              <div
                className={cn(
                  "absolute inset-0",
                  isConstruction
                    ? "bg-gradient-to-t from-gold-500 via-gold-400 to-gold-300"
                    : "bg-gradient-to-t from-ocean-600 via-ocean-400 to-seafoam-300"
                )}
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer" />
              {/* Bubbles/particles effect */}
              {fillPercentage > 0 && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={cn(
                        "absolute w-2 h-2 rounded-full",
                        isConstruction ? "bg-gold-200/50" : "bg-white/40"
                      )}
                      style={{ left: `${20 + i * 15}%` }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Level markers */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-2">
              {['Full', '3/4', '1/2', '1/4'].map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className="w-full border-b border-dashed border-slate-200" />
                  <span className="absolute -left-8 text-xs text-slate-400 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Truck cab */}
          <div className="absolute -right-2 bottom-2 w-16 h-20">
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 w-full h-16 bg-gradient-to-r from-slate-400 to-slate-500 rounded-r-lg shadow-lg" />
              <div className="absolute bottom-2 right-1 w-10 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-tr-lg" />
              <div className="absolute bottom-4 right-2 w-6 h-4 bg-ocean-200/50 rounded-sm" />
              {/* Wheel */}
              <div className="absolute -bottom-1 right-2 w-6 h-6 bg-slate-700 rounded-full border-2 border-slate-500" />
            </div>
          </div>

          {/* Front wheel */}
          <div className="absolute -left-1 -bottom-1 w-6 h-6 bg-slate-700 rounded-full border-2 border-slate-500" />
        </div>
      </div>

      {/* Percentage display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 text-center"
      >
        {fillPercentage > 0 ? (
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <div className={cn(
              "w-3 h-3 rounded-full animate-pulse",
              isConstruction ? "bg-gold-500" : "bg-ocean-500"
            )} />
            <span className="text-slate-600">
              Estimated: <span className={cn(
                "font-bold text-lg",
                isConstruction ? "text-gold-600" : "text-ocean-600"
              )}>{fillPercentage}%</span> of truck bed
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand-100 text-slate-500">
            <Sparkles className="w-4 h-4" />
            <span>Select items to see your estimate</span>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export function QuoteCalculator() {
  const [activeTab, setActiveTab] = useState<TabType>('volume')
  const [selectedVolume, setSelectedVolume] = useState<VolumeLevel | null>(null)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

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
    <section id="quote" className="py-16 md:py-24 bg-gradient-to-b from-white via-sand-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-seafoam-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            Instant Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800"
          >
            Get Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-seafoam-500">
              Instant Quote
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            How much junk do you have? Get your price in seconds.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Main card with gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-ocean-400 via-seafoam-400 to-ocean-400 rounded-3xl opacity-20 blur-sm" />
          <div className="relative bg-white rounded-3xl shadow-2xl border border-sand-100 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-sand-200 bg-sand-50/50">
              <button
                onClick={() => {
                  setActiveTab('volume')
                  setSelectedItems([])
                }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-6 py-5 text-sm md:text-base font-semibold transition-all relative",
                  activeTab === 'volume'
                    ? "text-ocean-600 bg-white"
                    : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                )}
              >
                <Truck className="w-5 h-5" />
                <span>Select by Volume</span>
                {activeTab === 'volume' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean-400 to-seafoam-400"
                  />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveTab('items')
                  setSelectedVolume(null)
                }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-6 py-5 text-sm md:text-base font-semibold transition-all relative",
                  activeTab === 'items'
                    ? "text-ocean-600 bg-white"
                    : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                )}
              >
                <Package className="w-5 h-5" />
                <span>Select by Items</span>
                {activeTab === 'items' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean-400 to-seafoam-400"
                  />
                )}
              </button>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: Selection Area */}
                <div>
                  <AnimatePresence mode="wait">
                    {activeTab === 'volume' ? (
                      <motion.div
                        key="volume"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-4"
                      >
                        {volumeOptions.map((option, index) => (
                          <motion.button
                            key={option.value}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedVolume(option.value)}
                            className={cn(
                              "w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 transition-all text-left group",
                              selectedVolume === option.value
                                ? "border-ocean-500 bg-gradient-to-r from-ocean-50 to-seafoam-50 shadow-lg shadow-ocean-100"
                                : "border-sand-200 hover:border-ocean-300 hover:bg-sand-50 hover:shadow-md"
                            )}
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={cn(
                                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                  selectedVolume === option.value
                                    ? "border-ocean-500 bg-ocean-500 scale-110"
                                    : "border-sand-300 group-hover:border-ocean-300"
                                )}
                              >
                                {selectedVolume === option.value && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500 }}
                                  >
                                    <Check className="w-4 h-4 text-white" />
                                  </motion.div>
                                )}
                              </div>
                              <div>
                                <span className="font-bold text-slate-800 text-lg">
                                  {option.label}
                                </span>
                                <p className="text-sm text-slate-500 mt-0.5">
                                  {option.description}
                                </p>
                              </div>
                            </div>
                            <span className={cn(
                              "text-lg font-bold transition-colors",
                              selectedVolume === option.value ? "text-ocean-600" : "text-slate-400 group-hover:text-ocean-500"
                            )}>
                              ${standardPricing[option.value].min}-${standardPricing[option.value].max}
                            </span>
                          </motion.button>
                        ))}

                        {/* Construction Debris Option */}
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          onClick={() => {
                            setActiveTab('items')
                            setSelectedVolume(null)
                          }}
                          className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 border-gold-300 bg-gradient-to-r from-gold-50 to-amber-50 transition-all text-left hover:shadow-lg hover:shadow-gold-100 group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full border-2 border-gold-400 bg-gold-100 flex items-center justify-center">
                              <Hammer className="w-3.5 h-3.5 text-gold-600" />
                            </div>
                            <div>
                              <span className="font-bold text-slate-800 text-lg">
                                Renovation Debris
                              </span>
                              <p className="text-sm text-slate-500 mt-0.5">
                                Custom quote for construction materials
                              </p>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-gold-600">
                            $600+
                          </span>
                        </motion.button>
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
                          <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-ocean-500" />
                            Household Items
                          </h4>
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            {householdItems.map((item) => {
                              const Icon = itemIcons[item.id] || Package
                              const isSelected = selectedItems.includes(item.id)
                              return (
                                <motion.button
                                  key={item.id}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => toggleItem(item.id)}
                                  className={cn(
                                    "flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 transition-all text-left",
                                    isSelected
                                      ? "border-ocean-500 bg-ocean-50 shadow-md shadow-ocean-100"
                                      : "border-sand-200 hover:border-ocean-300 hover:bg-sand-50"
                                  )}
                                >
                                  <div className={cn(
                                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                    isSelected ? "bg-ocean-500" : "bg-sand-100"
                                  )}>
                                    <Icon
                                      className={cn(
                                        "w-5 h-5",
                                        isSelected ? "text-white" : "text-slate-400"
                                      )}
                                    />
                                  </div>
                                  <span
                                    className={cn(
                                      "text-sm font-semibold",
                                      isSelected ? "text-ocean-700" : "text-slate-600"
                                    )}
                                  >
                                    {item.name}
                                  </span>
                                </motion.button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Outdoor Items */}
                        <div>
                          <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-seafoam-500" />
                            Outdoor / Yard
                          </h4>
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            {outdoorItems.map((item) => {
                              const Icon = itemIcons[item.id] || Package
                              const isSelected = selectedItems.includes(item.id)
                              return (
                                <motion.button
                                  key={item.id}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => toggleItem(item.id)}
                                  className={cn(
                                    "flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 transition-all text-left",
                                    isSelected
                                      ? "border-seafoam-500 bg-seafoam-50 shadow-md shadow-seafoam-100"
                                      : "border-sand-200 hover:border-seafoam-300 hover:bg-sand-50"
                                  )}
                                >
                                  <div className={cn(
                                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                    isSelected ? "bg-seafoam-500" : "bg-sand-100"
                                  )}>
                                    <Icon
                                      className={cn(
                                        "w-5 h-5",
                                        isSelected ? "text-white" : "text-slate-400"
                                      )}
                                    />
                                  </div>
                                  <span
                                    className={cn(
                                      "text-sm font-semibold",
                                      isSelected ? "text-seafoam-700" : "text-slate-600"
                                    )}
                                  >
                                    {item.name}
                                  </span>
                                </motion.button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Construction Items */}
                        <div>
                          <h4 className="text-sm font-bold text-gold-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Construction / Renovation
                          </h4>
                          <div className="grid grid-cols-2 gap-2 md:gap-3">
                            {constructionItemsList.map((item) => {
                              const Icon = itemIcons[item.id] || Hammer
                              const isSelected = selectedItems.includes(item.id)
                              return (
                                <motion.button
                                  key={item.id}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => toggleItem(item.id)}
                                  className={cn(
                                    "flex items-center gap-3 p-3 md:p-4 rounded-xl border-2 transition-all text-left",
                                    isSelected
                                      ? "border-gold-500 bg-gold-50 shadow-md shadow-gold-100"
                                      : "border-gold-200 hover:border-gold-300 bg-gold-50/30"
                                  )}
                                >
                                  <div className={cn(
                                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                    isSelected ? "bg-gold-500" : "bg-gold-100"
                                  )}>
                                    <Icon
                                      className={cn(
                                        "w-5 h-5",
                                        isSelected ? "text-white" : "text-gold-500"
                                      )}
                                    />
                                  </div>
                                  <span
                                    className={cn(
                                      "text-sm font-semibold",
                                      isSelected ? "text-gold-700" : "text-slate-600"
                                    )}
                                  >
                                    {item.name}
                                  </span>
                                </motion.button>
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
                  <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-sand-50 to-white rounded-2xl p-6 md:p-8 mb-6 border border-sand-100">
                    <TruckVisualization
                      fillPercentage={fillPercentage}
                      isConstruction={hasConstructionItems}
                    />
                  </div>

                  {/* Quote Display */}
                  <AnimatePresence mode="wait">
                    {estimate && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className={cn(
                          "rounded-2xl p-6 md:p-8 text-center relative overflow-hidden",
                          estimate.requiresCustomQuote
                            ? "bg-gradient-to-br from-gold-50 via-amber-50 to-gold-100"
                            : "bg-gradient-to-br from-ocean-50 via-seafoam-50 to-ocean-100"
                        )}
                      >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />

                        <div className="relative">
                          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            Your Estimate
                          </p>
                          <motion.p
                            key={estimate.range}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={cn(
                              "text-5xl md:text-6xl font-bold",
                              estimate.requiresCustomQuote ? "text-gold-600" : "text-ocean-600"
                            )}
                          >
                            {estimate.range}
                          </motion.p>

                          {estimate.requiresCustomQuote ? (
                            <>
                              <p className="mt-4 text-sm text-slate-600 max-w-sm mx-auto">
                                {estimate.message}
                              </p>
                              <div className="mt-6 space-y-3">
                                <a
                                  href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction debris removal.`}
                                  className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-amber-500 text-white rounded-xl font-bold shadow-lg shadow-gold-200 hover:shadow-xl hover:shadow-gold-300 transition-all btn-shine"
                                >
                                  <MessageCircle className="w-5 h-5" />
                                  Text Photos for Exact Quote
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <button className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white border-2 border-gold-300 text-gold-700 rounded-xl font-semibold hover:bg-gold-50 transition-colors">
                                  <Upload className="w-5 h-5" />
                                  Upload Photos
                                </button>
                              </div>
                            </>
                          ) : (
                            <div className="mt-6">
                              <a
                                href={`sms:${PHONE_NUMBER}?body=Hi! I'd like to book junk removal. My estimate was ${estimate.range}.`}
                                className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-ocean-500 to-seafoam-500 text-white rounded-xl font-bold shadow-lg shadow-ocean-200 hover:shadow-xl hover:shadow-ocean-300 transition-all btn-shine"
                              >
                                Book Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </a>
                              <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="flex items-center justify-center gap-2 mt-3 text-sm text-ocean-600 hover:text-ocean-700 font-medium"
                              >
                                <Phone className="w-4 h-4" />
                                Or call {FORMATTED_PHONE}
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!estimate && (
                    <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-sand-50 to-sand-100 border-2 border-dashed border-sand-300">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sand-200 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-sand-400" />
                      </div>
                      <p className="text-slate-500 font-medium">
                        Select items or volume to see your price
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phone CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 rounded-full glass">
            <span className="text-slate-600">Prefer to talk?</span>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-500 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {FORMATTED_PHONE}
            </a>
            <span className="text-slate-400 hidden sm:inline">or</span>
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ocean-500 text-ocean-600 rounded-full font-semibold hover:bg-ocean-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Text Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

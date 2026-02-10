'use client'

import React, { useState, useMemo } from 'react'
// Animations removed for performance
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
import PhotoUpload from '@/components/ui/PhotoUpload'

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

type TabType = 'volume' | 'items'

// Simplified Truck Bed Visualization Component with React.memo
const TruckVisualization = React.memo(({ fillPercentage, isConstruction }: { fillPercentage: number; isConstruction: boolean }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Simple 2D truck bed visualization */}
      <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 p-4">
        {/* Truck bed container */}
        <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden border-4 border-slate-300">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Fill level with simple animation */}
          <div
%` }}
            className={cn(
              "absolute bottom-0 left-0 right-0",
              isConstruction
                ? "bg-gradient-to-t from-gold-500 via-gold-400 to-gold-300"
                : "bg-gradient-to-t from-ocean-600 via-ocean-400 to-seafoam-300"
            )}
          />

          {/* Level markers */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-2">
            {['Full', '3/4', '1/2', '1/4'].map((label) => (
              <div key={label} className="flex items-center">
                <div className="w-full border-b border-dashed border-slate-200" />
                <span className="absolute -left-8 text-xs text-slate-400 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Simple truck cab icon */}
        <div className="absolute -right-2 bottom-4 w-12 h-16 bg-gradient-to-r from-slate-400 to-slate-500 rounded-r-lg shadow-lg">
          <div className="absolute bottom-2 right-1 w-8 h-6 bg-slate-600 rounded-tr-lg" />
          <div className="absolute bottom-3 right-2 w-4 h-3 bg-ocean-200/50 rounded-sm" />
          <div className="absolute -bottom-1 right-2 w-5 h-5 bg-slate-700 rounded-full border-2 border-slate-500" />
        </div>

        {/* Front wheel */}
        <div className="absolute -left-1 bottom-3 w-5 h-5 bg-slate-700 rounded-full border-2 border-slate-500" />
      </div>

      {/* Percentage display */}
      <div className="mt-6 text-center">
        {fillPercentage > 0 ? (
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <div className={cn(
              "w-3 h-3 rounded-full",
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
      </div>
    </div>
  )
})

export function QuoteCalculator() {
  const [activeTab, setActiveTab] = useState<TabType>('volume')
  const [selectedVolume, setSelectedVolume] = useState<VolumeLevel | null>(null)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [photos, setPhotos] = useState<string[]>([])
  const [showPhotoUpload, setShowPhotoUpload] = useState(false)
  const [isSubmittingPhotos, setIsSubmittingPhotos] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmitWithPhotos = async () => {
    setIsSubmittingPhotos(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Photo Quote Request',
          email: '30apcbjunkremoval@gmail.com',
          phone: '0000000000',
          serviceType: 'construction',
          message: `Construction debris quote request with ${photos.length} photos. Estimate: ${estimate?.range || 'N/A'}. Items: ${selectedItems.join(', ') || 'N/A'}`,
          photos: photos,
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          setSubmitSuccess(false)
          setShowPhotoUpload(false)
          setPhotos([])
        }, 3000)
      } else {
        alert('Failed to submit. Please try texting photos instead.')
    } catch (error) {
      console.error('Submit error:', error)
      alert('Failed to submit. Please try texting photos instead.')
    } finally {
      setIsSubmittingPhotos(false)

  const estimate = useMemo(() => {
    if (activeTab === 'volume' && selectedVolume) {
      return calculateEstimate([], selectedVolume)
    if (activeTab === 'items' && selectedItems.length > 0) {
      return calculateEstimate(selectedItems)
    return null
  }, [activeTab, selectedVolume, selectedItems])

  const fillPercentage = useMemo((): number => {
    if (activeTab === 'volume' && selectedVolume) {
      return volumeOptions.find(v => v.value === selectedVolume)?.fill ?? 0
    if (estimate && 'volumePercentage' in estimate && typeof estimate.volumePercentage === 'number') {
      return estimate.volumePercentage
    return 0
  }, [activeTab, selectedVolume, estimate])

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )

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
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            Instant Pricing
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800"
          >
            Get Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-seafoam-500">
              Instant Quote
            </span>
          </h2>
          <p
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            How much junk do you have? Get your price in seconds.
          </p>
        </div>

        <div
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
                  <div

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
                  <div

                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean-400 to-seafoam-400"
                  />
                )}
              </button>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: Selection Area */}
                <div>
                  
                    {activeTab === 'volume' ? (
                      <div
                        key="volume"
                        className="space-y-4"
                      >
                        {volumeOptions.map((option, index) => (
                          <button
                            key={option.value}
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
                                  <div
                                  >
                                    <Check className="w-4 h-4 text-white" />
                                  </div>
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
                          </button>
                        ))}

                        {/* Construction Debris Option */}
                        <button
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
                        </button>
                      </div>
                    ) : (
                      <div
                        key="items"
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
                                <button
                                  key={item.id}
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
                                </button>
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
                                <button
                                  key={item.id}
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
                                </button>
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
                                <button
                                  key={item.id}
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
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  
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
                  
                    {estimate && (
                      <div
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
                          <p
                            key={estimate.range}
                            className={cn(
                              "text-5xl md:text-6xl font-bold",
                              estimate.requiresCustomQuote ? "text-gold-600" : "text-ocean-600"
                            )}
                          >
                            {estimate.range}
                          </p>

                          {estimate.requiresCustomQuote ? (
                            <>
                              <p className="mt-4 text-sm text-slate-600 max-w-sm mx-auto">
                                {estimate.message}
                              </p>

                              {!showPhotoUpload ? (
                                <div className="mt-6 space-y-3">
                                  <button
                                    onClick={() => setShowPhotoUpload(true)}
                                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-amber-500 text-white rounded-xl font-bold shadow-lg shadow-gold-200 hover:shadow-xl hover:shadow-gold-300 transition-all btn-shine"
                                  >
                                    <Upload className="w-5 h-5" />
                                    Upload Photos for Exact Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                  </button>
                                  <a
                                    href={`sms:${PHONE_NUMBER}?body=Hi! I need a quote for construction debris removal.`}
                                    className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-white border-2 border-gold-300 text-gold-700 rounded-xl font-semibold hover:bg-gold-50 transition-colors"
                                  >
                                    <MessageCircle className="w-5 h-5" />
                                    Or Text Photos
                                  </a>
                                </div>
                              ) : (
                                <div className="mt-6 space-y-4">
                                  <PhotoUpload
                                    onPhotosChange={setPhotos}
                                    maxPhotos={5}
                                    maxSizeMB={5}
                                  />
                                  {photos.length > 0 && !submitSuccess && (
                                    <button
                                      onClick={handleSubmitWithPhotos}
                                      disabled={isSubmittingPhotos}
                                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gold-500 to-amber-500 text-white rounded-xl font-bold shadow-lg shadow-gold-200 hover:shadow-xl hover:shadow-gold-300 transition-all btn-shine disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                      {isSubmittingPhotos ? (
                                        <>
                                          <div
                                          >
                                            <Zap className="w-5 h-5" />
                                          </div>
                                          Sending Photos...
                                        </>
                                      ) : (
                                        <>
                                          <Check className="w-5 h-5" />
                                          Request Quote with Photos
                                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                      )}
                                    </button>
                                  )}
                                  {submitSuccess && (
                                    <div className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-seafoam-500 text-white rounded-xl font-bold">
                                      <Check className="w-5 h-5" />
                                      Photos sent! We'll contact you soon.
                                    </div>
                                  )}
                                </div>
                              )}
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
                      </div>
                    )}
                  

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
        </div>

        {/* Phone CTA */}
        <div
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
        </div>
      </div>
    </section>
  )

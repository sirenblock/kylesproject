import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Pricing configuration
export const standardPricing = {
  quarter: { min: 150, max: 200, label: "1/4 Truck", description: "Single couch, dresser, or grill" },
  half: { min: 250, max: 325, label: "1/2 Truck", description: "Bedroom furniture or multiple appliances" },
  threeQuarter: { min: 350, max: 425, label: "3/4 Truck", description: "Living room or garage cleanout" },
  full: { min: 425, max: 500, label: "Full Truck", description: "Full garage or multiple rooms" },
} as const

export const constructionPricing = {
  min: 600,
  max: 1200,
  label: "Renovation Debris",
  description: "Construction materials - Custom quote"
}

export const constructionItems = [
  'drywall',
  'sheetrock',
  'tile',
  'flooring',
  'cabinets',
  'fixtures',
  'lumber',
  'wood',
  'concrete',
  'masonry',
  'hardwood',
  'carpet'
] as const

export const householdItems = [
  { id: 'furniture', name: 'Furniture', description: 'Couch, chairs, tables, dressers', volumeWeight: 0.25 },
  { id: 'appliances', name: 'Appliances', description: 'Fridge, washer, dryer, stove', volumeWeight: 0.20 },
  { id: 'mattress', name: 'Mattresses & Box Springs', description: 'Any size mattress', volumeWeight: 0.15 },
  { id: 'electronics', name: 'Electronics & TVs', description: 'TVs, computers, electronics', volumeWeight: 0.10 },
  { id: 'general', name: 'General Household', description: 'Misc household items', volumeWeight: 0.10 },
] as const

export const outdoorItems = [
  { id: 'patio', name: 'Patio Furniture', description: 'Outdoor tables, chairs, umbrellas', volumeWeight: 0.20 },
  { id: 'grill', name: 'Grills & Equipment', description: 'Grills, outdoor equipment', volumeWeight: 0.15 },
  { id: 'yard', name: 'Yard Debris', description: 'Branches, leaves, yard waste', volumeWeight: 0.20 },
  { id: 'hottub', name: 'Hot Tubs', description: 'Hot tub removal', volumeWeight: 0.50 },
] as const

export const constructionItemsList = [
  { id: 'drywall', name: 'Drywall & Sheetrock', description: 'Drywall, sheetrock panels', isConstruction: true },
  { id: 'flooring', name: 'Flooring', description: 'Tile, hardwood, carpet', isConstruction: true },
  { id: 'cabinets', name: 'Cabinets & Fixtures', description: 'Kitchen/bath cabinets, fixtures', isConstruction: true },
  { id: 'lumber', name: 'Wood/Lumber', description: 'Lumber, wood scraps', isConstruction: true },
  { id: 'concrete', name: 'Concrete/Masonry', description: 'Concrete, brick, stone', isConstruction: true },
  { id: 'mixed', name: 'Mixed Construction', description: 'Mixed construction debris', isConstruction: true },
] as const

export type VolumeLevel = keyof typeof standardPricing

export function calculateEstimate(selectedItems: string[], volumeLevel?: VolumeLevel) {
  const hasConstruction = selectedItems.some(item =>
    constructionItems.some(ci => item.toLowerCase().includes(ci))
  )

  if (hasConstruction) {
    return {
      requiresCustomQuote: true,
      min: constructionPricing.min,
      max: constructionPricing.max,
      range: `$${constructionPricing.min}-$${constructionPricing.max}+`,
      showPhotoUpload: true,
      message: "Construction materials require custom pricing - text photos for exact quote in 30 min!"
    }
  }

  if (volumeLevel) {
    const pricing = standardPricing[volumeLevel]
    return {
      requiresCustomQuote: false,
      min: pricing.min,
      max: pricing.max,
      range: `$${pricing.min}-$${pricing.max}`,
      showPhotoUpload: false,
      message: null
    }
  }

  // Calculate based on item selection
  const allItems = [...householdItems, ...outdoorItems]
  let totalVolume = 0

  selectedItems.forEach(itemId => {
    const item = allItems.find(i => i.id === itemId)
    if (item && 'volumeWeight' in item) {
      totalVolume += item.volumeWeight
    }
  })

  // Map volume to pricing tier
  let tier: VolumeLevel = 'quarter'
  if (totalVolume > 0.75) tier = 'full'
  else if (totalVolume > 0.5) tier = 'threeQuarter'
  else if (totalVolume > 0.25) tier = 'half'

  const pricing = standardPricing[tier]
  return {
    requiresCustomQuote: false,
    min: pricing.min,
    max: pricing.max,
    range: `$${pricing.min}-$${pricing.max}`,
    showPhotoUpload: false,
    message: null,
    volumeLevel: tier,
    volumePercentage: Math.min(totalVolume * 100, 100)
  }
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "8503683495"
export const FORMATTED_PHONE = formatPhoneNumber(PHONE_NUMBER)

export function getSMSLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = message ? `?body=${encodeURIComponent(message)}` : ''
  return `sms:+1${cleanPhone}${encodedMessage}`
}

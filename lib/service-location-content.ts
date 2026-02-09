/**
 * Service + Location Combination Content
 * Provides specific content for each service in each location
 * This creates 121 unique pages (11 services × 11 locations)
 */

import { getAllServiceSlugs } from './services'
import { getAllLocationSlugs } from './locations'

export interface ServiceLocationContent {
  intro: string
  whyChooseUs: string[]
  localConsiderations: string[]
  pricingContext: string
  commonScenarios: string[]
}

/**
 * Generate content for a specific service in a specific location
 * This function creates unique, locally-relevant content for each combination
 */
export function getServiceLocationContent(
  serviceSlug: string,
  locationSlug: string,
  serviceName: string,
  locationName: string
): ServiceLocationContent {
  // Default content template - can be customized per service/location
  const content: ServiceLocationContent = {
    intro: generateIntro(serviceSlug, locationSlug, serviceName, locationName),
    whyChooseUs: generateWhyChooseUs(serviceSlug, locationSlug, serviceName, locationName),
    localConsiderations: generateLocalConsiderations(serviceSlug, locationSlug, serviceName, locationName),
    pricingContext: generatePricingContext(serviceSlug, locationSlug, serviceName, locationName),
    commonScenarios: generateCommonScenarios(serviceSlug, locationSlug, serviceName, locationName)
  }

  return content
}

function generateIntro(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string {
  const intros: Record<string, Record<string, string>> = {
    'vacation-rentals': {
      'seaside': `${locationName}'s iconic vacation rental market demands professional junk removal that works around tight turnover schedules. Our ${serviceName.toLowerCase()} service understands Seaside's narrow streets, strict HOA requirements, and the premium guest experience your properties must deliver.`,
      'rosemary-beach': `With ${locationName}'s luxury vacation rentals commanding premium rates, professional ${serviceName.toLowerCase()} is essential. We navigate cobblestone streets, work around guest schedules, and maintain the white-glove service standards your properties demand.`,
      'watercolor': `${locationName}'s thriving vacation rental community requires fast, reliable ${serviceName.toLowerCase()}. From the WaterColor Inn area to residential sections, we coordinate seamless turnovers that keep your properties guest-ready and revenue-generating.`,
      'default': `Professional ${serviceName.toLowerCase()} in ${locationName} designed for the unique demands of vacation rental management. We understand tight turnovers, guest expectations, and the importance of maintaining property presentation standards.`
    },
    'construction-debris': {
      'rosemary-beach': `Renovation projects in ${locationName} require careful coordination with HOA architectural guidelines. Our ${serviceName.toLowerCase()} service navigates European-inspired streets while managing debris from high-end remodels efficiently.`,
      'alys-beach': `${locationName}'s distinctive white architecture demands pristine construction site management. We provide ${serviceName.toLowerCase()} that protects premium surfaces and maintains community aesthetic standards during renovation projects.`,
      'default': `Professional ${serviceName.toLowerCase()} in ${locationName} for renovation projects of all sizes. We handle debris from kitchen remodels to full home renovations with efficient service and proper disposal.`
    },
    'default': {
      'default': `Professional ${serviceName.toLowerCase()} serving ${locationName} and the surrounding 30A corridor. We provide fast, reliable service with transparent pricing and local expertise that understands your community's unique needs.`
    }
  }

  return intros[serviceSlug]?.[locationSlug] || intros[serviceSlug]?.['default'] || intros['default']['default']
}

function generateWhyChooseUs(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const baseReasons = [
    `Deep understanding of ${locationName}'s community standards and HOA requirements`,
    `Fast response times with same-day service available for urgent needs`,
    `Professional team experienced with ${locationName}'s unique property access and parking`,
    `Transparent pricing with no hidden fees or surprise charges`
  ]

  // Add service-specific reasons
  const serviceReasons: Record<string, string[]> = {
    'vacation-rentals': [
      `Coordination with property managers serving multiple ${locationName} properties`,
      `Priority scheduling for tight guest turnover windows`,
      `Photo documentation standard for all removal projects`
    ],
    'construction-debris': [
      `Experience with ${locationName} renovation projects and contractor coordination`,
      `Proper sorting and disposal of construction materials`,
      `Volume pricing for multi-phase renovation projects`
    ],
    'estate-cleanouts': [
      `Compassionate service during difficult life transitions`,
      `Donation coordination with local ${locationName} area charities`,
      `Detailed documentation for estate executors and families`
    ],
    'furniture-removal': [
      `Careful handling to protect ${locationName} property values`,
      `Donation of quality furniture to local organizations`,
      `Single-item to full-room removal flexibility`
    ],
    'hot-tub-removal': [
      `Electrician coordination for safe disconnection`,
      `Deck modification expertise for ${locationName} properties`,
      `Complete cleanup and site preparation`
    ]
  }

  return [...baseReasons, ...(serviceReasons[serviceSlug] || [])]
}

function generateLocalConsiderations(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const locationFactors: Record<string, string[]> = {
    'seaside': [
      'Narrow pedestrian-friendly streets require careful scheduling and vehicle positioning',
      'Strong community atmosphere means professional, courteous service is essential',
      'High vacation rental turnover during summer season demands flexible scheduling',
      'Strict architectural guidelines require coordinated debris removal'
    ],
    'rosemary-beach': [
      'Cobblestone streets and narrow gates require experienced navigation',
      'Premium property values demand white-glove service and careful handling',
      'HOA standards require scheduling approval for larger removal projects',
      'Carriage house access and multi-level properties are common'
    ],
    'alys-beach': [
      'Ultra-premium community expects highest service standards',
      'Signature white architecture requires extra care to protect surfaces',
      'Courtyard home designs create unique access requirements',
      'Architectural review board oversight for certain removal projects'
    ],
    'watercolor': [
      'Active vacation rental market means frequent turnovers year-round',
      'Resort traffic requires coordination for optimal scheduling',
      'Western Lake proximity properties have specific access routes',
      'Property management companies coordinate multiple properties'
    ],
    'grayton-beach': [
      'Mix of vintage cottages and newer homes creates varied access needs',
      'Narrow beach roads require compact vehicle navigation',
      'Many properties undergoing renovation generate debris needs',
      'Laid-back community values reliable, professional service'
    ],
    'inlet-beach': [
      'Mix of established and new construction properties',
      'Growing vacation rental market creates turnover demands',
      'Some properties require Phillips Inlet area access coordination',
      'New development means construction debris is common'
    ],
    'destin': [
      'Large vacation rental market with diverse property types',
      'High-rise condos require elevator coordination and building access',
      'Harbor area properties have specific parking restrictions',
      'Active real estate market means frequent property transitions'
    ],
    'default': [
      `${locationName} properties require professional service that understands local access and parking`,
      'HOA requirements and community standards guide our removal approach',
      'Coastal environment demands eco-friendly disposal practices',
      'Seasonal vacation rental market creates varying demand throughout the year'
    ]
  }

  return locationFactors[locationSlug] || locationFactors['default']
}

function generatePricingContext(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string {
  const pricingContexts: Record<string, string> = {
    'vacation-rentals': `Pricing for ${locationName} vacation rental junk removal follows our standard volume-based model, with property manager discounts available for recurring service. Same-day emergency service may involve additional fees during peak season.`,
    'construction-debris': `Construction debris removal in ${locationName} starts at $600 and varies based on material type and weight. Renovation projects in premium ${locationName} properties often generate heavier materials requiring specialized disposal.`,
    'estate-cleanouts': `Estate cleanout pricing in ${locationName} is project-based, considering property size, contents volume, and sorting complexity. Premium properties often require additional care and documentation.`,
    'hot-tub-removal': `Hot tub removal in ${locationName} ranges from $400-$900 depending on size, access, and deck integration. Many ${locationName} properties have elevated decks requiring additional coordination.`,
    'default': `Our ${locationName} pricing is transparent and volume-based, with the price you're quoted being the price you pay. No hidden fees for stairs, access, or ${locationName}'s unique property characteristics.`
  }

  return pricingContexts[serviceSlug] || pricingContexts['default']
}

function generateCommonScenarios(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const serviceScenarios: Record<string, string[]> = {
    'vacation-rentals': [
      `Guest-damaged furniture replacement between Saturday turnovers`,
      `Seasonal property refresh before peak ${locationName} rental season`,
      `Emergency appliance removal after equipment failure`,
      `Post-season deep cleanout and property preparation`
    ],
    'construction-debris': [
      `Kitchen and bathroom remodel debris from ${locationName} property updates`,
      `Deck replacement materials and structural renovation waste`,
      `Flooring removal from tile, hardwood, or carpet replacement projects`,
      `Full property gut renovation debris removal`
    ],
    'furniture-removal': [
      `Vacation rental furniture rotation and seasonal updates`,
      `Estate sale furniture removal after property acquisition`,
      `Sun-damaged outdoor furniture replacement`,
      `Moving and downsizing furniture disposal`
    ],
    'estate-cleanouts': [
      `Complete property clearing for ${locationName} estate sales`,
      `Downsizing from beach house to smaller property`,
      `Inheritance property preparation for sale or rental`,
      `Lifetime accumulation sorting and removal`
    ],
    'appliance-removal': [
      `Failed refrigerator or dishwasher emergency replacement`,
      `Kitchen renovation appliance upgrade and removal`,
      `Vacation rental appliance turnover after failure`,
      `Moving and relocation appliance disposal`
    ],
    'hot-tub-removal': [
      `Failed spa removal from ${locationName} elevated deck properties`,
      `Property preparation for sale requiring hot tub removal`,
      `Renovation projects converting spa space to other use`,
      `Maintenance cost reduction by removing non-functional equipment`
    ],
    'yard-debris': [
      `Storm and hurricane debris cleanup after tropical weather`,
      `Seasonal palm frond and landscaping maintenance`,
      `Property preparation debris removal before listing`,
      `Renovation landscaping waste and material removal`
    ],
    'garage-cleanouts': [
      `Years of accumulated ${locationName} beach equipment and storage`,
      `Property acquisition garage clearing and organization`,
      `Seasonal cleanout and decluttering projects`,
      `Workshop and tool removal after downsizing`
    ],
    'default': [
      `Property maintenance and cleanout projects`,
      `Renovation and improvement debris removal`,
      `Seasonal property preparation and updates`,
      `Estate transitions and property sales`
    ]
  }

  return serviceScenarios[serviceSlug] || serviceScenarios['default']
}

/**
 * Get all valid service+location combinations
 * Returns 121 combinations (11 services × 11 locations)
 */
export function getAllServiceLocationCombinations() {
  const services = getAllServiceSlugs()
  const locations = getAllLocationSlugs()

  const combinations: Array<{ service: string; location: string }> = []

  for (const service of services) {
    for (const location of locations) {
      combinations.push({ service, location })
    }
  }

  return combinations
}

/**
 * Check if a service+location combination is valid
 */
export function isValidCombination(serviceSlug: string, locationSlug: string): boolean {
  const services = getAllServiceSlugs()
  const locations = getAllLocationSlugs()

  return services.includes(serviceSlug) && locations.includes(locationSlug)
}

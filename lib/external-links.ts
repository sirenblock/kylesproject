/**
 * External Links - Authoritative Resources
 *
 * Strategic external links to government, environmental, local, and educational resources
 * that add value for users without linking to competitors
 */

export interface ExternalLink {
  url: string
  title: string
  description: string
  type: 'government' | 'environmental' | 'local' | 'educational' | 'nonprofit'
  rel?: string
}

/**
 * Local Government & Municipal Resources
 */
export const governmentLinks: Record<string, ExternalLink[]> = {
  'walton-county': [
    {
      url: 'https://www.co.walton.fl.us/225/Solid-Waste',
      title: 'Walton County Solid Waste Management',
      description: 'Official county waste disposal and recycling information',
      type: 'government',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://www.co.walton.fl.us/237/Household-Hazardous-Waste',
      title: 'Walton County Hazardous Waste Facility',
      description: 'Proper disposal of paint, chemicals, and hazardous materials',
      type: 'government',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://www.co.walton.fl.us/',
      title: 'Walton County Government',
      description: 'Official Walton County website with local regulations and services',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ],
  'florida-dep': [
    {
      url: 'https://floridadep.gov/waste/district-business-support/content/household-hazardous-waste',
      title: 'Florida DEP - Hazardous Waste',
      description: 'State guidelines for household hazardous waste disposal',
      type: 'government',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://floridadep.gov/waste/waste-reduction/content/recycling-florida',
      title: 'Florida Department of Environmental Protection - Recycling',
      description: 'Florida recycling programs and environmental protection',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ]
}

/**
 * Environmental & Recycling Organizations
 */
export const environmentalLinks: ExternalLink[] = [
  {
    url: 'https://www.epa.gov/recycle',
    title: 'EPA Recycling Guidelines',
    description: 'Federal guidelines for recycling and waste reduction',
    type: 'environmental',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://www.epa.gov/hw/household-hazardous-waste-hhw',
    title: 'EPA Household Hazardous Waste',
    description: 'Safe disposal practices for hazardous household materials',
    type: 'environmental',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://earth911.com/',
    title: 'Earth911 Recycling Search',
    description: 'Find local recycling centers and disposal options',
    type: 'environmental',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://www.habitat.org/restores',
    title: 'Habitat for Humanity ReStore',
    description: 'Donate usable building materials and furniture',
    type: 'nonprofit',
    rel: 'noopener noreferrer'
  }
]

/**
 * Local 30A Area Resources
 */
export const localAreaLinks: ExternalLink[] = [
  {
    url: 'https://www.visitsouthwalton.com/',
    title: 'Visit South Walton',
    description: 'Official tourism and community information for 30A',
    type: 'local',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://www.30a.com/',
    title: '30A Local Community Guide',
    description: 'Comprehensive guide to 30A communities and lifestyle',
    type: 'local',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://www.southwalton.com/',
    title: 'South Walton Community',
    description: 'Local events, news, and community resources',
    type: 'local',
    rel: 'noopener noreferrer'
  }
]

/**
 * Educational Resources
 */
export const educationalLinks: ExternalLink[] = [
  {
    url: 'https://www.consumerreports.org/home-garden/',
    title: 'Consumer Reports Home & Garden',
    description: 'Expert advice on home maintenance and improvement',
    type: 'educational',
    rel: 'noopener noreferrer'
  },
  {
    url: 'https://www.energy.gov/energysaver/energy-efficient-appliances',
    title: 'Energy.gov - Appliance Efficiency',
    description: 'Federal guidance on energy-efficient appliances',
    type: 'educational',
    rel: 'noopener noreferrer'
  }
]

/**
 * Service-Specific External Links
 */
export const serviceLinks: Record<string, ExternalLink[]> = {
  'construction-debris': [
    ...governmentLinks['walton-county'],
    ...governmentLinks['florida-dep'],
    {
      url: 'https://www.epa.gov/large-scale-residential-demolition/managing-construction-and-demolition-materials',
      title: 'EPA - Construction Debris Management',
      description: 'Best practices for construction and demolition waste',
      type: 'environmental',
      rel: 'noopener noreferrer'
    }
  ],
  'donation-pickup': [
    {
      url: 'https://www.habitat.org/restores',
      title: 'Habitat for Humanity ReStore Locator',
      description: 'Find local ReStore donation centers',
      type: 'nonprofit',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://www.salvationarmyusa.org/usn/donate/',
      title: 'Salvation Army Donations',
      description: 'National charity accepting furniture and household donations',
      type: 'nonprofit',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://www.irs.gov/charities-non-profits/charitable-contributions',
      title: 'IRS Charitable Contributions Guide',
      description: 'Tax deduction information for charitable donations',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ],
  'estate-cleanouts': [
    {
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/selling-a-home',
      title: 'IRS Home Sale Tax Information',
      description: 'Tax implications of selling inherited property',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ],
  'appliance-removal': [
    {
      url: 'https://www.epa.gov/rad/consumers-guide-radon-reduction',
      title: 'EPA Appliance Disposal Guidelines',
      description: 'Safe disposal of appliances with refrigerants',
      type: 'environmental',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://www.energystar.gov/products/appliances',
      title: 'ENERGY STAR Appliances',
      description: 'Find energy-efficient replacement appliances',
      type: 'educational',
      rel: 'noopener noreferrer'
    }
  ],
  'hot-tub-removal': [
    {
      url: 'https://www.cpsc.gov/safety-education/safety-guides/home/pool-and-spa-safety',
      title: 'CPSC Pool & Spa Safety',
      description: 'Consumer Product Safety Commission spa guidelines',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ],
  'yard-debris': [
    {
      url: 'https://www.epa.gov/recycle/composting-home',
      title: 'EPA Composting Guide',
      description: 'Learn about composting yard waste at home',
      type: 'environmental',
      rel: 'noopener noreferrer'
    },
    {
      url: 'https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes',
      title: 'NOAA Hurricane Preparedness',
      description: 'Official hurricane preparation and recovery information',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ],
  'vacation-rentals': [
    {
      url: 'https://www.visitflorida.com/',
      title: 'Visit Florida',
      description: 'Official Florida tourism information',
      type: 'local',
      rel: 'noopener noreferrer'
    }
  ]
}

/**
 * Location-Specific External Links
 */
export const locationLinks: Record<string, ExternalLink[]> = {
  'seaside': [
    {
      url: 'https://www.seasidefl.com/',
      title: 'Seaside Official Website',
      description: 'Official community website for Seaside, Florida',
      type: 'local',
      rel: 'noopener noreferrer'
    },
    ...localAreaLinks.slice(0, 2)
  ],
  'rosemary-beach': [
    {
      url: 'https://www.rosemarybeach.com/',
      title: 'Rosemary Beach Official Website',
      description: 'Official community website for Rosemary Beach',
      type: 'local',
      rel: 'noopener noreferrer'
    },
    ...localAreaLinks.slice(0, 2)
  ],
  'alys-beach': [
    {
      url: 'https://www.alysbeach.com/',
      title: 'Alys Beach Official Website',
      description: 'Official community website for Alys Beach',
      type: 'local',
      rel: 'noopener noreferrer'
    },
    ...localAreaLinks.slice(0, 2)
  ],
  'watercolor': [
    {
      url: 'https://www.watercolorresort.com/',
      title: 'WaterColor Resort & Community',
      description: 'Official WaterColor community information',
      type: 'local',
      rel: 'noopener noreferrer'
    },
    ...localAreaLinks.slice(0, 2)
  ],
  'default': [
    ...localAreaLinks,
    ...governmentLinks['walton-county']
  ]
}

/**
 * Blog Post External Links
 */
export const blogPostLinks: Record<string, ExternalLink[]> = {
  'eco-friendly-junk-disposal-30a': [
    ...environmentalLinks,
    ...governmentLinks['florida-dep']
  ],
  'construction-debris-removal-what-to-know': [
    ...governmentLinks['walton-county'],
    {
      url: 'https://www.epa.gov/large-scale-residential-demolition/managing-construction-and-demolition-materials',
      title: 'EPA Construction Waste Guidelines',
      description: 'Federal guidelines for managing construction debris',
      type: 'environmental',
      rel: 'noopener noreferrer'
    }
  ],
  'hot-tub-removal-30a-complete-guide': [
    {
      url: 'https://www.cpsc.gov/safety-education/safety-guides/home/pool-and-spa-safety',
      title: 'Consumer Product Safety Commission - Spa Safety',
      description: 'Federal spa safety guidelines and regulations',
      type: 'government',
      rel: 'noopener noreferrer'
    }
  ],
  'spring-cleaning-30a-beach-properties': [
    ...environmentalLinks.slice(0, 2),
    ...governmentLinks['walton-county'].slice(0, 1)
  ]
}

/**
 * Helper function to get external links for a service
 */
export function getExternalLinksForService(serviceSlug: string): ExternalLink[] {
  return serviceLinks[serviceSlug] || [
    ...governmentLinks['walton-county'].slice(0, 1),
    ...environmentalLinks.slice(0, 2)
  ]
}

/**
 * Helper function to get external links for a location
 */
export function getExternalLinksForLocation(locationSlug: string): ExternalLink[] {
  return locationLinks[locationSlug] || locationLinks['default']
}

/**
 * Helper function to get external links for a blog post
 */
export function getExternalLinksForBlogPost(postSlug: string): ExternalLink[] {
  return blogPostLinks[postSlug] || environmentalLinks.slice(0, 2)
}

/**
 * Get general helpful resources
 */
export function getGeneralResources(): ExternalLink[] {
  return [
    ...governmentLinks['walton-county'],
    ...environmentalLinks.slice(0, 3),
    ...localAreaLinks.slice(0, 2)
  ]
}

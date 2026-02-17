/**
 * Internal Linking Strategy for 30A Junk Removal
 *
 * This file defines strategic internal links between services, locations, and blog posts
 * to improve SEO, user experience, and page authority distribution.
 */

export interface InternalLink {
  url: string
  anchor: string
  description?: string
}

export interface ServiceLinks {
  relatedServices: string[]
  relatedLocations: string[]
  relatedBlogPosts: string[]
}

export interface LocationLinks {
  relatedLocations: string[]
  popularServices: string[]
  relatedBlogPosts: string[]
}

export interface BlogPostLinks {
  relatedServices: string[]
  relatedLocations: string[]
  relatedPosts: string[]
}

/**
 * Service Internal Linking Map
 * Maps each service to related services, locations, and blog posts
 */
export const serviceInternalLinks: Record<string, ServiceLinks> = {
  'one-time-hauls': {
    relatedServices: ['furniture-removal', 'appliance-removal', 'garage-cleanouts'],
    relatedLocations: ['seaside', 'rosemary-beach', 'watercolor'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'construction-debris': {
    relatedServices: ['yard-debris', 'garage-cleanouts', 'one-time-hauls'],
    relatedLocations: ['rosemary-beach', 'alys-beach', 'seaside'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'construction-debris-removal-what-to-know', 'ultimate-guide-junk-removal-30a-florida']
  },
  'vacation-rentals': {
    relatedServices: ['furniture-removal', 'appliance-removal', 'property-management'],
    relatedLocations: ['seaside', 'watercolor', 'rosemary-beach', 'inlet-beach'],
    relatedBlogPosts: ['complete-property-manager-guide-junk-removal-30a', 'vacation-rental-cleanout-tips-property-managers', 'year-round-junk-removal-guide-30a-beach-properties']
  },
  'estate-cleanouts': {
    relatedServices: ['donation-pickup', 'furniture-removal', 'garage-cleanouts'],
    relatedLocations: ['grayton-beach', 'seaside', 'santa-rosa-beach'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'eco-friendly-junk-disposal-30a']
  },
  'appliance-removal': {
    relatedServices: ['furniture-removal', 'one-time-hauls', 'vacation-rentals'],
    relatedLocations: ['watercolor', 'rosemary-beach', 'destin'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'furniture-removal': {
    relatedServices: ['vacation-rentals', 'estate-cleanouts', 'donation-pickup'],
    relatedLocations: ['seaside', 'rosemary-beach', 'watercolor'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  },
  'hot-tub-removal': {
    relatedServices: ['construction-debris', 'yard-debris', 'property-management'],
    relatedLocations: ['rosemary-beach', 'watercolor', 'alys-beach'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'hot-tub-removal-30a-complete-guide', 'construction-debris-removal-what-to-know']
  },
  'property-management': {
    relatedServices: ['vacation-rentals', 'furniture-removal', 'appliance-removal'],
    relatedLocations: ['watercolor', 'seaside', 'rosemary-beach', 'destin'],
    relatedBlogPosts: ['complete-property-manager-guide-junk-removal-30a', 'year-round-junk-removal-guide-30a-beach-properties', 'vacation-rental-cleanout-tips-property-managers']
  },
  'donation-pickup': {
    relatedServices: ['estate-cleanouts', 'furniture-removal', 'garage-cleanouts'],
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'blue-mountain-beach'],
    relatedBlogPosts: ['eco-friendly-junk-disposal-30a', 'spring-cleaning-30a-beach-properties']
  },
  'yard-debris': {
    relatedServices: ['construction-debris', 'property-management', 'one-time-hauls'],
    relatedLocations: ['grayton-beach', 'watercolor', 'seagrove-beach'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'garage-cleanouts': {
    relatedServices: ['estate-cleanouts', 'donation-pickup', 'one-time-hauls'],
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'blue-mountain-beach'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'office-furniture': {
    relatedServices: ['furniture-removal', 'property-management', 'donation-pickup'],
    relatedLocations: ['santa-rosa-beach', 'destin', 'panama-city-beach'],
    relatedBlogPosts: ['eco-friendly-junk-disposal-30a', 'ultimate-guide-junk-removal-30a-florida']
  },
  'mattress-removal': {
    relatedServices: ['furniture-removal', 'vacation-rentals', 'one-time-hauls'],
    relatedLocations: ['seaside', 'rosemary-beach', 'panama-city-beach'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'tv-electronics-recycling': {
    relatedServices: ['appliance-removal', 'office-furniture', 'one-time-hauls'],
    relatedLocations: ['destin', 'fort-walton-beach', 'panama-city-beach'],
    relatedBlogPosts: ['eco-friendly-junk-disposal-30a', 'ultimate-guide-junk-removal-30a-florida']
  },
  'shed-demolition': {
    relatedServices: ['construction-debris', 'deck-removal', 'fence-removal'],
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'freeport'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'construction-debris-removal-what-to-know']
  },
  'deck-removal': {
    relatedServices: ['construction-debris', 'shed-demolition', 'hot-tub-removal'],
    relatedLocations: ['rosemary-beach', 'watercolor', 'destin'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'construction-debris-removal-what-to-know']
  },
  'fence-removal': {
    relatedServices: ['construction-debris', 'shed-demolition', 'yard-debris'],
    relatedLocations: ['santa-rosa-beach', 'crestview', 'lynn-haven'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'ultimate-guide-junk-removal-30a-florida']
  },
  'carpet-removal': {
    relatedServices: ['construction-debris', 'bathroom-demolition', 'kitchen-demolition'],
    relatedLocations: ['destin', 'panama-city-beach', 'fort-walton-beach'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'construction-debris-removal-what-to-know']
  },
  'storage-unit-cleanout': {
    relatedServices: ['garage-cleanouts', 'estate-cleanouts', 'donation-pickup'],
    relatedLocations: ['santa-rosa-beach', 'destin', 'panama-city-beach'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'hoarder-cleanout': {
    relatedServices: ['estate-cleanouts', 'garage-cleanouts', 'donation-pickup'],
    relatedLocations: ['panama-city', 'fort-walton-beach', 'crestview'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'eco-friendly-junk-disposal-30a']
  },
  'foreclosure-cleanout': {
    relatedServices: ['estate-cleanouts', 'commercial-junk-removal', 'garage-cleanouts'],
    relatedLocations: ['panama-city-beach', 'panama-city', 'lynn-haven'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'commercial-junk-removal': {
    relatedServices: ['office-furniture', 'construction-debris', 'foreclosure-cleanout'],
    relatedLocations: ['destin', 'panama-city-beach', 'fort-walton-beach'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'eco-friendly-junk-disposal-30a']
  },
  'bathroom-demolition': {
    relatedServices: ['construction-debris', 'carpet-removal', 'kitchen-demolition'],
    relatedLocations: ['rosemary-beach', 'alys-beach', 'destin'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'construction-debris-removal-what-to-know']
  },
  'kitchen-demolition': {
    relatedServices: ['construction-debris', 'appliance-removal', 'bathroom-demolition'],
    relatedLocations: ['seaside', 'watercolor', 'destin'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'construction-debris-removal-what-to-know']
  },
  'same-day-junk-removal': {
    relatedServices: ['one-time-hauls', 'furniture-removal', 'appliance-removal'],
    relatedLocations: ['seaside', 'destin', 'panama-city-beach'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'vacation-rental-cleanout-tips-property-managers']
  },
  'bulk-trash-pickup': {
    relatedServices: ['one-time-hauls', 'yard-debris', 'garage-cleanouts'],
    relatedLocations: ['santa-rosa-beach', 'destin', 'panama-city-beach'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'hurricane-debris': {
    relatedServices: ['yard-debris', 'construction-debris', 'same-day-junk-removal'],
    relatedLocations: ['panama-city-beach', 'mexico-beach', 'panama-city'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'piano-removal': {
    relatedServices: ['furniture-removal', 'one-time-hauls', 'exercise-equipment'],
    relatedLocations: ['destin', 'rosemary-beach', 'niceville'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'exercise-equipment': {
    relatedServices: ['furniture-removal', 'one-time-hauls', 'piano-removal'],
    relatedLocations: ['destin', 'panama-city-beach', 'fort-walton-beach'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'attic-cleanout': {
    relatedServices: ['garage-cleanouts', 'estate-cleanouts', 'donation-pickup'],
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'crestview'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'concrete-removal': {
    relatedServices: ['construction-debris', 'deck-removal', 'shed-demolition'],
    relatedLocations: ['destin', 'panama-city-beach', 'fort-walton-beach'],
    relatedBlogPosts: ['construction-debris-removal-what-to-know', '30a-homeowner-renovation-debris-removal-guide']
  }
}

/**
 * Location Internal Linking Map
 * Maps each location to nearby locations, popular services, and relevant blog posts
 */
export const locationInternalLinks: Record<string, LocationLinks> = {
  'seaside': {
    relatedLocations: ['watercolor', 'seagrove-beach', 'seacrest'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'appliance-removal'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'vacation-rental-cleanout-tips-property-managers']
  },
  'rosemary-beach': {
    relatedLocations: ['alys-beach', 'inlet-beach', 'seacrest'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'property-management'],
    relatedBlogPosts: ['complete-property-manager-guide-junk-removal-30a', '30a-homeowner-renovation-debris-removal-guide', 'vacation-rental-cleanout-tips-property-managers']
  },
  'alys-beach': {
    relatedLocations: ['rosemary-beach', 'seacrest', 'inlet-beach'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'estate-cleanouts'],
    relatedBlogPosts: ['30a-homeowner-renovation-debris-removal-guide', 'complete-property-manager-guide-junk-removal-30a', 'vacation-rental-cleanout-tips-property-managers']
  },
  'watercolor': {
    relatedLocations: ['seaside', 'grayton-beach', 'seagrove-beach'],
    popularServices: ['vacation-rentals', 'property-management', 'appliance-removal'],
    relatedBlogPosts: ['complete-property-manager-guide-junk-removal-30a', 'year-round-junk-removal-guide-30a-beach-properties', 'vacation-rental-cleanout-tips-property-managers']
  },
  'grayton-beach': {
    relatedLocations: ['watercolor', 'blue-mountain-beach', 'santa-rosa-beach'],
    popularServices: ['construction-debris', 'estate-cleanouts', 'yard-debris'],
    relatedBlogPosts: ['construction-debris-removal-what-to-know', 'spring-cleaning-30a-beach-properties']
  },
  'santa-rosa-beach': {
    relatedLocations: ['grayton-beach', 'blue-mountain-beach', 'seagrove-beach'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'donation-pickup'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'inlet-beach': {
    relatedLocations: ['rosemary-beach', 'alys-beach', 'panama-city-beach'],
    popularServices: ['vacation-rentals', 'construction-debris', 'furniture-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'construction-debris-removal-what-to-know']
  },
  'seacrest': {
    relatedLocations: ['rosemary-beach', 'alys-beach', 'seaside'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'appliance-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  },
  'seagrove-beach': {
    relatedLocations: ['seaside', 'watercolor', 'santa-rosa-beach'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'property-management'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  },
  'blue-mountain-beach': {
    relatedLocations: ['grayton-beach', 'santa-rosa-beach', 'watercolor'],
    popularServices: ['estate-cleanouts', 'garage-cleanouts', 'donation-pickup'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'eco-friendly-junk-disposal-30a']
  },
  'destin': {
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'watercolor'],
    popularServices: ['vacation-rentals', 'property-management', 'appliance-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'panama-city-beach': {
    relatedLocations: ['inlet-beach', 'laguna-beach', 'panama-city', 'lynn-haven', 'santa-rosa-beach'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'appliance-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'miramar-beach': {
    relatedLocations: ['destin', 'sandestin', 'santa-rosa-beach', 'dune-allen-beach', 'freeport'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'construction-debris'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'sandestin': {
    relatedLocations: ['miramar-beach', 'destin', 'dune-allen-beach', 'santa-rosa-beach'],
    popularServices: ['vacation-rentals', 'property-management', 'furniture-removal'],
    relatedBlogPosts: ['complete-property-manager-guide-junk-removal-30a', 'vacation-rental-cleanout-tips-property-managers']
  },
  'dune-allen-beach': {
    relatedLocations: ['santa-rosa-beach', 'blue-mountain-beach', 'sandestin', 'miramar-beach'],
    popularServices: ['vacation-rentals', 'construction-debris', 'estate-cleanouts'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  },
  'point-washington': {
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'watercolor', 'freeport'],
    popularServices: ['estate-cleanouts', 'garage-cleanouts', 'yard-debris'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'watersound': {
    relatedLocations: ['inlet-beach', 'rosemary-beach', 'alys-beach', 'watersound-beach', 'seacrest'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'construction-debris'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'complete-property-manager-guide-junk-removal-30a']
  },
  'seacrest-beach': {
    relatedLocations: ['seacrest', 'rosemary-beach', 'alys-beach', 'inlet-beach', 'watersound'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'appliance-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  },
  'freeport': {
    relatedLocations: ['santa-rosa-beach', 'point-washington', 'defuniak-springs', 'niceville'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'construction-debris'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'defuniak-springs': {
    relatedLocations: ['freeport', 'point-washington', 'crestview', 'santa-rosa-beach'],
    popularServices: ['estate-cleanouts', 'one-time-hauls', 'garage-cleanouts'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'watersound-beach': {
    relatedLocations: ['watersound', 'inlet-beach', 'rosemary-beach', 'panama-city-beach'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'construction-debris'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'complete-property-manager-guide-junk-removal-30a']
  },
  'panama-city': {
    relatedLocations: ['panama-city-beach', 'lynn-haven', 'callaway', 'springfield', 'parker'],
    popularServices: ['one-time-hauls', 'commercial-junk-removal', 'estate-cleanouts'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'lynn-haven': {
    relatedLocations: ['panama-city', 'panama-city-beach', 'callaway', 'springfield'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'estate-cleanouts'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'callaway': {
    relatedLocations: ['panama-city', 'lynn-haven', 'parker', 'springfield'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'yard-debris'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'springfield': {
    relatedLocations: ['panama-city', 'lynn-haven', 'callaway', 'parker'],
    popularServices: ['one-time-hauls', 'construction-debris', 'hurricane-debris'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'construction-debris-removal-what-to-know']
  },
  'parker': {
    relatedLocations: ['callaway', 'springfield', 'panama-city', 'lynn-haven'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'yard-debris'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'laguna-beach': {
    relatedLocations: ['panama-city-beach', 'inlet-beach', 'watersound-beach'],
    popularServices: ['vacation-rentals', 'construction-debris', 'furniture-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'mexico-beach': {
    relatedLocations: ['panama-city-beach', 'panama-city', 'callaway'],
    popularServices: ['hurricane-debris', 'construction-debris', 'estate-cleanouts'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'construction-debris-removal-what-to-know']
  },
  'fort-walton-beach': {
    relatedLocations: ['destin', 'mary-esther', 'shalimar', 'niceville', 'valparaiso'],
    popularServices: ['vacation-rentals', 'commercial-junk-removal', 'furniture-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
  },
  'niceville': {
    relatedLocations: ['valparaiso', 'fort-walton-beach', 'destin', 'freeport', 'crestview'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'estate-cleanouts'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'crestview': {
    relatedLocations: ['niceville', 'fort-walton-beach', 'defuniak-springs', 'valparaiso'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'construction-debris'],
    relatedBlogPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'mary-esther': {
    relatedLocations: ['fort-walton-beach', 'shalimar', 'destin', 'niceville'],
    popularServices: ['one-time-hauls', 'furniture-removal', 'appliance-removal'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'shalimar': {
    relatedLocations: ['fort-walton-beach', 'mary-esther', 'niceville', 'valparaiso'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'yard-debris'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  },
  'valparaiso': {
    relatedLocations: ['niceville', 'fort-walton-beach', 'shalimar', 'crestview'],
    popularServices: ['one-time-hauls', 'garage-cleanouts', 'estate-cleanouts'],
    relatedBlogPosts: ['spring-cleaning-30a-beach-properties', 'ultimate-guide-junk-removal-30a-florida']
  }
}

/**
 * Blog Post Internal Linking Map
 * Maps each blog post to related services, locations, and other posts
 */
export const blogPostInternalLinks: Record<string, BlogPostLinks> = {
  'ultimate-guide-junk-removal-30a-florida': {
    relatedServices: ['one-time-hauls', 'vacation-rentals', 'estate-cleanouts'],
    relatedLocations: ['seaside', 'rosemary-beach', 'watercolor', 'grayton-beach'],
    relatedPosts: ['vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  },
  'vacation-rental-cleanout-tips-property-managers': {
    relatedServices: ['vacation-rentals', 'property-management', 'furniture-removal'],
    relatedLocations: ['seaside', 'rosemary-beach', 'watercolor', 'destin'],
    relatedPosts: ['complete-property-manager-guide-junk-removal-30a', 'year-round-junk-removal-guide-30a-beach-properties', 'spring-cleaning-30a-beach-properties']
  },
  'construction-debris-removal-what-to-know': {
    relatedServices: ['construction-debris', 'yard-debris', 'garage-cleanouts'],
    relatedLocations: ['rosemary-beach', 'alys-beach', 'grayton-beach'],
    relatedPosts: ['30a-homeowner-renovation-debris-removal-guide', 'hot-tub-removal-30a-complete-guide', 'ultimate-guide-junk-removal-30a-florida']
  },
  'eco-friendly-junk-disposal-30a': {
    relatedServices: ['donation-pickup', 'estate-cleanouts', 'garage-cleanouts'],
    relatedLocations: ['santa-rosa-beach', 'grayton-beach', 'blue-mountain-beach'],
    relatedPosts: ['ultimate-guide-junk-removal-30a-florida', 'spring-cleaning-30a-beach-properties']
  },
  'hot-tub-removal-30a-complete-guide': {
    relatedServices: ['hot-tub-removal', 'construction-debris', 'property-management'],
    relatedLocations: ['rosemary-beach', 'watercolor', 'alys-beach'],
    relatedPosts: ['construction-debris-removal-what-to-know', 'ultimate-guide-junk-removal-30a-florida']
  },
  'spring-cleaning-30a-beach-properties': {
    relatedServices: ['vacation-rentals', 'furniture-removal', 'donation-pickup'],
    relatedLocations: ['seaside', 'watercolor', 'rosemary-beach', 'grayton-beach'],
    relatedPosts: ['vacation-rental-cleanout-tips-property-managers', 'eco-friendly-junk-disposal-30a', 'year-round-junk-removal-guide-30a-beach-properties']
  },
  'complete-property-manager-guide-junk-removal-30a': {
    relatedServices: ['vacation-rentals', 'property-management', 'furniture-removal', 'appliance-removal'],
    relatedLocations: ['rosemary-beach', 'alys-beach', 'watercolor', 'seaside'],
    relatedPosts: ['vacation-rental-cleanout-tips-property-managers', 'year-round-junk-removal-guide-30a-beach-properties', 'spring-cleaning-30a-beach-properties']
  },
  '30a-homeowner-renovation-debris-removal-guide': {
    relatedServices: ['construction-debris', 'hot-tub-removal', 'yard-debris', 'garage-cleanouts'],
    relatedLocations: ['rosemary-beach', 'alys-beach', 'watercolor', 'grayton-beach'],
    relatedPosts: ['construction-debris-removal-what-to-know', 'hot-tub-removal-30a-complete-guide', 'ultimate-guide-junk-removal-30a-florida']
  },
  'year-round-junk-removal-guide-30a-beach-properties': {
    relatedServices: ['vacation-rentals', 'property-management', 'estate-cleanouts', 'furniture-removal'],
    relatedLocations: ['seaside', 'rosemary-beach', 'watercolor', 'grayton-beach'],
    relatedPosts: ['complete-property-manager-guide-junk-removal-30a', 'vacation-rental-cleanout-tips-property-managers', 'spring-cleaning-30a-beach-properties']
  }
}

/**
 * Helper function to get related services for a service
 */
export function getRelatedServices(serviceSlug: string): string[] {
  return serviceInternalLinks[serviceSlug]?.relatedServices || []
}

/**
 * Helper function to get related locations for a service
 */
export function getRelatedLocationsForService(serviceSlug: string): string[] {
  return serviceInternalLinks[serviceSlug]?.relatedLocations || []
}

/**
 * Helper function to get related blog posts for a service
 */
export function getRelatedBlogPostsForService(serviceSlug: string): string[] {
  return serviceInternalLinks[serviceSlug]?.relatedBlogPosts || []
}

/**
 * Helper function to get popular services for a location
 */
export function getPopularServicesForLocation(locationSlug: string): string[] {
  return locationInternalLinks[locationSlug]?.popularServices || []
}

/**
 * Helper function to get nearby locations
 */
export function getNearbyLocations(locationSlug: string): string[] {
  return locationInternalLinks[locationSlug]?.relatedLocations || []
}

/**
 * Helper function to get related blog posts for a location
 */
export function getRelatedBlogPostsForLocation(locationSlug: string): string[] {
  return locationInternalLinks[locationSlug]?.relatedBlogPosts || []
}

/**
 * Helper function to get related services for a blog post
 */
export function getRelatedServicesForBlogPost(postSlug: string): string[] {
  return blogPostInternalLinks[postSlug]?.relatedServices || []
}

/**
 * Helper function to get related locations for a blog post
 */
export function getRelatedLocationsForBlogPost(postSlug: string): string[] {
  return blogPostInternalLinks[postSlug]?.relatedLocations || []
}

/**
 * Helper function to get related posts for a blog post
 */
export function getRelatedPostsForBlogPost(postSlug: string): string[] {
  return blogPostInternalLinks[postSlug]?.relatedPosts || []
}

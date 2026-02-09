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
    relatedLocations: ['inlet-beach', 'santa-rosa-beach', 'rosemary-beach'],
    popularServices: ['vacation-rentals', 'furniture-removal', 'appliance-removal'],
    relatedBlogPosts: ['vacation-rental-cleanout-tips-property-managers', 'ultimate-guide-junk-removal-30a-florida']
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

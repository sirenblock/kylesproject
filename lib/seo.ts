// SEO utilities for internal linking and canonical URLs

export const BASE_URL = 'https://www.30ajunkremoval.com'

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  // Remove trailing slash unless it's the root
  const cleanPath = path === '/' ? path : path.replace(/\/$/, '')
  return `${BASE_URL}${cleanPath}`
}

// Internal link structure for SEO
export interface InternalLink {
  href: string
  text: string
  title?: string
}

// Service pages internal links
export const serviceLinks: InternalLink[] = [
  { href: '/services/one-time-hauls', text: 'one-time junk removal' },
  { href: '/services/construction-debris', text: 'construction debris removal' },
  { href: '/services/vacation-rentals', text: 'vacation rental turnovers' },
  { href: '/services/estate-cleanouts', text: 'estate cleanouts' },
  { href: '/services/appliance-removal', text: 'appliance removal' },
  { href: '/services/furniture-removal', text: 'furniture removal' },
  { href: '/services/hot-tub-removal', text: 'hot tub removal' },
  { href: '/services/donation-pickup', text: 'donation pickup' },
  { href: '/services/garage-cleanouts', text: 'garage cleanouts' },
  { href: '/services/yard-debris', text: 'yard debris removal' },
  { href: '/services/office-furniture', text: 'office furniture removal' },
  { href: '/services/property-management', text: 'property management services' },
  { href: '/services/mattress-removal', text: 'mattress removal' },
  { href: '/services/tv-electronics-recycling', text: 'TV & electronics recycling' },
  { href: '/services/shed-demolition', text: 'shed demolition' },
  { href: '/services/deck-removal', text: 'deck removal' },
  { href: '/services/fence-removal', text: 'fence removal' },
  { href: '/services/carpet-removal', text: 'carpet removal' },
  { href: '/services/storage-unit-cleanout', text: 'storage unit cleanout' },
  { href: '/services/hoarder-cleanout', text: 'hoarding cleanup' },
  { href: '/services/foreclosure-cleanout', text: 'foreclosure cleanout' },
  { href: '/services/commercial-junk-removal', text: 'commercial junk removal' },
  { href: '/services/bathroom-demolition', text: 'bathroom demolition' },
  { href: '/services/kitchen-demolition', text: 'kitchen demolition' },
  { href: '/services/same-day-junk-removal', text: 'same day junk removal' },
  { href: '/services/bulk-trash-pickup', text: 'bulk trash pickup' },
  { href: '/services/hurricane-debris', text: 'hurricane debris cleanup' },
  { href: '/services/piano-removal', text: 'piano removal' },
  { href: '/services/exercise-equipment', text: 'exercise equipment removal' },
  { href: '/services/attic-cleanout', text: 'attic cleanout' },
  { href: '/services/concrete-removal', text: 'concrete removal' },
]

// Location pages internal links
export const locationLinks: InternalLink[] = [
  { href: '/service-areas/seaside', text: 'Seaside' },
  { href: '/service-areas/rosemary-beach', text: 'Rosemary Beach' },
  { href: '/service-areas/alys-beach', text: 'Alys Beach' },
  { href: '/service-areas/watercolor', text: 'WaterColor' },
  { href: '/service-areas/grayton-beach', text: 'Grayton Beach' },
  { href: '/service-areas/santa-rosa-beach', text: 'Santa Rosa Beach' },
  { href: '/service-areas/inlet-beach', text: 'Inlet Beach' },
  { href: '/service-areas/seacrest', text: 'Seacrest' },
  { href: '/service-areas/seagrove-beach', text: 'Seagrove Beach' },
  { href: '/service-areas/blue-mountain-beach', text: 'Blue Mountain Beach' },
  { href: '/service-areas/destin', text: 'Destin' },
  { href: '/service-areas/panama-city-beach', text: 'Panama City Beach' },
  { href: '/service-areas/miramar-beach', text: 'Miramar Beach' },
  { href: '/service-areas/sandestin', text: 'Sandestin' },
  { href: '/service-areas/dune-allen-beach', text: 'Dune Allen Beach' },
  { href: '/service-areas/point-washington', text: 'Point Washington' },
  { href: '/service-areas/watersound', text: 'WaterSound' },
  { href: '/service-areas/seacrest-beach', text: 'Seacrest Beach' },
  { href: '/service-areas/freeport', text: 'Freeport' },
  { href: '/service-areas/defuniak-springs', text: 'DeFuniak Springs' },
  { href: '/service-areas/watersound-beach', text: 'WaterSound Beach' },
  { href: '/service-areas/panama-city', text: 'Panama City' },
  { href: '/service-areas/lynn-haven', text: 'Lynn Haven' },
  { href: '/service-areas/callaway', text: 'Callaway' },
  { href: '/service-areas/springfield', text: 'Springfield' },
  { href: '/service-areas/parker', text: 'Parker' },
  { href: '/service-areas/laguna-beach', text: 'Laguna Beach' },
  { href: '/service-areas/mexico-beach', text: 'Mexico Beach' },
  { href: '/service-areas/fort-walton-beach', text: 'Fort Walton Beach' },
  { href: '/service-areas/niceville', text: 'Niceville' },
  { href: '/service-areas/crestview', text: 'Crestview' },
  { href: '/service-areas/mary-esther', text: 'Mary Esther' },
  { href: '/service-areas/shalimar', text: 'Shalimar' },
  { href: '/service-areas/valparaiso', text: 'Valparaiso' },
]

// Core pages internal links
export const corePageLinks: InternalLink[] = [
  { href: '/', text: 'homepage' },
  { href: '/about', text: 'about us' },
  { href: '/services', text: 'services' },
  { href: '/service-areas', text: 'service areas' },
  { href: '/pricing', text: 'pricing' },
  { href: '/contact', text: 'contact us' },
  { href: '/faq', text: 'FAQ' },
  { href: '/blog', text: 'blog' },
]

// Blog posts internal links
export const blogLinks: InternalLink[] = [
  { href: '/blog/ultimate-guide-junk-removal-30a-florida', text: 'ultimate guide to junk removal on 30A' },
  { href: '/blog/vacation-rental-cleanout-tips-property-managers', text: 'vacation rental cleanout tips' },
  { href: '/blog/construction-debris-removal-what-to-know', text: 'construction debris removal guide' },
  { href: '/blog/estate-cleanout-checklist-30a', text: 'estate cleanout checklist' },
  { href: '/blog/hot-tub-removal-process', text: 'hot tub removal process' },
  { href: '/blog/eco-friendly-junk-removal-30a', text: 'eco-friendly junk removal' },
  { href: '/blog/furniture-removal-tips-large-items', text: 'furniture removal tips' },
  { href: '/blog/property-management-junk-removal-guide', text: 'property management junk removal' },
  { href: '/blog/seasonal-cleanout-guide-30a-properties', text: 'seasonal cleanout guide' },
]

// Get random internal links for a page (excluding current page)
export function getRandomInternalLinks(
  currentPath: string,
  count: number = 10,
  includeServices: boolean = true,
  includeLocations: boolean = true,
  includeCore: boolean = true,
  includeBlog: boolean = true
): InternalLink[] {
  const allLinks: InternalLink[] = []

  if (includeServices) allLinks.push(...serviceLinks)
  if (includeLocations) allLinks.push(...locationLinks)
  if (includeCore) allLinks.push(...corePageLinks)
  if (includeBlog) allLinks.push(...blogLinks)

  // Filter out current page
  const filtered = allLinks.filter(link => link.href !== currentPath)

  // Shuffle and return requested count
  const shuffled = filtered.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Get contextual links for specific page types
export function getContextualLinks(pageType: 'service' | 'location' | 'blog' | 'core', currentPath: string): InternalLink[] {
  switch (pageType) {
    case 'service':
      // For service pages: link to locations, related services, pricing, contact
      return [
        ...locationLinks.slice(0, 4),
        ...serviceLinks.filter(s => s.href !== currentPath).slice(0, 3),
        { href: '/pricing', text: 'pricing' },
        { href: '/contact', text: 'contact us' },
        { href: '/faq', text: 'FAQ' },
      ]
    case 'location':
      // For location pages: link to services, nearby locations, blog posts
      return [
        ...serviceLinks.slice(0, 5),
        ...locationLinks.filter(l => l.href !== currentPath).slice(0, 3),
        ...blogLinks.slice(0, 2),
      ]
    case 'blog':
      // For blog pages: link to related services, locations, other blog posts
      return [
        ...serviceLinks.slice(0, 4),
        ...locationLinks.slice(0, 3),
        ...blogLinks.filter(b => b.href !== currentPath).slice(0, 3),
      ]
    case 'core':
      // For core pages: diverse mix
      return getRandomInternalLinks(currentPath, 10)
    default:
      return getRandomInternalLinks(currentPath, 10)
  }
}

// External links for authority and context (non-competitor)
export interface ExternalLink {
  href: string
  text: string
  rel?: string
}

export const externalLinks: ExternalLink[] = [
  {
    href: 'https://www.visitflorida.com/en-us/cities/south-walton.html',
    text: 'Visit Florida - South Walton',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.sowal.com/',
    text: 'South Walton Tourist Development Council',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.epa.gov/recycle',
    text: 'EPA Recycling Guidelines',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.habitat.org/',
    text: 'Habitat for Humanity',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.goodwill.org/',
    text: 'Goodwill Industries',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.waltonrealestate.com/',
    text: 'Walton County Real Estate Guide',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.destinlog.com/',
    text: 'Destin Log - Local News',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.30aescapes.com/',
    text: '30A Escapes Travel Guide',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.floridadep.gov/',
    text: 'Florida Department of Environmental Protection',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.architecturaldigest.com/story/seaside-florida',
    text: 'Architectural Digest - Seaside Florida',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.nps.gov/guis/index.htm',
    text: 'Gulf Islands National Seashore',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.weather.gov/mob/',
    text: 'National Weather Service - Gulf Coast',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.vrma.org/',
    text: 'Vacation Rental Management Association',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.buildinggreen.com/',
    text: 'BuildingGreen - Sustainable Construction',
    rel: 'nofollow external'
  },
  {
    href: 'https://www.thecurbsidechronicle.com/',
    text: 'The Curbside Chronicle - Waste Management News',
    rel: 'nofollow external'
  },
]

// Get random external links for a page
export function getExternalLinks(count: number = 5): ExternalLink[] {
  const shuffled = [...externalLinks].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

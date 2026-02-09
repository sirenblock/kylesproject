import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '@/lib/blog'
import config from '@/lib/config'

// Relester SEO Method: Priority Tier System
// 1.0 = Homepage (most authoritative)
// 0.9 = Primary conversion page (contact)
// 0.8 = Blog listing, pricing, service listing (discovery hubs)
// 0.7 = Service pages (core offer pages)
// 0.6 = Blog posts (content pages)
// 0.5 = Location pages (programmatic SEO pages)

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // PRIORITY 1.0: Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: config.siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // PRIORITY 0.9: Primary conversion page
  const conversionPages: MetadataRoute.Sitemap = [
    {
      url: `${config.siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // PRIORITY 0.8: Discovery hubs
  const discoveryPages: MetadataRoute.Sitemap = [
    '/blog',
    '/services',
    '/pricing',
    '/service-areas',
  ].map(route => ({
    url: `${config.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // PRIORITY 0.7: Service pages (hand-crafted, high-value)
  const servicePages: MetadataRoute.Sitemap = [
    '/services/property-management',
    '/services/one-time-hauls',
    '/services/construction-debris',
    '/services/vacation-rentals',
    '/services/estate-cleanouts',
    '/services/appliance-removal',
    '/services/furniture-removal',
    '/services/hot-tub-removal',
    '/services/donation-pickup',
    '/services/yard-debris',
    '/services/garage-cleanouts',
    '/services/office-furniture',
  ].map(route => ({
    url: `${config.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // PRIORITY 0.6: Blog posts (content pages)
  const blogSlugs = getAllBlogSlugs()
  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${config.siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // PRIORITY 0.5: Location pages (programmatic SEO)
  const locationPages: MetadataRoute.Sitemap = [
    '/service-areas/seaside',
    '/service-areas/rosemary-beach',
    '/service-areas/alys-beach',
    '/service-areas/watercolor',
    '/service-areas/grayton-beach',
    '/service-areas/santa-rosa-beach',
    '/service-areas/inlet-beach',
    '/service-areas/seacrest',
    '/service-areas/seagrove-beach',
    '/service-areas/blue-mountain-beach',
    '/service-areas/destin',
    '/service-areas/panama-city-beach',
  ].map(route => ({
    url: `${config.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // PRIORITY 0.6: Other pages (about, faq)
  const otherPages: MetadataRoute.Sitemap = [
    '/about',
    '/faq',
  ].map(route => ({
    url: `${config.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...homepage,
    ...conversionPages,
    ...discoveryPages,
    ...servicePages,
    ...blogPosts,
    ...locationPages,
    ...otherPages,
  ]
}

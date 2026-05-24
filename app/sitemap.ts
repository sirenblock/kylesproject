import { MetadataRoute } from 'next'
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog'
import { getAllServiceSlugs } from '@/lib/services'
import { getAllLocationSlugs } from '@/lib/locations'
import { getAllCountySlugs } from '@/lib/counties'
import config from '@/lib/config'

// Hardcoded "site content last meaningfully updated" date. Bump when shipping
// substantive content changes. Sitemap lastmod should reflect real edits, not
// the timestamp of the latest crawl -- Google deprioritizes always-fresh dates.
const SITE_CONTENT_UPDATED = new Date('2026-05-24')

// Relester SEO Method: Priority Tier System
// 1.0 = Homepage (most authoritative)
// 0.9 = Primary conversion page (contact)
// 0.8 = Blog listing, pricing, service listing (discovery hubs)
// 0.7 = Service pages (core offer pages)
// 0.6 = Blog posts (content pages)
// 0.5 = Location pages (programmatic SEO pages)

export default function sitemap(): MetadataRoute.Sitemap {
  // PRIORITY 1.0: Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: config.siteUrl,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // PRIORITY 0.9: Primary conversion page
  const conversionPages: MetadataRoute.Sitemap = [
    {
      url: `${config.siteUrl}/contact`,
      lastModified: SITE_CONTENT_UPDATED,
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
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // PRIORITY 0.7: Service pages (hand-crafted, high-value)
  const serviceSlugs = getAllServiceSlugs()
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map(slug => ({
    url: `${config.siteUrl}/services/${slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // PRIORITY 0.6: Blog posts -- use the post's actual lastUpdated/date
  const blogSlugs = getAllBlogSlugs()
  const blogPostEntries: MetadataRoute.Sitemap = blogSlugs.map(slug => {
    const post = getBlogPost(slug)
    const dateStr = post?.lastUpdated || post?.date
    const lastModified = dateStr ? new Date(dateStr) : SITE_CONTENT_UPDATED
    return {
      url: `${config.siteUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  // PRIORITY 0.7: County hub pages (pillar content)
  const countySlugs = getAllCountySlugs()
  const countyPages: MetadataRoute.Sitemap = countySlugs.map(slug => ({
    url: `${config.siteUrl}/service-areas/county/${slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // PRIORITY 0.5: Location pages (programmatic SEO)
  const locationSlugs = getAllLocationSlugs()
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map(slug => ({
    url: `${config.siteUrl}/service-areas/${slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // PRIORITY 0.6: Other pages (about, faq, our-work)
  const otherPages: MetadataRoute.Sitemap = [
    '/about',
    '/faq',
    '/our-work',
  ].map(route => ({
    url: `${config.siteUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // PRIORITY 0.3: Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${config.siteUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  return [
    ...homepage,
    ...conversionPages,
    ...discoveryPages,
    ...servicePages,
    ...countyPages,
    ...blogPostEntries,
    ...locationPages,
    ...otherPages,
    ...legalPages,
  ]
}

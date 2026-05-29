import { MetadataRoute } from 'next'
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog'
import { getAllIndustrySlugs } from '@/lib/industries'
import config from '@/lib/config'

// Hardcoded "site content last meaningfully updated" date. Bump when shipping
// substantive content changes. Sitemap lastmod should reflect real edits, not
// the timestamp of the latest crawl -- Google deprioritizes always-fresh dates.
const SITE_CONTENT_UPDATED = new Date('2026-05-29')

// Post-consolidation sitemap (2026-05-28 AI compliance audit).
// Templated /services/[name] (31), /service-areas/[town] (27),
// /service-areas/county/[county] (2), and 15 templated location
// blog posts have all been consolidated into the /services and
// /service-areas hub pages with anchor sections. Old URLs 308 to
// their new anchor destinations via next.config.ts redirects.

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

  // PRIORITY 0.8: Discovery hubs + consolidated /services + /service-areas
  const discoveryPages: MetadataRoute.Sitemap = [
    '/blog',
    '/services',
    '/pricing',
    '/service-areas',
    '/how-it-works',
    '/compare',
    '/seasonal/hurricane-prep',
    '/seasonal/snowbird-season',
  ].map((route) => ({
    url: `${config.siteUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // PRIORITY 0.6: Blog posts (now 39 after the 15 templated location
  // posts were filtered out per the audit consolidation)
  const stripQueryString = (url: string) => url.split('?')[0]
  const blogSlugs = getAllBlogSlugs()
  const blogPostEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => {
    const post = getBlogPost(slug)
    const dateStr = post?.lastUpdated || post?.date
    const lastModified = dateStr ? new Date(dateStr) : SITE_CONTENT_UPDATED
    return {
      url: `${config.siteUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      ...(post?.image ? { images: [stripQueryString(post.image)] } : {}),
    }
  })

  // PRIORITY 0.7: Industry vertical landing pages (B2B intent --
  // these survive the consolidation because they are distinct
  // verticals with substantively different content per page).
  const industrySlugs = getAllIndustrySlugs()
  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${config.siteUrl}/industries/${slug}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // PRIORITY 0.7: Interactive tools (high conversion intent)
  const toolPages: MetadataRoute.Sitemap = [
    '/tools',
    '/tools/hot-tub-cost-calculator',
    '/tools/junk-removal-cost-calculator',
  ].map((route) => ({
    url: `${config.siteUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // PRIORITY 0.6: Other pages
  const otherPages: MetadataRoute.Sitemap = [
    '/about',
    '/faq',
    '/our-work',
    '/reviews',
    '/glossary',
    '/industries',
  ].map((route) => ({
    url: `${config.siteUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // PRIORITY 0.3: Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${config.siteUrl}${route}`,
    lastModified: SITE_CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  return [
    ...homepage,
    ...conversionPages,
    ...discoveryPages,
    ...blogPostEntries,
    ...industryPages,
    ...toolPages,
    ...otherPages,
    ...legalPages,
  ]
}

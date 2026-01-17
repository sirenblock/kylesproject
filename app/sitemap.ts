import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://30ajunkremoval.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/services/property-management',
    '/services/one-time-hauls',
    '/services/construction-debris',
    '/pricing',
    '/about',
    '/contact',
    '/faq',
    '/service-areas',
    '/service-areas/seaside',
    '/service-areas/rosemary-beach',
    '/service-areas/alys-beach',
    '/service-areas/watercolor',
    '/service-areas/grayton-beach',
    '/service-areas/santa-rosa-beach',
    '/service-areas/inlet-beach',
    '/service-areas/seacrest',
    '/service-areas/destin',
    '/service-areas/panama-city-beach',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/service') ? 0.8 : 0.6,
  }))
}

// Relester SEO Method: LocalBusiness Schema for Location Pages
// Creates location-specific schema for local search visibility

import config from '@/lib/config'

interface LocationBusinessSchemaProps {
  locationName: string
  locationSlug: string
  description: string
  latitude?: number
  longitude?: number
}

export function LocationBusinessSchema({
  locationName,
  locationSlug,
  description,
  latitude,
  longitude,
}: LocationBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${config.siteName} - ${locationName}`,
    description: `Professional junk removal services in ${locationName}, FL. ${description.slice(0, 200)}`,
    url: `${config.siteUrl}/service-areas/${locationSlug}`,
    telephone: config.phoneLink.replace('tel:', ''),
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    ...(latitude && longitude && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude,
        longitude,
      },
    }),
    areaServed: {
      '@type': 'City',
      name: `${locationName}, Florida`,
    },
    priceRange: '$$',
    serviceType: 'Junk Removal Service',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Junk Removal Services',
      itemListElement: config.services.slice(0, 6).map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

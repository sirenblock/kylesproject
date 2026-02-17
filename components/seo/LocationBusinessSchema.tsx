import config from '@/lib/config'
import { PHONE_NUMBER } from '@/lib/utils'

const siteUrl = config.siteUrl

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
    '@id': `${siteUrl}/service-areas/${locationSlug}#localbusiness`,
    name: `30A Junk Removal - ${locationName}`,
    description,
    url: `${siteUrl}/service-areas/${locationSlug}`,
    telephone: `+1${PHONE_NUMBER}`,
    image: `${siteUrl}/images/og-image.jpg`,
    logo: `${siteUrl}/images/logo.png`,
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    ...(latitude && longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude,
            longitude,
          },
        }
      : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    parentOrganization: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Global LocalBusiness schema for the entire site.
 * Placed in layout.tsx to appear on every page.
 */
export function GlobalLocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: '30A Junk Removal',
    description: config.siteDescription,
    url: siteUrl,
    telephone: `+1${PHONE_NUMBER}`,
    email: config.email,
    image: `${siteUrl}/images/og-image.jpg`,
    logo: `${siteUrl}/images/logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rosa Beach',
      addressRegion: 'FL',
      postalCode: '32459',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3831,
      longitude: -86.2277,
    },
    areaServed: config.locations.map((loc) => ({
      '@type': 'City',
      name: loc,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: Object.values(config.socialLinks).filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

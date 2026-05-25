import config from '@/lib/config'
import { PHONE_NUMBER } from '@/lib/utils'

const siteUrl = config.siteUrl

interface LocationBusinessSchemaProps {
  locationName: string
  locationSlug: string
  description: string
  latitude?: number
  longitude?: number
  zipCodes?: string[]
  county?: string
}

export function LocationBusinessSchema({
  locationName,
  locationSlug,
  description,
  latitude,
  longitude,
  zipCodes,
  county,
}: LocationBusinessSchemaProps) {
  const areaServed: Record<string, unknown>[] = [
    {
      '@type': 'City',
      name: locationName,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
  ]

  if (zipCodes) {
    zipCodes.forEach((zip) => {
      areaServed.push({
        '@type': 'PostalAddress',
        postalCode: zip,
        addressRegion: 'FL',
        addressCountry: 'US',
      })
    })
  }

  if (county) {
    areaServed.push({
      '@type': 'AdministrativeArea',
      name: `${county} County, FL`,
    })
  }

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
    areaServed,
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
      ...(zipCodes?.[0] ? { postalCode: zipCodes[0] } : {}),
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '18:00',
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
    alternateName: ['30A Junk Removal LLC', 'Thirty-A Junk Removal'],
    description: config.siteDescription,
    url: siteUrl,
    telephone: `+1${PHONE_NUMBER}`,
    email: config.email,
    image: `${siteUrl}/images/og-image.jpg`,
    logo: `${siteUrl}/images/logo.png`,
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'USD',
    knowsLanguage: ['en-US', 'English'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '307 Sand Oak Blvd',
      addressLocality: 'Panama City Beach',
      addressRegion: 'FL',
      postalCode: '32413',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2105,
      longitude: -85.8814,
    },
    // GeoCircle covers the actual operational service radius -- 30A corridor + PCB
    // ~25-mile radius from Panama City Beach base of operations
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.3000,
        longitude: -86.1000,
      },
      geoRadius: '40000', // meters (~25 miles)
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Junk Removal Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vacation Rental Junk Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estate Cleanouts' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Debris Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Appliance Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hot Tub Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hurricane Debris Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Same-Day Junk Removal' } },
      ],
    },
    slogan: 'Same-Day Junk Removal for 30A & Panama City Beach',
    foundingDate: '2024',
    sameAs: Object.values(config.socialLinks).filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

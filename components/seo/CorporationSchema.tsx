import config from '@/lib/config'
import { PHONE_NUMBER } from '@/lib/utils'

const siteUrl = config.siteUrl

// WebSite schema is one of the strongest entity signals -- it tells
// Google "this domain is this entity" and is required to opt into the
// SERP Sitelinks Search Box feature. We emit identification only
// (no SearchAction) since we do not currently have on-site search.
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: '30A Junk Removal',
    description: config.siteDescription,
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    inLanguage: 'en-US',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function CorporationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: '30A Junk Removal',
    url: siteUrl,
    // Logo + image point to Next.js dynamic icon/OG endpoints which
    // ARE served (verified 200 in live audit). Previous hardcoded
    // /images/logo.png and /images/og-image.jpg returned 404 and
    // failed Rich Results Test for BlogPosting publisher.logo.
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/apple-icon`,
      width: 180,
      height: 180,
    },
    image: `${siteUrl}/opengraph-image`,
    description: config.siteDescription,
    telephone: `+1${PHONE_NUMBER}`,
    email: config.email,
    // Canonical NAP -- aligned with LocalBusiness schema. Previously
    // Organization used Santa Rosa Beach FL 32459 while LocalBusiness
    // used 307 Sand Oak Blvd Panama City Beach FL 32413. NAP
    // inconsistency is an E-E-A-T trust signal flag for Google.
    address: {
      '@type': 'PostalAddress',
      streetAddress: '307 Sand Oak Blvd',
      addressLocality: 'Panama City Beach',
      addressRegion: 'FL',
      postalCode: '32413',
      addressCountry: 'US',
    },
    sameAs: Object.values(config.socialLinks).filter(Boolean),
    founder: {
      '@type': 'Person',
      name: config.ownerName,
      jobTitle: config.ownerTitle,
    },
    areaServed: config.locations.map((loc) => ({
      '@type': 'City',
      name: loc,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    })),
    knowsAbout: [
      'Junk Removal',
      'Furniture Removal',
      'Appliance Removal',
      'Construction Debris Removal',
      'Estate Cleanouts',
      'Vacation Rental Cleanouts',
      'Property Management Services',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

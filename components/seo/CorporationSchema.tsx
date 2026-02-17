import config from '@/lib/config'
import { PHONE_NUMBER } from '@/lib/utils'

const siteUrl = config.siteUrl

export function CorporationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: '30A Junk Removal',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/og-image.jpg`,
    description: config.siteDescription,
    telephone: `+1${PHONE_NUMBER}`,
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rosa Beach',
      addressRegion: 'FL',
      postalCode: '32459',
      addressCountry: 'US',
    },
    sameAs: [
      config.socialLinks.facebook,
    ],
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

// Corporation Schema - for businesses that are incorporated (LLC, Inc, Corp)
// Added alongside Organization schema for stronger entity signals

import config from '@/lib/config'

export function CorporationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: config.businessName,
    alternateName: config.siteName,
    url: config.siteUrl,
    logo: `${config.siteUrl}/logo.svg`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

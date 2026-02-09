// Relester SEO Method: Person/Author Schema for E-E-A-T
// Establishes Experience, Expertise, Authority, Trust for blog content

import config from '@/lib/config'

export function PersonSchema() {
  const personSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: config.ownerName,
    url: config.siteUrl,
    image: `${config.siteUrl}/logo.svg`,
    jobTitle: config.ownerTitle,
    worksFor: {
      '@type': 'Organization',
      name: config.businessName,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

// Relester SEO Method: Person/Author Schema for E-E-A-T
// Establishes Experience, Expertise, Authority, Trust for blog content

import config from '@/lib/config'

export function PersonSchema() {
  const sameAs: string[] = []
  if (config.socialLinks.facebook) sameAs.push(config.socialLinks.facebook)
  if (config.socialLinks.instagram) sameAs.push(config.socialLinks.instagram)

  const personSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: config.ownerName,
    url: config.siteUrl,
    image: `${config.siteUrl}/logo.svg`,
    jobTitle: config.ownerTitle,
    description: `${config.ownerTitle} at ${config.businessName}. Professional junk removal services along the 30A corridor in Florida.`,
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': `${config.siteUrl}#localbusiness`,
      name: config.businessName,
    },
    ...(sameAs.length > 0 && { sameAs }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

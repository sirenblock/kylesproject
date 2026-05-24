const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.30ajunkremoval.com'

// AboutPage schema for /about -- combines AboutPage with Organization signal
// for E-E-A-T per the senior SEO playbook
export function AboutPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About 30A Junk Removal',
    description:
      '30A Junk Removal LLC is a locally-owned junk removal company serving the 30A corridor, Panama City Beach, and the Walton and Bay County markets. Licensed, insured, and based at 307 Sand Oak Blvd, Panama City Beach, FL.',
    url: `${siteUrl}/about`,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/og-image.jpg`,
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
      url: siteUrl,
      telephone: '(850) 368-3495',
      email: 'contact@30ajunkremoval.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '307 Sand Oak Blvd',
        addressLocality: 'Panama City Beach',
        addressRegion: 'FL',
        postalCode: '32413',
        addressCountry: 'US',
      },
      foundingDate: '2024',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Walton County, Florida' },
        { '@type': 'AdministrativeArea', name: 'Bay County, Florida' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Blog/CollectionPage schema for /blog hub -- declares this page as the
// authoritative blog index per Schema.org Blog type
export function BlogHubSchema({ postCount }: { postCount: number }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteUrl}/blog#blog`,
    name: '30A Junk Removal Blog',
    description: `In-depth guides on junk removal, disposal, and property service across 30A and Panama City Beach. ${postCount} articles covering vacation rental operations, community-specific logistics, item disposal, cost guides, and Florida-specific regulations.`,
    url: `${siteUrl}/blog`,
    publisher: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
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

// CollectionPage schema for /services and /service-areas hubs -- declares
// these as topical-authority index pages per the senior SEO playbook
export function CollectionPageSchema({
  name,
  description,
  url,
  numberOfItems,
}: {
  name: string
  description: string
  url: string
  numberOfItems: number
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${siteUrl}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: '30A Junk Removal',
      url: siteUrl,
    },
    publisher: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQPage schema for /pricing -- enables FAQ rich results on the highest-
// commercial-intent page per senior SEO playbook SERP feature targeting
export function PricingFAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

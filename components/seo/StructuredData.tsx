import { PHONE_NUMBER } from '@/lib/utils'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://30ajunkremoval.com'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: '30A Junk Removal',
    description: 'Premium junk removal services for 30A Florida. From quick truck loads to full estate cleanouts.',
    url: siteUrl,
    telephone: `+1${PHONE_NUMBER}`,
    email: '30apcbjunkremoval@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rosa Beach',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3831,
      longitude: -86.2277,
    },
    areaServed: [
      { '@type': 'City', name: 'Seaside', addressRegion: 'FL' },
      { '@type': 'City', name: 'Rosemary Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Alys Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'WaterColor', addressRegion: 'FL' },
      { '@type': 'City', name: 'Grayton Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Santa Rosa Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Inlet Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Seacrest', addressRegion: 'FL' },
      { '@type': 'City', name: 'Destin', addressRegion: 'FL' },
      { '@type': 'City', name: 'Panama City Beach', addressRegion: 'FL' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    priceRange: '$150-$1200',
    paymentAccepted: ['Cash', 'Credit Card', 'Venmo', 'Zelle'],
    currenciesAccepted: 'USD',
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Junk Removal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'One-Time Junk Removal',
            description: 'Quick junk removal for any size job',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Debris Removal',
            description: 'Renovation and construction cleanup',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Management Services',
            description: 'White-glove service for vacation rentals and estates',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Estate Cleanouts',
            description: 'Complete clearing of homes and estates',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  url
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: '30A Junk Removal',
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({
  questions
}: {
  questions: Array<{ question: string; answer: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
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

export function BreadcrumbSchema({
  items
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  author,
  publishDate,
  image,
  url
}: {
  title: string
  description: string
  author: string
  publishDate: string
  image: string
  url: string
}) {
  const authorSchema = {
    '@type': 'Person',
    name: author,
    memberOf: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: '30A Junk Removal'
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: authorSchema,
    datePublished: publishDate,
    dateModified: publishDate,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${image}`
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: '30A Junk Removal',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${url}`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: '30A Junk Removal',
    alternateName: ['30A PCB Junk Removal', '30A Junk Removal Service'],
    description: 'Premium junk removal services for 30A Florida. From quick truck loads to full estate cleanouts, we serve all communities along the Emerald Coast.',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 600,
      height: 60
    },
    image: `${siteUrl}/logo.png`,
    telephone: `+1${PHONE_NUMBER}`,
    email: '30apcbjunkremoval@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rosa Beach',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3831,
      longitude: -86.2277,
    },
    areaServed: [
      { '@type': 'City', name: 'Seaside', addressRegion: 'FL' },
      { '@type': 'City', name: 'Rosemary Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Alys Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'WaterColor', addressRegion: 'FL' },
      { '@type': 'City', name: 'Grayton Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Santa Rosa Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Inlet Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Seacrest', addressRegion: 'FL' },
      { '@type': 'City', name: 'Blue Mountain Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Seagrove Beach', addressRegion: 'FL' },
      { '@type': 'City', name: 'Destin', addressRegion: 'FL' },
      { '@type': 'City', name: 'Panama City Beach', addressRegion: 'FL' },
    ],
    sameAs: [
      // Add social media profiles when available
      // 'https://www.facebook.com/30ajunkremoval',
      // 'https://www.instagram.com/30ajunkremoval',
    ],
    foundingDate: '2020',
    slogan: 'Premium junk removal services for 30A beach communities',
    knowsAbout: [
      'Junk Removal',
      'Construction Debris Removal',
      'Estate Cleanouts',
      'Vacation Rental Services',
      'Furniture Removal',
      'Appliance Removal',
      'Hot Tub Removal',
      'Property Management Services'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  url
}: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; url?: string }>
  totalTime?: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: `${siteUrl}${url}`,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: `${siteUrl}${step.url}` })
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema() {
  // Minimal schema without fake reviews - can be populated with real reviews later
  // This component is kept for backwards compatibility but renders minimal schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: '30A Junk Removal'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

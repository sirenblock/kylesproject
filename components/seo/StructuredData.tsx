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
    // TODO: Add Google Business Profile URL and social media profiles
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
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

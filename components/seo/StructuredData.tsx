import { PHONE_NUMBER } from '@/lib/utils'
import config from '@/lib/config'

const siteUrl = config.siteUrl

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
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
    },
    areaServed: config.locations.map((loc) => ({
      '@type': 'City',
      name: loc,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
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

export function FAQSchema({
  questions
}: {
  questions: Array<{ question: string; answer: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Speakable schema -- helps voice assistants (Google Assistant, Alexa,
    // Siri) identify the answer content that's appropriate for voice
    // playback. Per senior SEO playbook: emerging signal for voice search
    // results that Google explicitly references in their structured data
    // documentation.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable]', '.faq-answer'],
    },
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
  modifiedDate,
  image,
  url,
  wordCount,
  articleSection,
  keywords,
}: {
  title: string
  description: string
  author: string
  publishDate: string
  modifiedDate?: string
  image: string
  url: string
  wordCount?: number
  articleSection?: string
  keywords?: string[]
}) {
  // BlogPosting schema enhanced with Google-recommended properties:
  // wordCount (signals comprehensive content), articleSection (categorization),
  // publisher (Organization reference for authority), inLanguage (locale targeting).
  const authorSchema = {
    '@type': 'Organization',
    name: author,
    url: siteUrl,
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: authorSchema,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    image: {
      '@type': 'ImageObject',
      url: image.startsWith('http') ? image : `${siteUrl}${image}`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${url}`
    },
    inLanguage: 'en-US',
  }

  if (wordCount) schema.wordCount = wordCount
  if (articleSection) schema.articleSection = articleSection
  if (keywords && keywords.length > 0) schema.keywords = keywords.join(', ')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// OrganizationSchema removed due to validation issues

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
  // AggregateRating is now embedded in GlobalLocalBusinessSchema (layout.tsx)
  return null
}

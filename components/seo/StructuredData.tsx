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

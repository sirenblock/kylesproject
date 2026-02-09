# Relester SEO Method - Pillar 2: Structured Data & Schema

Every page type gets its own JSON-LD schema. This is what generates rich results in Google - star ratings, FAQ dropdowns, business info cards, author details. Without structured data, you're invisible in enriched search results.

---

## Schema Type by Page

| Page Type | Schema Types | Rich Result |
|-----------|-------------|-------------|
| Homepage | Organization + Corporation | Knowledge panel, logo, contact |
| Blog posts | Person + FAQPage | Author info + FAQ dropdowns |
| Service pages | FAQPage | FAQ dropdowns |
| Location pages | LocalBusiness | Local business card, map |

---

## 1. Organization Schema (Homepage)

Tells Google about your business entity. Appears in the Knowledge Panel.

```tsx
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: config.siteName,
  alternateName: 'Your Brand - Your Tagline',
  url: config.siteUrl,
  logo: `${config.siteUrl}/logo.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-555-5555',
    contactType: 'customer service',
    email: config.email,
  },
  sameAs: [
    'https://twitter.com/yourbrand',
    'https://www.linkedin.com/company/yourbrand',
    'https://www.facebook.com/yourbrand',
  ],
}
```

### Fields Explained

| Field | Required | Notes |
|-------|----------|-------|
| `name` | Yes | Exact business name as registered |
| `alternateName` | No | Common alternative name or tagline |
| `url` | Yes | Homepage URL (canonical) |
| `logo` | Yes | Full URL to logo (SVG or PNG, min 112x112px) |
| `contactPoint` | Yes | Phone + email for customer service |
| `sameAs` | No | Links to all official social profiles |

---

## 2. Corporation Schema (Homepage)

Added alongside Organization for businesses that are incorporated entities.

```tsx
const corporationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: config.siteName,
  alternateName: 'Your Brand - Your Tagline',
  url: config.siteUrl,
  logo: `${config.siteUrl}/logo.svg`,
}
```

**When to use:** If your business is an LLC, Inc, or Corp. If sole proprietorship, skip this and just use Organization.

**Both schemas go on the homepage:**

```tsx
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchema) }}
/>
```

---

## 3. Person/Author Schema (Blog Posts)

Establishes E-E-A-T (Experience, Expertise, Authority, Trust) for blog content.

```tsx
function buildPersonSchema() {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Founder Name',
    url: config.siteUrl,
    image: `${config.siteUrl}/logo.svg`,
    jobTitle: 'CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'Your Brand, LLC',
    },
  }
}
```

### Key Details

- **`name`:** The actual person behind the content (not brand name)
- **`image`:** Can be the company logo or a headshot
- **`jobTitle`:** Establishes authority (CEO, Founder, Lead Engineer, etc.)
- **`worksFor`:** Links the person to the organization
- Goes on **every blog post page** - establishes consistent authorship

---

## 4. FAQPage Schema (Blog Posts + Service Pages)

**This is the highest-ROI schema type.** FAQ rich results appear as expandable dropdowns directly in Google search results, dramatically increasing click-through rate.

### Schema Structure

```tsx
function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
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
}
```

### Blog Post FAQs (Dynamic - Extracted from Content)

Blog posts have FAQs embedded in their WordPress/CMS content. Extract them automatically:

#### Extraction Strategy (Two-Pass)

```tsx
function extractFaqs(html: string): { question: string; answer: string }[] {
  // PASS 1: Try embedded JSON-LD script tags first (most reliable)
  const scriptPattern = /<script[^>]*>([\s\S]*?)<\/script>/gi
  let scriptMatch
  while ((scriptMatch = scriptPattern.exec(html)) !== null) {
    try {
      const data = JSON.parse(scriptMatch[1].trim())
      if (data['@type'] === 'FAQPage' && data.mainEntity) {
        return data.mainEntity.map((q) => ({
          question: q.name,
          answer: q.acceptedAnswer?.text ?? '',
        }))
      }
    } catch {
      // Not valid JSON, skip
    }
  }

  // PASS 2: Extract from visible <strong>Question?</strong> patterns
  const faqs = []
  const pairPattern =
    /<p[^>]*>\s*<strong[^>]*>([^<]+\?)\s*<\/strong>\s*<\/p>\s*<p[^>]*>([\s\S]*?)<\/p>/gi
  let match
  while ((match = pairPattern.exec(html)) !== null) {
    const question = decodeHtmlEntities(match[1]).trim()
    const answer = decodeHtmlEntities(match[2].replace(/<[^>]*>/g, '')).trim()
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }
  return faqs
}
```

#### HTML Entity Decoder

CMS content often contains HTML entities. Decode them before using in schema:

```tsx
function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}
```

### Service Page FAQs (Static - Hardcoded)

Service pages have fixed FAQs defined in code:

```tsx
const serviceFAQs = [
  {
    question: 'What is [Your Service]?',
    answer: '[Your Service] provides [description]. We serve [audience] with [benefit].',
  },
  {
    question: 'Who can use your services?',
    answer: 'Our services are available to [audience 1], [audience 2], and [audience 3].',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out our online intake form. We will review and provide a quote within 24 hours.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide services in [coverage area]. Our [differentiator].',
  },
]
```

**Rule:** 4-9 FAQs per page. Each answer should be 1-3 sentences (40-60 words).

---

## 5. LocalBusiness Schema (Location Pages)

For programmatic SEO pages targeting "[service] in [city]" searches.

### Schema Builder

```tsx
function buildLocalBusinessSchema(slug: string, title: string) {
  const location = extractLocationFromSlug(slug)
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.siteName,
    description: `Professional [service] in ${location ? `${location.city}, ${location.state}` : 'your area'}. [Value proposition].`,
    url: `${config.siteUrl}/${slug}`,
    telephone: '+1-555-555-5555',
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location?.city ?? '',
      addressRegion: location?.state ?? '',
      addressCountry: 'US',
    },
    areaServed: location
      ? {
          '@type': 'City',
          name: `${location.city}, ${location.state}`,
        }
      : undefined,
    priceRange: '$$',
    serviceType: 'Your Service Type',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Service Type A',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Service Type B',
          },
        },
      ],
    },
  }
}
```

### Location Extraction from Slug

Programmatic SEO pages have structured slugs like `service-type-in-city-state`. Extract city and state:

```tsx
function extractLocationFromSlug(slug: string): { city: string; state: string } | null {
  const prefixes = [
    'your-service-in-',
    'your-service-services-in-',
    'your-service-design-in-',
  ]
  for (const prefix of prefixes) {
    if (slug.startsWith(prefix)) {
      const location = slug.slice(prefix.length)
      const parts = location.split('-')
      const stateCode = parts.pop()?.toUpperCase() ?? ''
      const city = parts
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ')
      return { city, state: stateCode }
    }
  }
  return null
}
```

---

## 6. Rendering Schemas in React/Next.js

### Pattern

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### Placement Rules

- Place `<script>` tags **inside** `<main>` at the top of the page component
- Multiple schemas on the same page? Use separate `<script>` tags for each
- Conditional schemas: Only render if data exists

```tsx
{/* Always render Person schema on blog posts */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
/>

{/* Only render FAQ schema if FAQs were extracted */}
{faqSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  />
)}
```

---

## 7. Schema + UI Component Pairing

Every schema should have a matching visual component. Google validates that structured data matches visible content.

| Schema | Visual Component | Behavior |
|--------|-----------------|----------|
| FAQPage | `<BlogFAQ>` accordion | Click to expand, animated height transition |
| Person | Author byline (optional) | Name, title, photo |
| Organization | Footer branding | Company name, contact info, links |
| LocalBusiness | Location hero + sidebar | City name in H1, contact card |

### FAQ Accordion Component

```tsx
'use client'
import { useState } from 'react'

export default function BlogFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="my-10 rounded-2xl border p-6">
      <h2 className="mb-5 text-xl font-bold">Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="overflow-hidden rounded-lg border">
          <button
            className="flex w-full items-center justify-between p-4"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold">{faq.question}</span>
            <svg className={`h-4 w-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all ${
            openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

**Critical:** The FAQ component renders the same Q&A pairs that are in the FAQPage schema. Google will penalize if schema content doesn't match visible page content.

---

## 8. Removing Duplicate Schema from CMS Content

When migrating from platforms like Webflow, old JSON-LD schemas may be embedded in post content. Remove them:

```tsx
function removeSchemaBlocks(html: string): string {
  // Find markers: &#8220;@context&#8221; or "@context" in HTML
  const markerPattern = /&#8220;@(?:context|type)&#8221;|"@(?:context|type)"/gi
  const markers = []
  let m
  while ((m = markerPattern.exec(html)) !== null) {
    markers.push(m.index)
  }
  if (markers.length === 0) return html

  // For each marker, find the wrapping <div> or <p> and remove it
  const regions = []
  for (const markerIdx of markers) {
    const searchStart = Math.max(0, markerIdx - 300)
    const before = html.slice(searchStart, markerIdx)

    // Find the opening tag before the marker
    const openerPattern = /<(div|p)[^>]*>\s*[{[]/gi
    let lastOpener = null
    let om
    while ((om = openerPattern.exec(before)) !== null) {
      lastOpener = { tag: om[1], pos: searchStart + om.index, len: om[0].length }
    }
    if (!lastOpener) continue

    // Find matching closing tag (handle nesting)
    const tag = lastOpener.tag
    let depth = 1
    let searchPos = lastOpener.pos + lastOpener.len
    const openRe = new RegExp(`<${tag}[^>]*>`, 'gi')
    const closeRe = new RegExp(`</${tag}>`, 'gi')

    while (depth > 0 && searchPos < html.length) {
      openRe.lastIndex = searchPos
      closeRe.lastIndex = searchPos
      const nextOpen = openRe.exec(html)
      const nextClose = closeRe.exec(html)
      if (!nextClose) break
      if (nextOpen && nextOpen.index < nextClose.index) {
        depth++
        searchPos = nextOpen.index + nextOpen[0].length
      } else {
        depth--
        if (depth === 0) {
          regions.push([lastOpener.pos, nextClose.index + nextClose[0].length])
        } else {
          searchPos = nextClose.index + nextClose[0].length
        }
      }
    }
  }

  // Remove regions from end to start (preserve indices)
  regions.sort((a, b) => b[0] - a[0])
  let result = html
  for (const [start, end] of regions) {
    result = result.slice(0, start) + result.slice(end)
  }
  return result
}
```

This handles the complex case where JSON-LD blocks are wrapped in `<div>` or `<p>` tags with nested HTML. The algorithm finds `@context` markers, walks backward to find the opening tag, then walks forward with depth tracking to find the matching close tag.

---

## Schema Validation Checklist

- [ ] Homepage has Organization schema
- [ ] Homepage has Corporation schema (if applicable)
- [ ] Every blog post has Person schema
- [ ] Every blog post with FAQs has FAQPage schema
- [ ] Every service page has FAQPage schema
- [ ] Every location page has LocalBusiness schema
- [ ] FAQ schema data matches visible FAQ component
- [ ] All schemas pass Google's Rich Results Test
- [ ] Old embedded schemas are removed from CMS content
- [ ] `application/ld+json` script tags are properly escaped

# Relester SEO Method - Pillar 5: CMS Integration & Data Fetching

How to wire a headless CMS to Next.js. Uses WordPress + WPGraphQL as the reference pattern, but the architecture works with any GraphQL CMS (Hygraph, Contentful, Sanity via plugin).

---

## 1. GraphQL Client

The single function that all queries go through. Handles caching, error handling, preview auth, and ISR tagging.

```tsx
// lib/functions.ts
import config from '@/lib/config'
import { GraphQLResponse, SearchResults } from '@/lib/types'

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  preview = false
): Promise<GraphQLResponse<T>> {
  try {
    const graphqlUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL
    if (!graphqlUrl) {
      throw new Error('Missing GraphQL URL environment variable!')
    }

    const refreshToken = process.env.NEXTJS_AUTH_REFRESH_TOKEN

    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    }

    // Preview mode: attach auth token
    if (preview && refreshToken) {
      headers['Authorization'] = `Bearer ${refreshToken}`
    }

    // Determine cache tags from query content
    const slug = variables?.slug || variables?.id || 'unknown'
    let contentType = 'content'
    if (query.includes('posts')) contentType = 'post'
    else if (query.includes('pages')) contentType = 'page'

    const response = await fetch(graphqlUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: {
        tags: [slug, 'graphql', `type:${contentType}`],
        revalidate: config.revalidate,
      },
    })

    if (!response.ok) {
      console.error('Response Status:', response.status)
      throw new Error(response.statusText)
    }

    const data = await response.json()

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors)
      return { data: undefined, errors: data.errors }
    }

    return data
  } catch (error) {
    console.error('Fetch error:', error)
    return {
      data: undefined,
      errors: [{ message: error instanceof Error ? error.message : 'Unknown error' }],
    }
  }
}
```

### Key Design Decisions

| Decision | Why |
|----------|-----|
| Returns `{ data, errors }` instead of throwing | Allows graceful degradation - pages render with fallback content instead of crashing |
| Cache tags include slug + content type | Enables targeted revalidation (invalidate one post without rebuilding all) |
| `revalidate` from config | Single source of truth for ISR timing (default: 60 seconds) |
| Preview auth via Bearer token | WordPress JWT auth for draft content |

---

## 2. Type Definitions

### Core Types

```tsx
// lib/types.d.ts

// Re-export CMS types from generated file (see Section 8: Code Generation)
export type { Page, Post } from './generated'

export interface DynamicPageProps {
  params: Promise<{
    slug: string
  }>
}

export interface SearchResults {
  id: number
  title: string
  url: string
  type: string
  subtype: string
}

export interface Children {
  children: React.ReactNode
}

export interface GraphQLResponse<T = any> {
  data?: T
  errors?: Array<{ message: string }>
}
```

### Rules

- CMS-specific types (Post, Page, etc.) are **auto-generated** from the GraphQL schema - never hand-write them
- Framework types (DynamicPageProps, GraphQLResponse) are hand-written since they don't come from the CMS
- Use `.d.ts` extension for type-only files - no runtime code

---

## 3. Query File Pattern

One file per query. Each file exports a default async function that calls `fetchGraphQL`.

### Directory Structure

```
lib/
  queries/
    getAllPosts.ts        # Fetch all posts (paginated)
    getAllPages.ts        # Fetch all pages (paginated)
    getPostBySlug.ts     # Fetch single post
    getPageBySlug.ts     # Fetch single page
    getMenuBySlug.ts     # Fetch navigation menu
    getCategoryBySlug.ts # Fetch category + its posts
    getTagBySlug.ts      # Fetch tag + its posts
    getPreview.ts        # Fetch draft content (preview mode)
```

### Single Item Query

```tsx
// lib/queries/getPostBySlug.ts
import { fetchGraphQL } from '@/lib/functions'
import { Post } from '@/lib/types'

export default async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        databaseId
        date
        modified
        content(format: RENDERED)
        title(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        author {
          node {
            name
            avatar { url }
          }
        }
        tags {
          nodes {
            databaseId
            name
          }
        }
        categories {
          nodes {
            databaseId
            name
          }
        }
        seo {
          metaDesc
          title
          opengraphDescription
        }
      }
    }
  `

  const response = await fetchGraphQL(query, { slug })

  if (!response?.data?.post) {
    return null
  }

  return response.data.post as Post
}
```

### Key SEO Fields in Queries

Every content query **must** include these fields for SEO:

```graphql
seo {
  metaDesc              # Yoast/RankMath meta description
  title                 # Yoast/RankMath custom title
  opengraphDescription  # OG description (fallback for metaDesc)
}
featuredImage {
  node {
    altText             # Image alt text (accessibility + SEO)
    sourceUrl           # Full image URL
    mediaDetails {
      height            # For Next.js Image component
      width
    }
  }
}
```

**SEO Plugin Support:** This works with both Yoast SEO and RankMath - both expose the `seo` field through WPGraphQL extensions.

---

## 4. Cursor-Based Pagination

GraphQL APIs cap results per request (typically 100). Use cursor-based pagination to fetch everything.

```tsx
// lib/queries/getAllPosts.ts
import { fetchGraphQL } from '@/lib/functions'
import { Post } from '@/lib/types'

export default async function getAllPosts() {
  let allNodes: Post[] = []
  let hasNextPage = true
  let endCursor: string | null = null

  while (hasNextPage) {
    const afterClause: string = endCursor ? `, after: "${endCursor}"` : ''
    const query = `
      query GetAllPosts {
        posts(first: 100${afterClause}, where: {status: PUBLISH}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            databaseId
            date
            modified
            title
            slug
            excerpt(format: RENDERED)
            featuredImage {
              node {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
            seo {
              metaDesc
              title
            }
          }
        }
      }
    `

    const response = await fetchGraphQL(query)
    if (!response?.data?.posts?.nodes) break

    allNodes = [...allNodes, ...response.data.posts.nodes]
    hasNextPage = response.data.posts.pageInfo.hasNextPage
    endCursor = response.data.posts.pageInfo.endCursor
  }

  return allNodes as Post[]
}
```

### Pagination Pattern

```
Request 1: first: 100                    → nodes[0..99],  endCursor: "abc"
Request 2: first: 100, after: "abc"      → nodes[100..199], endCursor: "def"
Request 3: first: 100, after: "def"      → nodes[200..250], hasNextPage: false
Result:    allNodes = nodes[0..250]
```

**Use this for:**
- Sitemap generation (needs all slugs)
- Blog listing pages (needs all posts for filtering/sorting)
- Static path generation

**Do NOT use for:**
- Single post/page queries (use `getPostBySlug` instead)
- Search (use REST API, see Section 6)

---

## 5. Page-Level Data Fetching

### Blog Post Page

```tsx
// app/blog/[slug]/page.tsx
import getPostBySlug from '@/lib/queries/getPostBySlug'
import { notFound } from 'next/navigation'
import type { DynamicPageProps } from '@/lib/types'

export default async function BlogPost({ params }: DynamicPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Render post...
}
```

### Dynamic Metadata

```tsx
export async function generateMetadata({ params }: DynamicPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  // Metadata fallback chain: Yoast title → post title → default
  const title = post.seo?.title?.replace(/ - .*$/, '') || post.title || 'Untitled'
  const description =
    post.seo?.metaDesc ||
    post.seo?.opengraphDescription ||
    `Read about ${post.title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${config.siteUrl}/blog/${slug}`,
      images: post.featuredImage?.node?.sourceUrl
        ? [{ url: post.featuredImage.node.sourceUrl }]
        : [],
    },
    alternates: {
      canonical: `${config.siteUrl}/blog/${slug}`,
    },
  }
}
```

### Metadata Fallback Chain

```
Title:       seo.title → post.title → config.siteName
Description: seo.metaDesc → seo.opengraphDescription → generated from title
Image:       featuredImage.sourceUrl → null (no default OG image)
Canonical:   Always explicitly set from config.siteUrl + slug
```

---

## 6. REST API Search

GraphQL is great for structured queries but REST is simpler for search. Use the WordPress REST API search endpoint.

```tsx
// lib/functions.ts (add to same file as fetchGraphQL)
export async function searchQuery(query: string): Promise<SearchResults[]> {
  query = encodeURIComponent(query.trim())

  try {
    if (!process.env.NEXT_PUBLIC_WORDPRESS_REST_API_URL) {
      console.error('Missing WordPress REST API URL environment variable!')
      return []
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_REST_API_URL}/search?search=${query}&subtype=any&per_page=100`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: {
          tags: [`search-${query}`],
          revalidate: config.revalidate,
        },
      }
    )

    if (!response.ok) {
      console.error('Search API Response Status:', response.status)
      return []
    }

    const data = await response.json()
    if (!data || data.length === 0) return []

    return data as SearchResults[]
  } catch (error) {
    console.error('Error fetching search data:', error)
    return []
  }
}
```

### Client-Side Search Component

```tsx
'use client'
import { useState, useEffect, useRef } from 'react'

export default function SearchForm() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const debounceRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (!query.trim()) { setResults([]); return }

    debounceRef.current = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setResults(data)
    }, 300)  // 300ms debounce

    return () => clearTimeout(debounceRef.current)
  }, [query])

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {results.map((result) => (
        <a key={result.id} href={result.url}>{result.title}</a>
      ))}
    </div>
  )
}
```

---

## 7. Dynamic Sitemap Integration

The sitemap uses `getAllPosts` and `getAllPages` to generate a complete URL list.

```tsx
// app/sitemap.ts
import getAllPages from '@/lib/queries/getAllPages'
import getAllPosts from '@/lib/queries/getAllPosts'
import config from '@/lib/config'

export default async function sitemap() {
  const posts = await getAllPosts()
  const pages = await getAllPages()

  const blogUrls = posts.map((post) => ({
    url: `${config.siteUrl}/blog/${post.slug}`,
    lastModified: post.modified || post.date,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const pageUrls = pages.map((page) => ({
    url: `${config.siteUrl}/${page.slug}`,
    lastModified: page.modified || page.date,
    changeFrequency: 'monthly' as const,
    priority: isServicePage(page.slug) ? 0.7 : 0.5,
  }))

  return [
    {
      url: config.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...pageUrls,
    ...blogUrls,
  ]
}
```

### Priority Tiers

| Page Type | Priority | Change Frequency |
|-----------|----------|-----------------|
| Homepage | 1.0 | weekly |
| Service pages | 0.7 | monthly |
| Blog posts | 0.6 | weekly |
| Location pages | 0.5 | monthly |

---

## 8. Code Generation Setup

Auto-generate TypeScript types from the GraphQL schema. Never hand-write CMS types.

### Config File

```tsx
// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL!,
  documents: ['lib/queries/**/*.ts', 'lib/mutations/**/*.ts'],
  generates: {
    './lib/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: false,
        maybeValue: 'T | null',
        skipTypename: true,
        enumsAsTypes: true,
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
```

### Dependencies

```bash
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations
npm install graphql
```

### Build Script

```json
{
  "scripts": {
    "codegen": "graphql-codegen --config codegen.ts",
    "build": "npm run codegen && next build",
    "dev": "npm run codegen && rimraf .next && next dev"
  }
}
```

**Rule:** Always run codegen before build. The generated types file (`lib/generated.ts`) must exist before TypeScript compilation.

---

## 9. Preview Mode

Preview mode lets editors see draft content before publishing.

### Preview API Route

```tsx
// app/api/preview/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { draftMode } from 'next/headers'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const slug = request.nextUrl.searchParams.get('slug')
  const type = request.nextUrl.searchParams.get('type') || 'post'

  if (secret !== process.env.PREVIEW_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
  }

  const draft = await draftMode()
  draft.enable()

  const path = type === 'post' ? `/blog/${slug}` : `/${slug}`
  return NextResponse.redirect(new URL(path, request.url))
}
```

### WordPress Preview URL

Set in WordPress Settings → WPGraphQL:
```
https://yourdomain.com/api/preview?secret=YOUR_PREVIEW_SECRET&slug=${slug}&type=${post_type}
```

---

## 10. Error Handling Strategy

### Graceful Degradation

```tsx
// In page components:
const post = await getPostBySlug(slug)

// Missing content → 404
if (!post) {
  notFound()
}

// Missing optional fields → fallback values
const title = post.seo?.title || post.title || config.siteName
const image = post.featuredImage?.node?.sourceUrl || null
const description = post.seo?.metaDesc || post.seo?.opengraphDescription || ''
```

### Rules

1. **Missing required content** (no post/page found) → call `notFound()` to show 404
2. **Missing optional fields** (no SEO title, no featured image) → use fallback chain
3. **GraphQL errors** → return `{ data: undefined, errors }` - never throw from fetchGraphQL
4. **Network errors** → same as GraphQL errors - graceful degradation
5. **Empty search results** → return empty array, not null

---

## 11. ISR Cache Strategy

### Tag-Based Caching

Every fetch is tagged for targeted revalidation:

```tsx
next: {
  tags: [slug, 'graphql', `type:${contentType}`],
  revalidate: config.revalidate,  // 60 seconds
}
```

### Revalidation Options

| Method | When to Use |
|--------|------------|
| Time-based (`revalidate: 60`) | Default - content refreshes every 60 seconds |
| Tag-based (`revalidateTag('slug')`) | On-demand - when CMS content is updated |
| Path-based (`revalidatePath('/blog/my-post')`) | On-demand - when a specific URL must refresh |

### On-Demand Revalidation Endpoint

See Skill 7 (Deployment) for the `/api/revalidate` route that WordPress calls when content changes.

---

## Environment Variables

```bash
# .env (local development)
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-cms.com/graphql
NEXT_PUBLIC_WORDPRESS_REST_API_URL=https://your-cms.com/wp-json/wp/v2
NEXTJS_AUTH_REFRESH_TOKEN=your-jwt-refresh-token
PREVIEW_SECRET=your-preview-secret
```

| Variable | Public? | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` | Yes | GraphQL endpoint for all queries |
| `NEXT_PUBLIC_WORDPRESS_REST_API_URL` | Yes | REST API for search |
| `NEXTJS_AUTH_REFRESH_TOKEN` | No | JWT token for preview mode |
| `PREVIEW_SECRET` | No | Secret for preview URL validation |

---

## Checklist

- [ ] `fetchGraphQL<T>()` function handles errors gracefully (returns `{ data, errors }`)
- [ ] All queries include `seo` and `featuredImage` fields
- [ ] Pagination queries use cursor-based `hasNextPage` + `endCursor` loop
- [ ] Code generation runs before every build (`npm run codegen && next build`)
- [ ] Type definitions are auto-generated, not hand-written
- [ ] Search uses REST API with 300ms debounce
- [ ] Sitemap fetches all content via paginated queries
- [ ] Preview mode validates secret before enabling draft mode
- [ ] ISR tags include slug, content type, and global 'graphql' tag
- [ ] Environment variables are documented and set in both .env and Vercel

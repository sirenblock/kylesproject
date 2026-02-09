# Relester SEO Method - Pillar 8: Testing

Every Relester Method site must pass tests before deployment. This covers the complete testing setup: Vitest configuration, MSW API mocking, component rendering, accessibility checks, and what to test for each file type.

**Rule:** `npm run build` and `npm test` must both pass with zero failures before deploying. Tests run on every build and PR.

---

## 1. Test Stack

| Tool | Purpose |
|------|---------|
| **Vitest** | Test runner (fast, ESM-native, Vite-compatible) |
| **MSW** (Mock Service Worker) | Intercepts HTTP requests — mock GraphQL and REST APIs without a running CMS |
| **Testing Library** | Render React components, query the DOM by accessible roles/text |
| **jest-axe** | Automated accessibility audits (WCAG violations) |
| **jsdom** | Browser environment simulation for Node.js |

### Dependencies

```json
{
  "devDependencies": {
    "vitest": "^4.0.0",
    "@vitejs/plugin-react-swc": "^4.0.0",
    "@vitest/coverage-v8": "^4.0.0",
    "@vitest/ui": "^4.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0",
    "jest-axe": "^10.0.0",
    "@types/jest-axe": "^3.0.0",
    "jsdom": "^28.0.0",
    "msw": "^2.0.0"
  }
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

---

## 2. Vitest Configuration

```tsx
// vitest.config.ts
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:3000',
      },
    },
    exclude: [
      '**/.{idea,git,cache,output,temp}/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['**/*.{ts,tsx}'],
      exclude: [
        '**/*.config.*',
        '**/*.d.ts',
        '**/*.{spec,test}.{ts,tsx}',
        '**/{codegen,generated}.ts',
        '**/{scripts,test-utils,types}/**',
      ],
      reporter: ['text', 'json', 'html', 'lcov'],
    },
  },
})
```

### Key Settings

| Setting | Value | Why |
|---------|-------|-----|
| `environment` | `'jsdom'` | Simulates browser DOM for component tests |
| `globals` | `true` | `describe`, `it`, `expect` available without imports |
| `setupFiles` | `'./vitest.setup.ts'` | Runs before every test file (mocks, MSW, polyfills) |
| `coverage.provider` | `'v8'` | Fast native coverage via V8 engine |

---

## 3. Global Test Setup

```tsx
// vitest.setup.ts
import { installDomShims, removeDomShims } from '@/test-utils/domShims'
import { setupBrowserMocks } from '@/test-utils/mocks/browserMocks'
import { server } from '@/test-utils/msw/server'
import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'
import React, { type ImgHTMLAttributes } from 'react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

// Extend expect with accessibility matchers
expect.extend(toHaveNoViolations)

// Mock Next.js Image component (renders plain <img>)
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }) => {
    const imgSrc = typeof src === 'string' ? src : src.src
    return React.createElement('img', { ...rest, src: imgSrc, alt })
  },
}))

// Mock Next.js navigation hooks
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  })),
  usePathname: vi.fn(() => '/'),
  useSearchParams: vi.fn(() => new URLSearchParams()),
  notFound: vi.fn(),
}))

// Set up browser mocks (matchMedia, ResizeObserver, IntersectionObserver, scrollTo)
if (globalThis.window !== undefined) {
  setupBrowserMocks()
}

beforeAll(() => {
  // Start MSW server
  server.listen({ onUnhandledRequest: 'warn' })

  // Install DOM shims (scrollIntoView, etc.)
  if (globalThis.window !== undefined) {
    installDomShims()
  }

  // Stub environment variables
  vi.stubEnv('NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL', 'http://localhost/graphql')
  vi.stubEnv('NEXT_PUBLIC_WORDPRESS_REST_API_URL', 'http://localhost/wp-json/wp/v2')

  // Silence console noise in tests
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  server.resetHandlers()  // Reset per-test handler overrides
})

afterAll(() => {
  server.close()
  if (globalThis.window !== undefined) {
    removeDomShims()
  }
  vi.unstubAllEnvs()
})
```

---

## 4. Test Utilities Directory

```
test-utils/
  index.ts              # Re-exports everything (single import for tests)
  render.tsx             # Custom render with providers
  renderHook.tsx         # Custom hook testing wrapper
  domShims.ts            # scrollIntoView polyfill for jsdom
  mocks/
    browserMocks.ts      # matchMedia, ResizeObserver, IntersectionObserver, scrollTo
  msw/
    server.ts            # MSW server setup
    handlers.ts          # Default API mock handlers
```

### index.ts (Single Import)

```tsx
// test-utils/index.ts
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { http, HttpResponse } from 'msw'

import userEvent from '@testing-library/user-event'
export const user = userEvent.setup()

export { render } from './render'
export { renderHook } from './renderHook'
export { server } from './msw/server'
```

**Usage in tests:**
```tsx
import { http, HttpResponse, render, screen, server } from '@/test-utils'
```

One import gives you everything: render, screen, server, MSW handlers, user events.

### Custom Render

```tsx
// test-utils/render.tsx
import { render as rtlRender, type RenderOptions } from '@testing-library/react'
import type { PropsWithChildren, ReactElement } from 'react'

export function render(ui: ReactElement, options: Omit<RenderOptions, 'queries'> = {}) {
  const Wrapper = ({ children }: PropsWithChildren) => <>{children}</>
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}
```

Extend the Wrapper when you add providers (ThemeProvider, etc.).

### Browser Mocks

```tsx
// test-utils/mocks/browserMocks.ts
import { vi } from 'vitest'

export function setupBrowserMocks() {
  // matchMedia (used by responsive components)
  if (!globalThis.window?.matchMedia) {
    Object.defineProperty(globalThis.window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  }

  // ResizeObserver (used by layout components)
  if (!globalThis.window?.ResizeObserver) {
    class ResizeObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
    globalThis.window.ResizeObserver = ResizeObserver as any
  }

  // IntersectionObserver (used by TOC, lazy loading)
  if (!globalThis.window?.IntersectionObserver) {
    class IntersectionObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
      takeRecords = vi.fn().mockReturnValue([])
      root = null
      rootMargin = ''
      thresholds = []
    }
    globalThis.window.IntersectionObserver = IntersectionObserver as any
  }

  // scrollTo
  if (!globalThis.window?.scrollTo) {
    globalThis.window.scrollTo = vi.fn()
  }
}
```

### DOM Shims

```tsx
// test-utils/domShims.ts
export function installDomShims(): void {
  if (!('scrollIntoView' in Element.prototype)) {
    Element.prototype.scrollIntoView = function (): void {}
  }
}

export function removeDomShims(): void {
  Element.prototype.scrollIntoView = undefined as any
}
```

---

## 5. MSW API Mocking

### Server Setup

```tsx
// test-utils/msw/server.ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

### Default Handlers

```tsx
// test-utils/msw/handlers.ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Default GraphQL handler (fallback)
  http.post(
    `${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'http://localhost/graphql'}`,
    async ({ request }) => {
      const body = (await request.json()) as { query: string }

      if (body.query.includes('allPosts')) {
        return HttpResponse.json({
          data: {
            posts: {
              nodes: [
                {
                  id: 'cG9zdDox',
                  title: 'Test Post',
                  slug: 'test-post',
                  excerpt: 'Test excerpt',
                  date: '2024-01-01T00:00:00',
                  featuredImage: null,
                },
              ],
            },
          },
        })
      }

      return HttpResponse.json({ data: {}, errors: [] })
    }
  ),
]
```

### Per-Test Handler Overrides

Override the default handlers in individual tests using `server.use()`:

```tsx
import { http, HttpResponse, server } from '@/test-utils'

it('should handle empty posts', async () => {
  server.use(
    http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
      return HttpResponse.json({
        data: { posts: { nodes: [] } },
      })
    })
  )

  // Test with empty data...
})
```

`server.resetHandlers()` in `afterEach` restores the defaults automatically.

---

## 6. What to Test (by File Type)

### Query Functions (`lib/queries/*.ts`)

Test each query for: successful fetch, empty results, API errors, null data.

```tsx
// lib/queries/getAllPosts.test.ts
import getAllPosts from '@/lib/queries/getAllPosts'
import { server } from '@/test-utils'
import { http, HttpResponse } from 'msw'

describe('getAllPosts', () => {
  it('should fetch all posts successfully', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({
          data: {
            posts: {
              nodes: [
                { databaseId: 1, title: 'Post 1', slug: 'post-1' },
                { databaseId: 2, title: 'Post 2', slug: 'post-2' },
              ],
            },
          },
        })
      })
    )

    const posts = await getAllPosts()
    expect(posts).toHaveLength(2)
    expect(posts[0].title).toBe('Post 1')
  })

  it('should return empty array when no posts found', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({ data: { posts: { nodes: [] } } })
      })
    )

    const posts = await getAllPosts()
    expect(posts).toEqual([])
  })

  it('should return empty array on API error', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json(
          { errors: [{ message: 'Internal server error' }] },
          { status: 500 }
        )
      })
    )

    const posts = await getAllPosts()
    expect(posts).toEqual([])
  })

  it('should return empty array when data is null', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({ data: null })
      })
    )

    const posts = await getAllPosts()
    expect(posts).toEqual([])
  })
})
```

### GraphQL Client (`lib/functions.ts`)

Test: successful fetch, GraphQL errors, network errors, variables, malformed responses, empty bodies.

```tsx
// lib/functions.test.ts
import { fetchGraphQL, searchQuery } from '@/lib/functions'
import { server } from '@/test-utils'
import { http, HttpResponse } from 'msw'

describe('fetchGraphQL', () => {
  const testQuery = `query GetPosts { posts { nodes { id title } } }`

  it('should fetch data successfully', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({
          data: { posts: { nodes: [{ id: '1', title: 'Post 1' }] } },
        })
      })
    )

    const response = await fetchGraphQL(testQuery)
    expect(response.data.posts.nodes).toHaveLength(1)
  })

  it('should handle GraphQL errors gracefully', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({
          errors: [{ message: 'GraphQL error' }],
        })
      })
    )

    const response = await fetchGraphQL(testQuery)
    expect(response.errors?.[0].message).toBe('GraphQL error')
  })

  it('should handle network errors gracefully', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.error()
      })
    )

    const response = await fetchGraphQL(testQuery)
    expect(response).toBeDefined()
    // Should not throw — graceful degradation
  })

  it('should send variables with the query', async () => {
    let capturedBody: any
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, async ({ request }) => {
        capturedBody = await request.json()
        return HttpResponse.json({ data: { post: { id: '1' } } })
      })
    )

    await fetchGraphQL(testQuery, { slug: 'test-post' })
    expect(capturedBody.variables).toEqual({ slug: 'test-post' })
  })
})

describe('searchQuery', () => {
  it('should return search results', async () => {
    server.use(
      http.get(`${process.env.NEXT_PUBLIC_WORDPRESS_REST_API_URL}/search`, () => {
        return HttpResponse.json([
          { id: 1, title: 'Result 1', url: '/result-1', type: 'post', subtype: 'post' },
        ])
      })
    )

    const results = await searchQuery('test')
    expect(results).toHaveLength(1)
    expect(results[0].title).toBe('Result 1')
  })

  it('should return empty array on API error', async () => {
    server.use(
      http.get(`${process.env.NEXT_PUBLIC_WORDPRESS_REST_API_URL}/search`, () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    const results = await searchQuery('test')
    expect(results).toEqual([])
  })
})
```

### Page Components (Server Components)

Server components are async functions. Call them directly, then render the returned JSX.

```tsx
// app/blog/[slug]/page.test.tsx
import { http, HttpResponse, render, screen, server } from '@/test-utils'
import BlogPost from './page'

describe('BlogPost', () => {
  it('should render blog post content', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({
          data: {
            post: {
              databaseId: 1,
              title: 'My Test Post',
              content: '<p>Post body content</p>',
              date: '2024-01-01',
              modified: '2024-01-02',
              featuredImage: null,
              seo: { title: 'My Test Post', metaDesc: 'Description', opengraphDescription: '' },
              author: { node: { name: 'Author' } },
              categories: { nodes: [] },
              tags: { nodes: [] },
              comments: { nodes: [] },
            },
          },
        })
      })
    )

    // Server component: call as async function, then render the returned JSX
    const PageComponent = await BlogPost({ params: Promise.resolve({ slug: 'test-post' }) })
    const { container } = render(PageComponent)

    expect(screen.getByText('My Test Post')).toBeInTheDocument()
    expect(screen.getByText('Post body content')).toBeInTheDocument()
  })

  it('should call notFound for missing post', async () => {
    server.use(
      http.post(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, () => {
        return HttpResponse.json({ data: { post: null } })
      })
    )

    await expect(
      BlogPost({ params: Promise.resolve({ slug: 'nonexistent' }) })
    ).rejects.toThrow()
  })
})
```

### Client Components (Forms, Interactive)

Use `render()` directly + `userEvent` for interactions.

```tsx
// components/ContactForm.test.tsx
import { render, screen, user } from '@/test-utils'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('should render all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('(123) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('should disable submit button while sending', async () => {
    render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText('Your name')
    const emailInput = screen.getByPlaceholderText('you@example.com')
    const messageInput = screen.getByPlaceholderText(/tell us about/i)
    const submitButton = screen.getByText('Send Message')

    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(messageInput, 'Test message')
    await user.click(submitButton)

    expect(screen.getByText('Sending...')).toBeInTheDocument()
  })
})
```

### Accessibility Tests

Add `jest-axe` checks to every page and component test:

```tsx
import { axe } from 'jest-axe'

it('should have no accessibility violations', async () => {
  const PageComponent = await Home()
  const { container } = render(PageComponent)

  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### API Route Tests

```tsx
// app/api/contact/route.test.ts
import { POST } from './route'
import { NextRequest } from 'next/server'

describe('POST /api/contact', () => {
  it('should return 400 for missing required fields', async () => {
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' }),
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
  })

  it('should return 200 for valid submission', async () => {
    // Mock the webhook fetch
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        message: 'Hello',
      }),
    })

    const response = await POST(request)
    expect(response.status).toBe(200)
  })
})
```

---

## 7. Test Coverage Requirements

### Minimum Coverage Per File Type

| File Type | What to Test | Min Tests |
|-----------|-------------|-----------|
| `lib/functions.ts` | Success, GraphQL errors, network errors, variables, malformed responses | 5+ |
| `lib/queries/*.ts` | Success, empty results, API errors, null data | 3-4 each |
| `app/*/page.tsx` | Renders content, handles missing data (notFound), accessibility | 3+ each |
| `components/*.tsx` | Renders correctly, user interactions, disabled states | 2+ each |
| `app/api/*/route.ts` | Validates input, handles success, handles errors | 3+ each |
| `app/robots.ts` | Returns correct rules | 1 |
| `app/sitemap.ts` | Returns correct URLs with priorities | 2+ |

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run with visual UI
npm run test:ui

# Run with coverage report
npm run test:coverage
```

---

## 8. Test File Naming Convention

Place test files **next to the files they test**, not in a separate `__tests__` directory:

```
lib/
  functions.ts
  functions.test.ts        ← tests for functions.ts
  queries/
    getAllPosts.ts
    getAllPosts.test.ts     ← tests for getAllPosts.ts
app/
  page.tsx
  page.test.tsx            ← tests for homepage
  blog/
    [slug]/
      page.tsx
      page.test.tsx        ← tests for blog post page
components/
  Header.tsx
  Header.test.tsx          ← tests for Header
  ContactForm.tsx
  ContactForm.test.tsx     ← tests for ContactForm
```

**Rule:** Every `.ts` / `.tsx` file that contains logic should have a corresponding `.test.ts` / `.test.tsx` file next to it.

---

## 9. Build Validation

The build pipeline must run both codegen and tests:

```json
{
  "scripts": {
    "build": "npm run codegen && next build",
    "validate": "npm run format && npm run lint && npm run typecheck && npm run test"
  }
}
```

Run `npm run validate` before every deploy. It checks:
1. **Format** — Prettier formatting
2. **Lint** — ESLint rules
3. **Typecheck** — TypeScript compilation (`tsc --noEmit`)
4. **Test** — All Vitest tests pass

---

## Checklist

- [ ] Vitest configured with jsdom, globals, and setup file
- [ ] MSW server with default handlers for GraphQL and REST
- [ ] Browser mocks: matchMedia, ResizeObserver, IntersectionObserver, scrollTo
- [ ] DOM shims: scrollIntoView
- [ ] Next.js mocks: next/image, next/navigation (useRouter, usePathname, useSearchParams, notFound)
- [ ] Environment variables stubbed in setup (GraphQL URL, REST URL)
- [ ] Every query function has tests (success + error cases)
- [ ] Every page component has tests (renders + notFound + accessibility)
- [ ] Every form component has tests (renders + interactions)
- [ ] Every API route has tests (validation + success + error)
- [ ] `npm test` passes with zero failures
- [ ] `npm run build` passes with zero errors
- [ ] Accessibility checks (jest-axe) on all page components

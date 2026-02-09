# Relester SEO Method - Pillar 7: Deployment & Environment Setup

The complete deployment pipeline from local dev to production on Vercel. Covers environment variables, domain configuration, build pipeline, on-demand revalidation, and the full dependency list.

---

## 1. Environment Variable Strategy

### Variable Types

| Prefix | Visibility | Use For |
|--------|-----------|---------|
| `NEXT_PUBLIC_*` | Exposed to browser | API URLs, Maps key, public config |
| No prefix | Server-only | Secrets, tokens, webhook URLs |

### Required Variables

```bash
# .env (local development)

# CMS Connection (Required)
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-cms.com/graphql
NEXT_PUBLIC_WORDPRESS_REST_API_URL=https://your-cms.com/wp-json/wp/v2

# Authentication (Required for preview)
NEXTJS_AUTH_REFRESH_TOKEN=your-jwt-refresh-token
PREVIEW_SECRET=your-preview-secret

# Revalidation (Required for on-demand cache clearing)
REVALIDATION_SECRET=your-revalidation-secret

# Forms & Integrations (Required for lead capture)
WEBHOOK_URL=https://hook.us1.make.com/your-webhook-id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...

# Email (Optional - if using Resend instead of/alongside webhooks)
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Dev vs Production

| | Local (.env) | Vercel Dashboard |
|---|---|---|
| GraphQL URL | Staging/local CMS | Production CMS |
| Preview Secret | Any string | Secure random string |
| Webhook URL | Test webhook | Production webhook |
| Maps API Key | Dev key (restricted) | Production key (restricted to domain) |

**Rule:** Never commit `.env` to git. Add it to `.gitignore`. Set production values in Vercel dashboard (Settings → Environment Variables).

---

## 2. Build Pipeline

### Scripts

```json
{
  "scripts": {
    "codegen": "graphql-codegen --config codegen.ts",
    "build": "npm run codegen && next build",
    "dev": "npm run codegen && rimraf .next && next dev",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "npx tsc --noEmit",
    "test": "vitest run",
    "validate": "npm run format && npm run lint && npm run typecheck && npm run test"
  }
}
```

### Build Order

```
1. codegen        → Generates TypeScript types from GraphQL schema
2. next build     → Compiles pages, runs ISR for static paths
3. Deploy         → Vercel serves the build output
```

**Critical:** `codegen` must run before `next build`. The generated types file (`lib/generated.ts`) must exist before TypeScript compiles the project.

### Vercel Build Command

In Vercel dashboard (Settings → General → Build & Development):
- **Build Command:** `npm run build` (this runs codegen + next build)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (default)
- **Framework Preset:** Next.js (auto-detected)

---

## 3. Vercel Deployment Configuration

### vercel.json (Optional)

Most config lives in `next.config.ts`. Only use `vercel.json` for Vercel-specific overrides:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs"
}
```

### What Goes Where

| Config | Location | Why |
|--------|----------|-----|
| Redirects | `next.config.ts` | Framework-level, works in dev too |
| Headers (X-Robots-Tag) | `next.config.ts` | Framework-level |
| Image optimization | `next.config.ts` | Framework-level |
| Build command | Vercel dashboard | Platform-specific |
| Environment variables | Vercel dashboard | Secrets, not in git |
| Domain aliases | Vercel dashboard | Platform-specific |

---

## 4. Domain Setup

### www vs non-www

**Always use `www.yourdomain.com` as the canonical URL.** Redirect non-www to www.

In Vercel dashboard:
1. Add `yourdomain.com` → Vercel auto-redirects to www
2. Add `www.yourdomain.com` → This is the primary domain

### DNS Configuration

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 (Vercel) |
| CNAME | www | cname.vercel-dns.com |

### SSL / HSTS

Automatic on Vercel. No configuration needed. All domains get:
- Free SSL certificate (Let's Encrypt)
- Automatic renewal
- HTTPS-only (HTTP redirects to HTTPS)
- HSTS headers

---

## 5. Staging Protection

Prevent search engines from indexing non-production deployments.

### X-Robots-Tag Header (from Pillar 1)

```tsx
// next.config.ts
async headers() {
  return [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: '(?!www\\.yourdomain\\.com).*',  // Any host except production
        },
      ],
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex, nofollow',
        },
      ],
    },
  ]
}
```

This blocks indexing on:
- `yourdomain.vercel.app` (Vercel preview)
- `your-branch-name.vercel.app` (branch deploys)
- `localhost:3000` (local dev)

Only `www.yourdomain.com` gets indexed.

---

## 6. On-Demand Revalidation

When CMS content changes, clear the ISR cache immediately instead of waiting for the revalidation timer.

### Revalidation Endpoint

```tsx
// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// Simple rate limiter (in-memory)
const rateLimit = new Map<string, number[]>()
const RATE_LIMIT = 10      // max requests
const RATE_WINDOW = 60000  // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimit.get(ip) || []
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW)
  if (recent.length >= RATE_LIMIT) return true
  recent.push(now)
  rateLimit.set(ip, recent)
  return false
}

export async function POST(request: NextRequest) {
  // Rate limit check
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
  }

  // Secret validation
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { tag, slug } = body

    // Revalidate by tag (preferred) or slug
    if (tag) {
      revalidateTag(tag)
    } else if (slug) {
      revalidateTag(slug)
    } else {
      // Revalidate all GraphQL-fetched content
      revalidateTag('graphql')
    }

    return NextResponse.json({ revalidated: true, tag: tag || slug || 'graphql' })
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
```

### WordPress Webhook

Configure WordPress to call the revalidation endpoint when content changes:

**WPGraphQL Smart Cache** or a custom WordPress hook:
```
POST https://www.yourdomain.com/api/revalidate?secret=YOUR_SECRET
Body: { "slug": "my-updated-post" }
```

### Revalidation Strategies

| Strategy | When | Endpoint Call |
|----------|------|--------------|
| Single post/page | Editor saves a post | `{ "slug": "post-slug" }` |
| All posts | Bulk import/migration | `{ "tag": "type:post" }` |
| Everything | Schema/plugin change | `{}` (revalidates 'graphql' tag) |

---

## 7. Image Optimization

### next.config.ts

```tsx
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*.your-cms-domain.com',  // Your CMS image host
    },
    {
      protocol: 'https',
      hostname: '*.gravatar.com',  // WordPress avatars
    },
  ],
}
```

**Rules:**
- Always list `image/avif` before `image/webp` (AVIF is smaller, browser picks first supported format)
- Add all image hostnames your CMS uses (CDN, media library, external embeds)
- Use Next.js `<Image>` component for all images (automatic optimization, lazy loading, responsive sizing)

---

## 8. Key Dependencies

### Core

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

### CMS Integration

```json
{
  "devDependencies": {
    "@graphql-codegen/cli": "^6.0.0",
    "@graphql-codegen/typescript": "^5.0.0",
    "@graphql-codegen/typescript-operations": "^5.0.0"
  },
  "dependencies": {
    "graphql": "^16.0.0"
  }
}
```

### Styling

```json
{
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0"
  }
}
```

### Email (Optional)

```json
{
  "dependencies": {
    "resend": "^6.0.0"
  }
}
```

### Maps (Types Only)

```json
{
  "devDependencies": {
    "@types/google.maps": "^3.0.0"
  }
}
```

### Testing

```json
{
  "devDependencies": {
    "vitest": "^4.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jsdom": "^28.0.0"
  }
}
```

### Dev Tools

```json
{
  "devDependencies": {
    "typescript": "^5.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.7.0",
    "rimraf": "^6.0.0",
    "dotenv": "^17.0.0"
  }
}
```

---

## 9. Deployment Checklist

### Pre-Deploy

- [ ] `npm run build` succeeds locally with zero errors
- [ ] All environment variables set in Vercel dashboard
- [ ] Domain DNS configured (A record + CNAME)
- [ ] Production CMS URL in env vars (not staging)
- [ ] Google Maps API key restricted to production domain
- [ ] Webhook URL points to production automation

### Post-Deploy

- [ ] `www.yourdomain.com` loads correctly
- [ ] `yourdomain.com` redirects to `www.yourdomain.com`
- [ ] SSL certificate active (padlock in browser)
- [ ] X-Robots-Tag `noindex` on `*.vercel.app` domains (check with `curl -I`)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test both forms end-to-end (contact + intake)
- [ ] Verify revalidation endpoint works (`POST /api/revalidate`)
- [ ] Check Core Web Vitals with PageSpeed Insights

### Verification Commands

```bash
# Check X-Robots-Tag on preview domain
curl -I https://your-project.vercel.app | grep -i x-robots

# Check production has no noindex
curl -I https://www.yourdomain.com | grep -i x-robots

# Verify sitemap
curl https://www.yourdomain.com/sitemap.xml | head -50

# Test revalidation
curl -X POST "https://www.yourdomain.com/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"tag": "graphql"}'
```

import { blogPosts } from '@/lib/blog'
import config from '@/lib/config'

// RSS 2.0 feed for blog content -- helps search engines discover new posts
// faster than sitemap-based crawl alone, and lets AI search tools and
// content aggregators subscribe directly.
//
// Per the senior SEO playbook: "Google rewards sites that publish consistently.
// An RSS feed signals content velocity and gives crawlers a low-friction path
// to discover new content."

export const dynamic = 'force-static'

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const siteUrl = config.siteUrl
  const buildDate = new Date().toUTCString()

  // Sort posts by lastUpdated || date, newest first
  const sorted = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.lastUpdated || a.date).getTime()
    const dateB = new Date(b.lastUpdated || b.date).getTime()
    return dateB - dateA
  })

  const items = sorted
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`
      const pubDate = new Date(post.lastUpdated || post.date).toUTCString()
      const categories = post.tags.map((t) => `<category>${escapeXml(t)}</category>`).join('\n      ')
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.excerpt)}</description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>noreply@30ajunkremoval.com (${escapeXml(post.author)})</author>
      ${categories}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>30A Junk Removal Blog</title>
    <link>${siteUrl}/blog</link>
    <description>In-depth guides on junk removal, disposal, vacation rental operations, and property service across the 30A corridor and Panama City Beach.</description>
    <language>en-us</language>
    <copyright>30A Junk Removal LLC. All rights reserved.</copyright>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}

import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.30ajunkremoval.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard web crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      // Explicit allow for AI search crawlers (per llms.txt strategy)
      // These are the major LLM-powered search agents -- AI Overviews,
      // Perplexity, ChatGPT search, Claude citations. Welcoming them
      // increases the chance of being cited in AI-generated answers.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}

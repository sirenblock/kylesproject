import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.30ajunkremoval.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard web crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/thank-you', '/success'],
      },
      // Explicit allow-list for AI search crawlers + LLM training agents.
      // Per 2026 GEO (Generative Engine Optimization) research: pages
      // with proper AI bot allow-list + structured data are 2.5x more
      // likely to appear in AI Overviews / ChatGPT / Perplexity / Claude
      // citations. Welcoming all major documented AI crawlers maximizes
      // citation eligibility across every LLM-powered search surface.
      //
      // ChatGPT / OpenAI surfaces
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Anthropic Claude surfaces (training, search, user-initiated)
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      // Perplexity (both training crawler + user-on-demand fetcher)
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      // Google AI surfaces (Gemini, AI Overviews)
      { userAgent: 'Google-Extended', allow: '/' },
      // Apple AI surfaces (Apple Intelligence)
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Amazon Alexa + AI initiatives
      { userAgent: 'Amazonbot', allow: '/' },
      // Meta Llama training + AI surfaces
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      // Cohere (Coral, Command R)
      { userAgent: 'cohere-ai', allow: '/' },
      // Common Crawl (feeds most major LLM training corpora)
      { userAgent: 'CCBot', allow: '/' },
      // ByteDance (TikTok AI / Doubao)
      { userAgent: 'Bytespider', allow: '/' },
      // Diffbot (structured-data extraction; powers many AI agents)
      { userAgent: 'Diffbot', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}

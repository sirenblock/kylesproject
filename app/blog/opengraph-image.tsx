import { ImageResponse } from 'next/og'
import { blogPosts } from '@/lib/blog'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal Blog'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: '30A Junk Removal Blog',
      subtitle: `${blogPosts.length}+ in-depth guides on disposal, vacation rental operations, community-specific logistics, and cost.`,
      badge: 'blog',
      tags: ['Community Guides', 'Disposal Tips', 'Cost Guides'],
      accentColor: 'seafoam',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

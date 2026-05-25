import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/lib/blog'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

// Per-blog-post OG image. Refactored to use shared ogTemplate from
// lib/og-image-template.tsx so brand colors, tag styling, and layout
// stay consistent across all OG surfaces site-wide.

export const runtime = 'edge'
export const alt = '30A Junk Removal blog post'
export const { size, contentType } = ogImageMeta

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  return new ImageResponse(
    ogTemplate({
      title: post?.title || '30A Junk Removal Blog',
      subtitle: post?.excerpt
        ? post.excerpt.length > 130
          ? post.excerpt.slice(0, 130).trim() + '...'
          : post.excerpt
        : 'Expert tips and guides for junk removal in 30A Florida.',
      badge: 'blog guide',
      tags: post?.tags?.slice(0, 3) ?? ['Same-Day', '30A', 'Guide'],
      accentColor: 'seafoam',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

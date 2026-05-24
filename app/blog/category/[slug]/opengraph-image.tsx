import { ImageResponse } from 'next/og'
import { getBlogCategory } from '@/lib/blog-categories'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — blog category'
export const { size, contentType } = ogImageMeta

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const category = getBlogCategory(slug)
  const title = category
    ? category.name
    : '30A Junk Removal Blog'
  const subtitle = category
    ? `${category.postSlugs.length} guides — 30A & Panama City Beach`
    : undefined

  return new ImageResponse(
    ogTemplate({
      title,
      subtitle,
      badge: 'category',
      accentColor: 'gold',
    }),
    size
  )
}

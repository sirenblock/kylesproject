import { ImageResponse } from 'next/og'
import { getLocation } from '@/lib/locations'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — location service guide'
export const { size, contentType } = ogImageMeta

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const location = getLocation(slug)
  const title = location
    ? `Junk Removal in ${location.name}, FL`
    : '30A Junk Removal'
  const subtitle = location
    ? `Serving ${location.name} and ${location.county} County`
    : undefined

  return new ImageResponse(
    ogTemplate({
      title,
      subtitle,
      badge: 'service area',
      tags: location?.zipCodes?.slice(0, 3),
      accentColor: 'ocean',
    }),
    size
  )
}

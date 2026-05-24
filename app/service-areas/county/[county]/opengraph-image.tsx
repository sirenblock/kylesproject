import { ImageResponse } from 'next/og'
import { getCounty } from '@/lib/counties'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — county guide'
export const { size, contentType } = ogImageMeta

interface Props {
  params: Promise<{ county: string }>
}

export default async function OGImage({ params }: Props) {
  const { county: countySlug } = await params
  const county = getCounty(countySlug)
  const title = county ? `Junk Removal in ${county.name}` : '30A Junk Removal'
  const subtitle = 'Complete county-wide service coverage'

  return new ImageResponse(
    ogTemplate({
      title,
      subtitle,
      badge: 'county hub',
      accentColor: 'seafoam',
    }),
    size
  )
}

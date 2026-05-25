import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Our Work'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Real 30A Junk Removal Jobs',
      subtitle:
        '2,400+ jobs completed since 2018. Case studies, before/after photos, and the track record behind our 4.9-star rating.',
      badge: 'portfolio',
      tags: ['2,400+ Jobs', '4.9★ Rated', 'Case Studies'],
      accentColor: 'gold',
    }),
    size
  )
}

import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Customer Reviews — 4.9 Stars'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: '★★★★★ 4.9 Stars from 127+ Customers',
      subtitle: 'Real reviews from property managers, homeowners, and contractors across 30A and Panama City Beach.',
      badge: 'customer reviews',
      accentColor: 'gold',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Transparent Pricing'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Transparent Junk Removal Pricing',
      subtitle: 'From $150 quarter-truck loads to full estate cleanouts. No hidden fees. Same-day service.',
      badge: 'pricing',
      tags: ['From $150', 'Volume-Based', 'No Hidden Fees'],
      accentColor: 'gold',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

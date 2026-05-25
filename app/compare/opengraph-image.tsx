import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Compare Your Options'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Junk Removal vs DIY vs Dumpster',
      subtitle:
        'Side-by-side comparison of your 4 real options. Cost, time, and labor breakdowns for 30A.',
      badge: 'comparison',
      tags: ['4 Options', 'Real Pricing', 'Honest Math'],
      accentColor: 'seafoam',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

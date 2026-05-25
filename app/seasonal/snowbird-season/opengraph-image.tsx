import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Snowbird Season'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Snowbird Season Junk Removal',
      subtitle:
        'October arrival prep + April departure cleanout for absentee 30A property owners. Photo documentation included.',
      badge: 'snowbird season',
      tags: ['Oct-Apr', 'Absentee Owner', 'Photo Docs'],
      accentColor: 'ocean',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — About'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'About 30A Junk Removal',
      subtitle: 'Locally owned, licensed, and insured. Serving 30A and Panama City Beach across Walton and Bay Counties.',
      badge: 'about us',
      tags: ['Locally Owned', 'Licensed & Insured', 'Same-Day Service'],
      accentColor: 'ocean',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

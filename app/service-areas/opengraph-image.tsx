import { ImageResponse } from 'next/og'
import { getAllLocationSlugs } from '@/lib/locations'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Service Areas across 30A and Panama City Beach'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  const count = getAllLocationSlugs().length
  return new ImageResponse(
    ogTemplate({
      title: 'Service Areas — 30A & Panama City Beach',
      subtitle: `${count} communities across Walton and Bay Counties — from Inlet Beach east to Mexico Beach.`,
      badge: 'service areas',
      tags: ['Walton County', 'Bay County', 'Same-Day'],
      accentColor: 'seafoam',
    }),
    size
  )
}

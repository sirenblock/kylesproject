import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'
import { getIndustry } from '@/lib/industries'

// Edge runtime gives us ImageResponse without bundling sharp.
// generateStaticParams would conflict with edge runtime per Next.js --
// we serve these dynamically (cached at the edge) instead.
export const runtime = 'edge'
export const alt = '30A Junk Removal — Industry Partner'
export const { size, contentType } = ogImageMeta

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustry(slug)

  return new ImageResponse(
    ogTemplate({
      title: industry?.heroHeadline ?? '30A Junk Removal — B2B Partner',
      subtitle:
        industry?.shortName === 'Vacation Rental PM'
          ? '90-minute Saturday SLA. Photo documentation. Net-15 terms.'
          : industry?.shortName === 'Real Estate'
          ? 'Pre-listing, closing-day, REO. Same-day, photo-documented.'
          : industry?.shortName === 'Hospitality'
          ? 'After-hours scheduling. EPA 608 certified. Contractor coordination.'
          : industry?.shortName === 'Construction'
          ? 'Job-site debris removal. HOA-restricted alternative. Net-30.'
          : 'Industry-specific B2B junk removal partner.',
      badge: industry?.shortName?.toLowerCase() ?? 'industry',
      tags: ['B2B Partner', 'SLA', 'Net Terms'],
      accentColor: 'gold',
    }),
    { ...size, ...ogImageResponseInit }
  )
}

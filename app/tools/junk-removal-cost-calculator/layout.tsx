import { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Junk Removal Cost Calculator | 30A Junk Removal',
  description:
    'Get an instant junk removal cost estimate for 30A or Panama City Beach. Interactive calculator with volume, community type, urgency, and specialty items. Updated for 2026 pricing.',
  alternates: {
    canonical: getCanonicalUrl('/tools/junk-removal-cost-calculator'),
  },
  openGraph: {
    title: 'Junk Removal Cost Calculator | 30A Junk Removal',
    description: 'Interactive cost estimator for junk removal on 30A and PCB.',
    type: 'website',
    url: '/tools/junk-removal-cost-calculator',
  },
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools/junk-removal-cost-calculator' },
          { name: 'Junk Removal Cost Calculator', url: '/tools/junk-removal-cost-calculator' },
        ]}
      />
      {children}
    </>
  )
}

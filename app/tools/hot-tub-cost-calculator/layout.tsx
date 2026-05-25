import { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Cost Calculator | 30A Junk Removal',
  description:
    'Estimate your hot tub removal cost in 30A or Panama City Beach. Interactive calculator with size, access, community type, and prep-credit inputs. Get an instant range, then text photos for a confirmed quote.',
  alternates: {
    canonical: getCanonicalUrl('/tools/hot-tub-cost-calculator'),
  },
  openGraph: {
    title: 'Hot Tub Removal Cost Calculator | 30A Junk Removal',
    description: 'Interactive cost estimator for hot tub removal on 30A and PCB.',
    type: 'website',
    url: '/tools/hot-tub-cost-calculator',
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
          { name: 'Tools', url: '/tools/hot-tub-cost-calculator' },
          { name: 'Hot Tub Cost Calculator', url: '/tools/hot-tub-cost-calculator' },
        ]}
      />
      {children}
    </>
  )
}

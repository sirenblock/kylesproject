import { Metadata } from 'next'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Junk Removal Cost Calculator',
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

const calculatorFAQs = [
  {
    question: 'How is junk removal priced in 30A?',
    answer:
      'Junk removal in 30A is priced by volume (truck-load) with a $150 minimum. Quarter-truck loads run $150-$250; half-truck loads $250-$400; three-quarter-truck loads $400-$550; full truck-loads $550-$650. Specialty items (hot tubs, refrigerators with refrigerant, electronics) and HOA-restricted communities can add 5-25% to the base price.',
  },
  {
    question: 'Do you offer same-day junk removal service?',
    answer:
      'Yes — same-day service is available across 30A and PCB. Most same-day requests are scheduled within 2-4 hours of quote acceptance during business hours (7 AM - 7 PM, 7 days/week). Same-day Saturday slots during peak season (March-August) carry a $25-50 premium.',
  },
  {
    question: 'What items can you not haul?',
    answer:
      'We coordinate routing for any item but specific categories require special handling: hazardous waste (paint, oil, batteries) routes to quarterly HHW collection events; asbestos requires licensed abatement contractors before we can haul; medical waste requires specialty disposal. We handle all coordination so you only deal with us, not multiple vendors.',
  },
  {
    question: 'Is there a minimum charge?',
    answer:
      'Yes — our service minimum is $150 for any single-item pickup. The $150 minimum applies regardless of item count for very small loads. Bundling 3+ items together significantly reduces the effective per-item cost.',
  },
  {
    question: 'How does the calculator estimate match the final quote?',
    answer:
      'The calculator estimates are typically accurate within 10-15% of the final quote. For pinpoint accuracy, text photos to +1 (850) 368-3495 — photo quotes are accurate 95%+ of the time. The calculator is great for budget planning; photos give you the confirmed price.',
  },
]

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
          { name: 'Tools', url: '/tools' },
          { name: 'Junk Removal Cost Calculator', url: '/tools/junk-removal-cost-calculator' },
        ]}
      />
      <FAQSchema questions={calculatorFAQs} />
      {children}
    </>
  )
}

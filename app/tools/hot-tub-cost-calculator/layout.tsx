import { Metadata } from 'next'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hot Tub Removal Cost Calculator',
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

// FAQs target the "how much" rich result triggers commonly seen on
// cost calculator pages. Per seo-interactive-tool-pages: 3 questions
// minimum, each with a substantive answer.
const calculatorFAQs = [
  {
    question: 'How much does hot tub removal cost in 30A?',
    answer:
      'Hot tub removal in 30A and PCB typically costs $300-$850 depending on size, access, and community type. Standard 6-person hot tubs on accessible patios run $300-$450; deck-mounted or sunken in-ground tubs run $550-$850 due to additional cut and disconnect work. The calculator above provides an instant estimate; text photos to +1 (850) 368-3495 for a confirmed quote.',
  },
  {
    question: 'Do I need to drain my hot tub before removal?',
    answer:
      'Draining is helpful but not required. If you drain it first, we credit $25-50 off the price. Important: hot tub water cannot legally enter 30A storm drains (they flow directly to the Gulf with no treatment). Drain to a soaker hose on grass or into a sanitary sewer cleanout. We handle the drainage as part of the removal if you have not done it.',
  },
  {
    question: 'How long does hot tub removal take?',
    answer:
      'Most hot tub removals take 2-4 hours. Above-ground tubs with good access: 2 hours. Deck-mounted tubs requiring cut and patch work: 3-5 hours. Sunken in-ground tubs requiring more extensive removal: 4-6 hours. We typically complete the removal in a single visit.',
  },
  {
    question: 'Can you remove the deck around the hot tub too?',
    answer:
      'Yes — deck demolition around a hot tub is a common combined service. Adds $200-$600 depending on deck size and material. The combined hot tub + deck removal is more efficient than scheduling two separate services.',
  },
  {
    question: 'What gated 30A communities are you certified to work in?',
    answer:
      'We service all major 30A gated communities including Alys Beach, Rosemary Beach, Watersound, Sandestin, and WaterColor. Gate-coordinated communities typically add 5-10% to the base price to cover the access coordination overhead.',
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
          { name: 'Hot Tub Cost Calculator', url: '/tools/hot-tub-cost-calculator' },
        ]}
      />
      <FAQSchema questions={calculatorFAQs} />
      {children}
    </>
  )
}

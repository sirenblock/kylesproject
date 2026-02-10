'use client'

import { useState } from 'react'
// Animations removed for performance
import { ChevronDown, Truck, Hammer, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Script from 'next/script'

interface FAQQuestion {
  q: string
  a: string | React.ReactNode
}

interface FAQCategory {
  title: string
  icon: typeof Truck
  color: 'ocean' | 'gold' | 'seafoam'
  questions: FAQQuestion[]
}

const faqCategories: FAQCategory[] = [
  {
    title: 'Quick Hauls',
    icon: Truck,
    color: 'ocean',
    questions: [
      {
        q: "What's the minimum charge?",
        a: (
          <>
            Our minimum is $150 for a 1/4 truck load. This covers items like a single couch, dresser, or grill. Check our{' '}
            <Link href="/pricing" className="text-ocean-600 hover:underline font-medium">
              pricing page
            </Link>
            {' '}for full details on volume-based rates.
          </>
        ),
      },
      {
        q: "Is same-day service available?",
        a: (
          <>
            Yes! We offer same-day service based on availability. The earlier you call, the better chance we can fit you in. We serve all areas including{' '}
            <Link href="/service-areas/santa-rosa-beach" className="text-ocean-600 hover:underline font-medium">
              Santa Rosa Beach
            </Link>
            ,{' '}
            <Link href="/service-areas/watercolor" className="text-ocean-600 hover:underline font-medium">
              WaterColor
            </Link>
            , and{' '}
            <Link href="/service-areas/alys-beach" className="text-ocean-600 hover:underline font-medium">
              Alys Beach
            </Link>
            . Text or call and we'll do our best to accommodate.
          </>
        ),
      },
      {
        q: "Do I need to be home?",
        a: (
          <>
            Not necessarily! As long as we can access the items (garage code, unlocked shed, etc.), we can handle the removal while you're away. We'll send before and after photos. This is especially convenient for{' '}
            <Link href="/services/property-management-junk-removal" className="text-ocean-600 hover:underline font-medium">
              property managers
            </Link>
            {' '}and vacation rental turnovers.
          </>
        ),
      },
      {
        q: "What payment methods do you accept?",
        a: (
          <>
            We accept all major credit cards, cash, Venmo, and Zelle. Payment is due upon completion of the job. Visit our{' '}
            <Link href="/contact" className="text-ocean-600 hover:underline font-medium">
              contact page
            </Link>
            {' '}for more information or to schedule service.
          </>
        ),
      },
      {
        q: "How quickly can you come out?",
        a: (
          <>
            Often same-day or next-day. We understand junk removal is often time-sensitive, especially for property turnovers. Whether you need{' '}
            <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline font-medium">
              furniture removal
            </Link>
            {' '}or{' '}
            <Link href="/services/appliance-removal" className="text-ocean-600 hover:underline font-medium">
              appliance hauling
            </Link>
            , give us a call and we'll work to accommodate your schedule.
          </>
        ),
      },
    ],
  },
  {
    title: 'Construction Debris',
    icon: Hammer,
    color: 'gold',
    questions: [
      {
        q: "Why is construction debris priced differently?",
        a: (
          <>
            Construction materials like concrete, tile, drywall, and lumber are significantly heavier and require special{' '}
            <a href="https://www.epa.gov/smm/sustainable-management-construction-and-demolition-materials" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">
              disposal facilities
            </a>
            {' '}with weight-based fees. We price{' '}
            <Link href="/services/construction-debris-removal" className="text-ocean-600 hover:underline font-medium">
              construction debris
            </Link>
            {' '}jobs based on material type and volume to give you the most accurate quote.
          </>
        ),
      },
      {
        q: "How do I get a quote for construction debris?",
        a: (
          <>
            Just text us photos of your debris! We'll respond with an exact quote within 30 minutes. Photos help us assess material type, volume, and weight to give you accurate pricing. Learn more about our{' '}
            <Link href="/services" className="text-ocean-600 hover:underline font-medium">
              services
            </Link>
            {' '}and pricing structure.
          </>
        ),
      },
      {
        q: "What construction materials do you remove?",
        a: (
          <>
            Everything! Drywall, tile, flooring, cabinets, fixtures, lumber, concrete, brick, stone, roofing materials, and more. If it came from a renovation in{' '}
            <Link href="/service-areas/blue-mountain-beach" className="text-ocean-600 hover:underline font-medium">
              Blue Mountain Beach
            </Link>
            {' '}or{' '}
            <Link href="/service-areas/seagrove-beach" className="text-ocean-600 hover:underline font-medium">
              Seagrove Beach
            </Link>
            , we can haul it.
          </>
        ),
      },
      {
        q: "Do you recycle construction materials?",
        a: (
          <>
            Absolutely. We sort and recycle whatever possible - metal, clean wood, concrete, and more. This helps keep costs down and is better for the environment. Learn more about{' '}
            <a href="https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">
              recycling best practices
            </a>
            {' '}and our commitment to{' '}
            <a href="https://www.visitflorida.com/en-us/things-to-do/florida-nature.html" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">
              protecting Florida's environment
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    title: 'Property Managers',
    icon: Building2,
    color: 'seafoam',
    questions: [
      {
        q: "Do you offer recurring service?",
        a: (
          <>
            Yes! We offer preferred pricing and priority scheduling for{' '}
            <Link href="/services/property-management-junk-removal" className="text-ocean-600 hover:underline font-medium">
              property managers
            </Link>
            {' '}with recurring needs. Whether it's monthly cleanouts or on-call service in{' '}
            <a href="https://www.visitsouthwalton.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">
              South Walton
            </a>
            , we've got you covered.
          </>
        ),
      },
      {
        q: "Can you work around tenant schedules?",
        a: (
          <>
            Absolutely. We understand the timing constraints of vacation rentals and can work around check-in/check-out times to ensure minimal disruption. Check out our{' '}
            <Link href="/about" className="text-ocean-600 hover:underline font-medium">
              about page
            </Link>
            {' '}to learn more about our flexible service approach.
          </>
        ),
      },
      {
        q: "Do you provide documentation?",
        a: (
          <>
            Yes. We provide before and after photos for every job, detailed invoices, and donation receipts when items are donated to organizations like{' '}
            <a href="https://www.goodwill.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">
              Goodwill
            </a>
            . Perfect for your records and owner reporting.
          </>
        ),
      },
      {
        q: "Can you handle donation pickups?",
        a: (
          <>
            Yes! We sort items and donate usable goods on your behalf to local charities. You'll receive tax-deductible donation receipts for everything we donate. Learn more about our{' '}
            <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">
              estate cleanout services
            </Link>
            {' '}and donation process.
          </>
        ),
      },
      {
        q: "Do you offer invoicing?",
        a: (
          <>
            Yes, we can invoice for property management companies. Monthly billing is available for clients with recurring service agreements. Visit our{' '}
            <Link href="/pricing" className="text-ocean-600 hover:underline font-medium">
              pricing page
            </Link>
            {' '}for more details on our rates and payment options.
          </>
        ),
      },
    ],
  },
]

const colorMap = {
  ocean: {
    bg: 'bg-ocean-50',
    border: 'border-ocean-200',
    text: 'text-ocean-600',
    activeBg: 'bg-ocean-100',
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-200',
    text: 'text-gold-600',
    activeBg: 'bg-gold-100',
  },
  seafoam: {
    bg: 'bg-seafoam-50',
    border: 'border-seafoam-200',
    text: 'text-seafoam-600',
    activeBg: 'bg-seafoam-100',
  },

// Helper function to convert React nodes to plain text for schema
function getPlainTextAnswer(answer: string | React.ReactNode): string {
  if (typeof answer === 'string') {
    return answer

  // For React nodes, extract meaningful text without links
  const answerMap: Record<string, string> = {
    "What's the minimum charge?": "Our minimum is $150 for a 1/4 truck load. This covers items like a single couch, dresser, or grill. Check our pricing page for full details on volume-based rates.",
    "Is same-day service available?": "Yes! We offer same-day service based on availability. The earlier you call, the better chance we can fit you in. We serve all areas including Santa Rosa Beach, WaterColor, and Alys Beach. Text or call and we'll do our best to accommodate.",
    "Do I need to be home?": "Not necessarily! As long as we can access the items (garage code, unlocked shed, etc.), we can handle the removal while you're away. We'll send before and after photos. This is especially convenient for property managers and vacation rental turnovers.",
    "What payment methods do you accept?": "We accept all major credit cards, cash, Venmo, and Zelle. Payment is due upon completion of the job. Visit our contact page for more information or to schedule service.",
    "How quickly can you come out?": "Often same-day or next-day. We understand junk removal is often time-sensitive, especially for property turnovers. Whether you need furniture removal or appliance hauling, give us a call and we'll work to accommodate your schedule.",
    "Why is construction debris priced differently?": "Construction materials like concrete, tile, drywall, and lumber are significantly heavier and require special disposal facilities with weight-based fees. We price construction debris jobs based on material type and volume to give you the most accurate quote.",
    "How do I get a quote for construction debris?": "Just text us photos of your debris! We'll respond with an exact quote within 30 minutes. Photos help us assess material type, volume, and weight to give you accurate pricing. Learn more about our services and pricing structure.",
    "What construction materials do you remove?": "Everything! Drywall, tile, flooring, cabinets, fixtures, lumber, concrete, brick, stone, roofing materials, and more. If it came from a renovation in Blue Mountain Beach or Seagrove Beach, we can haul it.",
    "Do you recycle construction materials?": "Absolutely. We sort and recycle whatever possible - metal, clean wood, concrete, and more. This helps keep costs down and is better for the environment.",
    "Do you offer recurring service?": "Yes! We offer preferred pricing and priority scheduling for property managers with recurring needs. Whether it's monthly cleanouts or on-call service in South Walton, we've got you covered.",
    "Can you work around tenant schedules?": "Absolutely. We understand the timing constraints of vacation rentals and can work around check-in/check-out times to ensure minimal disruption.",
    "Do you provide documentation?": "Yes. We provide before and after photos for every job, detailed invoices, and donation receipts when items are donated to organizations like Goodwill. Perfect for your records and owner reporting.",
    "Can you handle donation pickups?": "Yes! We sort items and donate usable goods on your behalf to local charities. You'll receive tax-deductible donation receipts for everything we donate. Learn more about our estate cleanout services and donation process.",
    "Do you offer invoicing?": "Yes, we can invoice for property management companies. Monthly billing is available for clients with recurring service agreements. Visit our pricing page for more details on our rates and payment options."

  return answerMap[String(answer)] || ''

// Generate FAQ schema from categories
function generateFAQSchema(categories: FAQCategory[]) {
  const allQuestions = categories.flatMap(category =>
    category.questions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": getPlainTextAnswer(q.a)
    }))
  )

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions

export function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))

  const faqSchema = generateFAQSchema(faqCategories)

  return (
    <>
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mt-4 text-lg text-slate-600"
          >
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const Icon = category.icon
            const colors = colorMap[category.color as keyof typeof colorMap]

            return (
              <div
                key={category.title}
                className={`rounded-2xl border ${colors.border} overflow-hidden`}
              >
                {/* Category Header */}
                <div className={`${colors.bg} px-6 py-4 flex items-center gap-3`}>
                  <div className={`w-10 h-10 rounded-lg ${colors.activeBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                </div>

                {/* Questions */}
                <div className="bg-white divide-y divide-sand-200">
                  {category.questions.map((item, index) => {
                    const key = `${category.title}-${index}`
                    const isOpen = openItems[key]

                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-sand-50 transition-colors"
                        >
                          <span className="font-medium text-slate-800 pr-4">{item.q}</span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-slate-400 shrink-0 transition-transform",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        
                          {isOpen && (
                            <div
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-slate-600">
                                {item.a}
                              </div>
                            </div>
                          )}
                        
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )

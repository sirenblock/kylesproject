import config from '@/lib/config'

const siteUrl = config.siteUrl

const serviceOffers = [
  { name: 'One-Time Junk Removal', url: '/services/one-time-hauls', description: 'Quick, efficient junk removal for any size job with same-day service available.' },
  { name: 'Furniture Removal', url: '/services/furniture-removal', description: 'Professional furniture removal and hauling from single items to entire homes.' },
  { name: 'Appliance Removal', url: '/services/appliance-removal', description: 'Safe removal and eco-friendly disposal of all household appliances.' },
  { name: 'Construction Debris Removal', url: '/services/construction-debris', description: 'Professional construction and renovation debris cleanup and hauling.' },
  { name: 'Estate Cleanouts', url: '/services/estate-cleanouts', description: 'Compassionate estate cleanout services with donation coordination.' },
  { name: 'Garage Cleanouts', url: '/services/garage-cleanouts', description: 'Complete garage cleanout and organization services.' },
  { name: 'Hot Tub Removal', url: '/services/hot-tub-removal', description: 'Full hot tub and spa removal including disconnection coordination.' },
  { name: 'Yard Debris Removal', url: '/services/yard-debris', description: 'Storm cleanup, landscaping waste, and yard debris hauling.' },
  { name: 'Vacation Rental Cleanouts', url: '/services/vacation-rentals', description: 'Fast turnover junk removal for vacation rental properties.' },
  { name: 'Property Management Services', url: '/services/property-management', description: 'Dedicated junk removal support for property managers.' },
  { name: 'Donation Pickup', url: '/services/donation-pickup', description: 'Pickup and donation coordination with local charities.' },
  { name: 'Office Furniture Removal', url: '/services/office-furniture', description: 'Commercial office furniture and equipment removal.' },
]

export function OfferCatalogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: '30A Junk Removal Services',
    description: 'Complete junk removal services for the 30A corridor in Florida.',
    url: siteUrl,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
    },
    itemListElement: serviceOffers.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: `${siteUrl}${service.url}`,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function HomepageFAQSchema() {
  const faqs = [
    {
      question: "What's the minimum charge for junk removal?",
      answer: "Our minimum is $150 for a 1/4 truck load. This covers items like a single couch, dresser, or grill. We use volume-based pricing so you only pay for the space your items take up.",
    },
    {
      question: "Is same-day junk removal available on 30A?",
      answer: "Yes! We offer same-day service based on availability throughout the 30A corridor including Seaside, Rosemary Beach, Alys Beach, WaterColor, and all surrounding communities.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire 30A corridor from Inlet Beach to Dune Allen Beach, plus extended coverage to Destin and Panama City Beach. This includes Seaside, Rosemary Beach, Alys Beach, WaterColor, Grayton Beach, Santa Rosa Beach, Seacrest, Seagrove Beach, and Blue Mountain Beach.",
    },
    {
      question: "How does pricing work?",
      answer: "We use transparent, volume-based pricing. Standard junk removal ranges from $150 (1/4 truck) to $500 (full truck). Construction debris starts at $600. Text us photos for an exact quote within 30 minutes.",
    },
    {
      question: "Do you handle construction debris?",
      answer: "Yes, we handle all construction and renovation debris including drywall, tile, flooring, cabinets, fixtures, lumber, concrete, and more. Construction debris is priced separately due to weight and disposal requirements.",
    },
    {
      question: "Do you donate usable items?",
      answer: "Absolutely. We sort items and donate usable goods to local charities including Habitat for Humanity and Goodwill. You'll receive tax-deductible donation receipts for everything we donate.",
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

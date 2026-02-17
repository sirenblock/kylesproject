import config from '@/lib/config'

const siteUrl = config.siteUrl

const serviceOffers = [
  { name: 'One-Time Junk Removal', url: '/services/one-time-hauls', description: 'Quick, efficient junk removal for any size job with same-day service available.', price: '150', maxPrice: '500' },
  { name: 'Furniture Removal', url: '/services/furniture-removal', description: 'Professional furniture removal and hauling from single items to entire homes.', price: '150', maxPrice: '500' },
  { name: 'Appliance Removal', url: '/services/appliance-removal', description: 'Safe removal and eco-friendly disposal of all household appliances.', price: '150', maxPrice: '400' },
  { name: 'Construction Debris Removal', url: '/services/construction-debris', description: 'Professional construction and renovation debris cleanup and hauling.', price: '600', maxPrice: '1200' },
  { name: 'Estate Cleanouts', url: '/services/estate-cleanouts', description: 'Compassionate estate cleanout services with donation coordination.', price: '400', maxPrice: '1500' },
  { name: 'Garage Cleanouts', url: '/services/garage-cleanouts', description: 'Complete garage cleanout and organization services.', price: '250', maxPrice: '800' },
  { name: 'Hot Tub Removal', url: '/services/hot-tub-removal', description: 'Full hot tub and spa removal including disconnection coordination.', price: '350', maxPrice: '700' },
  { name: 'Yard Debris Removal', url: '/services/yard-debris', description: 'Storm cleanup, landscaping waste, and yard debris hauling.', price: '150', maxPrice: '500' },
  { name: 'Vacation Rental Cleanouts', url: '/services/vacation-rentals', description: 'Fast turnover junk removal for vacation rental properties.', price: '200', maxPrice: '600' },
  { name: 'Property Management Services', url: '/services/property-management', description: 'Dedicated junk removal support for property managers.', price: '150', maxPrice: '500' },
  { name: 'Donation Pickup', url: '/services/donation-pickup', description: 'Pickup and donation coordination with local charities.', price: '150', maxPrice: '400' },
  { name: 'Office Furniture Removal', url: '/services/office-furniture', description: 'Commercial office furniture and equipment removal.', price: '200', maxPrice: '600' },
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
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: service.price,
        maxPrice: service.maxPrice,
      },
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: `${siteUrl}${service.url}`,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${siteUrl}#localbusiness`,
        },
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

const galleryImages = [
  { url: '/images/gallery/before-removal-1.webp', name: '30A Junk Removal truck loaded with furniture', description: 'Our truck fully loaded after a furniture removal job on 30A' },
  { url: '/images/gallery/furniture-removal-1.webp', name: 'Furniture removal in progress on 30A', description: 'Professional furniture removal from a 30A vacation home' },
  { url: '/images/gallery/furniture-removal-2.webp', name: 'Couch and mattress removal on 30A', description: 'Hauling away old furniture from a 30A residence' },
  { url: '/images/gallery/furniture-removal-3.webp', name: 'Estate cleanout furniture haul on 30A', description: 'Large furniture items removed during an estate cleanout' },
  { url: '/images/gallery/furniture-removal-4.webp', name: 'Junk removal completed on 30A', description: 'Clean space after professional junk removal service' },
]

export function ImageGallerySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: '30A Junk Removal - Our Work',
    description: 'Photos from real junk removal jobs across the 30A corridor in Florida.',
    url: siteUrl,
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      url: `${siteUrl}${img.url}`,
      name: img.name,
      description: img.description,
      contentUrl: `${siteUrl}${img.url}`,
    })),
    creator: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#localbusiness`,
      name: '30A Junk Removal',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

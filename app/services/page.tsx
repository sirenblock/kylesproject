import { Metadata } from 'next'
import Link from 'next/link'
import {
  Truck,
  Hammer,
  Home,
  Building2,
  Refrigerator,
  Sofa,
  Waves,
  Heart,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services | 30A Junk Removal',
  description: 'Comprehensive junk removal services for 30A. One-time hauls, construction debris, vacation rental turnovers, estate cleanouts, appliance removal, and more.',
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
}

const services = [
  {
    title: 'One-Time Hauls',
    description: 'Quick junk removal for any size job. From a single item to a full garage cleanout. Perfect for homeowners and rental properties.',
    icon: Truck,
    href: '/services/one-time-hauls',
    color: 'ocean',
    features: ['Same-day service available', 'Transparent pricing', 'We do all the lifting'],
  },
  {
    title: 'Construction Debris',
    description: 'Renovation and construction cleanup. Drywall, tile, lumber, concrete, and more. We follow EPA guidelines for proper disposal.',
    icon: Hammer,
    href: '/services/construction-debris',
    color: 'gold',
    features: ['Custom quotes for your project', 'We sort and recycle', 'Weight-based pricing'],
  },
  {
    title: 'Vacation Rental Turnovers',
    description: 'Fast turnaround between guests. We work around your check-in/check-out times.',
    icon: Home,
    href: '/services/vacation-rentals',
    color: 'seafoam',
    features: ['Priority scheduling', 'Photo documentation', 'Reliable timing'],
  },
  {
    title: 'Estate Cleanouts',
    description: 'Respectful, thorough clearing of entire homes. We coordinate donations with local charities like Habitat for Humanity on your behalf.',
    icon: Building2,
    href: '/services/estate-cleanouts',
    color: 'ocean',
    features: ['Donation receipts', 'Careful item handling', 'Complete home clearing'],
  },
  {
    title: 'Appliance Removal',
    description: 'Safe removal of refrigerators, washers, dryers, stoves, and all major appliances. Eco-friendly recycling when possible.',
    icon: Refrigerator,
    href: '/services/appliance-removal',
    color: 'seafoam',
    features: ['Proper disposal', 'Recycling when possible', 'All brands handled'],
  },
  {
    title: 'Furniture Removal',
    description: 'Couches, beds, tables, dressers - we remove all types of furniture.',
    icon: Sofa,
    href: '/services/furniture-removal',
    color: 'ocean',
    features: ['Any size furniture', 'Careful maneuvering', 'Donation coordination'],
  },
  {
    title: 'Hot Tub Removal',
    description: 'Expert dismantling and hauling of hot tubs and spas.',
    icon: Waves,
    href: '/services/hot-tub-removal',
    color: 'gold',
    features: ['Professional dismantling', 'Complete removal', 'Deck-safe process'],
  },
  {
    title: 'Donation Pickup',
    description: 'We sort and donate usable items on your behalf, with tax receipts provided.',
    icon: Heart,
    href: '/services/donation-pickup',
    color: 'seafoam',
    features: ['Tax-deductible receipts', 'We handle sorting', 'Local charity partners'],
  },
]

const colorMap = {
  ocean: {
    bg: 'bg-ocean-50',
    icon: 'bg-ocean-100 text-ocean-600',
    hover: 'hover:border-ocean-300',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'bg-gold-100 text-gold-600',
    hover: 'hover:border-gold-300',
  },
  seafoam: {
    bg: 'bg-seafoam-50',
    icon: 'bg-seafoam-100 text-seafoam-600',
    hover: 'hover:border-seafoam-300',
  },
}

export default function ServicesPage() {
  const internalLinks = getContextualLinks('core', '/services')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="-mt-16 pt-32 pb-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Whatever you need removed, we've got you covered. Professional, reliable junk removal for all of <Link href="/service-areas" className="text-ocean-600 hover:underline font-medium">30A communities</Link> including <Link href="/service-areas/alys-beach" className="text-ocean-600 hover:underline font-medium">Alys Beach</Link>, <Link href="/service-areas/santa-rosa-beach" className="text-ocean-600 hover:underline font-medium">Santa Rosa Beach</Link>, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              From <Link href="/services/construction-debris" className="text-ocean-600 hover:underline font-medium">construction debris removal</Link> to <Link href="/services/appliance-removal" className="text-ocean-600 hover:underline font-medium">old appliance disposal</Link>, we handle every type of junk removal job. Our team serves the entire <a href="https://www.visitsouthwalton.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">South Walton area</a>, providing eco-friendly services that prioritize <a href="https://www.habitat.org/restores" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">donation</a> and <a href="https://www.epa.gov/recycle/recycling-basics" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">recycling</a> whenever possible. Need help deciding? Check our <Link href="/pricing" className="text-ocean-600 hover:underline font-medium">pricing guide</Link> or <Link href="/contact" className="text-ocean-600 hover:underline font-medium">contact us</Link> for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              const colors = colorMap[service.color as keyof typeof colorMap]
              return (
                <div
                  key={service.title}
                  className={`group rounded-2xl p-8 border border-sand-200 ${colors.hover} hover:shadow-lg transition-all`}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.icon} mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-ocean-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your instant quote online or give us a call. Same-day service available throughout <Link href="/service-areas/seaside" className="text-ocean-400 hover:text-ocean-300 underline font-medium">Seaside</Link>, <Link href="/service-areas/watercolor" className="text-ocean-400 hover:text-ocean-300 underline font-medium">WaterColor</Link>, and all 30A communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-slate-900 rounded-xl font-semibold hover:from-seafoam-500 hover:to-seafoam-600 transition-colors"
            >
              Get Instant Quote
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Service Areas & Additional Resources"
      />
    </main>
  )
}

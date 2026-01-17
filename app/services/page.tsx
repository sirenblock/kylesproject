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

export const metadata: Metadata = {
  title: 'Services | 30A Junk Removal',
  description: 'Comprehensive junk removal services for 30A. One-time hauls, construction debris, vacation rental turnovers, estate cleanouts, appliance removal, and more.',
}

const services = [
  {
    title: 'One-Time Hauls',
    description: 'Quick junk removal for any size job. From a single item to a full garage cleanout.',
    icon: Truck,
    href: '/services/one-time-hauls',
    color: 'ocean',
    features: ['Same-day service available', 'Transparent pricing', 'We do all the lifting'],
  },
  {
    title: 'Construction Debris',
    description: 'Renovation and construction cleanup. Drywall, tile, lumber, concrete, and more.',
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
    description: 'Respectful, thorough clearing of entire homes. Donations coordinated on your behalf.',
    icon: Building2,
    href: '/services/estate-cleanouts',
    color: 'ocean',
    features: ['Donation receipts', 'Careful item handling', 'Complete home clearing'],
  },
  {
    title: 'Appliance Removal',
    description: 'Safe removal of refrigerators, washers, dryers, stoves, and all major appliances.',
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
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Whatever you need removed, we've got you covered. Professional, reliable junk removal for all of 30A.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your instant quote online or give us a call. Same-day service available.
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
    </div>
  )
}

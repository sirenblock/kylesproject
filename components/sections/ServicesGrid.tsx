// Animations removed for performance
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
} from 'lucide-react'

const services = [
  {
    title: 'One-Time Hauls',
    description: 'Quick junk removal for any size job',
    icon: Truck,
    href: '/services/one-time-hauls',
    color: 'ocean',
  },
  {
    title: 'Renovation Debris',
    description: 'Construction & remodel cleanup',
    icon: Hammer,
    href: '/services/construction-debris',
    color: 'gold',
  },
  {
    title: 'Vacation Rental Turnovers',
    description: 'Fast turnaround for rental properties',
    icon: Home,
    href: '/services/vacation-rentals',
    color: 'seafoam',
  },
  {
    title: 'Estate Cleanouts',
    description: 'Respectful, thorough estate clearing',
    icon: Building2,
    href: '/services/estate-cleanouts',
    color: 'ocean',
  },
  {
    title: 'Appliance Removal',
    description: 'Safe removal of all appliances',
    icon: Refrigerator,
    href: '/services/appliance-removal',
    color: 'seafoam',
  },
  {
    title: 'Furniture Removal',
    description: 'Couches, beds, tables & more',
    icon: Sofa,
    href: '/services/furniture-removal',
    color: 'ocean',
  },
  {
    title: 'Hot Tub Removal',
    description: 'Expert hot tub dismantling & hauling',
    icon: Waves,
    href: '/services/hot-tub-removal',
    color: 'gold',
  },
  {
    title: 'Donation Pickup',
    description: 'We donate usable items for you',
    icon: Heart,
    href: '/services/donation-pickup',
    color: 'seafoam',
  },
]

const colorMap = {
  ocean: {
    bg: 'bg-ocean-50',
    icon: 'text-ocean-600',
    hover: 'hover:bg-ocean-100',
    border: 'border-ocean-200',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'text-gold-600',
    hover: 'hover:bg-gold-100',
    border: 'border-gold-200',
  },
  seafoam: {
    bg: 'bg-seafoam-50',
    icon: 'text-seafoam-600',
    hover: 'hover:bg-seafoam-100',
    border: 'border-seafoam-200',
  },
}

interface ServicesGridProps {
  locationSlug?: string
}

export function ServicesGrid({ locationSlug }: ServicesGridProps = {}) {
  return (
    <section className="py-20 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            Our Services
          </h2>
          <p
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Whatever you need removed, we've got you covered
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = colorMap[service.color as keyof typeof colorMap]
            return (
              <div
                key={service.title}
              >
                <Link
                  href={locationSlug ? `/service-areas/${locationSlug}/${service.href.replace('/services/', '')}` : service.href}
                  className={`block p-6 rounded-xl border ${colors.border} ${colors.bg} ${colors.hover} transition-all group h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-ocean-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

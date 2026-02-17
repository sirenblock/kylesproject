import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { locations } from '@/lib/locations'

interface AllServiceAreasGridProps {
  currentSlug: string
}

export function AllServiceAreasGrid({ currentSlug }: AllServiceAreasGridProps) {
  const allLocations = Object.values(locations).filter(
    (loc) => loc.slug !== currentSlug
  )

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            All Service Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide professional junk removal throughout the 30A corridor and beyond. Click any location to learn more about our services there.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/service-areas/${loc.slug}`}
              className="flex items-center gap-2 p-4 bg-sand-50 rounded-lg border border-sand-200 hover:border-ocean-500 hover:bg-ocean-50 transition-all group"
            >
              <MapPin className="w-4 h-4 text-ocean-500 shrink-0" />
              <span className="font-medium text-slate-700 group-hover:text-ocean-700">
                {loc.name}
              </span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-ocean-500 ml-auto shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

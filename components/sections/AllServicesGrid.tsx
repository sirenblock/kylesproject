import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { serviceLinks } from '@/lib/seo'

interface AllServicesGridProps {
  currentSlug: string
}

export function AllServicesGrid({ currentSlug }: AllServicesGridProps) {
  const otherServices = serviceLinks.filter(
    (s) => s.href !== `/services/${currentSlug}`
  )

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            All Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a full range of junk removal services throughout the 30A corridor. Explore all our options below.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {otherServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex items-center gap-2 p-4 bg-sand-50 rounded-lg border border-sand-200 hover:border-ocean-500 hover:bg-ocean-50 transition-all group"
            >
              <span className="font-medium text-slate-700 group-hover:text-ocean-700 capitalize">
                {service.text}
              </span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-ocean-500 ml-auto shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

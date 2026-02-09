import { Shield, Leaf, Home, Star, Clock, DollarSign } from 'lucide-react'

interface TrustBadge {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const badges: TrustBadge[] = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Professional service with complete protection'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We recycle and donate whenever possible to minimize environmental impact'
  },
  {
    icon: Home,
    title: 'Locally Owned',
    description: 'Proud members of the 30A community serving our neighbors'
  },
  {
    icon: Star,
    title: 'Customer Focused',
    description: 'Trusted by customers across 30A'
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Fast, reliable service with same-day availability'
  },
  {
    icon: DollarSign,
    title: 'Free Quotes',
    description: 'No-obligation free estimates with transparent pricing'
  }
]

interface TrustBadgesProps {
  variant?: 'default' | 'compact' | 'horizontal'
  className?: string
}

export function TrustBadges({ variant = 'default', className = '' }: TrustBadgesProps) {
  if (variant === 'compact') {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ${className}`}>
        {badges.map((badge) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.title}
              className="flex flex-col items-center gap-2 text-center p-4 bg-white rounded-lg border border-sand-200 hover:border-ocean-300 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ocean-100 text-ocean-600">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-slate-800">{badge.title}</span>
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
        {badges.map((badge) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.title}
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-sand-200 hover:border-ocean-300 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ocean-100 text-ocean-600">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-slate-800">{badge.title}</span>
            </div>
          )
        })}
      </div>
    )
  }

  // Default variant - full cards with descriptions
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {badges.map((badge) => {
        const Icon = badge.icon
        return (
          <div
            key={badge.title}
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-sand-200 hover:border-ocean-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-ocean-100 text-ocean-600">
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">{badge.title}</h3>
            <p className="text-sm text-slate-600 text-center">{badge.description}</p>
          </div>
        )
      })}
    </div>
  )
}

// Dark variant for use on dark backgrounds
export function TrustBadgesDark({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {badges.slice(0, 3).map((badge) => {
        const Icon = badge.icon
        return (
          <div key={badge.title} className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ocean-400/20 text-ocean-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-semibold text-white">{badge.title}</span>
            <span className="text-sm text-slate-300">{badge.description}</span>
          </div>
        )
      })}
    </div>
  )
}

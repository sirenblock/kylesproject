'use client'

import { Clock, MapPin, Zap, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export type UrgencyBadgeVariant = 'inline' | 'banner' | 'floating'
export type UrgencyBadgeType = 'same-day' | 'serving-today' | 'fast-response' | 'last-minute' | 'available-now' | 'open-seven-days'

interface UrgencyBadgeProps {
  variant?: UrgencyBadgeVariant
  type?: UrgencyBadgeType
  location?: string
  className?: string
  animated?: boolean
}

const badges = {
  'same-day': {
    icon: Clock,
    text: 'Same-Day Service Available',
    color: 'emerald'
  },
  'serving-today': {
    icon: MapPin,
    text: 'Serving {location} Today',
    color: 'ocean'
  },
  'fast-response': {
    icon: Zap,
    text: 'Response Time: Under 15 Minutes',
    color: 'gold'
  },
  'last-minute': {
    icon: CheckCircle,
    text: 'Last Minute Bookings Welcome',
    color: 'seafoam'
  },
  'available-now': {
    icon: Zap,
    text: 'Available Now',
    color: 'emerald'
  },
  'open-seven-days': {
    icon: Clock,
    text: 'Open 7 Days',
    color: 'ocean'
  }
}

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-400',
    text: 'text-emerald-700',
    icon: 'text-emerald-600',
    pulse: 'bg-emerald-400',
    dot: 'bg-emerald-500'
  },
  ocean: {
    bg: 'bg-ocean-50',
    border: 'border-ocean-400',
    text: 'text-ocean-700',
    icon: 'text-ocean-600',
    pulse: 'bg-ocean-400',
    dot: 'bg-ocean-500'
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-400',
    text: 'text-gold-700',
    icon: 'text-gold-600',
    pulse: 'bg-gold-400',
    dot: 'bg-gold-500'
  },
  seafoam: {
    bg: 'bg-seafoam-50',
    border: 'border-seafoam-400',
    text: 'text-seafoam-700',
    icon: 'text-seafoam-600',
    pulse: 'bg-seafoam-400',
    dot: 'bg-seafoam-500'
  }
}

export function UrgencyBadge({
  variant = 'inline',
  type = 'same-day',
  location,
  className,
  animated = true
}: UrgencyBadgeProps) {
  const badge = badges[type]
  const colors = colorClasses[badge.color as keyof typeof colorClasses]
  const Icon = badge.icon

  const text = badge.text.replace('{location}', location || 'Your Area')
  const showDot = type === 'available-now'

  // Inline variant - compact badge for use near CTAs
  if (variant === 'inline') {
    return (
      <div className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2',
        colors.bg,
        colors.border,
        colors.text,
        'font-semibold text-sm',
        'shadow-sm',
        className
      )}>
        {showDot && (
          <div className="relative flex items-center justify-center">
            <span className={cn('w-2 h-2 rounded-full', colors.dot)} />
            {animated && (
              <span className={cn(
                'absolute w-2 h-2 rounded-full animate-ping',
                colors.pulse,
                'opacity-75'
              )} />
            )}
          </div>
        )}
        {!showDot && <Icon className={cn('w-4 h-4', colors.icon)} />}
        <span>{text}</span>
      </div>
    )
  }

  // Banner variant - full width attention-grabber
  if (variant === 'banner') {
    return (
      <div className={cn(
        'relative w-full px-4 py-4 overflow-hidden',
        colors.bg,
        className
      )}>
        {/* Animated border */}
        {animated && (
          <div className={cn(
            'absolute inset-0 border-2',
            colors.border,
            'animate-pulse'
          )} />
        )}

        {/* Non-animated border */}
        {!animated && (
          <div className={cn(
            'absolute inset-0 border-2',
            colors.border
          )} />
        )}

        <div className="relative flex items-center justify-center gap-3 max-w-7xl mx-auto">
          {showDot && (
            <div className="relative flex items-center justify-center">
              <span className={cn('w-3 h-3 rounded-full', colors.dot)} />
              {animated && (
                <span className={cn(
                  'absolute w-3 h-3 rounded-full animate-ping',
                  colors.pulse,
                  'opacity-75'
                )} />
              )}
            </div>
          )}
          {!showDot && <Icon className={cn('w-6 h-6', colors.icon)} />}
          <span className={cn('font-bold text-lg', colors.text)}>
            {text}
          </span>
        </div>
      </div>
    )
  }

  // Floating variant - fixed position badge
  if (variant === 'floating') {
    return (
      <div className={cn(
        'fixed top-20 right-4 z-40',
        'lg:top-24 lg:right-6',
        'shadow-2xl rounded-xl overflow-hidden',
        animated && 'animate-[slideInRight_0.5s_ease-out]',
        className
      )}>
        <div className={cn(
          'relative px-4 py-3 border-2',
          colors.bg,
          colors.border
        )}>
          {/* Pulsing border effect */}
          {animated && (
            <div className={cn(
              'absolute inset-0 rounded-xl border-2',
              colors.border,
              'animate-pulse'
            )} />
          )}

          <div className="relative flex items-center gap-2.5">
            {showDot && (
              <div className="relative flex items-center justify-center">
                <span className={cn('w-2.5 h-2.5 rounded-full', colors.dot)} />
                {animated && (
                  <span className={cn(
                    'absolute w-2.5 h-2.5 rounded-full animate-ping',
                    colors.pulse,
                    'opacity-75'
                  )} />
                )}
              </div>
            )}
            {!showDot && <Icon className={cn('w-5 h-5', colors.icon)} />}
            <span className={cn('font-bold text-sm whitespace-nowrap', colors.text)}>
              {text}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return null
}

// Convenience component for displaying business hours
export function BusinessHoursBadge({ className }: { className?: string }) {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()

  // Open 7 days, 8 AM - 6 PM
  const isOpen = hour >= 8 && hour < 18

  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2',
      isOpen ? 'bg-emerald-50 border-emerald-400 text-emerald-700' : 'bg-slate-100 border-slate-300 text-slate-600',
      'font-semibold text-sm shadow-sm',
      className
    )}>
      <div className="relative flex items-center justify-center">
        <span className={cn('w-2 h-2 rounded-full', isOpen ? 'bg-emerald-500' : 'bg-slate-400')} />
        {isOpen && (
          <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
        )}
      </div>
      <span>{isOpen ? 'Open Now' : 'Closed'} • 8 AM - 6 PM</span>
    </div>
  )
}

// Multiple badges component for displaying several at once
interface MultipleBadgesProps {
  badges: Array<{
    type: UrgencyBadgeType
    location?: string
  }>
  className?: string
}

export function MultipleBadges({ badges: badgeList, className }: MultipleBadgesProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {badgeList.map((badge, index) => (
        <UrgencyBadge
          key={`${badge.type}-${index}`}
          type={badge.type}
          location={badge.location}
          variant="inline"
          animated={index === 0}
        />
      ))}
    </div>
  )
}

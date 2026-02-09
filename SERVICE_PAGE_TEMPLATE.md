# Service Page Template with Urgency Components

This template shows how to add urgency badges to any service page.

## Quick Copy-Paste Instructions

### 1. Add Import Statement
Add this to your imports at the top of the file:

```tsx
import { UrgencyBadge } from '@/components/ui/UrgencyBadge'
```

### 2. Add Banner at Top of Page
Right after the BreadcrumbSchema and FAQSchema, add:

```tsx
{/* Urgency Banner */}
<UrgencyBadge variant="banner" type="same-day" />
```

### 3. Add Inline Badge in Hero Section
Replace the existing badge line with this enhanced version:

**Before:**
```tsx
<span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-300 rounded-full text-sm font-semibold mb-6 border border-gold-400/30">
  {service.shortTitle}
</span>
```

**After:**
```tsx
<div className="flex items-center gap-3 mb-6">
  <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-300 rounded-full text-sm font-semibold border border-gold-400/30">
    {service.shortTitle}
  </span>
  <UrgencyBadge variant="inline" type="fast-response" />
</div>
```

### 4. Add data-cta to Phone CTAs
Add `data-cta` attribute to all phone/text links:

**Before:**
```tsx
<a
  href={`tel:${PHONE_NUMBER}`}
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
>
  <Phone className="w-5 h-5" />
  Call {FORMATTED_PHONE}
</a>
```

**After:**
```tsx
<a
  href={`tel:${PHONE_NUMBER}`}
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
  data-cta
>
  <Phone className="w-5 h-5" />
  Call {FORMATTED_PHONE}
</a>
```

## Complete Example

Here's a complete before/after example:

### BEFORE:
```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Camera } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { getServiceDetail } from '@/lib/services'
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'
// ... other imports

const service = getServiceDetail('your-service')!

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.shortTitle, url: `/services/${service.slug}` }
        ]}
      />
      <FAQSchema questions={service.faqs} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-300 rounded-full text-sm font-semibold mb-6 border border-gold-400/30">
              {service.shortTitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              {/* ... more CTAs ... */}
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of page ... */}
    </div>
  )
}
```

### AFTER:
```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Camera } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { getServiceDetail } from '@/lib/services'
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'
import { UrgencyBadge } from '@/components/ui/UrgencyBadge'  // ← ADD THIS
// ... other imports

const service = getServiceDetail('your-service')!

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.shortTitle, url: `/services/${service.slug}` }
        ]}
      />
      <FAQSchema questions={service.faqs} />

      {/* Urgency Banner */}
      <UrgencyBadge variant="banner" type="same-day" />  {/* ← ADD THIS */}

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* REPLACE THIS SECTION ↓ */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-300 rounded-full text-sm font-semibold border border-gold-400/30">
                {service.shortTitle}
              </span>
              <UrgencyBadge variant="inline" type="fast-response" />
            </div>
            {/* REPLACE THIS SECTION ↑ */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-100 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                data-cta  {/* ← ADD THIS */}
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              {/* ... add data-cta to other CTAs too ... */}
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of page ... */}
    </div>
  )
}
```

## Badge Type Selection Guide

Choose the badge type based on the service:

### Same-Day Services (General)
```tsx
<UrgencyBadge variant="banner" type="same-day" />
```
**Use for:** Most general services

### Fast Response Services
```tsx
<UrgencyBadge variant="inline" type="fast-response" />
```
**Use for:** Emergency services, quick responses

### Flexible Booking Services
```tsx
<UrgencyBadge variant="inline" type="last-minute" />
```
**Use for:** Vacation rental turnovers, flexible scheduling

### Premium/Available Services
```tsx
<UrgencyBadge variant="inline" type="available-now" />
```
**Use for:** Immediate availability emphasis

## Location Page Template

For location pages, use location-specific messaging:

```tsx
import { UrgencyBadge, BusinessHoursBadge } from '@/components/ui/UrgencyBadge'

// At top
<UrgencyBadge variant="banner" type="serving-today" location={location.name} />

// In hero area
<div className="flex items-center gap-3 mb-4 flex-wrap">
  <div className="flex items-center gap-2">
    <MapPin className="w-5 h-5 text-gold-400" />
    <span className="text-gold-400 font-semibold">Serving {location.name}</span>
  </div>
  <BusinessHoursBadge />
  <UrgencyBadge variant="inline" type="last-minute" />
</div>
```

## Checklist for Each Service Page

- [ ] Import UrgencyBadge component
- [ ] Add banner variant at top of page
- [ ] Add inline variant in hero section
- [ ] Add data-cta to phone CTA
- [ ] Add data-cta to text CTA
- [ ] Add data-cta to quote form CTA
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Verify animations work
- [ ] Check color scheme matches page

## Common Mistakes to Avoid

1. **Too Many Badges**: Don't use more than 2-3 badges per page
2. **Wrong Variant**: Banner for top of page, inline for hero area
3. **Missing data-cta**: Required for exit-intent logic
4. **Animation Overload**: Set animated={false} if too distracting
5. **Poor Placement**: Badges should be near CTAs or at decision points

## Testing After Implementation

1. **Visual Check**: Badges appear correctly
2. **Animation Check**: Pulsing/fading effects work smoothly
3. **Mobile Check**: Badges are responsive and readable
4. **CTA Check**: All phone/text links have data-cta
5. **Exit-Intent Check**: Modal doesn't show after CTA click

## Files to Update

Remaining service pages:
- `/app/services/construction-debris/page.tsx`
- `/app/services/vacation-rentals/page.tsx`
- `/app/services/estate-cleanouts/page.tsx`
- `/app/services/appliance-removal/page.tsx`
- `/app/services/hot-tub-removal/page.tsx`
- `/app/services/donation-pickup/page.tsx`
- `/app/services/garage-cleanouts/page.tsx`
- `/app/services/yard-debris/page.tsx`
- `/app/services/office-furniture/page.tsx`
- `/app/services/property-management/page.tsx`

## Support

Questions? Check:
- `/URGENCY_COMPONENTS.md` - Full API documentation
- `/IMPLEMENTATION_SUMMARY.md` - Overview and testing guide
- `/SERVICE_PAGE_TEMPLATE.md` - This file

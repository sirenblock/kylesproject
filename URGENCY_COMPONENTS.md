# Urgency & Exit-Intent Components Implementation Guide

## Overview
This document describes the two new lead generation components implemented:
1. **UrgencyBadge** - Displays urgency messaging to encourage immediate action
2. **ExitIntentModal** - Captures leads when users attempt to leave the site

## UrgencyBadge Component

### Location
`/components/ui/UrgencyBadge.tsx`

### Features
- Multiple variants: inline, banner, floating
- Multiple urgency types: same-day, serving-today, fast-response, last-minute, available-now, open-seven-days
- Animated pulsing border effects
- Color-coded messaging (emerald, ocean, gold, seafoam)
- Dynamic location insertion for location pages

### Usage Examples

#### Banner (Full Width)
```tsx
import { UrgencyBadge } from '@/components/ui/UrgencyBadge'

// At top of page
<UrgencyBadge variant="banner" type="same-day" />
```

#### Inline (Near CTAs)
```tsx
// Near phone number or CTA buttons
<UrgencyBadge variant="inline" type="fast-response" />

// With location
<UrgencyBadge variant="inline" type="serving-today" location="Seaside" />
```

#### Floating (Fixed Position)
```tsx
// Will appear fixed in top-right corner
<UrgencyBadge variant="floating" type="available-now" />
```

#### Business Hours Badge
```tsx
import { BusinessHoursBadge } from '@/components/ui/UrgencyBadge'

// Shows "Open Now" or "Closed" with green/gray dot
<BusinessHoursBadge />
```

#### Multiple Badges
```tsx
import { MultipleBadges } from '@/components/ui/UrgencyBadge'

<MultipleBadges
  badges={[
    { type: 'same-day' },
    { type: 'fast-response' },
    { type: 'available-now' }
  ]}
/>
```

### Available Badge Types

1. **same-day** - "Same-Day Service Available"
2. **serving-today** - "Serving {location} Today" (requires location prop)
3. **fast-response** - "Response Time: Under 15 Minutes"
4. **last-minute** - "Last Minute Bookings Welcome"
5. **available-now** - "Available Now" (with animated green dot)
6. **open-seven-days** - "Open 7 Days"

### Props

```typescript
interface UrgencyBadgeProps {
  variant?: 'inline' | 'banner' | 'floating'  // Default: 'inline'
  type?: UrgencyBadgeType                     // Default: 'same-day'
  location?: string                           // For 'serving-today' type
  className?: string                          // Additional Tailwind classes
  animated?: boolean                          // Default: true
}
```

## ExitIntentModal Component

### Location
`/components/ui/ExitIntentModal.tsx`

### Features
- Desktop: Triggers when mouse moves to close tab/browser
- Mobile: Triggers on scroll-up gesture (3 consecutive scroll-ups)
- Only shows once per session
- Doesn't show if user already clicked a CTA (tracked via data-cta attribute)
- LocalStorage persistence (won't show again after submission)
- Mobile-optimized bottom sheet on smaller screens
- Sends EXIT_INTENT webhook to `/api/webhook`

### Implementation

#### Already Added to Root Layout
The ExitIntentModal is automatically included in `/app/layout.tsx`:

```tsx
import { ExitIntentModal } from "@/components/ui/ExitIntentModal"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* ... other components ... */}
        <ExitIntentModal />
      </body>
    </html>
  )
}
```

#### How It Works

1. **Desktop Detection**: Monitors `mouseleave` event on document
   - Triggers when cursor moves above viewport (y <= 0)
   - 100ms delay before showing modal

2. **Mobile Detection**: Monitors scroll direction
   - Counts consecutive scroll-up movements
   - Shows after 3 consecutive scroll-ups when below 100px scroll position

3. **CTA Tracking**: Prevents showing modal if user already engaged
   - Add `data-cta` attribute to all phone/text/quote CTAs
   - Example: `<a href="tel:..." data-cta>Call Now</a>`
   - Tracked in sessionStorage

4. **LocalStorage Keys**:
   - `exitIntentShown` - Set when modal is closed
   - `exitIntentSubmitted` - Set when user clicks Text/Call button

5. **SessionStorage Keys**:
   - `ctaInteracted` - Set when any CTA is clicked

### Webhook Integration

When user clicks "Text Me Quote" or "Call Now" in the modal:

```typescript
// Sends to /api/webhook
{
  type: 'EXIT_INTENT',
  phone: phoneNumber,
  timestamp: new Date().toISOString(),
  source: 'exit-intent-modal'
}
```

## Implementation Checklist

### Pages Already Updated

1. ✅ **Root Layout** (`/app/layout.tsx`)
   - ExitIntentModal added globally

2. ✅ **Service Page** (`/app/services/one-time-hauls/page.tsx`)
   - Banner at top: `<UrgencyBadge variant="banner" type="same-day" />`
   - Inline badge in hero: `<UrgencyBadge variant="inline" type="fast-response" />`
   - data-cta attribute on phone CTA

3. ✅ **Location Page** (`/app/service-areas/[slug]/page.tsx`)
   - Banner at top: `<UrgencyBadge variant="banner" type="serving-today" location={location.name} />`
   - BusinessHoursBadge in hero
   - Last-minute badge in hero
   - data-cta attribute on phone CTA

4. ✅ **Pricing Page** (`/app/pricing/page.tsx`)
   - Banner at top
   - Inline badge in hero
   - Available-now badge near bottom CTAs
   - data-cta attributes on CTAs

5. ✅ **Furniture Removal** (`/app/services/furniture-removal/page.tsx`)
   - Banner at top

6. ✅ **Hero Component** (`/components/sections/Hero.tsx`)
   - data-cta attributes on Call and Text buttons
   - Already has built-in "Same-Day Service Available" badge

### Remaining Service Pages to Update

Apply this pattern to all remaining service pages:

```tsx
// Add import
import { UrgencyBadge } from '@/components/ui/UrgencyBadge'

// At top of return statement (before hero)
<UrgencyBadge variant="banner" type="same-day" />

// In hero section, add to badge area
<UrgencyBadge variant="inline" type="fast-response" />

// On all phone/text CTAs
<a href="tel:..." data-cta>Call Now</a>
<a href="sms:..." data-cta>Text Us</a>
```

**Service pages to update:**
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

## Design & Animation Details

### UrgencyBadge Animations
- Pulsing border effect (animate-pulse on border)
- Animated green dot for "Available Now" (ping animation)
- Smooth color transitions on hover
- Floating variant slides in from right

### ExitIntentModal Animations
- Backdrop: fadeIn (0.2s)
- Desktop modal: scaleIn (0.3s) - scales from 0.9 to 1
- Mobile modal: slideInUp (0.3s) - slides from bottom
- Pulsing effect on primary CTA button
- Success state transition

### Color Palette
- **Emerald**: Urgent actions (same-day, available-now)
- **Ocean**: Location-based (serving-today, open-seven-days)
- **Gold**: Speed/response (fast-response)
- **Seafoam**: Flexibility (last-minute)

## Testing

### Test ExitIntentModal

1. **Desktop**:
   - Open site in browser
   - Move mouse cursor above browser window (to close tab area)
   - Modal should appear

2. **Mobile**:
   - Open site on mobile device
   - Scroll down past 100px
   - Scroll up 3 times quickly
   - Modal should appear from bottom

3. **After CTA Click**:
   - Click any CTA with data-cta attribute
   - Try to trigger exit intent
   - Modal should NOT appear

4. **LocalStorage Reset** (for testing):
```javascript
localStorage.removeItem('exitIntentShown')
localStorage.removeItem('exitIntentSubmitted')
sessionStorage.removeItem('ctaInteracted')
```

### Test UrgencyBadge

1. Navigate to any service page - banner should appear at top
2. Check location pages - should show "Serving [Location] Today"
3. Verify animations are smooth and not distracting
4. Check mobile responsiveness

## Performance Considerations

- UrgencyBadge uses 'use client' but is lightweight
- ExitIntentModal only activates after page load (useEffect)
- Animations use CSS transforms (GPU accelerated)
- LocalStorage prevents unnecessary re-renders
- Event listeners are properly cleaned up in useEffect return

## Conversion Tracking

Both components are designed to be tracked via:

1. **Google Analytics** - Add event tracking to modal CTAs
2. **Facebook Pixel** - Track exit intent conversions
3. **Webhook Data** - EXIT_INTENT tag in webhook payload

Example GA4 tracking (add to components if needed):
```typescript
onClick={() => {
  // @ts-ignore
  window.gtag?.('event', 'exit_intent_cta_click', {
    cta_type: 'text_quote',
    page: window.location.pathname
  })
}}
```

## A/B Testing Recommendations

### UrgencyBadge Variants to Test:
1. Banner vs No Banner
2. Animated vs Static
3. Multiple badges vs Single badge
4. Different color schemes
5. Different messaging

### ExitIntentModal Variants to Test:
1. Discount offer vs No discount
2. Phone form vs Direct text link (current)
3. Different headlines
4. Different timing triggers
5. Mobile bottom sheet vs Center modal

## Best Practices

1. **Don't Overuse**: Use 1-2 urgency badges per page maximum
2. **Match Context**: Use location-specific badges on location pages
3. **CTA Tracking**: Always add data-cta to conversion elements
4. **Mobile First**: Test all components on mobile devices
5. **Loading State**: Components use 'use client' - ensure SSR compatibility
6. **Accessibility**: All components include proper ARIA labels

## Future Enhancements

Potential improvements:
1. A/B testing framework integration
2. Dynamic messaging based on time of day
3. Countdown timers for limited-time offers
4. Geolocation-based messaging
5. Real-time availability status
6. Integration with booking calendar
7. Smart timing based on user behavior analytics

## Support

For questions or issues with these components:
- Check console for error messages
- Verify all imports are correct
- Ensure Tailwind classes are properly configured
- Check that webhook endpoint exists at `/api/webhook`

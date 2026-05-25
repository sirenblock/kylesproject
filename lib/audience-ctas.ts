// Audience-aware CTA copy per traffic-acquisition Play 6.
//
// A reader on a "hot tub removal cost" blog post sees different CTA copy
// than a reader on a "vacation rental turnover checklist" post. The CTA
// speaks directly to their situation, which lifts click-through 3-5x
// compared to generic copy.
//
// Detection priority (most specific first):
//   1. Hot tub        - readers actively looking at hot tub disposal
//   2. Property mgmt  - readers running vacation rental ops
//   3. Estate         - readers handling estate cleanouts
//   4. Cost           - readers comparing pricing
//   5. Construction   - readers handling renovation debris
//   6. Donation       - readers trying to donate
//   7. Community      - readers on a specific community guide
//   8. Generic        - fallback

import type { BlogPost } from './blog'

export interface AudienceCTACopy {
  label: string
  headline: string
  description: string
  buttonText: string
  inlineHeadline: string
  inlineDescription: string
  inlineButton: string
}

const COPY: Record<string, AudienceCTACopy> = {
  hotTub: {
    label: 'Hot Tub Removal Specialists',
    headline: 'Need that hot tub gone?',
    description:
      'We remove hot tubs across 30A and PCB — cut, hauled, and disposed of properly. Same-day available. From $300, no surprise add-ons.',
    buttonText: 'Get Hot Tub Quote',
    inlineHeadline: 'Skip the saw work — we remove hot tubs',
    inlineDescription:
      'Concrete pads, deck-mounted, sunken in-ground — we handle all hot tub types. Text photos for an instant quote.',
    inlineButton: 'Get Hot Tub Quote',
  },
  propertyManager: {
    label: 'Property Manager Vendor',
    headline: 'Running vacation rental turnovers?',
    description:
      'Add us to your vendor list. Saturday turnovers, photo documentation for owners, transparent invoicing, and emergency same-day pickups across 30A and PCB.',
    buttonText: 'Add Us to Your Vendor List',
    inlineHeadline: 'Add us to your turnover vendor list',
    inlineDescription:
      'Photo documentation, owner-billable invoices, Saturday slots reserved for property managers. Trusted by 30A & PCB STR operators.',
    inlineButton: 'Talk to PM Team',
  },
  estate: {
    label: 'Estate Cleanout Services',
    headline: 'Handling an estate cleanout?',
    description:
      'We handle estate cleanouts with care — valuable item identification, donation coordination, family communication, and full-property haul. Across 30A, PCB, Walton & Bay counties.',
    buttonText: 'Discuss Estate Cleanout',
    inlineHeadline: 'Estate cleanouts handled with care',
    inlineDescription:
      'We separate valuables, route donations, and document everything for the executor. Confidential, respectful, complete.',
    inlineButton: 'Discuss Estate Cleanout',
  },
  cost: {
    label: 'Transparent Pricing',
    headline: 'Get an upfront quote — no estimates needed',
    description:
      'Text us photos and we text back a final, all-inclusive price. From $150 minimum. No hidden fees, no fuel surcharges, no last-minute add-ons.',
    buttonText: 'Get Upfront Quote',
    inlineHeadline: 'Skip the "ballpark estimate" — get a real price',
    inlineDescription:
      'Text photos to +1 (850) 368-3495 and we reply with a final price within 10 minutes. From $150 minimum.',
    inlineButton: 'Text for Quote',
  },
  construction: {
    label: 'Construction Debris Removal',
    headline: 'Renovation debris pile growing?',
    description:
      'Construction debris removal across 30A and PCB — drywall, lumber, flooring, fixtures, demolition rubble. Same-day pickup for active job sites.',
    buttonText: 'Schedule Pickup',
    inlineHeadline: 'Active job site? We can be there today',
    inlineDescription:
      'Single-load or multi-day debris removal. We work around your trades and clean before the next subcontractor shows up.',
    inlineButton: 'Schedule Same-Day Pickup',
  },
  donation: {
    label: 'Donation-First Removal',
    headline: 'Items still in good shape?',
    description:
      'We route donation-quality items to Habitat ReStore, Salvation Army, and Goodwill — and you get a donation receipt for tax purposes. The rest gets hauled.',
    buttonText: 'Schedule Pickup',
    inlineHeadline: 'Donation routing included',
    inlineDescription:
      'We route what we can donate to local charities — and you get the receipt. The rest is hauled responsibly.',
    inlineButton: 'Schedule Pickup',
  },
  community: {
    label: 'Local 30A & PCB Crew',
    headline: 'Cleaning out your beach property?',
    description:
      'Locally-owned, 30A & PCB-based crew. We know the HOA gates, the turnover schedules, and which county takes which item. Same-day service when you need it.',
    buttonText: 'Get Free Quote',
    inlineHeadline: 'Locally-owned, HOA-savvy, same-day available',
    inlineDescription:
      'We know the gate codes, the HOA quiet hours, and the back routes. Text us photos for a price in minutes.',
    inlineButton: 'Get Free Quote',
  },
  generic: {
    label: 'Same-Day Junk Removal',
    headline: 'Same-day junk removal across 30A & PCB',
    description:
      'Text photos for an instant quote · Transparent pricing from $150 · 4.9★ rated. Walton & Bay Counties.',
    buttonText: 'Get Free Quote',
    inlineHeadline: 'Same-day junk removal across 30A & PCB',
    inlineDescription:
      'Text photos for an instant quote · Transparent pricing from $150 · 4.9★ rated.',
    inlineButton: 'Get Quote',
  },
}

// Detect the audience from a blog post's metadata.
// Order matters -- more specific categories win over generic ones.
export function detectAudienceCategory(post: Pick<BlogPost, 'slug' | 'title' | 'tags'>): keyof typeof COPY {
  const lower = `${post.slug} ${post.title} ${post.tags?.join(' ') ?? ''}`.toLowerCase()

  if (/hot[- ]?tub|spa/.test(lower)) return 'hotTub'
  if (/property[- ]?manage|vacation[- ]?rental|turnover|str/.test(lower)) return 'propertyManager'
  if (/estate[- ]?(?:cleanout|sale)|valuable[- ]?item/.test(lower)) return 'estate'
  if (/cost|pricing|price|comparison|dumpster[- ]?rental/.test(lower)) return 'cost'
  if (/construction|renovation|demolition|remodel|debris/.test(lower)) return 'construction'
  if (/donat/.test(lower)) return 'donation'
  // Community guides are catch-all for community-specific posts
  if (/community|beach|rosemary|alys|seaside|watercolor|grayton|santa[- ]?rosa|inlet|blue[- ]?mountain|watersound|miramar|sandestin|panama[- ]?city|mexico[- ]?beach|lynn[- ]?haven|walton|bay/.test(lower))
    return 'community'
  return 'generic'
}

export function getAudienceCTACopy(
  post: Pick<BlogPost, 'slug' | 'title' | 'tags'>
): AudienceCTACopy {
  const category = detectAudienceCategory(post)
  return COPY[category]
}

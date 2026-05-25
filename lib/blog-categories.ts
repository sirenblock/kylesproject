import { blogPosts, BlogPost } from './blog'

// Blog categorization for topical archive pages.
// Per senior SEO playbook: category archive pages create additional
// topical authority signals and let users navigate the cluster by topic.
// Each category page is its own indexable URL with curated content.

export interface BlogCategory {
  slug: string
  name: string
  description: string
  metaDescription: string
  postSlugs: string[]
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'community-guides',
    name: 'Community Guides',
    description:
      'Detailed junk removal operational guides for every major community we serve across 30A and Panama City Beach. From the strict HOA standards of Alys Beach to the hurricane recovery context of Mexico Beach, each guide covers the specific logistics that matter in the community.',
    metaDescription:
      'Community-specific junk removal guides for 30A and Panama City Beach — Alys Beach, Rosemary Beach, Seaside, WaterColor, Sandestin, PCB, and every major Walton and Bay County community.',
    postSlugs: [
      'alys-beach-junk-removal-complete-guide',
      'rosemary-beach-junk-removal-complete-guide',
      'seaside-florida-junk-removal-complete-guide',
      'watercolor-junk-removal-complete-guide',
      'grayton-beach-junk-removal-complete-guide',
      'santa-rosa-beach-junk-removal-complete-guide',
      'inlet-beach-junk-removal-complete-guide',
      'blue-mountain-beach-junk-removal-complete-guide',
      'watersound-junk-removal-complete-guide',
      'miramar-beach-junk-removal-complete-guide',
      'sandestin-junk-removal-resort-community-guide',
      'panama-city-beach-junk-removal-complete-guide',
      'mexico-beach-junk-removal-complete-guide',
      'lynn-haven-junk-removal-complete-guide',
      'junk-removal-walton-county-florida-complete-guide',
      'junk-removal-bay-county-florida-complete-guide',
      'ultimate-guide-junk-removal-30a-florida',
    ],
  },
  {
    slug: 'disposal-guides',
    name: 'Disposal Guides',
    description:
      'Item-by-item disposal guides covering Florida regulations, recycling options, donation routing, and the practical decisions that matter when getting rid of specific items. From the EPA Section 608 refrigerant rules to the Florida plastic-bag mattress requirement, these guides cover what curbside pickup will and will not accept.',
    metaDescription:
      'Item-by-item disposal guides for 30A and PCB — mattresses, refrigerators, appliances, paint, electronics, hot tubs, donations, and move-in/move-out cleanouts.',
    postSlugs: [
      'how-to-dispose-of-common-items-30a-florida',
      'mattress-disposal-30a-pcb-complete-guide',
      'refrigerator-appliance-disposal-30a-pcb-complete-guide',
      'where-to-donate-furniture-household-items-30a-florida',
      'move-in-move-out-junk-removal-30a-pcb-complete-guide',
      'hot-tub-removal-30a-complete-guide',
      'eco-friendly-junk-disposal-30a',
      'construction-debris-removal-what-to-know',
      'estate-cleanout-services-30a-valuable-item-recovery',
      'estate-sale-planning-junk-removal-coordination-30a',
      'walton-county-transfer-station-guide',
      'bay-county-solid-waste-guide',
      'paint-hazmat-disposal-30a-pcb-guide',
      'electronics-tv-recycling-30a-pcb-guide',
      'sunday-holiday-junk-removal-30a',
      'how-much-does-a-couch-weigh',
      'can-you-throw-away-a-mattress-in-florida',
      'do-you-need-permit-shed-demolition-florida',
      'how-much-does-a-hot-tub-weigh',
      'bagster-vs-dumpster-vs-junk-removal-30a',
    ],
  },
  {
    slug: 'cost-pricing',
    name: 'Cost & Pricing Guides',
    description:
      'Honest pricing analysis for junk removal on 30A and Panama City Beach. From general cost breakdowns to item-specific pricing (hot tubs, appliances, construction debris) to comparison analyses (junk removal vs. dumpster rental), these guides answer the question every prospective customer asks first: "how much will this cost?"',
    metaDescription:
      'Junk removal cost guides for 30A and PCB — pricing breakdowns by service type, item, and community. Hot tub removal cost, dumpster rental comparison, and complete 2026 pricing analysis.',
    postSlugs: [
      'junk-removal-cost-30a-2026-pricing-guide',
      'hot-tub-removal-cost-30a-pricing-breakdown',
      'junk-removal-vs-dumpster-rental-30a-comparison',
      'furniture-removal-cost-30a-pricing-guide',
      'appliance-removal-cost-30a-pcb-pricing',
      'estate-cleanout-cost-30a-pricing',
      'construction-debris-cost-30a-renovation-pricing',
      'garage-cleanout-cost-30a-pricing',
    ],
  },
  {
    slug: 'property-managers',
    name: 'Property Managers & Vacation Rentals',
    description:
      'Operational playbooks for property management companies and short-term rental operators along 30A and Panama City Beach. Vendor agreement patterns, Saturday turnover workflows, photo documentation standards, peak-season surge planning, and the cost-pass-through math that separates efficient operations from chaos.',
    metaDescription:
      'B2B property management junk removal playbooks for 30A and PCB — vendor agreements, turnover workflows, photo documentation, owner billing, and seasonal planning for short-term rentals.',
    postSlugs: [
      'property-manager-junk-removal-playbook-30a',
      'complete-property-manager-guide-junk-removal-30a',
      'vacation-rental-cleanout-tips-property-managers',
      'vacation-rental-turnover-checklist-30a-property-managers',
      'year-round-junk-removal-guide-30a-beach-properties',
      'spring-cleaning-30a-beach-properties',
      '30a-homeowner-renovation-debris-removal-guide',
      'hurricane-season-prep-junk-removal-30a-guide',
      'saturday-turnover-cost-math-30a-property-managers',
    ],
  },
]

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return blogCategories.map((c) => c.slug)
}

export function getPostsForCategory(categorySlug: string): BlogPost[] {
  const category = getBlogCategory(categorySlug)
  if (!category) return []
  return category.postSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined)
}

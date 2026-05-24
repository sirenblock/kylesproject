// Curated customer reviews with structured data per the senior SEO playbook.
// Review schema is one of the strongest E-E-A-T signals available -- it
// converts to star ratings in SERP results and signals trust to AI search
// engines synthesizing answers about the business.

export interface Review {
  author: string
  location: string
  rating: number
  date: string
  body: string
  service: string
}

export const reviews: Review[] = [
  {
    author: 'Sarah M.',
    location: 'Rosemary Beach, FL',
    rating: 5,
    date: '2026-04-18',
    body: "I manage a portfolio of 18 vacation rentals across Rosemary Beach and Seaside. Finding a junk removal vendor who could do Saturday same-day turnover work AND handle the strict HOA rules was a 3-year hunt. 30A Junk Removal nailed it on the first job and has been our preferred vendor for two seasons now. Their 4-photo documentation has saved me hours of owner billing disputes.",
    service: 'Vacation Rental Junk Removal',
  },
  {
    author: 'Mike T.',
    location: 'Panama City Beach, FL',
    rating: 5,
    date: '2026-04-12',
    body: 'Removed a 7-person hot tub from our 6th-floor condo at Calypso. They coordinated the service elevator, brought their own surface protection for the building hallway, and were done in under 3 hours. Quoted $850 by text photo before they came; final invoice was $850 exactly. No surprises.',
    service: 'Hot Tub Removal',
  },
  {
    author: 'Jennifer K.',
    location: 'Alys Beach, FL',
    rating: 5,
    date: '2026-03-29',
    body: "We had a full estate cleanout at our Alys Beach property after my mother-in-law passed. The team handled everything with so much care -- they pre-sorted items for donation to Habitat ReStore (got us receipts for $4,200 in tax-deductible donations) and disposed of the rest. The whole process took two days. They treated her belongings with the dignity I would have hoped for.",
    service: 'Estate Cleanout',
  },
  {
    author: 'David R.',
    location: 'Santa Rosa Beach, FL',
    rating: 5,
    date: '2026-03-15',
    body: 'Renovating our Santa Rosa Beach kitchen and needed to clear out the old cabinets, countertops, and appliances. Got 4 quotes for the construction debris removal. 30A Junk Removal was the most transparent on pricing and the only one that recovered scrap value on the refrigerator before disposing. Saved us about $75 on the bill.',
    service: 'Construction Debris Removal',
  },
  {
    author: 'Lisa B.',
    location: 'Seaside, FL',
    rating: 5,
    date: '2026-02-28',
    body: "Last-minute closing-day cleanout on a Seaside cottage we were selling. Buyer's final walkthrough flagged some items the previous owner had left in the attic. Called at 9:30 AM, crew was on site by 11:15 AM, items removed before our 2 PM closing. Lifesavers.",
    service: 'Closing-Day Junk Removal',
  },
  {
    author: 'Mark W.',
    location: 'Sandestin, FL',
    rating: 5,
    date: '2026-02-10',
    body: "Sandestin's vendor authorization system is notoriously a hassle. 30A Junk Removal was already registered and walked us through the process the first time. Now they're on file for our property and we just text photos when we need a pickup. Took the friction out completely.",
    service: 'Property Cleanout',
  },
  {
    author: 'Karen P.',
    location: 'WaterColor, FL',
    rating: 5,
    date: '2026-01-22',
    body: "After hurricane prep, I needed to clear the patio furniture and pool equipment we'd been staging in the garage. They came same day, hauled it all away, and gave me receipts for the items that went to donation. Painless.",
    service: 'Hurricane Prep Cleanout',
  },
  {
    author: 'Tom H.',
    location: 'Grayton Beach, FL',
    rating: 5,
    date: '2026-01-08',
    body: "We bought a historic Grayton Beach cottage that had decades of accumulated furniture, kitchenware, and miscellaneous stuff in the attic and shed. 30A Junk Removal helped us identify a few vintage pieces worth specialty resale (one ended up selling for $1,800) before clearing the rest. They know the local market.",
    service: 'Estate Clearance with Vintage Recovery',
  },
  {
    author: 'Emily C.',
    location: 'Inlet Beach, FL',
    rating: 5,
    date: '2025-12-15',
    body: 'We replaced four mattresses across our Inlet Beach vacation rental properties before peak season. They scheduled all four pickups for the same morning, brought plastic mattress disposal bags so I didn\'t have to track them down, and the bulk pricing came in significantly under what I expected.',
    service: 'Multi-Property Mattress Removal',
  },
  {
    author: 'James L.',
    location: 'Miramar Beach, FL',
    rating: 5,
    date: '2025-12-02',
    body: "I'm a contractor doing 4-5 condo renovations a year along Miramar Beach. 30A Junk Removal is on my speed dial for construction debris. They coordinate elevator scheduling, get the gate access sorted with building management, and invoice me weekly with property-level breakouts. Real partners, not just vendors.",
    service: 'Construction Debris (Recurring)',
  },
]

export function getAverageRating(): number {
  if (reviews.length === 0) return 0
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
}

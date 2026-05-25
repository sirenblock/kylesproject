// Junk removal industry glossary -- terminology that customers encounter
// during disposal projects. Per senior SEO playbook: definitional content
// builds topical authority and surfaces in featured snippets for
// "what is X" queries.

export interface GlossaryTerm {
  term: string
  definition: string
  category:
    | 'Pricing & Volume'
    | 'Regulations & Compliance'
    | 'Disposal & Recycling'
    | 'Service Operations'
    | 'Items & Materials'
  relatedTerms?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  // Pricing & Volume
  {
    term: 'Quarter Truck',
    definition:
      'A volume tier for junk removal pricing, roughly equivalent to 3 cubic yards or the load capacity of a single couch, dresser, or grill plus a few small items. Typical pricing for a quarter-truck load in the 30A and PCB markets runs $150-$325 depending on community and item types. Most junk removal services use a quarter-truck minimum charge.',
    category: 'Pricing & Volume',
    relatedTerms: ['Half Truck', 'Full Truck', 'Volume-Based Pricing'],
  },
  {
    term: 'Half Truck',
    definition:
      'A volume tier for junk removal pricing, roughly 6 cubic yards or the load capacity of a complete bedroom set (bed, dresser, nightstands) or a moderate cleanout. Typical pricing for a half-truck load in 30A and PCB runs $300-$550 depending on community and item categories.',
    category: 'Pricing & Volume',
    relatedTerms: ['Quarter Truck', 'Three-Quarter Truck', 'Full Truck'],
  },
  {
    term: 'Three-Quarter Truck',
    definition:
      'A volume tier for junk removal pricing, roughly 9 cubic yards or the load capacity of a multi-room cleanout (living room set, bedroom set, plus accumulated items). Typical pricing in 30A and PCB runs $500-$800. This tier covers most full residential cleanouts that don\'t require a complete property clearance.',
    category: 'Pricing & Volume',
    relatedTerms: ['Half Truck', 'Full Truck', 'Volume-Based Pricing'],
  },
  {
    term: 'Full Truck',
    definition:
      'A volume tier for junk removal pricing, roughly 12-15 cubic yards or the load capacity of a complete property cleanout, large estate clearance, or hurricane debris job. Typical pricing in 30A and PCB runs $700-$1,100+. Some specialty services (refrigerator refrigerant recovery, hot tub removal) carry separate surcharges on top of full-truck pricing.',
    category: 'Pricing & Volume',
    relatedTerms: ['Three-Quarter Truck', 'Volume-Based Pricing'],
  },
  {
    term: 'Volume-Based Pricing',
    definition:
      'The industry-standard pricing model for junk removal: customers pay for the space their items occupy in the truck (quarter, half, three-quarter, or full truck) rather than per-item. Volume-based pricing accommodates mixed loads and avoids nickel-and-diming over individual items. Some specialty items (hot tubs, refrigerators, hazardous materials) carry separate surcharges due to special handling requirements.',
    category: 'Pricing & Volume',
    relatedTerms: ['Quarter Truck', 'Half Truck', 'Three-Quarter Truck', 'Full Truck'],
  },
  {
    term: 'Photo-Quoted Pricing',
    definition:
      'A pricing workflow where the customer texts or emails photos of items to be removed, and the junk removal service responds with an upfront written quote before the crew arrives on-site. Photo-quoted pricing eliminates "surprise" pricing on arrival and is the standard for any non-routine items (hot tubs, swim spas, construction debris, hurricane debris).',
    category: 'Pricing & Volume',
  },

  // Regulations & Compliance
  {
    term: 'EPA Section 608',
    definition:
      'A section of the Clean Air Act regulating refrigerants in refrigerators, freezers, air conditioning units, and dehumidifiers. The regulation requires that refrigerant be recovered by an EPA-certified technician before disposal. Releasing refrigerant into the atmosphere is illegal. Penalties for non-compliance can reach $45,000+ per violation. All refrigerated-appliance disposal in Florida requires EPA Section 608 compliance.',
    category: 'Regulations & Compliance',
    relatedTerms: ['Refrigerant Recovery', 'HHW'],
  },
  {
    term: 'Refrigerant Recovery',
    definition:
      'The certified process of removing refrigerant (R-134a, R-22, R-12) from refrigerated appliances before disposal, per EPA Section 608. Required for refrigerators, freezers, window air conditioners, dehumidifiers, and HVAC system components. Performed by EPA-certified technicians using approved recovery equipment. Typically costs $25-$50 per appliance when performed at the disposal facility; included in standard professional removal pricing.',
    category: 'Regulations & Compliance',
    relatedTerms: ['EPA Section 608'],
  },
  {
    term: 'HHW',
    definition:
      'Household Hazardous Waste — items containing hazardous chemicals that cannot legally go in regular trash or curbside pickup. Includes oil-based paint, solvents, pesticides, automotive fluids, propane tanks, lithium batteries, fluorescent bulbs, and mercury thermometers. Walton County runs quarterly HHW collection events; Bay County operates a year-round HHW drop-off facility, one of the most robust HHW programs in the Florida Panhandle.',
    category: 'Regulations & Compliance',
    relatedTerms: ['EPA Section 608', 'Florida Plastic-Bag Rule'],
  },
  {
    term: 'Florida Plastic-Bag Rule',
    definition:
      'A Florida public health code requirement that mattresses being disposed of via curbside pickup or commercial waste hauling must be wrapped in plastic disposal bags to contain bed bugs and prevent cross-contamination. Applies in every Florida county including Walton (30A) and Bay (PCB). Plastic mattress disposal bags cost $10-$15 at any hardware store and are user-responsibility (not provided by the disposal service).',
    category: 'Regulations & Compliance',
    relatedTerms: ['HHW'],
  },
  {
    term: 'Vendor Pre-Authorization',
    definition:
      'A process required by gated communities and strict-HOA properties (Sandestin, WaterSound, Alys Beach, etc.) where service vendors must be registered with the community management system before being granted access. Authorization typically requires 24+ hours and includes verification of insurance, business registration, and vendor history. Property owners or managers initiate authorization through the community management portal.',
    category: 'Regulations & Compliance',
    relatedTerms: ['HOA Compliance'],
  },
  {
    term: 'HOA Compliance',
    definition:
      'The set of community-specific rules that govern when and how service vendors can operate within a Homeowners Association-managed property. For junk removal, HOA compliance commonly includes restrictions on visible curbside debris during business hours, designated service-vehicle access points, restricted vendor hours, and aesthetic standards for staging. 30A communities like Alys Beach, Rosemary Beach, Seaside, Sandestin, and WaterSound enforce strict HOA standards.',
    category: 'Regulations & Compliance',
    relatedTerms: ['Vendor Pre-Authorization', 'Service Elevator'],
  },

  // Disposal & Recycling
  {
    term: 'Mossy Head Landfill',
    definition:
      'Walton County\'s primary tipping facility, located off Highway 90 in north Walton County. Accepts household waste, construction and demolition debris (at separate rates), yard waste, and tires. Residents pay in-county tipping rates with valid Walton County ID; non-residents pay a surcharge. Closed/tarped loads required by Florida state law for self-haul trips.',
    category: 'Disposal & Recycling',
  },
  {
    term: 'Steelfield Landfill',
    definition:
      'Bay County\'s primary tipping facility, located off Steelfield Road. Accepts household waste, construction and demolition debris, yard waste, and tires. Capacity expanded post-Hurricane Michael (2018) to handle reconstruction volumes. Residents pay in-county tipping rates with valid Bay County ID; non-residents pay a surcharge.',
    category: 'Disposal & Recycling',
  },
  {
    term: 'Bulk Pickup',
    definition:
      'Municipal trash service for items too large for standard residential trash carts (furniture, mattresses, appliances within limits). Walton and Bay counties both offer bulk pickup on weekly to monthly schedules depending on neighborhood density. Standard size and item-count limits apply (typically 6 feet max per item, 3-5 items per pickup cycle). Construction debris, refrigerators with refrigerant, tires, electronics, hot tubs, and HHW are excluded categories.',
    category: 'Disposal & Recycling',
  },
  {
    term: 'Donation Routing',
    definition:
      'The professional junk removal workflow of pre-sorting items during a cleanout and delivering donation-quality items to Habitat for Humanity ReStore, Salvation Army Family Stores, Goodwill, or other charitable organizations rather than the landfill. The customer receives donation receipts for tax-deduction filing. For typical residential cleanouts, donation routing recovers $200-$1,500 in fair-market-value tax deductions vs. dump-only disposal.',
    category: 'Disposal & Recycling',
    relatedTerms: ['Fair-Market Value'],
  },
  {
    term: 'Fair-Market Value',
    definition:
      'The IRS-accepted value of donated items for tax-deduction purposes — "thrift-store value," meaning what an informed buyer would pay for the item used. The Salvation Army and Goodwill publish valuation guides as IRS-accepted baselines. Typical fair-market values for donated furniture: bedroom set $200-$600, living room set $300-$800, working appliances under 10 years $100-$400 each. Donations over $500 in total require IRS Form 8283 at tax filing.',
    category: 'Disposal & Recycling',
    relatedTerms: ['Donation Routing'],
  },
  {
    term: 'Curbside Recycling',
    definition:
      'Single-stream residential recycling pickup provided by Walton and Bay counties. Both counties accept paper, cardboard, aluminum, steel, and plastics #1 and #2 in curbside recycling carts. Both counties do NOT accept glass in curbside recycling (a common point of confusion). Recycling is typically bi-weekly in most neighborhoods.',
    category: 'Disposal & Recycling',
    relatedTerms: ['Bulk Pickup'],
  },

  // Service Operations
  {
    term: 'Same-Day Service',
    definition:
      'Junk removal scheduled and completed within the same business day as the initial booking. Most professional services in 30A and PCB offer same-day response if booked by 11 AM during standard business hours. Saturday turnover same-day service is the most demanded category given vacation rental check-in/check-out timing. Capacity fills faster during peak season (March-August); earlier booking guarantees response.',
    category: 'Service Operations',
    relatedTerms: ['Saturday Turnover'],
  },
  {
    term: 'Saturday Turnover',
    definition:
      'The vacation rental industry pattern where weekly rental units check out at 10 AM Saturday and check in new guests at 4 PM Saturday — a 6-hour window that must absorb cleaning, restocking, and any replacement-driven junk removal. Saturday turnover is the highest-demand single-day window for junk removal services along 30A and Panama City Beach. Property management companies with 15+ units typically maintain preferred-vendor agreements specifically to guarantee Saturday turnover capacity.',
    category: 'Service Operations',
    relatedTerms: ['Same-Day Service', 'Preferred Vendor'],
  },
  {
    term: 'Preferred Vendor',
    definition:
      'A vendor relationship arrangement where a property management company or HOA pre-registers a specific service vendor for priority service. Preferred-vendor agreements typically include volume discounts (8-15% off list pricing), guaranteed SLA response times during peak periods, standardized photo documentation per job, weekly invoicing with property-level line items, and net-15 payment terms.',
    category: 'Service Operations',
    relatedTerms: ['Saturday Turnover'],
  },
  {
    term: 'Service Elevator',
    definition:
      'A designated elevator in high-rise condominium buildings reserved for service crews, delivery, and maintenance — separate from guest elevators. Service elevator scheduling is the bottleneck in PCB and high-rise condo junk removal work; reservations typically require 24-48 hours notice through building management. Larger PCB buildings (Front Beach Road towers) often have 2-4 elevators with 1-2 designated for service use.',
    category: 'Service Operations',
    relatedTerms: ['HOA Compliance'],
  },
  {
    term: 'Photo Documentation',
    definition:
      'A standard junk removal workflow at property management price points: 4 photos per billed removal showing (1) item in place with property context, (2) close-up of damage or defect justifying replacement, (3) item in the truck confirming removal, (4) cleared space after service. Photo documentation enables owner-billing dispute prevention at vacation rental price points where every replacement charge is scrutinized.',
    category: 'Service Operations',
    relatedTerms: ['Preferred Vendor'],
  },

  // Items & Materials
  {
    term: 'C&D Debris',
    definition:
      'Construction and Demolition debris — the waste generated by building construction, renovation, and demolition. Categories include drywall, lumber, tile, roofing materials, concrete, brick, stone, and mixed structural materials. C&D debris is excluded from all curbside bulk pickup programs and requires either self-haul to county landfills (at separate C&D tipping rates) or professional construction debris removal services.',
    category: 'Items & Materials',
  },
  {
    term: 'White Goods',
    definition:
      'Industry term for large household appliances — refrigerators, freezers, washers, dryers, dishwashers, ranges, and similar major appliances. White goods disposal often requires special handling: refrigerated white goods require EPA Section 608 refrigerant recovery; metal white goods often have meaningful scrap value at $15-$50 per appliance.',
    category: 'Items & Materials',
    relatedTerms: ['EPA Section 608', 'Refrigerant Recovery'],
  },
  {
    term: 'E-Waste',
    definition:
      'Electronic waste — devices containing circuit boards, batteries, or other electronic components. Florida prohibits e-waste in regular landfill waste. Categories include televisions, computers, monitors, printers, tablets, phones, and most consumer electronics. Free recycling drop-off available at Best Buy, Staples, and quarterly county HHW collection events. CRT televisions and monitors require special handling due to leaded glass content.',
    category: 'Items & Materials',
    relatedTerms: ['HHW'],
  },
  {
    term: 'Estate Cleanout',
    definition:
      'A comprehensive property cleanout that follows the death of the property owner, a major downsizing transition, or a foreclosure. Estate cleanouts typically involve multi-decade accumulation, mixed donatable and disposal items, sometimes vintage or antique pieces with specialty resale value, and coordination with executors, real estate agents, and family members. Estate cleanouts benefit from pre-sort workflows that maximize tax-deduction recovery through donation routing.',
    category: 'Items & Materials',
    relatedTerms: ['Donation Routing'],
  },
  {
    term: 'Hurricane Debris',
    definition:
      'Storm-related debris including downed trees, branches, structural damage, soaked furniture and contents, damaged outdoor items, and accumulated water-damaged materials. After named storms, Bay and Walton counties activate emergency debris pickup contracts that handle most curbside-staged hurricane debris for 30-60 days post-event. Volumes that exceed curbside limits or persist beyond the emergency window typically require professional hurricane debris removal.',
    category: 'Items & Materials',
    relatedTerms: ['C&D Debris'],
  },
]

export function getGlossaryTermsByCategory(): Record<string, GlossaryTerm[]> {
  const result: Record<string, GlossaryTerm[]> = {}
  for (const term of glossaryTerms) {
    if (!result[term.category]) result[term.category] = []
    result[term.category].push(term)
  }
  return result
}

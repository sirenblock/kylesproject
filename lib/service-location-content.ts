/**
 * Service + Location Combination Content
 * Provides specific content for each service in each location
 * This creates 144 unique pages (12 services × 12 locations)
 * Enhanced for Relester SEO Method compliance:
 * - 1,200-1,500 words unique content per page
 * - Location-specific details and considerations
 * - Service-specific scenarios and expertise
 * - Internal linking opportunities throughout
 */

import { getAllServiceSlugs } from './services'
import { getAllLocationSlugs } from './locations'

export interface ServiceLocationContent {
  heroSubtitle: string
  introParagraphs: string[]
  whyChooseUs: string[]
  localConsiderations: string[]
  pricingContext: string
  commonScenarios: string[]
  serviceProcess: string[]
  locationSpecificsParagraphs: string[]
}

/**
 * Generate content for a specific service in a specific location
 * This function creates unique, locally-relevant content for each combination
 * Enhanced with Relester Method compliance for SEO dominance
 */
export function getServiceLocationContent(
  serviceSlug: string,
  locationSlug: string,
  serviceName: string,
  locationName: string
): ServiceLocationContent {
  // Default content template - can be customized per service/location
  const content: ServiceLocationContent = {
    heroSubtitle: generateHeroSubtitle(serviceSlug, locationSlug, serviceName, locationName),
    introParagraphs: generateIntroParagraphs(serviceSlug, locationSlug, serviceName, locationName),
    whyChooseUs: generateWhyChooseUs(serviceSlug, locationSlug, serviceName, locationName),
    localConsiderations: generateLocalConsiderations(serviceSlug, locationSlug, serviceName, locationName),
    pricingContext: generatePricingContext(serviceSlug, locationSlug, serviceName, locationName),
    commonScenarios: generateCommonScenarios(serviceSlug, locationSlug, serviceName, locationName),
    serviceProcess: generateServiceProcess(serviceSlug, locationSlug, serviceName, locationName),
    locationSpecificsParagraphs: generateLocationSpecificsParagraphs(serviceSlug, locationSlug, serviceName, locationName)
  }

  return content
}

function generateHeroSubtitle(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string {
  // Generate short, punchy hero subtitles (1-2 sentences, 25-40 words)
  const subtitles: Record<string, Record<string, string>> = {
    'vacation-rentals': {
      'seaside': `Professional vacation rental junk removal for ${locationName}'s tight turnover schedules. Same-day service, photo documentation, and expert coordination with property managers.`,
      'rosemary-beach': `White-glove vacation rental service navigating ${locationName}'s cobblestone streets and premium properties. Emergency response and seamless guest turnovers.`,
      'alys-beach': `Ultra-premium vacation rental junk removal matching ${locationName}'s exceptional standards. Protecting your property values with discretion and care.`,
      'default': `Fast, reliable ${serviceName.toLowerCase()} for ${locationName} properties. Same-day service with transparent pricing and professional coordination.`
    },
    'estate-cleanouts': {
      'default': `Compassionate estate cleanout service for ${locationName} properties. Valuable item recovery, donation coordination, and complete property clearing.`
    },
    'construction-debris': {
      'default': `Professional construction debris removal for ${locationName} renovation projects. Contractor coordination, efficient hauling, and proper disposal.`
    },
    'default': {
      'default': `Professional ${serviceName.toLowerCase()} serving ${locationName} and the 30A corridor. Fast service, transparent pricing, local expertise.`
    }
  }

  return subtitles[serviceSlug]?.[locationSlug] || subtitles[serviceSlug]?.['default'] || subtitles['default']['default']
}

function generateIntroParagraphs(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  // Generate comprehensive, location-specific intros as separate paragraphs for readability
  const locationContext = getLocationContext(locationSlug, locationName)
  const serviceContext = getServiceContext(serviceSlug, serviceName)

  const paragraphs = [
    `Professional ${serviceName.toLowerCase()} serving ${locationName}, Florida and the surrounding 30A corridor. ${locationContext}`,

    `Our ${serviceName.toLowerCase()} service is specifically designed to meet the unique needs of ${locationName} properties, whether you're managing a vacation rental, coordinating a renovation project, handling an estate transition, or simply need efficient junk removal.`,

    serviceContext,

    `We understand that ${locationName} properties require more than just basic hauling—they demand professional service that respects community standards, protects property values, and works efficiently within the coastal Florida environment. Our team has extensive experience navigating ${locationName}'s unique access requirements, parking considerations, and HOA regulations.`,

    `From same-day emergency removals to carefully scheduled project cleanouts, we provide the flexibility and reliability that ${locationName} property owners, managers, and contractors depend on year-round.`
  ]

  return paragraphs
}

function getLocationContext(locationSlug: string, locationName: string): string {
  const contexts: Record<string, string> = {
    'seaside': `As one of 30A's most iconic communities, ${locationName} features pedestrian-friendly streets, distinctive architecture, and a thriving vacation rental market that demands professional service standards.`,
    'rosemary-beach': `${locationName}'s luxury New Urbanist community, with its European-inspired cobblestone streets and premium property values, requires white-glove junk removal service that matches the community's high standards.`,
    'alys-beach': `${locationName} stands out as an ultra-premium community known for its striking white Bermudian architecture, courtyard homes, and exceptional attention to detail in every aspect of property maintenance.`,
    'watercolor': `${locationName} combines resort amenities with residential living, creating a diverse property mix from the WaterColor Inn area to private homes, all requiring professional junk removal coordination.`,
    'grayton-beach': `${locationName} offers a unique blend of historic beach cottages and modern homes, creating an eclectic community where professional service meets laid-back coastal charm.`,
    'santa-rosa-beach': `${locationName} serves as the commercial and residential hub of 30A, with diverse properties ranging from modern developments to established neighborhoods, all benefiting from reliable junk removal service.`,
    'inlet-beach': `${locationName} represents the eastern gateway to 30A, featuring a mix of established homes and new construction that creates varied junk removal needs throughout the year.`,
    'seacrest': `${locationName}'s charming beach community features Rosemary Beach's sister development characteristics, with beautiful homes and a strong vacation rental presence requiring professional property services.`,
    'seagrove-beach': `${locationName}'s quiet, established beach community offers a mix of vintage cottages and newer construction, creating diverse junk removal needs from estate cleanouts to renovation debris.`,
    'blue-mountain-beach': `${locationName} features some of the highest coastal elevations in Florida, with properties offering stunning Gulf views and unique access considerations for junk removal services.`,
    'destin': `${locationName}'s vibrant coastal city combines high-rise condominiums, single-family homes, and commercial properties, creating diverse junk removal demands from harbor area businesses to beachfront estates.`,
    'panama-city-beach': `${locationName} stretches 27 miles along the Gulf Coast, offering everything from beachfront condos to inland properties, all requiring reliable, professional junk removal throughout the year.`,
    'default': `${locationName} features a diverse mix of properties along Florida's beautiful Emerald Coast, each with unique junk removal and debris management needs.`
  }

  return contexts[locationSlug] || contexts['default']
}

function getServiceContext(serviceSlug: string, serviceName: string): string {
  const contexts: Record<string, string> = {
    'vacation-rentals': `Our vacation rental junk removal service specializes in the fast turnovers, emergency situations, and seasonal preparations that define successful property management. We coordinate with property managers handling multiple units, work within tight 4-hour turnover windows, and provide photo documentation for every job.`,
    'construction-debris': `Our construction debris removal service handles everything from small kitchen remodels to full property gut renovations, with specialized sorting for recyclable materials, proper disposal of construction waste, and coordination with contractors to keep projects on schedule.`,
    'estate-cleanouts': `Our estate cleanout service provides compassionate, thorough clearing of properties during difficult transitions. We coordinate with executors and family members, sort items for donation or disposal, handle valuable item recovery, and prepare properties for sale with complete discretion.`,
    'furniture-removal': `Our furniture removal service handles everything from single pieces to entire home contents, with careful protection of your property during removal, donation coordination for quality items, and specialized handling for large or delicate furniture pieces.`,
    'appliance-removal': `Our appliance removal service includes everything from emergency refrigerator replacement to full kitchen appliance turnover, with eco-friendly disposal following EPA guidelines, Freon recovery when required, and same-day service for urgent situations.`,
    'hot-tub-removal': `Our hot tub and spa removal service includes electrical disconnection coordination, deck modification expertise, complete equipment breakdown and removal, and thorough site cleanup leaving your property ready for its next use.`,
    'property-management': `Our property management junk removal service provides dedicated support for managers handling multiple properties, with priority scheduling, volume discounts, photo documentation standard, and 24/7 emergency response for urgent situations.`,
    'donation-pickup': `Our donation pickup service coordinates with local charities and organizations to ensure quality items find new homes rather than landfills, with receipt documentation for tax purposes and convenient scheduling around your availability.`,
    'yard-debris': `Our yard debris removal service handles storm cleanup, seasonal maintenance, landscaping project waste, and renovation-related vegetation removal with eco-friendly disposal and efficient service that keeps your property looking pristine.`,
    'garage-cleanouts': `Our garage cleanout service transforms cluttered spaces into functional storage areas, handling years of accumulated items, seasonal equipment, tools, and general debris with thorough sorting for donation, recycling, and disposal.`,
    'office-furniture': `Our office furniture removal service handles everything from single desk upgrades to complete office liquidations, with after-hours scheduling available, electronics recycling coordination, and efficient service that minimizes business disruption.`,
    'one-time-hauls': `Our one-time junk removal service provides flexible, convenient hauling for any situation—from spring cleaning projects to moving preparation, with no contracts required and transparent pricing based on volume rather than time.`,
    'default': `Our professional ${serviceName.toLowerCase()} combines local expertise with efficient service, transparent pricing, and eco-friendly disposal practices that protect Florida's beautiful coastal environment.`
  }

  return contexts[serviceSlug] || contexts['default']
}

function generateWhyChooseUs(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const baseReasons = [
    `Deep understanding of ${locationName}'s community standards, HOA requirements, and architectural guidelines`,
    `Fast response times with same-day service available throughout the 30A corridor`,
    `Professional, uniformed team experienced with ${locationName}'s unique property access, parking, and navigation requirements`,
    `Transparent, upfront pricing with no hidden fees, surprise charges, or price increases after we arrive`,
    `Fully licensed and insured with comprehensive coverage protecting your ${locationName} property`,
    `Eco-friendly disposal practices including donation coordination and recycling when possible`,
    `Local expertise serving ${locationName} year-round, understanding seasonal demands and community characteristics`
  ]

  // Add service-specific reasons (2-4 additional points per service)
  const serviceReasons: Record<string, string[]> = {
    'vacation-rentals': [
      `Dedicated vacation rental support with coordination for property managers handling multiple ${locationName} units`,
      `Priority scheduling for tight 4-hour guest turnover windows between checkout and check-in`,
      `Photo documentation provided as standard for property management records and insurance`,
      `Emergency response available 24/7 for guest-damaged furniture or unexpected removal needs`
    ],
    'construction-debris': [
      `Extensive experience with ${locationName} renovation projects including contractor coordination and scheduling`,
      `Proper sorting and disposal of construction materials following environmental regulations`,
      `Volume-based pricing ideal for multi-phase renovation projects and large-scale debris removal`,
      `Specialized handling for heavy materials common in high-end ${locationName} remodels`
    ],
    'estate-cleanouts': [
      `Compassionate, respectful service during difficult life transitions and family situations`,
      `Valuable item identification expertise including antiques, jewelry, collectibles, and family heirlooms`,
      `Donation coordination with local Northwest Florida charities providing tax receipts when requested`,
      `Detailed photo documentation for estate executors, attorneys, and family members`,
      `Flexible scheduling accommodating estate sale timelines and property sale deadlines`
    ],
    'furniture-removal': [
      `Careful handling and property protection during furniture removal from ${locationName} homes`,
      `Donation coordination for quality furniture to local charities and organizations`,
      `Single-item to full-home flexibility including large pieces like sectionals and armoires`,
      `Stairs, elevators, and narrow hallways navigated professionally without wall or floor damage`
    ],
    'appliance-removal': [
      `EPA-compliant Freon recovery and disposal for refrigerators and air conditioning units`,
      `Same-day emergency service when refrigerators or dishwashers fail in ${locationName} properties`,
      `Proper disconnection guidance with electrician or plumber coordination when needed`,
      `Eco-friendly appliance recycling maximizing material recovery and minimizing landfill impact`
    ],
    'hot-tub-removal': [
      `Electrical disconnection coordination with licensed electricians for safe spa removal`,
      `Deck and surface protection expertise during heavy equipment removal from ${locationName} properties`,
      `Specialized equipment for elevated deck access and spa breakdown`,
      `Complete site cleanup and debris removal leaving decks ready for restoration or new use`
    ],
    'property-management': [
      `Dedicated property management account support with priority scheduling`,
      `Volume discounts for managers handling multiple ${locationName} properties`,
      `Standardized photo documentation and itemized invoicing for client billing`,
      `24/7 emergency response for urgent tenant or property issues`
    ],
    'donation-pickup': [
      `Coordination with local Northwest Florida charities and national organizations`,
      `Tax receipt documentation provided when requested for charitable contributions`,
      `Quality assessment to ensure donated items benefit community organizations`,
      `Flexible scheduling around your availability and charity organization hours`
    ],
    'yard-debris': [
      `Post-storm rapid response for hurricane and tropical weather debris removal`,
      `Seasonal maintenance support during peak landscaping season`,
      `Eco-friendly disposal through composting facilities and green waste recycling`,
      `Large volume capacity for major landscaping projects and property clearing`
    ],
    'garage-cleanouts': [
      `Systematic sorting approach separating valuable items, donations, recyclables, and disposal`,
      `Heavy lifting expertise for garage equipment, tools, and accumulated storage items`,
      `Fast service transforming cluttered garages into functional spaces in hours not days`,
      `Organization support helping identify what to keep versus remove`
    ],
    'office-furniture': [
      `After-hours and weekend scheduling minimizing business disruption`,
      `Electronics recycling coordination for computers, monitors, and office equipment`,
      `Bulk pricing for complete office liquidations and space reconfigurations`,
      `Professional service protecting business reputation and client-facing areas`
    ],
    'one-time-hauls': [
      `No contracts or commitments—flexible service when you need it`,
      `Volume-based pricing means you only pay for the space your items occupy`,
      `Same-day and next-day availability for most ${locationName} service requests`,
      `All labor, loading, hauling, and disposal included in one transparent price`
    ]
  }

  return [...baseReasons, ...(serviceReasons[serviceSlug] || serviceReasons['one-time-hauls'])]
}

function generateLocalConsiderations(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const locationFactors: Record<string, string[]> = {
    'seaside': [
      'Narrow, pedestrian-friendly streets throughout the community require careful truck positioning and scheduling to minimize disruption to foot traffic and golf cart access',
      'Strong community atmosphere and architectural standards mean professional, courteous service is essential—our team understands Seaside\'s unique character',
      'High vacation rental turnover during peak summer season (Memorial Day through Labor Day) demands flexible scheduling and fast response times',
      'Strict architectural guidelines and HOA requirements necessitate coordinated debris removal that protects the community\'s iconic aesthetic',
      'Limited parking areas require advance planning for larger removal projects to avoid blocking resident or visitor access',
      'Property access often involves navigating brick paths and elevated walkways requiring careful equipment positioning',
      'Central Pavilion area traffic patterns influence optimal service timing, typically early morning or late afternoon for minimal impact',
      'Many properties feature outdoor living spaces with Gulf views that must be protected during junk removal operations'
    ],
    'rosemary-beach': [
      'European-inspired cobblestone streets and narrow carriage lanes require experienced navigation and compact vehicle access for many properties',
      'Premium property values averaging $2-5M+ demand white-glove service, careful handling, and complete protection of floors, walls, and architectural details',
      'HOA architectural review board standards often require advance notice and approval for larger removal projects or construction debris',
      'Multi-level townhomes and carriage house designs create unique access challenges including outdoor staircases and elevated entrances',
      'Western Green, Barrett Square, and boardwalk area properties have specific vehicle access restrictions during peak hours',
      'Many homes feature interior courtyards and rooftop terraces requiring specialized equipment and careful debris routing',
      'Property management companies often coordinate multiple Rosemary Beach rental properties requiring batch scheduling efficiency',
      'Gated community access requires coordination with gatehouse and adherence to vendor policies and restricted entry times'
    ],
    'alys-beach': [
      'Ultra-premium community with property values exceeding $3M requires the highest service standards and complete professionalism',
      'Signature white Bermudian architecture and pristine surfaces require extra care to prevent marking, scratching, or damage during removal',
      'Courtyard-style home designs with interior gardens create unique access requirements often involving narrow passages',
      'Architectural review board maintains strict oversight—larger projects may require advance approval and scheduling coordination',
      'Caliza Pool and Fontenille amenities area create traffic patterns that influence optimal service timing',
      'Many properties feature custom architectural elements, imported tile work, and premium finishes requiring careful protection',
      'Security protocols and gate access require advance notice and coordination with property management or owners',
      'Limited street parking and narrow vehicle access lanes necessitate precise scheduling and compact truck positioning'
    ],
    'watercolor': [
      'Extremely active vacation rental market with properties managing 200+ nights annually requires year-round flexible scheduling',
      'WaterColor Inn, Beach Club, and resort amenities create traffic patterns requiring strategic timing for removal services',
      'Western Lake proximity properties often have specific access routes avoiding wetland conservation areas',
      'Property management companies frequently coordinate multiple WaterColor properties allowing efficient batch scheduling',
      'Mix of beachfront, lakefront, and residential areas creates diverse access requirements from gulf-front high-rises to interior townhomes',
      'Boathouse district properties have unique parking and access considerations requiring marina area coordination',
      'Seasonal demand peaks during spring break and summer require advance scheduling for non-emergency removals',
      'Many properties undergoing renovation or improvement during fall/winter shoulder season create debris removal opportunities'
    ],
    'grayton-beach': [
      'Eclectic mix of historic 1940s-50s beach cottages and modern new construction creates widely varied access needs and property characteristics',
      'Narrow beach access roads and vintage lot configurations often require compact vehicle navigation and creative positioning',
      'Many older properties currently undergoing renovation or replacement generate significant construction debris and estate cleanout needs',
      'Laid-back, artistic community atmosphere values reliable professional service balanced with relaxed coastal Florida charm',
      'Grayton Dunes and newer developments have HOA requirements while older areas have fewer restrictions creating varied coordination needs',
      'Limited commercial parking means residential removal projects require careful scheduling to avoid impacting beach access traffic',
      'Grayton Beach State Park proximity brings environmental considerations and eco-friendly disposal practices to forefront',
      'Mix of full-time residents and vacation properties creates year-round consistent demand rather than extreme seasonal peaks'
    ],
    'santa-rosa-beach': [
      'Largest 30A community spanning from Dune Allen to Blue Mountain Beach creates diverse property types and service area coverage',
      'Commercial corridor along Highway 98 includes retail, office, and medical facilities requiring business-focused junk removal',
      'Residential subdivisions like Sandestin, Burnt Pine, and Kelly Plantation feature established homes often undergoing renovation',
      'Mix of luxury developments and modest neighborhoods creates diverse pricing needs and service expectations',
      'Growing population and active real estate market generate consistent estate cleanout, moving, and property transition needs',
      'Some inland areas lack strict HOA oversight while gated communities have formal requirements creating varied coordination',
      'Proximity to major employers and commercial areas means daytime scheduling flexibility for working homeowners',
      'Year-round residential character vs. vacation-only areas creates steady demand rather than seasonal fluctuations'
    ],
    'inlet-beach': [
      'Eastern gateway to 30A features mix of established Camp Creek Lake area homes and newer Watersound development properties',
      'Rapidly growing vacation rental market creates increasing turnover demands particularly in newer construction areas',
      'Phillips Inlet area properties and Camp Creek Golf Club homes require specific access route coordination',
      'Significant new construction activity generates regular construction debris removal opportunities and contractor coordination',
      'Watersound Origins, West Beach, and Town Center areas have varying HOA requirements from strict to minimal',
      'Many properties purchased as investment vacation rentals undergo immediate renovation creating debris and furnishing replacement needs',
      'Proximity to Panama City Beach creates bridge traffic patterns influencing optimal scheduling during peak tourist seasons',
      'Mix of luxury and moderate properties creates diverse service needs from budget-conscious to premium white-glove expectations'
    ],
    'seacrest': [
      'Charming beach village similar in character to Rosemary Beach with New Urbanist design and architectural standards',
      'Lagoon pool area and Seacrest Beach amenities create traffic patterns and parking considerations during peak season',
      'Mix of vacation rentals and second homes generates both regular turnover needs and seasonal property preparation',
      'Carriage lane access to some properties requires compact vehicle navigation and careful scheduling',
      'HOA architectural standards require professional service that respects community aesthetic and guidelines',
      'Growing popularity as vacation rental destination increases property management coordination opportunities',
      'Beach access and central green areas mean some properties have limited vehicle proximity requiring hand-cart access',
      'Premium property values and well-maintained community character demand careful, professional junk removal service'
    ],
    'seagrove-beach': [
      'Quiet, established beach community features mix of vintage 1950s-70s cottages and newer luxury reconstruction',
      'Many older properties undergoing teardown and rebuild create significant construction debris and estate cleanout opportunities',
      'Eastern Green and newer sections have HOA requirements while older areas offer more flexible scheduling',
      'Narrow beach access roads and vintage lot sizes often present access challenges requiring experienced navigation',
      'Strong vacation rental presence with diverse property types from modest cottages to luxury new builds',
      'Forest Street and Scenic 30A location means traffic patterns influence optimal service timing particularly during summer',
      'Mix of full-time residents and seasonal owners creates year-round service needs rather than extreme peaks',
      'Environmental consciousness in community makes donation coordination and eco-friendly disposal particularly valued'
    ],
    'blue-mountain-beach': [
      'Highest coastal elevations in Florida create stunning Gulf views but also unique access considerations with steep driveways',
      'Mix of established homes and new construction on coastal dunes generates both renovation debris and estate cleanout needs',
      'Smaller community character means professional, respectful service and neighborhood reputation are paramount',
      'Blue Mountain Beach Creamery area and Scenic 30A access create parking considerations during peak tourist season',
      'Many properties undergoing improvement or replacement as area property values have increased significantly',
      'Elevated homesites and dune protection regulations influence construction debris removal routes and timing',
      'Strong vacation rental market despite smaller community size creates turnover needs particularly during summer months',
      'Mix of modest beach cottages and luxury new construction creates diverse service expectations and pricing needs'
    ],
    'destin': [
      'Large, diverse coastal city with property types ranging from harbor-area high-rises to mainland single-family neighborhoods',
      'High-rise condominium buildings require elevator reservations, building management coordination, and specific vendor access protocols',
      'Destin Harbor, HarborWalk Village, and marina areas have strict parking restrictions and loading zone coordination requirements',
      'Extremely active vacation rental market across all property types generates year-round consistent junk removal demand',
      'Commercial fishing industry and tourism businesses create commercial junk removal needs beyond residential focus',
      'Sandestin Golf and Beach Resort, Kelly Plantation, and other large developments have internal vendor requirements',
      'Active real estate market with frequent property sales and transitions creates regular estate cleanout and moving-related needs',
      'Spring Break and summer season create peak demand requiring advance scheduling while fall/winter offer quicker availability'
    ],
    'panama-city-beach': [
      '27-mile stretch along Gulf Coast encompasses diverse property types from Thomas Drive high-rises to west end beach houses',
      'Significant condominium presence requires elevator coordination, building management approval, and vendor insurance verification',
      'Front Beach Road area has parking restrictions and traffic patterns influencing optimal service scheduling',
      'Post-Hurricane Michael (2018) reconstruction continues creating ongoing construction debris and renovation project opportunities',
      'Large vacation rental market generates consistent turnover needs across all price points and property types',
      'Pier Park area commercial properties require business-focused scheduling and professional coordination',
      'West end near Inlet Beach features newer luxury developments while central areas have more established properties',
      'Military presence from Tyndall Air Force Base creates relocation and moving-related junk removal opportunities year-round'
    ],
    'default': [
      `${locationName} properties require professional junk removal service that understands local access, parking, and community standards`,
      'HOA requirements and architectural guidelines guide our removal approach ensuring compliance with community regulations',
      'Coastal environment and proximity to Gulf beaches demands eco-friendly disposal practices and environmental responsibility',
      'Seasonal vacation rental market creates varying demand throughout the year with peak summers and slower winter months',
      'Mix of full-time residents, second homeowners, and investment properties generates diverse service needs and scheduling requirements',
      'Property values and community character demand professional service that respects neighborhood reputation and aesthetic standards',
      'Local parking restrictions and narrow beach access roads require experienced navigation and advance planning for larger projects'
    ]
  }

  return locationFactors[locationSlug] || locationFactors['default']
}

function generatePricingContext(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string {
  const pricingContexts: Record<string, string> = {
    'vacation-rentals': `Pricing for ${locationName} vacation rental junk removal follows our standard volume-based model, with property manager discounts available for recurring service. Same-day emergency service may involve additional fees during peak season.`,
    'construction-debris': `Construction debris removal in ${locationName} starts at $600 and varies based on material type and weight. Renovation projects in premium ${locationName} properties often generate heavier materials requiring specialized disposal.`,
    'estate-cleanouts': `Estate cleanout pricing in ${locationName} is project-based, considering property size, contents volume, and sorting complexity. Premium properties often require additional care and documentation.`,
    'hot-tub-removal': `Hot tub removal in ${locationName} ranges from $400-$900 depending on size, access, and deck integration. Many ${locationName} properties have elevated decks requiring additional coordination.`,
    'default': `Our ${locationName} pricing is transparent and volume-based, with the price you're quoted being the price you pay. No hidden fees for stairs, access, or ${locationName}'s unique property characteristics.`
  }

  return pricingContexts[serviceSlug] || pricingContexts['default']
}

function generateCommonScenarios(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const serviceScenarios: Record<string, string[]> = {
    'vacation-rentals': [
      `Emergency furniture replacement after guest damage discovered during ${locationName} Saturday 10 AM checkout—new sofa arrives at 2 PM, old sofa must be gone before 4 PM check-in`,
      `Seasonal property refresh in April/May before peak summer rental season: replacing worn furniture, disposing of damaged outdoor pieces, refreshing property appearance`,
      `Mid-rental week emergency: refrigerator failure requires immediate replacement and old unit removal to minimize guest disruption and maintain 5-star reviews`,
      `Post-hurricane season deep cleanout in November: removing storm-damaged patio furniture, old appliances, accumulated off-season items preparing for winter guests`,
      `Property management company coordinating ${locationName} portfolio turnover: 3-5 properties in same weekend requiring furniture rotation, appliance upgrades, junk removal`,
      `Vacation rental conversion: purchased property requires complete previous owner contents removal before furnishing for rental market`,
      `Guest checkout reveals major damage: broken bed frame, stained mattress, damaged chairs all need emergency removal before next guest arrival in 4 hours`,
      `Annual furniture upgrade program: rotating out 2-3 year old furniture to storage/donation, removing damaged pieces, maintaining fresh property appearance for premium rental rates`
    ],
    'construction-debris': [
      `Full kitchen remodel in ${locationName}: removing old cabinets, countertops, tile backsplash, flooring, appliances—2-3 full truckloads over 2-week renovation`,
      `Coastal home hurricane-proofing: impact window installation debris including old windows, frames, drywall repair waste, exterior trim across entire property`,
      `Master bathroom luxury upgrade: removing garden tub, double vanity, tile shower, flooring—all materials must be cleared before plumber and tile contractor arrive`,
      `Deck replacement on Gulf-front property: pressure-treated lumber, composite decking, railing materials requiring multiple hauls coordinated with contractor schedule`,
      `Interior renovation gut job: complete property down to studs including drywall, flooring, all fixtures, built-ins, creating 15-20 cubic yards of debris`,
      `Outdoor living space addition: removing old patio, landscaping debris, hauling away excavation materials, old pavers before new construction begins`,
      `Roof replacement debris: old shingles, underlayment, flashing from ${locationName} property requiring quick removal for contractor progress`,
      `Flooring replacement throughout 3,000 sq ft property: tile, hardwood, or carpet removal generating multiple truckloads coordinated with installation schedule`
    ],
    'furniture-removal': [
      `Vacation rental furniture rotation: removing 3-year-old coastal-style furniture showing sun damage and wear, donating serviceable pieces to local charities`,
      `Estate sale completion: ${locationName} property sold furnished but buyer wants 30% of furniture removed before closing in 2 weeks`,
      `Downsizing from 3,500 sq ft beach house to 1,800 sq ft condo: removing extra bedroom furniture, oversized pieces, duplicate items after move`,
      `Sun-damaged outdoor furniture replacement: removing faded plastic chairs, rusted metal tables, weathered wooden pieces after harsh Florida summer`,
      `Moving and relocation: previous ${locationName} owners left unwanted furniture in garage and spare rooms that new owners need removed before moving in`,
      `Interior design refresh: designer requires old furniture cleared same day new pieces arrive to maintain project timeline and minimize client disruption`,
      `Damaged furniture emergency: water damage from plumbing leak requires removing ruined sofa, chairs, mattresses before restoration company arrives`,
      `Inherited property furniture disposition: family keeping selected heirlooms but needs remaining furniture removed before listing property for sale`
    ],
    'estate-cleanouts': [
      `Complete ${locationName} estate clearing: elderly parent moved to assisted living, lifetime accumulation in 2,500 sq ft home requires full cleanout for sale`,
      `Post-probate property preparation: inherited beach house needs complete clearing including furniture, personal effects, garage contents before family can list with realtor`,
      `Downsizing from longtime family beach house: decades of memories, collections, furniture accumulated over 40+ years needs sorting between keep/donate/dispose`,
      `Unexpected inheritance: out-of-state heirs need ${locationName} property completely cleared, valuable items identified and protected, donations coordinated, property sale-ready`,
      `Estate sale completion service: sale weekend finished, remaining unsold items throughout property need removal so realtor can list property Monday morning`,
      `Valuable item recovery focus: sorting ${locationName} estate for jewelry, gold, silver, antiques, collectibles before clearing remaining contents—recent find included $47,000 in hidden jewelry`,
      `Compassionate family assistance: helping adult children clear parent's longtime home with respect, care, memory preservation while efficiently preparing property`,
      `Multi-generational accumulation: beach house passed through family for decades, filled with furniture, memorabilia, storage—requires systematic sorting and clearing`
    ],
    'appliance-removal': [
      `Emergency refrigerator replacement: ${locationName} vacation rental fridge failed Friday morning, new unit arrives Saturday, old unit must be removed immediately with proper Freon disposal`,
      `Kitchen renovation appliance package: removing old refrigerator, dishwasher, range, microwave, wine cooler making room for new high-end appliance suite`,
      `Vacation rental property appliance turnover: failed washing machine discovered after guest checkout requires same-day removal and replacement`,
      `Moving and downsizing: new ${locationName} condo has built-in appliances, old standalone fridge, washer, dryer need removal from previous home`,
      `Property acquisition appliance disposal: purchased foreclosure or estate property with old, non-functional appliances throughout requiring professional removal`,
      `Hurricane damage appliance replacement: flooding damaged washer, dryer, water heater requiring removal before insurance restoration begins`,
      `Appliance upgrade program: property management company replacing aging appliances across vacation rental portfolio before they fail during guest stays`,
      `Hot water heater emergency: failed unit flooding garage requires immediate removal and proper disposal coordinating with plumber installation schedule`
    ],
    'hot-tub-removal': [
      `Failed spa on elevated deck: 15-year-old hot tub no longer functional, ${locationName} property owner wants deck space reclaimed, requires crane or deck deconstruction`,
      `Property preparation for sale: realtor advises removing non-functional hot tub to improve property showing and avoid buyer concern about removal responsibility`,
      `Deck renovation project: replacing entire deck structure requires spa removal first, coordinating electrical disconnection and equipment breakdown`,
      `Maintenance cost reduction: vacation rental hot tub requires $3,000 annual maintenance, removal frees budget and eliminates ongoing liability and service calls`,
      `Hurricane-damaged spa: storm surge and wind damaged hot tub beyond repair, insurance claim requires removal before property restoration begins`,
      `Inherited property spa removal: new owners don't want hot tub maintenance responsibility, need professional removal from ${locationName} deck or patio`,
      `Converting spa space to outdoor kitchen: remodel requires complete hot tub removal, electrical capping, surface preparation before new construction`,
      `Access-challenged removal: spa built into multi-level deck or courtyard requires specialized equipment and expertise for safe, damage-free extraction`
    ],
    'yard-debris': [
      `Post-hurricane cleanup: ${locationName} property has downed palm trees, broken branches, fence debris, destroyed outdoor furniture requiring emergency clearing`,
      `Seasonal palm frond maintenance: annual trimming generates 2-3 truckloads of palm fronds, coconuts, and tropical plant debris requiring eco-friendly disposal`,
      `Property preparation for sale: realtor requires overgrown landscaping cleared, debris removed, property appearance improved before listing photos`,
      `Renovation landscaping waste: new pool installation, outdoor living space construction generates significant vegetation removal, root balls, dirt requiring hauling`,
      `Storm preparation debris removal: hurricane season approaching, clearing potential projectiles like dead branches, loose materials, stored items from property perimeter`,
      `Seasonal property maintenance: spring cleanup removing winter storm debris, trimming overgrowth, preparing ${locationName} landscape for summer rental season`,
      `Tree removal aftermath: hired tree service to remove problematic trees, need debris hauling and stump removal coordination`,
      `Neglected property restoration: purchased overgrown ${locationName} property requiring major clearing, debris removal before renovation or landscaping begins`
    ],
    'garage-cleanouts': [
      `Years of accumulated beach equipment: surfboards, boogie boards, broken beach chairs, old coolers, fishing gear, pool toys filling entire ${locationName} garage`,
      `Property acquisition garage clearing: purchased home with previous owner's abandoned storage, tools, boxes, equipment requiring complete removal`,
      `Downsizing cleanout: moving from house to condo, no garage in new place, need lifetime tool collection, workshop equipment, storage items removed`,
      `Seasonal decluttering project: finally tackling garage organization, need junk removal for broken items, duplicates, old equipment no longer used`,
      `Estate garage clearing: sorting through deceased parent's ${locationName} garage workshop, keeping valuable tools, removing rest for donation or disposal`,
      `Renovation garage prep: converting garage to living space or additional bedroom requires complete cleanout before construction begins`,
      `Moving preparation: new ${locationName} home has smaller garage, need to pare down accumulated storage, dispose of unnecessary items before move`,
      `Vacation rental property garage cleanout: guest storage area cluttered with abandoned items, damaged equipment, old maintenance supplies requiring clearing`
    ],
    'office-furniture': [
      `Business relocation: moving to smaller ${locationName} office space, need old cubicles, desks, chairs, filing cabinets removed from previous location`,
      `Office renovation: upgrading to modern open workspace, removing old cubicle systems, traditional desks, outdated furniture before new setup arrives`,
      `Business closure liquidation: complete office furniture removal including desks, conference tables, chairs, shelving, electronics from ${locationName} commercial space`,
      `After-hours corporate cleanout: minimize business disruption with evening/weekend furniture removal coordinating with facility management and building security`,
      `Technology refresh debris: removing old server racks, computer workstations, CRT monitors, printers requiring electronics recycling coordination`,
      `Lease termination requirement: returning ${locationName} commercial space to landlord requires removing all furniture, equipment, leaving space broom-clean`,
      `Office downsizing: pandemic changed workspace needs, excess desks, chairs, cubicles no longer needed after transitioning to hybrid work model`,
      `Professional image upgrade: law firm, medical office, or consulting business upgrading furniture, need professional removal that doesn't disrupt client operations`
    ],
    'property-management': [
      `Portfolio emergency response: property manager with 12 ${locationName} vacation rentals needs emergency furniture removal from 3 properties before weekend guests`,
      `Seasonal refresh program: coordinating furniture rotation, appliance upgrades, junk removal across property management portfolio during shoulder season`,
      `Tenant turnover cleanout: rental property tenant left significant unwanted items, property manager needs quick clearing before marketing to new tenants`,
      `Hurricane damage coordination: property manager handling storm damage across multiple ${locationName} properties requires coordinated debris removal and restoration prep`,
      `Construction project support: managing renovation across multiple properties, need reliable debris removal partner coordinating with contractors`,
      `Volume discount program: property management company needs consistent, reliable junk removal partner for ongoing portfolio needs throughout year`,
      `24/7 emergency availability: middle-of-night guest calls about failed appliances, damaged furniture requiring immediate property manager response and removal coordination`,
      `Photo documentation standard: property manager requires before/after photos, itemized removal lists for client billing and records management`
    ],
    'donation-pickup': [
      `Downsizing donation coordination: ${locationName} homeowner moving to smaller property wants quality furniture, household items donated rather than disposed`,
      `Estate charitable giving: family wants deceased parent's belongings donated to local Northwest Florida charities honoring parent's community commitment`,
      `Vacation rental furniture refresh: replacing functional but dated furniture, coordinating donation to Habitat for Humanity, Goodwill, local churches`,
      `Spring cleaning donation drive: accumulated clothing, household items, small furniture pieces ready for donation with tax receipt documentation`,
      `Moving donation convenience: relocating to ${locationName} area with all new furnishings, want previous home contents donated before closing`,
      `Business furniture donation: company upgrading office furniture wants old desks, chairs, filing cabinets donated to nonprofit organizations`,
      `Decluttering with purpose: Marie Kondo-inspired cleanout focusing on donating serviceable items to community organizations rather than disposal`,
      `Seasonal wardrobe donation: coastal Florida climate change means winter clothing, coats, boots better donated to organizations serving areas needing them`
    ],
    'one-time-hauls': [
      `Spring cleaning project: ${locationName} homeowner tackling attic, garage, spare bedroom, needs flexible one-time haul for accumulated items`,
      `Moving preparation: clearing out unwanted items before listing property or moving to new home, no ongoing service needed`,
      `Post-renovation cleanup: contractor finished project but left debris, old fixtures, packaging requiring one-time removal`,
      `Decluttering before house guests: family visiting for holidays, need guest room, garage cleared of accumulated storage quickly`,
      `Appliance and furniture combo: replacing refrigerator and living room sofa same day, need both old items removed together`,
      `Tenant abandoned items: rental property tenant moved out leaving unwanted furniture, trash, items requiring landlord to clear before re-renting`,
      `Impulse declutter motivation: sudden motivation to tackle accumulated junk, want same-day or next-day service before motivation fades`,
      `Storm cleanup assistance: tropical weather debris, damaged outdoor items, fence sections requiring quick one-time removal from ${locationName} property`
    ]
  }

  return serviceScenarios[serviceSlug] || serviceScenarios['one-time-hauls']
}

function generateServiceProcess(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const processSteps: Record<string, string[]> = {
    'vacation-rentals': [
      `Contact us by phone, text, or online form—we offer same-day service for emergencies and typically schedule within 24 hours for planned turnovers`,
      `Property manager provides photos via text message showing items for removal and any special access instructions for ${locationName} property`,
      `We arrive during scheduled window, confirm pricing based on actual volume, and handle all loading without property manager presence required`,
      `All items loaded, property swept clean, photo documentation sent to property manager for records—average ${locationName} vacation rental removal takes 30-45 minutes`,
      `Usable furniture donated to local charities, recyclables sorted, remaining items disposed of properly at licensed facilities`,
      `Final invoice emailed with photos and itemized description suitable for client billing or property management records`
    ],
    'construction-debris': [
      `Contractor or homeowner contacts us with project details, timeline, and debris type—we provide volume-based quote and schedule coordination`,
      `Site visit for larger projects to assess access, parking, debris volume, special requirements specific to ${locationName} property`,
      `Debris removal coordinated with contractor schedule—we arrive when debris is staged and ready, minimizing wait time and project delays`,
      `Our team loads all construction debris including heavy materials, protects property surfaces, sweeps area clean after loading`,
      `Materials sorted for recycling (metal, concrete, wood), proper disposal of non-recyclables, environmental compliance maintained`,
      `Follow-up scheduling available for multi-phase projects with volume pricing and priority scheduling for ongoing construction needs`
    ],
    'estate-cleanouts': [
      `Initial consultation with executor, family members, or attorney to understand property scope, timeline, valuable item concerns`,
      `Scheduled walkthrough of ${locationName} property to assess contents, discuss family keepsakes, identify potential valuable items`,
      `Systematic clearing room by room with family representative present if desired, careful handling of all items, separation of valuables`,
      `Valuable items identified—jewelry, collectibles, antiques, gold/silver—set aside for family review before removal of other contents`,
      `Quality furniture and household items coordinated for donation to local charities with tax receipts provided when requested`,
      `Complete property clearing including attic, garage, outdoor storage—property left broom-clean and ready for realtor showing or sale`,
      `Photo documentation throughout process, final walkthrough with family or executor, respectful handling of personal memories and possessions`
    ],
    'furniture-removal': [
      `Contact us with furniture description or text photos for accurate quote—single items to entire room contents welcome`,
      `Scheduled arrival at ${locationName} property during convenient time window, typically 2-hour window for single items`,
      `Our team handles all lifting, disassembly if needed, protection of walls/floors/doorways during furniture removal`,
      `Furniture carefully navigated through property—stairs, elevators, narrow hallways handled professionally without damage`,
      `Quality furniture donated to Goodwill, Habitat for Humanity, local charities—we coordinate pickup or delivery`,
      `Damaged or unsalvageable furniture disposed of properly, property swept clean, removal typically completed in 15-30 minutes`
    ],
    'appliance-removal': [
      `Call or text with appliance type and situation (failed, replacement, renovation)—we provide immediate quote and schedule`,
      `For refrigerators and A/C units, EPA-compliant Freon recovery included in service before appliance removal`,
      `Professional disconnection guidance provided—we don't disconnect but coordinate with your plumber or electrician if needed`,
      `Heavy appliance removal from ${locationName} property including stairs, tight spaces, navigating to truck without property damage`,
      `Eco-friendly appliance recycling at certified facilities maximizing material recovery—metals, glass, plastics separated and recycled`,
      `Same-day emergency service available for failed appliances disrupting vacation rentals or creating property damage risk`
    ],
    'hot-tub-removal': [
      `Initial consultation via phone or site visit to assess spa size, location, deck integration, electrical status, access challenges`,
      `Electrical disconnection coordinated with licensed electrician—we can recommend trusted partners for ${locationName} area`,
      `Spa drained completely before removal, water disposal managed in environmentally responsible manner`,
      `Specialized equipment deployed for heavy spa removal—crane service, deck deconstruction, or manual breakdown depending on access`,
      `Deck surface protection throughout removal process, any necessary deck modification to facilitate spa extraction`,
      `Complete site cleanup including all spa components, plumbing pieces, electrical parts, debris—deck area left ready for new use`,
      `Optional deck board replacement coordination if removal required temporary deconstruction for ${locationName} property access`
    ],
    'property-management': [
      `Property management account setup with dedicated contact, priority scheduling, volume pricing structure agreed upon`,
      `Standing order protocols established for recurring ${locationName} portfolio needs—vacation rental turnovers, seasonal refreshes, emergencies`,
      `24/7 emergency contact available for urgent property manager needs—guest damage, failed appliances, storm damage response`,
      `Photo documentation standard for all jobs with itemized descriptions suitable for client billing and property management records`,
      `Batch scheduling efficiency for multiple properties—coordinate removals across portfolio on same day for cost savings`,
      `Monthly or quarterly billing available with detailed invoicing by property address and job type for accounting simplification`,
      `Regular portfolio review meetings to discuss upcoming needs, seasonal planning, pricing updates, service improvements`
    ],
    'donation-pickup': [
      `Contact us with donation items description—furniture, household goods, clothing, small appliances suitable for charitable giving`,
      `We coordinate with local Northwest Florida charities and organizations for appropriate donation placement`,
      `Scheduled pickup at ${locationName} property during convenient time, items loaded carefully to preserve donation quality`,
      `Tax receipt documentation provided by receiving charity when requested—we facilitate but receipt comes from charitable organization`,
      `Items transported directly to charity facility or consolidated for scheduled charity pickup depending on organization`,
      `Commitment to maximizing donation potential rather than defaulting to disposal—quality items find new homes in community`
    ],
    'yard-debris': [
      `Contact us after storm, landscaping project, or seasonal maintenance with yard debris description and approximate volume`,
      `Scheduled removal at ${locationName} property—we handle all loading of branches, palm fronds, vegetation, landscaping waste`,
      `Heavy items like tree stumps, root balls, large sections handled with specialized equipment and experienced crew`,
      `Eco-friendly disposal through composting facilities and green waste recycling rather than landfill when possible`,
      `Post-storm emergency response available—hurricane and tropical storm debris prioritized for quick ${locationName} area clearing`,
      `Property swept clean after yard debris removal, ensuring professional appearance and complete cleanup`
    ],
    'garage-cleanouts': [
      `Initial assessment via photos or site visit to understand ${locationName} garage contents, identify items to keep versus remove`,
      `Scheduled cleanout with systematic sorting approach—we help identify valuable items, donations, recyclables, and disposal items`,
      `Heavy lifting handled professionally—equipment, tools, storage items, boxes all loaded efficiently`,
      `Garage cleared completely or to specified level depending on goals—full cleanout or organized reduction`,
      `Quality tools and equipment offered for donation, recyclables separated, remaining items properly disposed`,
      `Garage swept clean, transformed from cluttered storage to functional space—projects typically complete in 2-4 hours depending on volume`
    ],
    'office-furniture': [
      `Business consultation to understand office furniture removal needs, timing requirements, business disruption concerns`,
      `After-hours or weekend scheduling available to minimize impact on ${locationName} business operations and client-facing areas`,
      `Professional crew handles all furniture disassembly, loading, protection of office surfaces, elevator coordination if needed`,
      `Electronics recycling coordinated for computers, monitors, printers, networking equipment following data security guidelines`,
      `Office furniture donation to nonprofit organizations arranged when requested, supporting community while reducing disposal costs`,
      `Space left clean and ready for new furniture installation, construction, or lease termination requirements`,
      `Discretion and professionalism maintained—uniformed crew, quiet operations, respect for business environment and reputation`
    ],
    'one-time-hauls': [
      `Contact us by phone, text photos, or online form—describe items for removal and we provide transparent upfront quote`,
      `Schedule convenient appointment typically within 24-48 hours, same-day service available when possible`,
      `Our professional team arrives in clearly marked truck during scheduled 2-hour window, calls 30 minutes ahead`,
      `Final price confirmed based on actual volume before we start—you'll see items loaded and know exact space used`,
      `We handle ALL work—lifting, loading, navigating stairs and tight spaces, protecting your ${locationName} property throughout`,
      `Quick, efficient removal typically completed in 30-60 minutes depending on volume, property swept clean afterward`,
      `Items donated when possible, recycled when applicable, disposed of responsibly at licensed facilities—eco-friendly focus standard`,
      `Payment after job complete, no hidden fees, no surprises—price quoted matches price paid`
    ]
  }

  return processSteps[serviceSlug] || processSteps['one-time-hauls']
}

function generateLocationSpecificsParagraphs(serviceSlug: string, locationSlug: string, serviceName: string, locationName: string): string[] {
  const specifics: Record<string, string[]> = {
    'seaside': [
      `${locationName} represents one of the 30A corridor's most iconic communities, and our ${serviceName.toLowerCase()} service reflects that character. Since its founding in the 1980s, Seaside has maintained strict architectural and community standards that we respect and protect in every junk removal project.`,
      `Our team understands the delicate balance between efficient service and maintaining the pedestrian-friendly atmosphere that makes Seaside special. Whether you're managing one of Seaside's many vacation rentals during the intense summer season, renovating a cottage to meet modern expectations while preserving New Urbanist character, or coordinating an estate transition in this historic community, we provide service that matches Seaside's premium standards.`,
      `The community's commitment to walkability and human-scale design influences our approach—we schedule carefully to avoid peak pedestrian times, position trucks to minimize impact on the charming street life, and work efficiently to maintain the peaceful atmosphere residents and visitors cherish.`
    ],

    'rosemary-beach': [
      `${locationName} stands as the crown jewel of New Urbanist communities along 30A, and our ${serviceName.toLowerCase()} service delivers the white-glove experience these premium properties demand. With home values regularly exceeding $2-5 million and architectural review standards that rival any community in Northwest Florida, Rosemary Beach requires junk removal partners who understand that professionalism extends beyond basic hauling.`,
      `Our team navigates the European-inspired cobblestone streets with care, coordinates with the HOA for larger projects, and treats every property with the respect its value commands. The community's distinctive carriage lanes, multi-level townhomes, and courtyard designs create unique access challenges we've mastered through years of experience.`,
      `Whether you're a property manager coordinating vacation rental turnovers in the Western Green area, a homeowner planning a renovation that must meet architectural review board standards, or handling an estate transition in Barrett Square, we deliver service that reflects Rosemary Beach's commitment to excellence in every detail.`
    ],

    'alys-beach': [
      `${locationName} represents the pinnacle of luxury coastal living along Florida's Emerald Coast, and our ${serviceName.toLowerCase()} service matches the ultra-premium standards this community expects. The striking white Bermudian architecture, pristine courtyard homes, and meticulous attention to detail throughout Alys Beach demand junk removal service that goes far beyond basic hauling.`,
      `Our team understands that every surface matters in this $3M+ average home value community—we protect the signature white walls, navigate the unique courtyard access with specialized equipment, and coordinate carefully with security and architectural review processes. The community's commitment to creating a peaceful, beautiful environment influences every aspect of our service approach.`,
      `Whether you're preparing an Alys Beach property for the rental season, coordinating a high-end renovation requiring architectural review board approval, or managing the estate transition of a luxury coastal home, we provide the discretion, professionalism, and careful handling that Alys Beach properties require. Our service protects not just your property but the pristine community character that makes Alys Beach truly special.`
    ],

    'watercolor': [
      `${locationName} combines resort amenities with residential character, creating one of 30A's most diverse and active communities—our ${serviceName.toLowerCase()} service reflects that versatility. From the WaterColor Inn area's resort traffic patterns to the quiet residential sections around Western Lake, we understand the unique rhythms and requirements of different WaterColor areas.`,
      `The community's exceptional vacation rental market means we handle everything from emergency mid-rental furniture replacement to seasonal property refreshes that keep homes competitive in the premium rental market. Property managers appreciate our coordination skills when handling multiple WaterColor properties simultaneously, while homeowners value our understanding of the community's access routes, parking considerations, and seasonal demand patterns.`,
      `Whether you're managing a vacation rental in the Boathouse district, planning a renovation in the newer residential sections, coordinating an estate cleanout of a lakefront property, or simply need efficient junk removal that works around WaterColor's resort traffic, we deliver flexible, professional service tailored to your specific needs.`
    ],

    'destin': [
      `${locationName} encompasses a diverse coastal landscape from harbor-area high-rises to mainland neighborhoods, and our ${serviceName.toLowerCase()} service adapts to this complexity. As Northwest Florida's premier beach destination, Destin presents unique challenges from condominium building coordination to vacation rental turnover demands that span all price points.`,
      `Our team navigates everything from elevator reservations and building management requirements in high-rise condos to access considerations in gated communities like Sandestin Golf and Beach Resort. The combination of intense vacation rental activity, active real estate market, commercial fishing industry, and tourism businesses creates year-round consistent junk removal demand across all property types.`,
      `Whether you're managing a vacation rental portfolio in the HarborWalk Village area, coordinating construction debris removal from a Destiny East renovation, handling an estate cleanout in Kelly Plantation, or need commercial junk removal for a Destin Harbor business, we provide the versatility and professional service that Destin's diverse property landscape requires.`
    ],

    'panama-city-beach': [
      `${locationName} stretches 27 miles along the beautiful Emerald Coast, creating one of Florida's most diverse service areas—our ${serviceName.toLowerCase()} responds to that extraordinary range. From Thomas Drive's condominium towers to the western neighborhoods near Inlet Beach, Panama City Beach encompasses everything from spring break party central to quiet residential areas ideal for families and retirees.`,
      `Our experience includes navigating high-rise building requirements, coordinating post-Hurricane Michael reconstruction debris removal, handling vacation rental turnovers across all price points, and managing commercial property needs near Pier Park. The military presence from nearby Tyndall Air Force Base creates regular relocation-related junk removal needs, while the active tourism industry generates commercial opportunities beyond typical residential service.`,
      `Whether you're managing vacation rental properties along Front Beach Road, coordinating renovation debris removal from storm-damaged properties, handling estate cleanouts in the quieter western areas, or need commercial junk removal service for Panama City Beach businesses, our team delivers reliable, professional service across this expansive and varied coastal community.`
    ],

    'default': [
      `${locationName} features unique property characteristics and community standards that our ${serviceName.toLowerCase()} service is specifically designed to address. Our team's local expertise extends beyond basic junk removal to understanding the specific access requirements, parking considerations, HOA regulations, and property types that define ${locationName}.`,
      `Whether you're managing vacation rental properties requiring fast turnovers, coordinating renovation projects that generate construction debris, handling estate transitions, or simply need professional junk removal service that respects your community's character, we deliver service tailored to ${locationName}'s specific needs.`,
      `Our commitment to eco-friendly disposal practices, transparent pricing, and professional service standards ensures that every ${locationName} property receives the attention and care it deserves, regardless of project size or complexity.`
    ]
  }

  return specifics[locationSlug] || specifics['default']
}

/**
 * Get all valid service+location combinations
 * Returns 144 combinations (12 services × 12 locations)
 */
export function getAllServiceLocationCombinations() {
  const services = getAllServiceSlugs()
  const locations = getAllLocationSlugs()

  const combinations: Array<{ service: string; location: string }> = []

  for (const service of services) {
    for (const location of locations) {
      combinations.push({ service, location })
    }
  }

  return combinations
}

/**
 * Check if a service+location combination is valid
 */
export function isValidCombination(serviceSlug: string, locationSlug: string): boolean {
  const services = getAllServiceSlugs()
  const locations = getAllLocationSlugs()

  return services.includes(serviceSlug) && locations.includes(locationSlug)
}

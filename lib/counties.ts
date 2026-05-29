export interface County {
  name: string
  slug: string
  state: string
  areaCode: string
  description: string
  content: string
  cities: string[]
  zipCodes: string[]
  coordinates: { lat: number; lng: number }
  faqs: Array<{ question: string; answer: string }>
}

export const counties: Record<string, County> = {
  'walton-county': {
    name: 'Walton County',
    slug: 'walton-county',
    state: 'FL',
    areaCode: '850',
    description:
      'Professional junk removal services throughout Walton County, FL, covering the entire 30A corridor from Inlet Beach to Dune Allen. We serve residential homeowners, vacation rental managers, and commercial properties with fast, eco-friendly hauling and disposal.',
    content: `## About Walton County

Walton County stretches along the Gulf of Mexico in the Florida Panhandle, encompassing some of the most sought-after coastal real estate in the southeastern United States. At the heart of Walton County lies Scenic Highway 30A, a winding 24-mile stretch of road that connects a string of distinctive beach communities, each with its own character, architecture, and sense of place. From the pastel-colored cottages of Seaside to the white stucco courtyards of Alys Beach, Walton County's 30A corridor attracts millions of visitors each year and is home to a growing year-round population.

With growth comes waste. Vacation rental turnovers generate mountains of discarded furniture, broken appliances, and leftover debris. Homeowners renovating their beach houses need construction waste hauled away quickly. Property managers juggle tight schedules between guest check-outs and check-ins, leaving little room for delays. That is exactly why 30A Junk Removal exists — to provide Walton County residents and businesses with reliable, same-day junk removal services that keep properties clean, presentable, and guest-ready.

Our team knows every neighborhood, every gated community, and every back road in Walton County. We understand the local regulations around disposal and recycling, and we work closely with Walton County waste management facilities to ensure that as much material as possible is diverted from the landfill. Whether you are clearing out a storage unit in Santa Rosa Beach or removing hurricane debris from a home in Grayton Beach, we are your local junk removal partner.

## Junk Removal Services We Offer

We provide comprehensive junk removal and hauling services across Walton County, tailored to the unique demands of coastal living along 30A. Our core services include:

**Residential Junk Removal** — Old furniture, broken appliances, mattresses, electronics, yard waste, and general household clutter. We handle single-item pickups and full-home cleanouts with equal care. Whether you are downsizing, preparing a property for sale, or simply reclaiming space in your garage, our crew arrives on time and removes everything efficiently. Learn more about our <a href="/services#one-time-hauls" class="text-ocean-600 hover:underline font-medium">residential junk removal services</a>.

**Commercial Junk Removal** — Office furniture, retail fixtures, restaurant equipment, warehouse cleanouts, and bulk waste from commercial properties. We work around your business hours to minimize disruption and can handle large-volume jobs that require multiple truck loads. See our full <a href="/services#commercial-junk-removal" class="text-ocean-600 hover:underline font-medium">commercial junk removal offerings</a>.

**Vacation Rental Cleanouts** — The 30A corridor is one of Florida's premier vacation rental markets. We specialize in rapid turnovers, removing worn-out patio furniture, damaged linens, broken decor, and anything else that needs to go before the next guest arrives. Our team understands the urgency of rental schedules and offers priority booking for property managers.

**Construction Debris Removal** — Renovation and remodeling projects generate significant waste, from drywall scraps and lumber to old cabinetry and flooring. We remove construction debris so your contractors can focus on building, not hauling. Check out our <a href="/services#construction-debris" class="text-ocean-600 hover:underline font-medium">construction debris removal service</a>.

**Appliance and Electronics Recycling** — Refrigerators, washers, dryers, televisions, computers, and other electronics require special handling. We ensure these items are recycled responsibly in accordance with Florida environmental regulations.

**Yard Waste and Storm Debris** — Living on the Gulf Coast means dealing with the aftermath of tropical storms and hurricanes. We remove fallen branches, damaged fencing, waterlogged furniture, and storm debris quickly so you can begin the recovery process.

## Junk Removal in Seaside, FL

Seaside is the crown jewel of 30A, a master-planned community that inspired the New Urbanism movement and served as the filming location for *The Truman Show*. Its iconic pastel cottages, white picket fences, and bustling town center draw visitors from around the world. Property values in Seaside are among the highest on 30A, which means homeowners and rental managers demand impeccable property presentation at all times.

We provide regular junk removal services to Seaside homeowners, vacation rental companies, and the shops and restaurants along Central Square. From removing old beach gear and worn furniture to handling full cleanouts of rental properties between seasons, our team keeps Seaside properties looking their best. <a href="/service-areas#seaside" class="text-ocean-600 hover:underline font-medium">Seaside junk removal</a> is one of our most-requested service areas.

## Junk Removal in Rosemary Beach, FL

Rosemary Beach sits at the eastern end of 30A, a stunning community defined by Caribbean-inspired architecture, cobblestone streets, and lush courtyards. The town is known for its high-end dining, upscale boutiques, and some of the most luxurious vacation rentals on the Emerald Coast. Maintaining the pristine appearance of Rosemary Beach properties is essential for homeowners and rental managers alike.

Our crew provides discreet, efficient junk removal throughout Rosemary Beach, handling the community's narrow lanes and architectural guidelines with care. We frequently handle post-renovation cleanups, seasonal furniture swaps, and estate cleanouts in this exclusive neighborhood. <a href="/service-areas#rosemary-beach" class="text-ocean-600 hover:underline font-medium">Rosemary Beach junk removal</a> services are available with same-day scheduling.

## Junk Removal in Alys Beach, FL

Alys Beach is perhaps the most architecturally distinctive community on 30A, with its gleaming white Bermudian-style buildings, emerald-green lawns, and world-class wellness amenities. Properties here command premium prices, and the community's strict design standards mean that any exterior clutter or debris is particularly conspicuous. Homeowners and property managers in Alys Beach require junk removal services that are prompt, thorough, and respectful of the community's aesthetic standards.

We work with several property management companies in Alys Beach to provide regular cleanout services and on-call debris removal. Whether it is old patio furniture, construction materials from a remodel, or bulk waste from an event, we handle it all. <a href="/service-areas#alys-beach" class="text-ocean-600 hover:underline font-medium">Alys Beach junk removal</a> is available seven days a week during peak season.

## Junk Removal in WaterColor, FL

WaterColor is a 499-acre resort community located between the dunes of the Gulf and the cypress-lined banks of Western Lake. Known for its David Rockwell-designed Boathouse and its expansive network of nature trails, WaterColor blends luxury living with the natural beauty of the Florida coast. The community features a mix of full-time residents and vacation rental properties, both of which generate regular demand for junk removal services.

Our team serves WaterColor with full-spectrum hauling, from single-item pickups to complete home cleanouts. We are familiar with the community's access points, HOA requirements, and seasonal traffic patterns, allowing us to provide fast, hassle-free service. <a href="/service-areas#watercolor" class="text-ocean-600 hover:underline font-medium">WaterColor junk removal</a> is just a call away.

## Junk Removal in Grayton Beach, FL

Grayton Beach is the oldest community on 30A and retains a laid-back, bohemian vibe that sets it apart from its more manicured neighbors. Home to the acclaimed Red Bar restaurant and adjacent to Grayton Beach State Park, this community attracts artists, surfers, and families who appreciate its unpretentious charm. Despite its relaxed atmosphere, Grayton Beach properties still need regular maintenance, and junk removal is a consistent need.

We help Grayton Beach homeowners clear out garages, sheds, and rental units that accumulate clutter over time. Storm debris removal is particularly common here given the community's proximity to the dunes. <a href="/service-areas#grayton-beach" class="text-ocean-600 hover:underline font-medium">Grayton Beach junk removal</a> services cover the entire Grayton Beach area, including properties along County Road 283.

## Junk Removal in Santa Rosa Beach, FL

Santa Rosa Beach is the commercial and residential hub of the 30A area, home to the majority of Walton County's year-round coastal population. Stretching from the shores of the Gulf to the banks of Choctawhatchee Bay, Santa Rosa Beach encompasses a wide range of neighborhoods, shopping centers, and business districts. It is where many 30A workers live, where families settle for the school district, and where much of the area's commercial activity takes place.

We provide high-volume junk removal throughout Santa Rosa Beach, serving both residential neighborhoods and the commercial corridor along US Highway 98. From office cleanouts to residential garage clearing, our trucks are a familiar sight in Santa Rosa Beach. <a href="/service-areas#santa-rosa-beach" class="text-ocean-600 hover:underline font-medium">Santa Rosa Beach junk removal</a> is our highest-volume service area.

## Junk Removal in Inlet Beach, FL

Inlet Beach sits at the far eastern end of 30A, right at the border of Walton and Bay counties. Once a quiet, undeveloped stretch of coastline, Inlet Beach has experienced explosive growth in recent years, with new construction, vacation rentals, and residential communities transforming the landscape. All of that growth generates significant amounts of construction waste, moving debris, and general junk.

We serve Inlet Beach with construction debris removal, new-home cleanouts, and ongoing junk hauling for the growing number of rental properties in the area. <a href="/service-areas#inlet-beach" class="text-ocean-600 hover:underline font-medium">Inlet Beach junk removal</a> is available on short notice to keep pace with this fast-growing community.

## Junk Removal in Seacrest, FL

Seacrest and the adjacent Seacrest Beach community occupy a beautiful stretch of 30A between Rosemary Beach and Alys Beach. The area features a mix of single-family homes, townhomes, and condominiums, many of which serve as vacation rentals. The Seacrest community pool, parks, and proximity to some of the best beaches on the coast make this a popular area for families and investors alike.

We provide regular junk removal services to Seacrest property owners and managers, handling everything from furniture disposal to post-construction cleanup. <a href="/service-areas#seacrest" class="text-ocean-600 hover:underline font-medium">Seacrest junk removal</a> services include same-day pickup when available.

## Junk Removal in Seagrove Beach, FL

Seagrove Beach is one of the original 30A communities, known for its towering oak trees, natural dune formations, and a mix of vintage beach cottages and newer construction. The community sits between Seaside and Eastern Lake, offering a quieter alternative to its more tourist-heavy neighbors. Many Seagrove Beach properties are family-owned second homes that see seasonal use, which means periodic cleanouts and furniture updates are common.

Our team provides seasonal cleanout services for Seagrove Beach homeowners, helping prepare properties for rental season or for personal use after months of sitting vacant. <a href="/service-areas#seagrove-beach" class="text-ocean-600 hover:underline font-medium">Seagrove Beach junk removal</a> is available year-round.

## Junk Removal in Blue Mountain Beach, FL

Blue Mountain Beach takes its name from the rare blue lupine flowers that once blanketed the area's unusually tall dunes — some of the highest points on the Gulf of Mexico. Today, Blue Mountain Beach is a thriving community of beach houses, condos, and local businesses, including popular spots like The Blue Mabel and Redlands Growler Bar. The community's elevation and dense vegetation mean that storm debris and yard waste are frequent junk removal needs.

We serve Blue Mountain Beach with yard waste hauling, appliance removal, furniture disposal, and general junk pickup. <a href="/service-areas#blue-mountain-beach" class="text-ocean-600 hover:underline font-medium">Blue Mountain Beach junk removal</a> services cover the entire area from Highway 83 to the Gulf.

## Why Choose 30A Junk Removal in Walton County

Choosing a junk removal company in Walton County means choosing someone who understands the unique character of the 30A corridor. We are not a national franchise operating out of a distant warehouse. We are a local business, owned and operated by people who live and work along 30A every day. Here is what sets us apart:

- **Local Knowledge**: We know the access restrictions, HOA rules, and traffic patterns in every 30A community. We arrive prepared, work efficiently, and leave your property spotless.
- **Same-Day Service**: When you need junk gone today, we make it happen. Our fleet is positioned throughout Walton County so we can respond quickly to urgent requests.
- **Transparent Pricing**: No hidden fees, no surprise charges. We provide upfront quotes based on volume and let you approve the price before we start. Learn more about our <a href="/pricing" class="text-ocean-600 hover:underline font-medium">junk removal pricing</a>.
- **Fully Insured**: We carry full liability insurance, protecting your property and giving you peace of mind.
- **Vacation Rental Specialists**: We understand the tight timelines of rental turnovers and offer priority scheduling for property managers.

## Eco-Friendly Disposal in Walton County

Walton County's natural beauty — the sugar-white sand beaches, the rare coastal dune lakes, the pristine state parks — is worth protecting. That is why we are committed to responsible disposal practices on every job we complete. Before anything goes to the landfill, our team sorts through collected items to identify materials that can be recycled, donated, or repurposed.

We partner with local recycling facilities in Walton County to process metals, electronics, cardboard, and other recyclable materials. Usable furniture, appliances, and household goods are donated to local charitable organizations, keeping them out of the waste stream and putting them to good use in the community. Construction materials like clean wood, concrete, and metal are sent to specialized recycling facilities.

Our goal is to divert at least 60% of the materials we collect away from the landfill. It is good for the environment, it is good for the community, and it is the right thing to do. When you hire 30A Junk Removal, you are choosing a company that cares about Walton County's future as much as you do.`,
    cities: [
      'seaside',
      'rosemary-beach',
      'alys-beach',
      'watercolor',
      'grayton-beach',
      'santa-rosa-beach',
      'inlet-beach',
      'seacrest',
      'seagrove-beach',
      'blue-mountain-beach',
      'miramar-beach',
      'sandestin',
      'dune-allen-beach',
      'point-washington',
      'watersound',
      'seacrest-beach',
      'freeport',
      'defuniak-springs',
      'watersound-beach',
    ],
    zipCodes: ['32459', '32461'],
    coordinates: { lat: 30.4, lng: -86.15 },
    faqs: [
      {
        question: 'How much does junk removal cost in Walton County?',
        answer:
          'Our pricing is based on the volume of junk we remove, starting at $150 for a small load (about 1/8 of a truck) and scaling up to $600 or more for a full truckload. We provide a free, no-obligation quote before any work begins. Factors that can affect pricing include the type of materials (heavy items like concrete or appliances may cost more), accessibility of the pickup location, and whether same-day service is needed. There are never hidden fees — the price we quote is the price you pay.',
      },
      {
        question: 'What items do you remove in Walton County?',
        answer:
          'We remove almost anything that is not hazardous waste. This includes furniture, appliances, mattresses, electronics, yard waste, construction debris, hot tubs, sheds, fencing, carpet, and general household clutter. We do not remove hazardous materials such as paint, chemicals, asbestos, or biological waste. If you are unsure whether we can take a particular item, give us a call and we will let you know.',
      },
      {
        question: 'Can I schedule same-day junk removal on 30A?',
        answer:
          'Yes, we offer same-day junk removal service throughout the 30A corridor in Walton County, subject to availability. We recommend calling as early in the day as possible to secure a same-day time slot. During peak tourist season (May through September), demand is higher, so booking a day or two in advance is ideal. We also offer scheduled appointments for property managers who need recurring service.',
      },
      {
        question: 'What areas of Walton County do you serve?',
        answer:
          'We serve the entire 30A corridor in Walton County, including Seaside, Rosemary Beach, Alys Beach, WaterColor, Grayton Beach, Santa Rosa Beach, Inlet Beach, Seacrest, Seagrove Beach, and Blue Mountain Beach. We also serve properties along Highway 98, in the Point Washington area, and in northern Walton County communities on a case-by-case basis. If you are in Walton County and need junk removed, chances are we can help.',
      },
      {
        question: 'Do you recycle or donate items from Walton County jobs?',
        answer:
          'Absolutely. We are committed to eco-friendly disposal and work hard to keep usable materials out of the landfill. After every job, our team sorts collected items to identify recyclable materials such as metals, electronics, and cardboard. Furniture, appliances, and household goods in good condition are donated to local charities. Construction materials are sent to specialized recycling facilities. Our goal is to divert at least 60% of what we collect away from the landfill.',
      },
    ],
  },

  'bay-county': {
    name: 'Bay County',
    slug: 'bay-county',
    state: 'FL',
    areaCode: '850',
    description:
      'Reliable junk removal services in Bay County, FL, including Panama City Beach and surrounding communities. We offer fast, affordable hauling for residential and commercial properties along the Emerald Coast.',
    content: `## About Bay County

Bay County sits at the western edge of Florida's Big Bend region, where the Emerald Coast meets the calm waters of St. Andrew Bay. With a population of over 175,000 residents, Bay County is one of the most populated counties in the Florida Panhandle and serves as a major economic hub for the region. The county seat is Panama City, a working waterfront city with deep roots in military, shipping, and tourism. To the west lies Panama City Beach, one of the most visited beach destinations in the United States, drawing millions of tourists annually with its 27 miles of white sand beaches and warm Gulf waters.

Bay County experienced devastating destruction during Hurricane Michael in October 2018, a Category 5 storm that flattened neighborhoods, stripped forests, and left billions of dollars in damage across the region. The recovery effort reshaped the county's landscape and economy, driving a massive construction boom that continues to this day. New homes, condominiums, hotels, and commercial developments are rising across Bay County, bringing economic growth alongside significant demand for junk removal and debris hauling services.

Whether you are a homeowner clearing hurricane-era debris that still lingers in a back lot, a contractor finishing a new build and needing construction waste removed, or a vacation rental manager preparing a Panama City Beach condo for the next guest, 30A Junk Removal provides fast, dependable service throughout Bay County. We understand the pace of this county — seasonal tourism, rapid development, and the ever-present possibility of severe weather. Our team is equipped, experienced, and ready to handle whatever Bay County throws our way.

## Junk Removal Services We Offer

Our Bay County junk removal services are designed to meet the needs of a diverse and growing community. We offer:

**Residential Junk Removal** — Furniture, appliances, mattresses, electronics, clothing, yard waste, garage cleanouts, attic cleanouts, and whole-home cleanouts. Whether you are decluttering a single room or emptying an entire house for sale, we handle every item with care. Our residential services cover homes, condos, townhomes, and mobile homes throughout Bay County. Learn about our full range of <a href="/services#one-time-hauls" class="text-ocean-600 hover:underline font-medium">residential junk removal services</a>.

**Commercial Junk Removal** — Bay County's commercial sector is booming, and businesses need reliable partners to handle waste removal. We serve offices, retail stores, restaurants, warehouses, and industrial facilities with scheduled and on-demand junk hauling. Old office equipment, outdated fixtures, surplus inventory, and bulk packaging materials are all within our scope. Explore our <a href="/services#commercial-junk-removal" class="text-ocean-600 hover:underline font-medium">commercial junk removal services</a>.

**Vacation Rental Turnovers** — Panama City Beach is home to thousands of vacation rental units, from Gulf-front high-rise condos to cozy beach cottages. Rental turnovers happen fast, and worn-out furniture, damaged goods, and accumulated junk cannot wait. We provide expedited junk removal for rental property managers, with flexible scheduling to work around guest check-in and check-out times.

**Construction Debris Removal** — With the ongoing post-Hurricane Michael rebuild and new development projects across Bay County, construction debris removal is one of our most in-demand services. We haul drywall, lumber, roofing materials, concrete, tile, carpet, and other construction waste from residential and commercial job sites. Visit our <a href="/services#construction-debris" class="text-ocean-600 hover:underline font-medium">construction debris removal page</a> for details.

**Storm Debris Removal** — Bay County residents know all too well the devastation that hurricanes and tropical storms can bring. When severe weather strikes, our team mobilizes quickly to remove fallen trees, damaged structures, waterlogged furniture, and other storm debris from your property so you can begin rebuilding.

**Appliance and Electronics Disposal** — Old refrigerators, stoves, dishwashers, washing machines, dryers, air conditioners, televisions, and computers all require proper handling and disposal. We ensure these items are recycled responsibly and in compliance with Florida environmental regulations.

## Junk Removal in Panama City Beach, FL

Panama City Beach is Bay County's crown jewel, a world-renowned tourist destination that consistently ranks among the top beach vacation spots in the United States. The city's 27 miles of shoreline, warm Gulf waters, and seemingly endless supply of sunshine make it a magnet for spring breakers, family vacationers, and snowbirds alike. Beyond the beach, Panama City Beach offers attractions like Pier Park, Gulf World Marine Park, and St. Andrews State Park, along with a thriving restaurant and nightlife scene.

The tourism economy drives intense demand for property maintenance and junk removal services. Vacation rental properties in Panama City Beach experience heavy use, with guests cycling through condos and houses on a weekly basis during peak season. Furniture wears out faster, appliances break down more frequently, and the general wear and tear of high-volume rental use creates a constant stream of junk that needs to be removed quickly and professionally.

We serve all of Panama City Beach, from the high-rise condos along Thomas Drive and Front Beach Road to the residential neighborhoods north of Back Beach Road (Highway 98). Our team is experienced with the access challenges of high-rise buildings, gated communities, and busy commercial areas. We coordinate with building management, work within designated service hours, and ensure that common areas are left clean after every job.

<a href="/service-areas#panama-city-beach" class="text-ocean-600 hover:underline font-medium">Panama City Beach junk removal</a> is available seven days a week, with same-day service offered based on availability. Whether you need a single couch removed from a 15th-floor condo or a full cleanout of a beachfront rental, we are ready to help.

## Broader Bay County Communities We Serve

While Panama City Beach is our primary service area in Bay County, we also extend our services to the broader Bay County region. Panama City, the county seat, is home to a large residential population and a growing commercial sector that includes Tyndall Air Force Base, the Port of Panama City, and a diverse range of businesses. We serve Panama City homeowners and businesses with the same reliable junk removal service we bring to the beach.

We also reach communities such as Lynn Haven, a family-friendly city north of Panama City known for its parks and schools, and Springfield, a residential community that is undergoing significant revitalization following Hurricane Michael. Callaway, Parker, and Cedar Grove are additional Bay County communities where we provide service on request. Our goal is to be the most accessible, most responsive junk removal company in the entire Bay County region.

If you are located in Bay County and unsure whether we serve your area, do not hesitate to call. We are committed to expanding our coverage to meet the needs of this growing community.

## Why Choose 30A Junk Removal in Bay County

Bay County has no shortage of junk removal options, from national franchises to independent haulers. Here is why local residents and businesses choose us:

- **Local Expertise**: We are based on the Emerald Coast, not in a call center across the country. We know Bay County's neighborhoods, traffic patterns, and access challenges. This local knowledge translates to faster, more efficient service.
- **Post-Storm Experience**: Having served the region through the aftermath of Hurricane Michael and subsequent storm seasons, we understand the urgency and scale of storm debris removal. When severe weather hits, we are among the first to mobilize.
- **Flexible Scheduling**: We work around your schedule, not the other way around. Early morning pickups, evening appointments, and weekend service are all available. For property managers with multiple units, we offer recurring service plans.
- **Volume Discounts**: Large-scale cleanouts, multi-property contracts, and ongoing commercial accounts qualify for volume-based pricing. Learn more about our <a href="/pricing" class="text-ocean-600 hover:underline font-medium">pricing structure</a>.
- **Fully Licensed and Insured**: We carry comprehensive liability insurance and comply with all Bay County and State of Florida regulations regarding waste hauling and disposal.

## Eco-Friendly Disposal in Bay County

Bay County's natural assets — St. Andrew Bay, Shell Island, the Gulf Islands National Seashore — are irreplaceable treasures that deserve protection. Our commitment to eco-friendly disposal is not just a marketing talking point; it is a core part of how we operate every single day.

On every job in Bay County, our team separates recyclable materials from general waste. Metals, cardboard, plastics, and electronics are routed to certified recycling facilities. Furniture and household goods that are still in usable condition are donated to local organizations that serve Bay County families in need, including those still recovering from the economic impacts of Hurricane Michael.

Construction debris is sorted at the job site whenever possible. Clean wood, concrete, and metal are diverted to recycling. Hazardous materials are identified and handled through proper channels — we never dump prohibited materials illegally, and we never take shortcuts with disposal.

We track our recycling and donation rates and continually work to improve them. Our target is to divert at least 60% of collected materials from the landfill, and we are proud to say that we consistently meet or exceed that goal in Bay County. When you choose 30A Junk Removal, you are choosing a company that treats Bay County's environment with the respect it deserves.`,
    cities: ['panama-city-beach', 'panama-city', 'lynn-haven', 'callaway', 'springfield', 'parker', 'laguna-beach', 'mexico-beach'],
    zipCodes: ['32401', '32402', '32404', '32405', '32407', '32408', '32413', '32444', '32456'],
    coordinates: { lat: 30.2, lng: -85.65 },
    faqs: [
      {
        question: 'How much does junk removal cost in Bay County?',
        answer:
          'Junk removal pricing in Bay County is based on the volume of material we haul. A small load, roughly equivalent to a pickup truck bed, starts around $150. A full truckload runs $500 to $600 depending on the type and weight of materials. We always provide a free, upfront quote before starting any work, and the price we quote is the price you pay. No hidden fees, no surprise add-ons.',
      },
      {
        question: 'Do you offer same-day junk removal in Panama City Beach?',
        answer:
          'Yes, we offer same-day junk removal in Panama City Beach and throughout Bay County, subject to availability. During the busy summer tourist season, same-day slots fill up quickly, so we recommend calling as early as possible. You can also book in advance for scheduled service. We offer flexible time windows to accommodate vacation rental turnovers and commercial needs.',
      },
      {
        question: 'What types of junk do you haul in Bay County?',
        answer:
          'We remove furniture, appliances, mattresses, electronics, yard waste, construction debris, hot tubs, fencing, carpet, general household junk, and much more. About the only things we cannot take are hazardous materials such as paints, solvents, chemicals, asbestos, and biological waste. If you have a specific item and are not sure whether we can remove it, give us a call for a quick answer.',
      },
      {
        question: 'Do you serve areas outside Panama City Beach in Bay County?',
        answer:
          'Yes. While Panama City Beach is our busiest service area in Bay County, we also serve Panama City, Lynn Haven, Springfield, Callaway, Parker, and Cedar Grove. If you are located anywhere in Bay County and need junk removal, contact us and we will confirm availability for your specific location.',
      },
      {
        question: 'How do you dispose of junk removed from Bay County properties?',
        answer:
          'We prioritize recycling and donation over landfill disposal. After every job, our team sorts materials and separates recyclables such as metals, electronics, and cardboard. Usable furniture and goods are donated to local charities. Construction debris is routed to specialized recycling facilities. Our goal is to divert at least 60% of collected materials from the landfill, and we consistently meet that target in Bay County.',
      },
    ],
  },


}

export function getCounty(slug: string): County | undefined {
  return counties[slug]
}

export function getAllCountySlugs(): string[] {
  return Object.keys(counties)
}

export function getCountyForLocation(locationSlug: string): County | undefined {
  return Object.values(counties).find((county) => county.cities.includes(locationSlug))
}

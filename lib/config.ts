// Central configuration - single source of truth for all site-wide values
// Relester SEO Method Pattern

const config = {
  // Core Site Info
  siteName: '30A Junk Removal',
  siteDescription: 'Premium junk removal services for 30A Florida. From quick truck loads to full estate cleanouts. Serving Seaside, Rosemary Beach, Alys Beach, WaterColor & more along the 30A corridor.',
  siteUrl: 'https://www.30ajunkremoval.com',

  // ISR Strategy
  revalidate: 60, // Revalidate ISR cache every 60 seconds

  // Contact Information
  phone: '(850) 368-3495',
  phoneLink: 'tel:+18503683495',
  email: 'contact@30ajunkremoval.com',

  // Business Details
  businessName: '30A Junk Removal',
  ownerName: 'Kyle', // For Person schema
  ownerTitle: 'Owner & Operator', // For E-E-A-T

  // Service Area
  serviceArea: '30A Corridor',
  serviceAreaDescription: 'Serving the entire 30A corridor from Inlet Beach to Dune Allen Beach, plus extended coverage to Destin and Panama City Beach',

  // Social Links (for Organization schema & sameAs)
  socialLinks: {
    facebook: 'https://www.facebook.com/30ajunkremoval',
    instagram: '', // Add Instagram URL when created (e.g., 'https://www.instagram.com/30ajunkremoval')
    tiktok: '', // Add TikTok URL when created (e.g., 'https://www.tiktok.com/@30ajunkremoval')
  },

  // Notification Emails
  notificationEmails: [
    'contact@30ajunkremoval.com',
  ],

  // Locations (for programmatic SEO)
  locations: [
    'Seaside',
    'Rosemary Beach',
    'Alys Beach',
    'WaterColor',
    'Grayton Beach',
    'Santa Rosa Beach',
    'Inlet Beach',
    'Seacrest',
    'Seagrove Beach',
    'Blue Mountain Beach',
    'Destin',
    'Panama City Beach',
  ],

  // Services (for schema)
  services: [
    'One-Time Junk Hauls',
    'Furniture Removal',
    'Appliance Removal',
    'Construction Debris Removal',
    'Estate Cleanouts',
    'Garage Cleanouts',
    'Hot Tub Removal',
    'Yard Debris Removal',
    'Vacation Rental Cleanouts',
    'Property Management Services',
    'Donation Pickup',
    'Office Furniture Removal',
  ],
}

export default config

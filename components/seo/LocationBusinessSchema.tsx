// LocationBusinessSchema removed due to validation issues - LocalBusiness schemas cause errors

interface LocationBusinessSchemaProps {
  locationName: string
  locationSlug: string
  description: string
  latitude?: number
  longitude?: number
}

export function LocationBusinessSchema({
  locationName,
  locationSlug,
  description,
  latitude,
  longitude,
}: LocationBusinessSchemaProps) {
  // No longer rendering LocalBusiness schema
  return null
}

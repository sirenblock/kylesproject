'use client'

import { useState, useCallback } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, Polygon } from '@react-google-maps/api'
import { locations, type Location } from '@/lib/locations'
import { MapPin, Phone, Navigation } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

const mapContainerStyle = {
  width: '100%',
  height: '600px',
}

// Center of 30A corridor
const center = {
  lat: 30.3231,
  lng: -86.1433,
}

// Coverage area polygon coordinates (Inlet Beach to Dune Allen Beach along 30A)
const coverageAreaCoordinates = [
  { lat: 30.2900, lng: -86.0550 }, // Inlet Beach (east)
  { lat: 30.2950, lng: -86.0700 }, // Rosemary Beach
  { lat: 30.3050, lng: -86.0892 }, // Alys Beach
  { lat: 30.3100, lng: -86.1150 }, // Seacrest
  { lat: 30.3200, lng: -86.1350 }, // Seagrove Beach
  { lat: 30.3231, lng: -86.1433 }, // Seaside (center)
  { lat: 30.3300, lng: -86.1550 }, // WaterColor
  { lat: 30.3392, lng: -86.1689 }, // Grayton Beach
  { lat: 30.3450, lng: -86.1900 }, // Blue Mountain Beach
  { lat: 30.3500, lng: -86.2100 }, // Dune Allen Beach (west)
  { lat: 30.3831, lng: -86.2277 }, // Santa Rosa Beach (north)
  { lat: 30.3700, lng: -86.2000 }, // Back down
  { lat: 30.3400, lng: -86.1700 },
  { lat: 30.3150, lng: -86.1400 },
  { lat: 30.3000, lng: -86.1100 },
  { lat: 30.2920, lng: -86.0800 },
  { lat: 30.2900, lng: -86.0550 }, // Close the polygon
]

// Map styling to match site theme
const mapStyles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#0891b2' }, { lightness: 17 }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f4' }, { lightness: 20 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#fbbf24' }, { lightness: 17 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#fbbf24' }, { lightness: 29 }, { weight: 0.2 }],
  },
]

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: false,
  fullscreenControl: true,
}

export default function CoverageMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMapRef(map)
  }, [])

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location)
  }

  const handleGetDirections = (coordinates: { lat: number; lng: number }) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`
    window.open(url, '_blank')
  }

  if (loadError) {
    return (
      <div className="w-full h-[600px] bg-sand-50 rounded-xl border border-sand-200 flex items-center justify-center">
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Unable to Load Map
          </h3>
          <p className="text-slate-600">
            Please try refreshing the page or contact us directly at{' '}
            <a href={`tel:${PHONE_NUMBER}`} className="text-ocean-600 hover:underline">
              {FORMATTED_PHONE}
            </a>
          </p>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[600px] bg-sand-50 rounded-xl border border-sand-200 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-12 h-12 border-4 border-ocean-200 border-t-ocean-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-sand-200">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={mapOptions}
        onLoad={onMapLoad}
      >
        {/* Coverage area polygon */}
        <Polygon
          paths={coverageAreaCoordinates}
          options={{
            fillColor: '#0891b2',
            fillOpacity: 0.15,
            strokeColor: '#0891b2',
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />

        {/* Markers for each location */}
        {Object.values(locations).map((location) => (
          <Marker
            key={location.slug}
            position={location.coordinates}
            onClick={() => handleMarkerClick(location)}
            icon={{
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24s16-12 16-24c0-8.837-7.163-16-16-16z" fill="#0891b2"/>
                  <circle cx="16" cy="16" r="6" fill="white"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(32, 40),
              anchor: new google.maps.Point(16, 40),
            }}
            animation={google.maps.Animation.DROP}
          />
        ))}

        {/* Info window for selected location */}
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.coordinates}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2 max-w-xs">
              <h3 className="font-bold text-lg text-slate-800 mb-2">
                {selectedLocation.name}
              </h3>
              <p className="text-sm text-slate-600 mb-3 line-clamp-3">
                {selectedLocation.description}
              </p>

              <div className="space-y-2">
                <a
                  href={`/service-areas/${selectedLocation.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-ocean-600 hover:text-ocean-700 font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  View Area Details
                </a>

                <button
                  onClick={() => handleGetDirections(selectedLocation.coordinates)}
                  className="inline-flex items-center gap-2 text-sm text-ocean-600 hover:text-ocean-700 font-medium ml-4"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-sand-200">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 hover:text-ocean-700"
                >
                  <Phone className="w-4 h-4" />
                  Call for Service: {FORMATTED_PHONE}
                </a>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}

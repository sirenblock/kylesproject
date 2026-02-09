'use client'

import { MapPin } from 'lucide-react'
import { locations } from '@/lib/locations'

export default function StaticServiceMap() {
  const locationsList = Object.values(locations)

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-100 via-sky-100 to-seafoam-100 border-2 border-ocean-200 shadow-lg">
      {/* Background pattern to simulate map */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 145, 178, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 145, 178, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Title */}
      <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md z-10">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-ocean-600" />
          <div>
            <h3 className="font-bold text-slate-800">30A Service Area</h3>
            <p className="text-xs text-slate-600">Destin to Panama City Beach</p>
          </div>
        </div>
      </div>

      {/* Location markers positioned on map */}
      <div className="absolute inset-0 p-8">
        {/* Draw service area outline */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 20,50 Q 30,35 40,45 T 60,50 T 80,45 L 85,60 Q 70,65 50,60 T 20,55 Z"
            fill="rgba(8, 145, 178, 0.15)"
            stroke="rgba(8, 145, 178, 0.5)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Location markers */}
        {locationsList.map((location, index) => {
          // Calculate positions based on actual coordinates
          const normalizedLng = ((location.coordinates.lng + 86.5) / 0.5) * 100
          const normalizedLat = ((30.4 - location.coordinates.lat) / 0.2) * 100

          return (
            <div
              key={location.slug}
              className="absolute group cursor-pointer"
              style={{
                left: `${Math.min(Math.max(normalizedLng, 10), 90)}%`,
                top: `${Math.min(Math.max(normalizedLat, 15), 85)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Marker pin */}
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-ocean-600 border-2 border-white shadow-lg flex items-center justify-center transition-transform group-hover:scale-125">
                  <MapPin className="w-4 h-4 text-white" />
                </div>

                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                    {location.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-ocean-600" />
          <span className="text-slate-700">Service Locations ({locationsList.length})</span>
        </div>
      </div>

      {/* Link to full page */}
      <div className="absolute bottom-4 right-4">
        <a
          href="/service-areas"
          className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-semibold rounded-lg shadow-lg transition-colors"
        >
          View All Locations
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

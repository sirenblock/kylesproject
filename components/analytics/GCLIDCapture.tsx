'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function GCLIDCapture() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Capture GCLID from URL
    const gclid = searchParams.get('gclid')
    if (gclid) {
      // Store in localStorage with 90-day expiry
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + 90)

      localStorage.setItem('gclid', JSON.stringify({
        value: gclid,
        expiry: expiryDate.toISOString(),
      }))

      // Also store in a cookie for server-side access
      document.cookie = `gclid=${gclid}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
    }

    // Capture UTM parameters
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    const utmData: Record<string, string> = {}

    utmParams.forEach(param => {
      const value = searchParams.get(param)
      if (value) {
        utmData[param] = value
      }
    })

    if (Object.keys(utmData).length > 0) {
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + 30)

      localStorage.setItem('utm_data', JSON.stringify({
        ...utmData,
        expiry: expiryDate.toISOString(),
      }))
    }
  }, [searchParams])

  return null
}

// Helper function to get stored GCLID
export function getStoredGCLID(): string | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem('gclid')
    if (!stored) return null

    const { value, expiry } = JSON.parse(stored)
    if (new Date(expiry) < new Date()) {
      localStorage.removeItem('gclid')
      return null
    }

    return value
  } catch {
    return null
  }
}

// Helper function to get stored UTM data
export function getStoredUTMData(): Record<string, string> | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem('utm_data')
    if (!stored) return null

    const data = JSON.parse(stored)
    if (new Date(data.expiry) < new Date()) {
      localStorage.removeItem('utm_data')
      return null
    }

    const { expiry, ...utmData } = data
    return utmData
  } catch {
    return null
  }
}

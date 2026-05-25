import { ImageResponse } from 'next/og'

// Per Next.js file convention: app/icon.tsx generates the favicon
// that browsers display in tabs, bookmarks, and the address bar.
// Replaces the default favicon.ico with a branded gradient + "30A"
// monogram. The 32x32 size is the modern Chrome/Firefox tab default.
//
// Per nextjs-seo-baseline + brand-design-system skills: every
// production site needs a recognizable icon for the tab strip
// (favicon.ico alone is insufficient on retina displays).

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
          color: '#fbbf24',
          fontWeight: 900,
          fontSize: 14,
          letterSpacing: '-0.02em',
          fontFamily: 'sans-serif',
          borderRadius: 4,
        }}
      >
        30A
      </div>
    ),
    { ...size }
  )
}

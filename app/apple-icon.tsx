import { ImageResponse } from 'next/og'

// Per Next.js file convention: app/apple-icon.tsx generates the
// 180x180 icon used when iOS users add the site to their home screen
// (or when sharing the URL in iMessage). Without this, iOS shows a
// generic screenshot of the homepage which looks unprofessional.
//
// 180x180 is Apple's preferred size; iOS automatically scales for
// older devices and ensures retina-quality rendering on iPhone 15+.

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #0369a1 0%, #075985 50%, #0c4a6e 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          borderRadius: 36,
          padding: 0,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: '#fbbf24',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          30A
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#bae6fd',
            marginTop: 6,
            letterSpacing: '0.05em',
          }}
        >
          JUNK
        </div>
      </div>
    ),
    { ...size }
  )
}

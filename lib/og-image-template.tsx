/* eslint-disable @typescript-eslint/no-explicit-any */
// Shared OG image template used across all page types.
// Per senior SEO playbook: per-page-type OG images dramatically improve
// social share CTR and signal a high-quality, branded site.

interface OGTemplateProps {
  title: string
  subtitle?: string
  badge?: string
  tags?: string[]
  accentColor?: 'ocean' | 'seafoam' | 'gold'
}

export function ogTemplate({
  title,
  subtitle,
  badge,
  tags,
  accentColor = 'seafoam',
}: OGTemplateProps): any {
  const accentMap = {
    ocean: { tint: 'rgba(14, 165, 233, 0.18)', chipBg: 'rgba(14, 165, 233, 0.18)', chipBorder: 'rgba(14, 165, 233, 0.3)', chipText: '#7dd3fc' },
    seafoam: { tint: 'rgba(45, 212, 191, 0.18)', chipBg: 'rgba(45, 212, 191, 0.18)', chipBorder: 'rgba(45, 212, 191, 0.3)', chipText: '#5eead4' },
    gold: { tint: 'rgba(251, 191, 36, 0.18)', chipBg: 'rgba(251, 191, 36, 0.18)', chipBorder: 'rgba(251, 191, 36, 0.3)', chipText: '#fcd34d' },
  } as const
  const accent = accentMap[accentColor]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background:
          'linear-gradient(135deg, #0369a1 0%, #075985 40%, #0c4a6e 70%, #0f172a 100%)',
        color: 'white',
        padding: '70px 80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: accent.tint,
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(14, 165, 233, 0.1)',
          display: 'flex',
        }}
      />

      {/* Top: site brand */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 26,
            fontWeight: 700,
            color: '#7dd3fc',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              background: '#fbbf24',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0c4a6e',
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            30A
          </div>
          30A Junk Removal
        </div>
        {badge && (
          <div
            style={{
              display: 'flex',
              padding: '10px 22px',
              borderRadius: 999,
              background: 'rgba(255, 255, 255, 0.12)',
              fontSize: 18,
              color: '#bae6fd',
            }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Middle: title + optional subtitle */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: title.length > 80 ? 50 : title.length > 60 ? 58 : 64,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 1040,
            display: 'flex',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: 20,
              fontSize: 26,
              color: '#bae6fd',
              maxWidth: 1040,
              lineHeight: 1.3,
              display: 'flex',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Bottom: tags + phone */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'flex', gap: 12 }}>
          {(tags || []).slice(0, 3).map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 999,
                background: accent.chipBg,
                border: `1px solid ${accent.chipBorder}`,
                fontSize: 20,
                color: accent.chipText,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 700,
            color: '#fbbf24',
          }}
        >
          +1 (850) 368-3495
        </div>
      </div>
    </div>
  )
}

export const ogImageMeta = {
  size: { width: 1200, height: 630 },
  contentType: 'image/png',
}

// Headers applied to every ImageResponse via the second arg.
// Per opengraph-image-generation skill: OG images should be cached
// aggressively at the edge. Default Next.js cache is max-age=0 which
// regenerates per request -- wasteful given OG content rarely
// changes. immutable + 1-year max-age tells social-share crawlers
// (Facebook, Twitter, iMessage, LinkedIn) to cache the image
// indefinitely.
export const ogImageResponseInit = {
  headers: {
    'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
  },
}

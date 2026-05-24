import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/lib/blog'

// Dynamic OG image generation for blog posts using Next.js ImageResponse.
// Per the senior SEO playbook: per-post OG images dramatically improve
// social share CTR (Facebook, LinkedIn, Twitter, iMessage previews) and
// signal a high-quality, branded site to both users and AI crawlers
// synthesizing summaries.
//
// Each post gets a unique 1200x630 image with the post title, brand
// colors (ocean gradient), and the site name + phone number.

export const runtime = 'edge'
export const alt = '30A Junk Removal blog post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  const title = post?.title || '30A Junk Removal Blog'
  const readTime = post?.readTime || ''
  const tags = post?.tags?.slice(0, 3) || []

  return new ImageResponse(
    (
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
        {/* Background accent circles */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'rgba(45, 212, 191, 0.08)',
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
            blog guide
          </div>
        </div>

        {/* Middle: title */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
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
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: tags + meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  padding: '10px 20px',
                  borderRadius: 999,
                  background: 'rgba(45, 212, 191, 0.18)',
                  border: '1px solid rgba(45, 212, 191, 0.3)',
                  fontSize: 20,
                  color: '#5eead4',
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
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 4,
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 700, color: '#fbbf24' }}>
              (850) 368-3495
            </div>
            {readTime && (
              <div style={{ fontSize: 18, color: '#94a3b8' }}>{readTime}</div>
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

'use client'

import { useEffect } from 'react'

// global-error.tsx is the root-layout-level error boundary. It replaces
// the entire app shell on uncaught errors (including those that occur
// in the root layout itself). Must include its own <html> and <body>.
//
// Per nextjs-app-router-patterns skill: global-error renders OUTSIDE
// the root layout, so it cannot use any of the components that depend
// on the layout (Header, Footer, analytics). Keep it minimal and
// dependency-free.

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error (root layout failed to render):', error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #ecfeff 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
        }}
      >
        <div
          style={{
            maxWidth: '32rem',
            background: 'white',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              margin: '0 0 0.75rem',
              color: '#0f172a',
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: '#475569', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
            We hit an unexpected error loading the site. Please try again, or
            call us directly for immediate help.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                padding: '0.75rem 2rem',
                background: '#0369a1',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Try Again
            </button>
            <a
              href="tel:+18503683495"
              style={{
                color: '#0369a1',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1.125rem',
                padding: '0.5rem',
              }}
            >
              Call +1 (850) 368-3495
            </a>
          </div>
          {error.digest && (
            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #e2e8f0',
                fontSize: '0.75rem',
                color: '#94a3b8',
              }}
            >
              Error reference: <code>{error.digest}</code>
            </div>
          )}
        </div>
      </body>
    </html>
  )
}

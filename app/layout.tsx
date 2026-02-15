import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

// Font optimization: preload via <link> tags in <head> with display=swap
// to avoid render-blocking while providing consistent typography.
// If build environment has Google Fonts access, switch to next/font/google for self-hosting.

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MobileCTA } from "@/components/ui/MobileCTA"
import { LocalBusinessSchema } from "@/components/seo/StructuredData"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { FacebookPixel } from "@/components/analytics/FacebookPixel"
import { GCLIDCapture } from "@/components/analytics/GCLIDCapture"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://30ajunkremoval.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "30A Junk Removal | Premium Junk Removal for 30A Homes",
    template: "%s | 30A Junk Removal",
  },
  description: "Luxury junk removal services for 30A Florida. From quick truck loads to full estate cleanouts. Serving Seaside, Rosemary Beach, Alys Beach, WaterColor & more.",
  keywords: [
    "junk removal 30A",
    "junk removal Seaside",
    "junk removal Rosemary Beach",
    "construction debris removal",
    "estate cleanout 30A",
    "property management junk removal",
    "furniture removal 30A",
    "appliance removal Florida",
    "vacation rental cleanout",
  ],
  authors: [{ name: "30A Junk Removal" }],
  creator: "30A Junk Removal",
  publisher: "30A Junk Removal",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "30A Junk Removal | Premium Junk Removal for 30A Homes",
    description: "Luxury junk removal services for 30A Florida. From quick truck loads to full estate cleanouts.",
    url: siteUrl,
    siteName: "30A Junk Removal",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "30A Junk Removal | Premium Junk Removal for 30A Homes",
    description: "Luxury junk removal services for 30A Florida. From quick truck loads to full estate cleanouts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font preconnect and loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* Analytics preconnect */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <FacebookPixel />
        <Suspense fallback={null}>
          <GCLIDCapture />
        </Suspense>
        <Header />
        <main className="min-h-screen pt-16 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}

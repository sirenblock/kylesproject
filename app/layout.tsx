import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { GlobalLocalBusinessSchema } from "@/components/seo/LocationBusinessSchema"
import { CorporationSchema } from "@/components/seo/CorporationSchema"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { GoogleAds } from "@/components/analytics/GoogleAds"
import { PerfectClick } from "@/components/analytics/PerfectClick"
import { FacebookPixel } from "@/components/analytics/FacebookPixel"
import { GCLIDCapture } from "@/components/analytics/GCLIDCapture"
import { PhoneClickTracker } from "@/components/analytics/PhoneClickTracker"
import { MobileStickyBar } from "@/components/ui/MobileStickyBar"
import { ClientModals } from "@/components/ui/ClientModals"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.30ajunkremoval.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "30A Junk Removal — Same-Day Service | 4.9★ (127 Reviews) | (850) 368-3495",
    template: "%s | 30A Junk Removal",
  },
  description: "Same-day junk removal on 30A, Panama City Beach, and Walton & Bay County. Furniture, appliances, hot tubs, estate cleanouts, construction debris. Transparent pricing from $150. Call (850) 368-3495 or text photos for an instant quote.",
  keywords: [
    "30A junk removal",
    "junk removal 30A",
    "Panama City Beach junk removal",
    "junk removal near me",
    "same day junk removal 30A",
    "vacation rental cleanout 30A",
    "estate cleanout 30A",
    "hot tub removal 30A",
    "construction debris removal Florida",
    "Walton County junk removal",
    "Bay County junk removal",
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
    title: "30A Junk Removal — Same-Day Service Across 30A & PCB",
    description: "Same-day junk removal on 30A and Panama City Beach. Furniture, appliances, hot tubs, estate cleanouts, construction debris. Transparent pricing from $150.",
    url: siteUrl,
    siteName: "30A Junk Removal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "30A Junk Removal — Same-Day Service Across 30A & PCB",
    description: "Same-day junk removal on 30A and Panama City Beach. Transparent pricing from $150. Call (850) 368-3495.",
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
    google: 'nuk8CY9D-ruGLgRIyPGaE9UTXx0Ww7dKbLJb5XuNbfE',
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <GlobalLocalBusinessSchema />
        <CorporationSchema />
      </head>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `requestAnimationFrame(()=>document.body.classList.add('loaded'))`,
          }}
        />
        <GoogleAnalytics />
        <GoogleAds />
        <PerfectClick />
        <FacebookPixel />
        <Suspense fallback={null}>
          <GCLIDCapture />
        </Suspense>
        <PhoneClickTracker />
        <Header />
        <main className="min-h-screen pt-24 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
        <ClientModals />
      </body>
    </html>
  )
}

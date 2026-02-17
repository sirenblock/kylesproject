import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SimpleContactBar } from "@/components/ui/SimpleContactBar"
import { ReviewSchema } from "@/components/seo/StructuredData"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { FacebookPixel } from "@/components/analytics/FacebookPixel"
import { GCLIDCapture } from "@/components/analytics/GCLIDCapture"
import { ClientModals } from "@/components/ui/ClientModals"

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
        <ReviewSchema />
      </head>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `requestAnimationFrame(()=>document.body.classList.add('loaded'))`,
          }}
        />
        <GoogleAnalytics />
        <FacebookPixel />
        <Suspense fallback={null}>
          <GCLIDCapture />
        </Suspense>
        <Header />
        <main className="min-h-screen pt-24 pb-20 md:pb-0">{children}</main>
        <Footer />
        <SimpleContactBar />
        <ClientModals />
      </body>
    </html>
  )
}

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { QuoteCalculator } from "@/components/sections/QuoteCalculator"
import { ServiceCards } from "@/components/sections/ServiceCards"
import { HowItWorks } from "@/components/sections/HowItWorks"

const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
)
const ServiceArea = dynamic(() =>
  import("@/components/sections/ServiceArea").then((m) => ({ default: m.ServiceArea }))
)
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ }))
)
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => ({ default: m.CTASection }))
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuoteCalculator />
      <ServiceCards />
      <HowItWorks />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <CTASection />
    </>
  )
}

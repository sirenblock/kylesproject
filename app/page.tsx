import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ServiceCards } from "@/components/sections/ServiceCards"

const QuoteCalculator = dynamic(() =>
  import("@/components/sections/QuoteCalculator").then((m) => ({ default: m.QuoteCalculator }))
)
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

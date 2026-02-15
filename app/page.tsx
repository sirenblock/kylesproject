import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"

const QuoteCalculator = dynamic(() =>
  import("@/components/sections/QuoteCalculator").then((m) => ({ default: m.QuoteCalculator }))
)
const ServiceCards = dynamic(() =>
  import("@/components/sections/ServiceCards").then((m) => ({ default: m.ServiceCards }))
)
const HowItWorks = dynamic(() =>
  import("@/components/sections/HowItWorks").then((m) => ({ default: m.HowItWorks }))
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
      <div className="cv-auto">
        <QuoteCalculator />
      </div>
      <div className="cv-auto">
        <ServiceCards />
      </div>
      <div className="cv-auto">
        <HowItWorks />
      </div>
      <div className="cv-auto">
        <Testimonials />
      </div>
      <div className="cv-auto">
        <ServiceArea />
      </div>
      <div className="cv-auto">
        <FAQ />
      </div>
      <div className="cv-auto">
        <CTASection />
      </div>
    </>
  )
}

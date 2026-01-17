import { Hero } from "@/components/sections/Hero"
import { QuoteCalculator } from "@/components/sections/QuoteCalculator"
import { ServiceCards } from "@/components/sections/ServiceCards"
import { PricingTable } from "@/components/sections/PricingTable"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { ServiceArea } from "@/components/sections/ServiceArea"
import { FAQ } from "@/components/sections/FAQ"
import { CTASection } from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuoteCalculator />
      <ServiceCards />
      <HowItWorks />
      <PricingTable />
      <ServicesGrid />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <CTASection />
    </>
  )
}

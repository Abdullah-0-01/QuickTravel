import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InsuranceHero } from "@/components/insurance-hero"
import { InsurancePlans } from "@/components/insurance-plans"
import { InsuranceBenefits } from "@/components/insurance-benefits"

export default function InsurancePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <InsuranceHero />
      <InsurancePlans />
      <InsuranceBenefits />
      <Footer />
    </div>
  )
}

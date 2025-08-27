import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyStats } from "@/components/company-stats"
import { TeamSection } from "@/components/team-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStats />
      <WhyChooseUs />
      <TeamSection />
      <Footer />
    </div>
  )
}

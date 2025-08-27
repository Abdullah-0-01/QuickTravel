import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomTourBuilder } from "@/components/custom-tour-builder"
import { TourInspiration } from "@/components/tour-inspiration"
import { TourBuilderHero } from "@/components/tour-builder-hero"

export default function CustomToursPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TourBuilderHero />
      <CustomTourBuilder />
      <TourInspiration />
      <Footer />
    </div>
  )
}

import { DestinationsHero } from "@/components/destinations-hero"
import { PopularDestinations } from "@/components/popular-destinations"
import { DestinationGuides } from "@/components/destination-guides"
import { SeasonalPackages } from "@/components/seasonal-packages"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <DestinationsHero />
      <PopularDestinations />
      <DestinationGuides />
      <SeasonalPackages />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FlightSearch } from "@/components/flight-search"
import { PopularRoutes } from "@/components/popular-routes"
import { FlightDeals } from "@/components/flight-deals"

export default function FlightsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Find Your Perfect Flight
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Search and book flights to destinations worldwide with the best prices and flexible options.
            </p>
          </div>

          <FlightSearch />
        </div>
      </section>

      <PopularRoutes />
      <FlightDeals />

      <Footer />
    </div>
  )
}

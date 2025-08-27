import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Plane, Globe } from "lucide-react"

export function InsuranceHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 animate-fade-in-up">Comprehensive Coverage</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-300">
            Travel with <span className="text-primary">Peace of Mind</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up animation-delay-600">
            Protect your journey with our comprehensive travel insurance plans. From medical emergencies to trip
            cancellations, we've got you covered worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-up animation-delay-900">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Medical Coverage</h3>
              <p className="text-muted-foreground text-sm">Up to $100,000</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Trip Protection</h3>
              <p className="text-muted-foreground text-sm">Cancellation & Delays</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Emergency Care</h3>
              <p className="text-muted-foreground text-sm">24/7 Assistance</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
              <p className="text-muted-foreground text-sm">Worldwide Protection</p>
            </div>
          </div>

          <Button
            size="lg"
            className="px-8 py-4 text-lg hover:scale-105 transition-transform animate-fade-in-up animation-delay-1200"
          >
            Get Quote Now
          </Button>
        </div>
      </div>
    </section>
  )
}

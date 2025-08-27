import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Shield } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 animate-fade-in-up">Established 2009</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-300">
            Your Trusted Travel Partner for <span className="text-primary">15+ Years</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up animation-delay-600">
            QuickTravel has been serving Pakistani travelers with dedication, expertise, and personalized service. From
            humble beginnings to becoming one of Pakistan's leading travel agencies, we've helped over 50,000 travelers
            create unforgettable memories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-900">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary">15+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary">50K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary">200+</h3>
              <p className="text-muted-foreground">Destinations</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary">100%</h3>
              <p className="text-muted-foreground">Licensed & Insured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

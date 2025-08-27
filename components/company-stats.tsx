import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"

export function CompanyStats() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey & Mission</h2>
            <p className="text-xl text-muted-foreground">
              Building trust through exceptional service and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground">
                Founded in 2009 by a group of passionate travelers, QuickTravel began with a simple mission: to make
                travel accessible, affordable, and memorable for everyone. What started as a small office in Lahore has
                grown into Pakistan's most trusted travel agency.
              </p>
              <p className="text-muted-foreground">
                We specialize in religious tourism, particularly Umrah and Hajj services, while also offering
                comprehensive travel solutions including flights, custom tours, and travel insurance. Our team of
                experienced travel consultants ensures every journey is perfectly planned and executed.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be a government-licensed travel agency with partnerships with major airlines,
                hotels, and service providers worldwide. Our commitment to excellence has earned us the trust of
                thousands of satisfied customers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={100000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Successful Trips</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={25000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Umrah Pilgrims</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={24} suffix="/7" />
                  </div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

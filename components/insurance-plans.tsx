"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function InsurancePlans() {
  const plans = [
    {
      name: "Basic Plan",
      duration: "per trip",
      popular: false,
      features: [
        "Medical expenses up to $25,000",
        "Trip cancellation coverage",
        "Lost baggage protection",
        "24/7 emergency assistance",
        "Personal accident coverage",
        "Flight delay compensation",
      ],
      coverage: "Domestic & Regional",
    },
    {
      name: "Premium Plan",
      duration: "per trip",
      popular: true,
      features: [
        "Medical expenses up to $50,000",
        "Trip cancellation & interruption",
        "Lost baggage & personal effects",
        "24/7 emergency assistance",
        "Personal accident coverage",
        "Flight delay & missed connection",
        "Adventure sports coverage",
        "Pre-existing medical conditions",
      ],
      coverage: "Worldwide (excl. USA)",
    },
    {
      name: "Comprehensive Plan",
      duration: "per trip",
      popular: false,
      features: [
        "Medical expenses up to $100,000",
        "Trip cancellation & interruption",
        "Lost baggage & personal effects",
        "24/7 emergency assistance",
        "Personal accident coverage",
        "Flight delay & missed connection",
        "Adventure sports coverage",
        "Pre-existing medical conditions",
        "Rental car coverage",
        "Business equipment protection",
        "Emergency evacuation",
      ],
      coverage: "Worldwide (incl. USA)",
    },
  ]

  const contactWhatsApp = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName} travel insurance. Can you provide me with current rates and help me get coverage?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Protection Plan</h2>
          <p className="text-xl text-muted-foreground">
            Select the coverage that best fits your travel needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && <Badge className="absolute top-4 right-4 z-10 bg-primary">Most Popular</Badge>}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <Badge variant="secondary" className="mt-2">
                  {plan.coverage}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full hover:scale-105 transition-transform duration-300 bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => contactWhatsApp(plan.name)}
                >
                  💬 Get Quote on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

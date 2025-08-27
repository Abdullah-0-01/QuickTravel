"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, MapPin, Users } from "lucide-react"

export function AnimatedServices() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const services = [
    {
      icon: Plane,
      title: "Flights & Packages",
      description: "Domestic and international flights with exclusive travel packages to popular destinations.",
      details:
        "✈️ Best airline partnerships\n🎫 Flexible booking options\n💰 Competitive pricing\n📱 Mobile check-in support",
      buttonText: "Explore Flights",
      whatsappMessage:
        "Hi! I'm interested in flight bookings and travel packages. Can you help me find the best options?",
    },
    {
      icon: MapPin,
      title: "Umrah & Hajj",
      description: "Complete Umrah and Hajj packages with visa, accommodation, and guided services.",
      details: "🕋 VIP Umrah packages\n🏨 5-star accommodations\n👨‍🏫 Expert guides\n📋 Visa assistance included",
      buttonText: "View Packages",
      whatsappMessage:
        "Hi! I'm interested in Umrah and Hajj packages. Can you provide me with available options and pricing?",
    },
    {
      icon: Users,
      title: "Custom Tours",
      description: "Personalized tour packages designed according to your preferences and budget.",
      details: "🎯 Tailored itineraries\n🚌 Private transportation\n🏞️ Unique experiences\n💼 Corporate packages",
      buttonText: "Plan Your Tour",
      whatsappMessage: "Hi! I want to plan a custom tour. Can you help me create a personalized travel package?",
    },
  ]

  const contactWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Our Services</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-300">
            Comprehensive travel solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFlipped = flippedCard === index

            return (
              <div
                key={index}
                className="relative h-80 perspective-1000 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
                >
                  {/* Front of card */}
                  <Card className="absolute inset-0 backface-hidden overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                      <Icon className="h-16 w-16 text-primary animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button
                        variant="outline"
                        className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500"
                        onClick={() => contactWhatsApp(service.whatsappMessage)}
                      >
                        💬 {service.buttonText}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Back of card */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-primary text-primary-foreground">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <Icon className="h-12 w-12 mb-4 mx-auto" />
                      <h3 className="font-bold text-xl mb-4 text-center">{service.title}</h3>
                      <div className="space-y-2 mb-6">
                        {service.details.split("\n").map((detail, i) => (
                          <p key={i} className="text-sm opacity-90">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button
                        variant="secondary"
                        className="w-full mt-auto"
                        onClick={() => contactWhatsApp(service.whatsappMessage)}
                      >
                        💬 Contact Us
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Plane } from "lucide-react"

export function FlightDeals() {
  const deals = [
    {
      airline: "Emirates",
      route: "Karachi → Dubai → London",
      discount: "15% OFF",
      duration: "8h 30m",
      stops: "1 Stop",
      rating: 4.8,
      validUntil: "Dec 31, 2024",
      image: "/emirates-airplane.png",
    },
    {
      airline: "Qatar Airways",
      route: "Lahore → Doha → Paris",
      discount: "17% OFF",
      duration: "9h 15m",
      stops: "1 Stop",
      rating: 4.9,
      validUntil: "Jan 15, 2025",
      image: "/qatar-airways-airplane.png",
    },
    {
      airline: "Saudi Airlines",
      route: "Islamabad → Jeddah",
      discount: "17% OFF",
      duration: "4h 45m",
      stops: "Direct",
      rating: 4.6,
      validUntil: "Dec 25, 2024",
      image: "/saudi-airlines-airplane.png",
    },
  ]

  const contactWhatsApp = (deal: any) => {
    const message = `Hi! I'm interested in the ${deal.airline} flight deal for ${deal.route}. Can you please provide me with the current rates and availability?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Special Flight Deals
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-300">
            Limited time offers on popular destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.airline}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{deal.airline}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{deal.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{deal.route}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {deal.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Plane className="h-4 w-4" />
                      {deal.stops}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Valid until {deal.validUntil}</div>
                </div>

                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white transition-transform duration-300 hover:scale-105"
                  onClick={() => contactWhatsApp(deal)}
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

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PopularRoutes() {
  const routes = [
    {
      from: "Karachi",
      to: "Dubai",
      fromCode: "KHI",
      toCode: "DXB",
      duration: "2h 15m",
      trend: "up",
    },
    {
      from: "Lahore",
      to: "London",
      fromCode: "LHE",
      toCode: "LHR",
      duration: "8h 30m",
      trend: "down",
    },
    {
      from: "Islamabad",
      to: "Jeddah",
      fromCode: "ISB",
      toCode: "JED",
      duration: "4h 45m",
      trend: "up",
    },
    {
      from: "Karachi",
      to: "Doha",
      fromCode: "KHI",
      toCode: "DOH",
      duration: "3h 20m",
      trend: "stable",
    },
  ]

  const contactWhatsApp = (route: any) => {
    const message = `Hi! I'm interested in booking a flight from ${route.from} to ${route.to}. Can you please provide me with the best available rates and options?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Popular Routes</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-300">
            Most searched destinations from Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => contactWhatsApp(route)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {route.fromCode}
                    </Badge>
                    <Plane className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    <Badge variant="secondary" className="text-xs">
                      {route.toCode}
                    </Badge>
                  </div>
                  {route.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="font-medium">{route.from}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">To</span>
                    <span className="font-medium">{route.to}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-medium">{route.duration}</span>
                  </div>
                  <div className="flex items-center justify-center pt-2 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500"
                      onClick={(e) => {
                        e.stopPropagation()
                        contactWhatsApp(route)
                      }}
                    >
                      💬 Get Quote on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

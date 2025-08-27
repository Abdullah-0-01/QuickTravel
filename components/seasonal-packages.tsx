"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Thermometer, Snowflake, Sun, Leaf, Flower } from "lucide-react"

export function SeasonalPackages() {
  const [activeSeason, setActiveSeason] = useState("spring")

  const seasons = [
    { id: "spring", name: "Spring", icon: Flower, color: "text-green-500" },
    { id: "summer", name: "Summer", icon: Sun, color: "text-yellow-500" },
    { id: "autumn", name: "Autumn", icon: Leaf, color: "text-orange-500" },
    { id: "winter", name: "Winter", icon: Snowflake, color: "text-blue-500" },
  ]

  const packages = {
    spring: [
      {
        title: "Cherry Blossom Northern Pakistan",
        destination: "Hunza Valley",
        duration: "6 Days",
        price: "PKR 55,000",
        image: "/northern-pakistan-tour.jpg",
        highlights: ["Apricot & Cherry Blossoms", "Perfect Weather", "Clear Mountain Views"],
        bestMonths: "March - May",
      },
      {
        title: "Spring in Turkey",
        destination: "Istanbul & Cappadocia",
        duration: "8 Days",
        price: "PKR 145,000",
        image: "/turkey-cappadocia.png",
        highlights: ["Mild Weather", "Fewer Crowds", "Blooming Landscapes"],
        bestMonths: "April - June",
      },
    ],
    summer: [
      {
        title: "Northern Pakistan Adventure",
        destination: "Skardu & K2 Base Camp",
        duration: "10 Days",
        price: "PKR 95,000",
        image: "/northern-pakistan-tour.jpg",
        highlights: ["All Roads Open", "Perfect Trekking Weather", "Clear Skies"],
        bestMonths: "June - August",
      },
      {
        title: "European Summer",
        destination: "Multi-City Europe",
        duration: "12 Days",
        price: "PKR 325,000",
        image: "/europe-tour-collage.png",
        highlights: ["Long Days", "Festivals", "Outdoor Activities"],
        bestMonths: "June - August",
      },
    ],
    autumn: [
      {
        title: "Autumn Colors Pakistan",
        destination: "Kaghan & Naran",
        duration: "5 Days",
        price: "PKR 48,000",
        image: "/northern-pakistan-tour.jpg",
        highlights: ["Golden Leaves", "Cool Weather", "Harvest Season"],
        bestMonths: "September - November",
      },
      {
        title: "Dubai Shopping Festival",
        destination: "Dubai",
        duration: "4 Days",
        price: "PKR 75,000",
        image: "/dubai-skyline.png",
        highlights: ["Shopping Discounts", "Pleasant Weather", "Cultural Events"],
        bestMonths: "October - December",
      },
    ],
    winter: [
      {
        title: "Winter Wonderland",
        destination: "Murree & Nathia Gali",
        duration: "3 Days",
        price: "PKR 35,000",
        image: "/snow-covered-mountains-pakistan-winter.png",
        highlights: ["Snow Activities", "Cozy Resorts", "Winter Sports"],
        bestMonths: "December - February",
      },
      {
        title: "Warm Winter Escape",
        destination: "Thailand",
        duration: "7 Days",
        price: "PKR 125,000",
        image: "/tropical-beach-thailand-winter.png",
        highlights: ["Warm Weather", "Beach Activities", "Cultural Exploration"],
        bestMonths: "December - February",
      },
    ],
  }

  const contactWhatsApp = (pkg: any) => {
    const message = `Hi! I'm interested in the ${pkg.title} package to ${pkg.destination}. Can you provide me with current rates and availability?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Seasonal Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience destinations at their best with our carefully timed seasonal packages
          </p>
        </div>

        {/* Season Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {seasons.map((season) => {
            const IconComponent = season.icon
            return (
              <Button
                key={season.id}
                variant={activeSeason === season.id ? "default" : "outline"}
                onClick={() => setActiveSeason(season.id)}
                className="rounded-full flex items-center gap-2"
              >
                <IconComponent
                  className={`h-4 w-4 ${activeSeason === season.id ? "text-primary-foreground" : season.color}`}
                />
                {season.name}
              </Button>
            )
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages[activeSeason as keyof typeof packages].map((pkg, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {pkg.bestMonths}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    <Thermometer className="h-3 w-3 mr-1" />
                    Best Season
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{pkg.title}</CardTitle>
                <p className="text-muted-foreground">{pkg.destination}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{pkg.duration}</span>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Season Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-lg font-semibold text-primary">Best Rates</span>
                      <span className="text-sm text-muted-foreground ml-1">Contact for quote</span>
                    </div>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => contactWhatsApp(pkg)}>
                      💬 Get Quote
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

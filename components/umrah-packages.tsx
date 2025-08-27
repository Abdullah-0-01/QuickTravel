"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Plane, Hotel, Car, Users } from "lucide-react"

export function UmrahPackages() {
  const packages = [
    {
      name: "Economy Umrah",
      duration: "10 Days",
      rating: 4.5,
      popular: false,
      features: [
        "Round-trip flights from major cities",
        "3-star hotel in Makkah (500m from Haram)",
        "3-star hotel in Madinah (300m from Masjid Nabawi)",
        "Shared transportation",
        "Group guidance and support",
        "Umrah visa processing",
        "Basic meals included",
        "Zam Zam water",
      ],
      image: "/umrah-pilgrims-masjid-haram.jpg", // Added Umrah-specific image
    },
    {
      name: "Premium Umrah",
      duration: "12 Days",
      rating: 4.8,
      popular: true,
      features: [
        "Premium airline tickets",
        "4-star hotel in Makkah (200m from Haram)",
        "4-star hotel in Madinah (150m from Masjid Nabawi)",
        "Private AC transportation",
        "Experienced religious guide",
        "Fast-track visa processing",
        "All meals included",
        "Laundry service",
        "City tour of Makkah & Madinah",
        "Prayer mat and Ihram",
      ],
      image: "/umrah-kaaba-tawaf-night.jpg", // Added Umrah-specific image
    },
    {
      name: "VIP Umrah",
      duration: "14 Days",
      rating: 4.9,
      popular: false,
      features: [
        "Business class flights",
        "5-star hotel in Makkah (Haram view)",
        "5-star hotel in Madinah (Haram view)",
        "Private luxury transportation",
        "Personal religious guide",
        "VIP visa processing",
        "Premium buffet meals",
        "Daily housekeeping",
        "Spa and wellness facilities",
        "Shopping assistance",
        "Airport VIP lounge access",
        "Complimentary gifts",
      ],
      image: "/umrah-madinah-green-dome.jpg", // Added Umrah-specific image
    },
  ]

  const contactWhatsApp = (pkg: any) => {
    const message = `Assalam-o-Alaikum! I'm interested in the ${pkg.name} package (${pkg.duration}). Can you please provide me with detailed information and current rates?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <Card
          key={index}
          className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${
            pkg.popular ? "ring-2 ring-primary" : ""
          }`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {pkg.popular && <Badge className="absolute top-4 right-4 z-10 bg-primary">Most Popular</Badge>}

          <div className="relative">
            <img
              src={pkg.image || "/placeholder.svg?height=200&width=400&query=umrah pilgrimage makkah"}
              alt={pkg.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{pkg.rating}</span>
              </div>
            </div>
          </div>

          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-primary">{pkg.duration}</CardTitle>
                <p className="text-muted-foreground">Complete Package</p>
              </div>
              <Badge variant="secondary">{pkg.duration}</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2 pt-4 border-t">
              <div className="text-center">
                <Plane className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Flights</span>
              </div>
              <div className="text-center">
                <Hotel className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Hotels</span>
              </div>
              <div className="text-center">
                <Car className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Transport</span>
              </div>
              <div className="text-center">
                <Users className="h-5 w-5 mx-auto text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Guide</span>
              </div>
            </div>

            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white transition-transform duration-300 hover:scale-105"
              onClick={() => contactWhatsApp(pkg)}
            >
              💬 Get Quote on WhatsApp
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

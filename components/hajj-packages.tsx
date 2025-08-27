"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Calendar, MapPin, Users, Shield } from "lucide-react"

export function HajjPackages() {
  const packages = [
    {
      name: "Standard Hajj",
      duration: "21 Days",
      rating: 4.6,
      accommodation: "Shared rooms in Mina & Arafat",
      features: [
        "Round-trip economy flights",
        "3-star hotel in Makkah (walking distance)",
        "3-star hotel in Madinah",
        "Shared tents in Mina & Arafat",
        "Group transportation",
        "Hajj visa processing",
        "Religious guidance throughout",
        "Basic meals during Hajj days",
        "Hajj kit (Ihram, prayer mat, etc.)",
        "Group coordination",
      ],
      image: "/hajj-mina-tents.png",
    },
    {
      name: "Deluxe Hajj",
      duration: "23 Days",
      rating: 4.8,
      accommodation: "Private rooms in Mina & Arafat",
      popular: true,
      features: [
        "Premium economy flights",
        "4-star hotel in Makkah (Haram view)",
        "4-star hotel in Madinah (close to Haram)",
        "Private AC tents in Mina & Arafat",
        "Private group transportation",
        "Fast-track visa processing",
        "Experienced Hajj guide",
        "All meals included",
        "Laundry service",
        "Medical support",
        "Shopping assistance",
        "Premium Hajj kit",
      ],
      image: "/hajj-tawaf-kaaba.png",
    },
    {
      name: "VIP Hajj",
      duration: "25 Days",
      rating: 4.9,
      accommodation: "Luxury tents with AC & facilities",
      features: [
        "Business class flights",
        "5-star hotel in Makkah (Haram view)",
        "5-star hotel in Madinah (Haram view)",
        "VIP luxury tents in Mina & Arafat",
        "Private luxury transportation",
        "Personal religious guide",
        "VIP visa processing",
        "Premium buffet meals",
        "Daily housekeeping",
        "24/7 medical support",
        "VIP airport services",
        "Exclusive group coordination",
        "Luxury Hajj amenities",
        "Post-Hajj city tours",
      ],
      image: "/hajj-mount-arafat.png",
    },
  ]

  const contactWhatsApp = (pkg: any) => {
    const message = `Assalam-o-Alaikum! I'm interested in the ${pkg.name} package (${pkg.duration}) for Hajj 2025. Can you please provide me with detailed information and current rates?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="space-y-8">
      {/* Important Notice */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Calendar className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Hajj 2025 Registration</h3>
              <p className="text-muted-foreground mb-3">
                Hajj packages are available for the upcoming Hajj season. Limited seats available due to Saudi
                government quotas. Early booking recommended.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Government Approved</Badge>
                <Badge variant="secondary">Limited Quota</Badge>
                <Badge variant="secondary">Early Bird Discount</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up ${
              pkg.popular ? "ring-2 ring-primary" : ""
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {pkg.popular && <Badge className="absolute top-4 right-4 z-10 bg-primary">Recommended</Badge>}

            <div className="relative">
              <img
                src={pkg.image || "/placeholder.svg?height=200&width=400&query=hajj pilgrimage makkah kaaba"}
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{pkg.accommodation}</span>
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

              <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Visa</span>
                </div>
                <div className="text-center">
                  <Users className="h-5 w-5 mx-auto text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">Guide</span>
                </div>
                <div className="text-center">
                  <Calendar className="h-5 w-5 mx-auto text-primary mb-1" />
                  <span className="text-xs text-muted-foreground">2025</span>
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

      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Sacred Journey Gallery</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the spiritual moments of Hajj through these sacred images from the holy sites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/hajj-pilgrims-arafat.png"
              alt="Pilgrims at Mount Arafat"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">Pilgrims at Mount Arafat</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/hajj-tawaf-kaaba.png"
              alt="Tawaf around Kaaba"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">Tawaf around Holy Kaaba</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/hajj-mina-tents.png"
              alt="Mina Tent City"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">Mina Tent City</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/hajj-mount-arafat.png"
              alt="Mount Arafat"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">Sacred Mount Arafat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

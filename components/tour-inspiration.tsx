"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star } from "lucide-react"

export function TourInspiration() {
  const inspirationTours = [
    {
      title: "Northern Pakistan Adventure",
      description: "Explore the breathtaking landscapes of Hunza, Skardu, and Fairy Meadows",
      duration: "12 days",
      groupSize: "4-8 people",
      rating: 4.9,
      image: "/northern-pakistan-hunza-valley.jpg",
      highlights: ["K2 Base Camp", "Hunza Valley", "Skardu Lakes", "Fairy Meadows"],
    },
    {
      title: "Cultural Heritage Tour",
      description: "Discover Pakistan's rich history from Lahore to Multan and ancient sites",
      duration: "10 days",
      groupSize: "6-12 people",
      rating: 4.7,
      image: "/pakistan-cultural-heritage-lahore.jpg",
      highlights: ["Badshahi Mosque", "Shalimar Gardens", "Mohenjo-daro", "Shah Jahan Mosque"],
    },
    {
      title: "Desert & Coastal Adventure",
      description: "Experience the diverse landscapes from Thar Desert to Gwadar coastline",
      duration: "8 days",
      groupSize: "4-10 people",
      rating: 4.6,
      image: "/pakistan-desert-coastal-gwadar.jpg",
      highlights: ["Thar Desert", "Gwadar Port", "Hingol National Park", "Makran Coast"],
    },
  ]

  const contactWhatsApp = (tour: any) => {
    const message = `Hi! I'm interested in the ${tour.title} tour. Can you help me customize this package and provide current pricing?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Tour Inspiration</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-300">
            Get inspired by our popular custom tour packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirationTours.map((tour, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={tour.image || "/placeholder.svg?height=200&width=400&query=pakistan tour landscape"}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/70 text-white">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {tour.rating}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{tour.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{tour.highlights.length} stops</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Tour Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-lg font-semibold text-primary">Custom Pricing</span>
                    <span className="text-sm text-muted-foreground ml-1">Based on preferences</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white border-green-500"
                    onClick={() => contactWhatsApp(tour)}
                  >
                    💬 Customize Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-transparent">
            View All Tour Packages
          </Button>
        </div>
      </div>
    </section>
  )
}

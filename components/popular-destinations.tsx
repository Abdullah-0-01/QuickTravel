"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock, Users, Plane } from "lucide-react"

export function PopularDestinations() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Destinations" },
    { id: "domestic", name: "Pakistan" },
    { id: "middle-east", name: "Middle East" },
    { id: "asia", name: "Asia" },
    { id: "europe", name: "Europe" },
  ]

  const destinations = [
    {
      id: 1,
      name: "Hunza Valley",
      location: "Northern Pakistan",
      category: "domestic",
      image: "/northern-pakistan-tour.jpg",
      price: "PKR 45,000",
      duration: "5 Days",
      rating: 4.9,
      reviews: 234,
      highlights: ["Rakaposhi View", "Apricot Blossoms", "Altit Fort"],
      bestTime: "April - October",
    },
    {
      id: 2,
      name: "Dubai",
      location: "United Arab Emirates",
      category: "middle-east",
      image: "/dubai-skyline.png",
      price: "PKR 85,000",
      duration: "4 Days",
      rating: 4.8,
      reviews: 456,
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
      bestTime: "November - March",
    },
    {
      id: 3,
      name: "Istanbul",
      location: "Turkey",
      category: "europe",
      image: "/turkey-cappadocia.png",
      price: "PKR 125,000",
      duration: "7 Days",
      rating: 4.7,
      reviews: 189,
      highlights: ["Hagia Sophia", "Blue Mosque", "Bosphorus Cruise"],
      bestTime: "April - June, September - November",
    },
    {
      id: 4,
      name: "Skardu",
      location: "Northern Pakistan",
      category: "domestic",
      image: "/northern-pakistan-tour.jpg",
      price: "PKR 65,000",
      duration: "6 Days",
      rating: 4.9,
      reviews: 167,
      highlights: ["K2 Base Camp", "Deosai Plains", "Shangrila Resort"],
      bestTime: "May - September",
    },
    {
      id: 5,
      name: "Bangkok",
      location: "Thailand",
      category: "asia",
      image: "/bangkok-thailand-temples-and-skyline.png",
      price: "PKR 95,000",
      duration: "5 Days",
      rating: 4.6,
      reviews: 298,
      highlights: ["Grand Palace", "Floating Markets", "Street Food"],
      bestTime: "November - February",
    },
    {
      id: 6,
      name: "Paris",
      location: "France",
      category: "europe",
      image: "/europe-tour-collage.png",
      price: "PKR 285,000",
      duration: "8 Days",
      rating: 4.8,
      reviews: 412,
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
      bestTime: "April - June, September - October",
    },
  ]

  const filteredDestinations =
    activeCategory === "all" ? destinations : destinations.filter((dest) => dest.category === activeCategory)

  const contactWhatsApp = (destination: any) => {
    const message = `Hi! I'm interested in visiting ${destination.name}, ${destination.location}. Can you help me plan this trip and provide current rates?`
    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved travel destinations, carefully selected for unforgettable experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{destination.bestTime}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {destination.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{destination.location}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {destination.reviews} reviews
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-primary">Best Rates Available</span>
                    <span className="text-sm text-muted-foreground ml-1">Contact for quote</span>
                  </div>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => contactWhatsApp(destination)}
                  >
                    <Plane className="h-4 w-4 mr-2" />💬 Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

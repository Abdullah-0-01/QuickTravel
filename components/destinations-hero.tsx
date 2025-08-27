"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export function DestinationsHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const destinations = [
    {
      name: "Northern Pakistan",
      image: "/northern-pakistan-tour.jpg",
      description: "Explore the majestic mountains and valleys",
    },
    {
      name: "Dubai & UAE",
      image: "/dubai-skyline.png",
      description: "Modern cities and desert adventures",
    },
    {
      name: "Turkey",
      image: "/turkey-cappadocia.png",
      description: "Rich history and stunning landscapes",
    },
    {
      name: "Europe",
      image: "/europe-tour-collage.png",
      description: "Classic European charm and culture",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={dest.image || "/placeholder.svg"} alt={dest.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Discover Amazing Destinations</h1>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">
            From the peaks of Northern Pakistan to the modern skylines of Dubai, explore the world with our expertly
            crafted travel packages.
          </p>

          {/* Quick Search */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-white" />
                <Input
                  placeholder="Where to?"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-white" />
                <Input type="date" className="bg-white/20 border-white/30 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-white" />
                <Input
                  placeholder="Travelers"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

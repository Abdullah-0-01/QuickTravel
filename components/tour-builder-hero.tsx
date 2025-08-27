"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star } from "lucide-react"

export function TourBuilderHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-[url('/custom-tour-hero-background.jpg')] bg-cover bg-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse"
        style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 25}px)` }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-full blur-sm animate-pulse"
        style={{ transform: `translateY(${Math.cos(scrollY * 0.008) * 20}px)` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <Badge className="mb-4 bg-primary/20 text-white border-white/20 animate-pulse">
            Build Your Dream Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-in-left">
            Create Your <span className="text-primary">Perfect Tour</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty animate-slide-in-right animation-delay-300">
            Design a personalized travel experience tailored to your preferences, budget, and dreams. From adventure
            tours to cultural experiences, we'll make it happen.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Any Destination</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Flexible Dates</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Any Group Size</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Custom Experience</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-slide-in-up animation-delay-800">
          <Button
            size="lg"
            className="px-8 py-4 text-lg hover:scale-105 transition-transform"
            onClick={() => document.getElementById("tour-builder")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Building Your Tour
          </Button>
        </div>
      </div>
    </section>
  )
}

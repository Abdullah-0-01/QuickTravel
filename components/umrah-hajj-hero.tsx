"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Shield, Clock } from "lucide-react"

export function UmrahHajjHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-[url('/kaaba-makkah-background.jpg')] bg-cover bg-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"
        style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)` }}
      />
      <div
        className="absolute top-32 right-20 w-12 h-12 bg-white/15 rounded-full blur-sm animate-pulse"
        style={{ transform: `translateY(${Math.cos(scrollY * 0.008) * 15}px)` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <Badge className="mb-4 bg-primary/20 text-white border-white/20 animate-pulse">
            Trusted by 50,000+ Pilgrims
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-slide-in-left">
            Your Sacred Journey to the <span className="text-primary">Holy Land</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty animate-slide-in-right animation-delay-300">
            Experience the spiritual journey of a lifetime with our comprehensive Umrah and Hajj packages. Complete
            guidance, premium accommodations, and dedicated support throughout your pilgrimage.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">5-Star Hotels</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Expert Guides</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Visa Included</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-800">
          <Button size="lg" className="px-8 py-4 text-lg hover:scale-105 transition-transform">
            View Umrah Packages
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-black transition-all bg-transparent"
          >
            Explore Hajj Packages
          </Button>
        </div>
      </div>
    </section>
  )
}

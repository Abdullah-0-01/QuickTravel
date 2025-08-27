"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plane } from "lucide-react"

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFlightSearch = () => {
    router.push("/flights")
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Moving Clouds */}
        <div
          className="absolute top-20 left-10 w-32 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm animate-pulse"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-32 right-20 w-24 h-12 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-sm animate-pulse"
          style={{ transform: `translateX(${-scrollY * 0.15}px)` }}
        />
        <div
          className="absolute top-48 left-1/3 w-40 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-sm animate-pulse"
          style={{ transform: `translateX(${scrollY * 0.08}px)` }}
        />

        {/* Flying Planes */}
        <div
          className="absolute top-24 right-1/4 text-primary animate-bounce"
          style={{ transform: `translateX(${-scrollY * 0.2}px) translateY(${Math.sin(scrollY * 0.01) * 10}px)` }}
        >
          <Plane className="h-8 w-8 rotate-45 drop-shadow-lg" />
        </div>
        <div
          className="absolute top-64 left-1/4 text-accent animate-pulse"
          style={{ transform: `translateX(${scrollY * 0.12}px) translateY(${Math.cos(scrollY * 0.008) * 15}px)` }}
        >
          <Plane className="h-6 w-6 rotate-12 drop-shadow-lg" />
        </div>
      </div>

      {/* Mountain Silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/20 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-full">
          <path
            d="M0,300 L0,200 L200,100 L400,150 L600,80 L800,120 L1000,60 L1200,100 L1200,300 Z"
            fill="currentColor"
            className="text-primary/30"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-balance animate-slide-in-left">
            Your Journey Begins with{" "}
            <AnimatedGradientText variant="luxury" className="text-5xl md:text-7xl font-black">
              QuickTravel
            </AnimatedGradientText>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-slide-in-right animation-delay-300">
            Discover amazing destinations, book flights, plan Umrah & Hajj journeys, and create custom tours with
            Pakistan's most trusted travel agency.
          </p>
        </div>

        {/* Animated Flight Search Widget */}
        <div className="animate-slide-in-up animation-delay-600">
          <Card className="max-w-4xl mx-auto hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-primary/20 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm">
            <CardContent className="p-6 relative overflow-hidden">
              <div className="shimmer-effect">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2 animate-fade-in animation-delay-800">
                    <label className="text-sm font-medium">From</label>
                    <Select>
                      <SelectTrigger className="hover:border-primary transition-colors border-primary/30">
                        <SelectValue placeholder="Departure city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="karachi">Karachi (KHI)</SelectItem>
                        <SelectItem value="lahore">Lahore (LHE)</SelectItem>
                        <SelectItem value="islamabad">Islamabad (ISB)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 animate-fade-in animation-delay-1000">
                    <label className="text-sm font-medium">To</label>
                    <Select>
                      <SelectTrigger className="hover:border-primary transition-colors border-primary/30">
                        <SelectValue placeholder="Destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dubai">Dubai (DXB)</SelectItem>
                        <SelectItem value="london">London (LHR)</SelectItem>
                        <SelectItem value="makkah">Makkah (JED)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 animate-fade-in animation-delay-1200">
                    <label className="text-sm font-medium">Departure</label>
                    <Input type="date" className="hover:border-primary transition-colors border-primary/30" />
                  </div>
                  <div className="space-y-2 animate-fade-in animation-delay-1400">
                    <label className="text-sm font-medium">Passengers</label>
                    <Select>
                      <SelectTrigger className="hover:border-primary transition-colors border-primary/30">
                        <SelectValue placeholder="1 Adult" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleFlightSearch}
                className="btn-luxury w-full mt-6 h-12 text-lg font-bold animate-fade-in animation-delay-1600"
              >
                <Plane className="mr-2 h-5 w-5 animate-bounce" />
                <AnimatedGradientText variant="gold" className="text-lg font-bold">
                  Search Flights
                </AnimatedGradientText>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

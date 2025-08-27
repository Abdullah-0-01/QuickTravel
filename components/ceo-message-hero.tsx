"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Quote } from 'lucide-react'

export function CeoMessageHero() {
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
        className="absolute inset-0 bg-[url('/ceo-office-background.jpg')] bg-cover bg-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <Badge className="mb-4 bg-primary/20 text-white border-white/20">
            Message from Leadership
          </Badge>
          <div className="flex justify-center mb-6">
            <Quote className="h-16 w-16 text-primary opacity-50" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            A Message from Our <span className="text-primary">CEO</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty">
            Leading with vision, serving with dedication - our commitment to making your travel dreams a reality
          </p>
        </div>
      </div>
    </section>
  )
}

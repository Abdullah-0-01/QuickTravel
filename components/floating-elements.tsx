"use client"

import { useEffect, useState } from "react"
import { Plane, MapPin, Star } from "lucide-react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-6 h-6 text-primary/20 animate-pulse"
        style={{
          left: mousePosition.x * 0.05 + 100,
          top: mousePosition.y * 0.03 + 150,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Plane className="w-full h-full rotate-45" />
      </div>

      <div
        className="absolute w-4 h-4 text-accent/30 animate-bounce"
        style={{
          left: mousePosition.x * 0.08 + 200,
          top: mousePosition.y * 0.06 + 300,
          transform: "translate(-50%, -50%)",
          animationDelay: "0.5s",
        }}
      >
        <Star className="w-full h-full" />
      </div>

      <div
        className="absolute w-5 h-5 text-primary/25 animate-pulse"
        style={{
          right: mousePosition.x * 0.04 + 150,
          top: mousePosition.y * 0.02 + 200,
          transform: "translate(50%, -50%)",
          animationDelay: "1s",
        }}
      >
        <MapPin className="w-full h-full" />
      </div>

      {/* Background particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/10 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function EnhancedPageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span className="text-lg font-medium gradient-text-luxury">Loading...</span>
          </div>
        </div>
      )}
      <div className={`transition-all duration-500 ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        {children}
      </div>
    </>
  )
}

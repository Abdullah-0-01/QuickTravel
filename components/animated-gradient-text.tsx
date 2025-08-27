"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "gold" | "luxury"
}

export function AnimatedGradientText({ children, className, variant = "default" }: AnimatedGradientTextProps) {
  const variantClasses = {
    default: "gradient-text",
    gold: "gradient-text-gold",
    luxury: "gradient-text-luxury",
  }

  return <span className={cn(variantClasses[variant], className)}>{children}</span>
}

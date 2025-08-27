import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { AIChatbot } from "@/components/ai-chatbot"
import { EnhancedPageTransition } from "@/components/enhanced-page-transition"
import { FloatingElements } from "@/components/floating-elements"
import "./globals.css"

export const metadata: Metadata = {
  title: "QuickTravel - Your Trusted Travel Partner in Pakistan",
  description:
    "Book flights, Umrah & Hajj packages, custom tours, and travel insurance with Pakistan's leading travel agency. 24/7 support and best prices guaranteed.",
  generator: "v0.app",
  keywords: "travel agency Pakistan, flights booking, Umrah packages, Hajj tours, custom travel, travel insurance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <FloatingElements />
        <EnhancedPageTransition>{children}</EnhancedPageTransition>
        <WhatsAppFloat />
        <AIChatbot />
      </body>
    </html>
  )
}

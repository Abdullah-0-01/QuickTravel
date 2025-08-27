"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MessageCircle } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Flights & Packages", href: "/flights" },
  { name: "Umrah & Hajj", href: "/umrah-hajj" },
  { name: "Custom Tours", href: "/custom-tours" },
  { name: "Travel Insurance", href: "/insurance" },
  { name: "About Us", href: "/about" },
  { name: "CEO Message", href: "/ceo-message" }, // Added CEO Message page to navigation
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/quicktravel-official-logo.png"
            alt="QuickTravel Services"
            className="h-10 w-10 object-contain hover:scale-105 transition-transform duration-300"
          />
          <span className="font-bold text-xl text-foreground hover:text-primary transition-colors duration-300">
            QuickTravel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button size="sm" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" className="gap-2 justify-start bg-transparent">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <Button className="gap-2 justify-start">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Chat
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

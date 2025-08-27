"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+923001234567" // Replace with actual WhatsApp number
  const defaultMessage = "Hi! I'm interested in your travel services. Can you help me plan my trip?"

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  const quickMessages = [
    { text: "Flight Booking Help", message: "I need help with flight booking" },
    { text: "Umrah Package Info", message: "Can you provide information about Umrah packages?" },
    { text: "Custom Tour Planning", message: "I want to plan a custom tour" },
    { text: "Travel Insurance", message: "I need information about travel insurance" },
  ]

  return (
    <>
      {/* WhatsApp Popup */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 z-50 animate-slide-in-up shadow-2xl">
          <CardHeader className="bg-green-500 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Chat
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Hi there! 👋</p>
              <p>How can we help you today? Choose a quick option or start a custom chat:</p>
            </div>

            <div className="space-y-2">
              {quickMessages.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left h-auto p-3 bg-transparent"
                  onClick={() => {
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.message)}`
                    window.open(url, "_blank")
                    setIsOpen(false)
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </div>

            <Button onClick={openWhatsApp} className="w-full bg-green-500 hover:bg-green-600">
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Custom Chat
            </Button>

            <div className="text-xs text-muted-foreground text-center">Available 24/7 • Response within 5 minutes</div>
          </CardContent>
        </Card>
      )}

      {/* Floating WhatsApp Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white animate-pulse" />
      </Button>
    </>
  )
}

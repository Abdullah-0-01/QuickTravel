"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Plane, User, CreditCard } from "lucide-react"

interface BookingFlowProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingFlow({ isOpen, onClose }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    passengers: [],
    contactInfo: {},
    paymentInfo: {},
  })

  const steps = [
    { id: 1, title: "Flight Selection", icon: Plane },
    { id: 2, title: "Passenger Details", icon: User },
    { id: 3, title: "Payment", icon: CreditCard },
    { id: 4, title: "Confirmation", icon: CheckCircle },
  ]

  const progress = (currentStep / steps.length) * 100

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slide-in-up">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Book Your Flight</CardTitle>
            <Button variant="ghost" onClick={onClose}>
              ×
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between">
              {steps.map((step) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center space-y-2 ${
                      isActive ? "text-primary" : isCompleted ? "text-green-500" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : isCompleted
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-muted-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium">{step.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Step 1: Flight Selection */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold">Selected Flight</h3>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img src="/generic-airline-logo.png" alt="Emirates" className="w-10 h-10" />
                      <div>
                        <h4 className="font-semibold">Emirates</h4>
                        <p className="text-sm text-muted-foreground">EK-607</p>
                      </div>
                    </div>
                    <Badge>Direct Flight</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">14:30</p>
                      <p className="text-sm text-muted-foreground">KHI</p>
                      <p className="text-xs">Karachi</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Plane className="h-6 w-6 text-primary mb-1" />
                      <p className="text-sm">2h 15m</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">16:45</p>
                      <p className="text-sm text-muted-foreground">DXB</p>
                      <p className="text-xs">Dubai</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Economy Class</span>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => {
                        const message = `Hi! I'm interested in booking Emirates flight EK-607 from Karachi to Dubai. Can you provide me with the current rates and availability?`
                        const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, "_blank")
                      }}
                    >
                      💬 Get Quote on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button onClick={() => setCurrentStep(2)} className="px-8">
                  Continue to Passenger Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Passenger Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold">Passenger Information</h3>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Passenger 1 (Adult)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Mr.</SelectItem>
                          <SelectItem value="mrs">Mrs.</SelectItem>
                          <SelectItem value="ms">Ms.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="passport">Passport Number</Label>
                      <Input id="passport" placeholder="Enter passport number" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+92 300 1234567" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="px-8">
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold">Contact for Final Booking</h3>

              <div className="text-center space-y-4">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Ready to Complete Your Booking?</h4>
                  <p className="text-muted-foreground mb-4">
                    Our travel experts will finalize your booking and provide you with the best available rates.
                  </p>
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => {
                      const message = `Hi! I'm ready to complete my flight booking for Emirates EK-607 from Karachi to Dubai. Here are my details: Passenger: ${formData.contactInfo?.name || "Not provided"}, Email: ${formData.contactInfo?.email || "Not provided"}, Phone: ${formData.contactInfo?.phone || "Not provided"}. Please help me finalize the booking.`
                      const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, "_blank")
                    }}
                  >
                    💬 Complete Booking via WhatsApp
                  </Button>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Back
                </Button>
                <Button onClick={() => setCurrentStep(4)} className="px-8">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in text-center">
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="text-2xl font-bold text-green-600">Booking Confirmed!</h3>
                <p className="text-muted-foreground">
                  Your flight has been successfully booked. You will receive a confirmation email shortly.
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Booking Reference</span>
                      <span className="font-mono font-bold">QT-ABC123</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Flight</span>
                      <span>EK-607</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date</span>
                      <span>Dec 25, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Route</span>
                      <span>KHI → DXB</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-4">
                <Button variant="outline">Download Ticket</Button>
                <Button onClick={onClose}>Close</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

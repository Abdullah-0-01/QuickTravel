"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Hotel, Camera, Mountain, Utensils, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

interface TourData {
  destinations: string[]
  startDate: string
  endDate: string
  groupSize: number
  budget: string
  accommodation: string
  activities: string[]
  transportation: string
  meals: string
  specialRequests: string
  contactInfo: {
    name: string
    email: string
    phone: string
  }
}

export function CustomTourBuilder() {
  const [currentStep, setCurrentStep] = useState(1)
  const [tourData, setTourData] = useState<TourData>({
    destinations: [],
    startDate: "",
    endDate: "",
    groupSize: 2,
    budget: "",
    accommodation: "",
    activities: [],
    transportation: "",
    meals: "",
    specialRequests: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const steps = [
    { id: 1, title: "Destinations", icon: MapPin },
    { id: 2, title: "Dates & Group", icon: Calendar },
    { id: 3, title: "Preferences", icon: Hotel },
    { id: 4, title: "Activities", icon: Camera },
    { id: 5, title: "Contact & Quote", icon: CheckCircle },
  ]

  const progress = (currentStep / steps.length) * 100

  const destinations = [
    { name: "Northern Pakistan", places: ["Hunza", "Skardu", "Gilgit", "Fairy Meadows"] },
    { name: "Punjab", places: ["Lahore", "Multan", "Bahawalpur", "Murree"] },
    { name: "Sindh", places: ["Karachi", "Hyderabad", "Thatta", "Mohenjo-daro"] },
    { name: "KPK", places: ["Peshawar", "Swat", "Chitral", "Dir"] },
    { name: "Balochistan", places: ["Quetta", "Gwadar", "Ziarat", "Hingol"] },
    { name: "International", places: ["Dubai", "Turkey", "Malaysia", "Thailand"] },
  ]

  const activities = [
    { id: "adventure", name: "Adventure Sports", icon: Mountain },
    { id: "cultural", name: "Cultural Tours", icon: Camera },
    { id: "nature", name: "Nature & Wildlife", icon: Mountain },
    { id: "food", name: "Food Tours", icon: Utensils },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "trekking", name: "Trekking & Hiking", icon: Mountain },
    { id: "historical", name: "Historical Sites", icon: Camera },
    { id: "shopping", name: "Shopping Tours", icon: Camera },
  ]

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleDestination = (destination: string) => {
    setTourData((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(destination)
        ? prev.destinations.filter((d) => d !== destination)
        : [...prev.destinations, destination],
    }))
  }

  const toggleActivity = (activity: string) => {
    setTourData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity],
    }))
  }

  const calculateEstimate = () => {
    const basePrice = 15000 // Base price per person
    const destinationMultiplier = tourData.destinations.length * 0.3
    const durationDays =
      tourData.startDate && tourData.endDate
        ? Math.ceil(
            (new Date(tourData.endDate).getTime() - new Date(tourData.startDate).getTime()) / (1000 * 60 * 60 * 24),
          )
        : 7
    const budgetMultiplier = tourData.budget === "luxury" ? 2 : tourData.budget === "premium" ? 1.5 : 1

    return Math.round(
      basePrice * (1 + destinationMultiplier) * (durationDays / 7) * budgetMultiplier * tourData.groupSize,
    )
  }

  const contactWhatsApp = () => {
    const destinations = tourData.destinations.join(", ")
    const activities = tourData.activities.join(", ")
    const message = `Hi! I've built a custom tour with the following details:
    
Destinations: ${destinations}
Group Size: ${tourData.groupSize} people
Start Date: ${tourData.startDate}
End Date: ${tourData.endDate}
Budget Range: ${tourData.budget}
Accommodation: ${tourData.accommodation}
Transportation: ${tourData.transportation}
Meals: ${tourData.meals}
Activities: ${activities}
Special Requests: ${tourData.specialRequests}

Contact Details:
Name: ${tourData.contactInfo.name}
Email: ${tourData.contactInfo.email}
Phone: ${tourData.contactInfo.phone}

Can you please provide me with a detailed quote and itinerary for this custom tour?`

    const whatsappUrl = `https://wa.me/923223800039?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="tour-builder" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Build Your Custom Tour
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-300">
            Follow these simple steps to create your perfect travel experience
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="border-b">
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
                      <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* Step 1: Destinations */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Where would you like to go?</h3>
                  <p className="text-muted-foreground">Select one or more destinations for your tour</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destinations.map((region) => (
                    <Card key={region.name} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{region.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {region.places.map((place) => (
                          <div key={place} className="flex items-center space-x-2">
                            <Checkbox
                              id={place}
                              checked={tourData.destinations.includes(place)}
                              onCheckedChange={() => toggleDestination(place)}
                            />
                            <Label htmlFor={place} className="text-sm cursor-pointer">
                              {place}
                            </Label>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {tourData.destinations.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium">Selected destinations:</span>
                    {tourData.destinations.map((dest) => (
                      <Badge key={dest} variant="secondary">
                        {dest}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Dates & Group */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">When are you traveling?</h3>
                  <p className="text-muted-foreground">Choose your travel dates and group size</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={tourData.startDate}
                        onChange={(e) => setTourData((prev) => ({ ...prev, startDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={tourData.endDate}
                        onChange={(e) => setTourData((prev) => ({ ...prev, endDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Select
                        value={tourData.groupSize.toString()}
                        onValueChange={(value) =>
                          setTourData((prev) => ({ ...prev, groupSize: Number.parseInt(value) }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                            <SelectItem key={size} value={size.toString()}>
                              {size} {size === 1 ? "Person" : "People"}
                            </SelectItem>
                          ))}
                          <SelectItem value="10+">10+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range (per person)</Label>
                      <Select
                        value={tourData.budget}
                        onValueChange={(value) => setTourData((prev) => ({ ...prev, budget: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget (PKR 20,000 - 50,000)</SelectItem>
                          <SelectItem value="premium">Premium (PKR 50,000 - 100,000)</SelectItem>
                          <SelectItem value="luxury">Luxury (PKR 100,000+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {tourData.startDate && tourData.endDate && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Tour Duration:</span>
                        <span className="text-primary font-bold">
                          {Math.ceil(
                            (new Date(tourData.endDate).getTime() - new Date(tourData.startDate).getTime()) /
                              (1000 * 60 * 60 * 24),
                          )}{" "}
                          days
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Your Preferences</h3>
                  <p className="text-muted-foreground">Tell us about your accommodation and travel preferences</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Accommodation Type</Label>
                      <Select
                        value={tourData.accommodation}
                        onValueChange={(value) => setTourData((prev) => ({ ...prev, accommodation: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select accommodation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget Hotels (2-3 Star)</SelectItem>
                          <SelectItem value="standard">Standard Hotels (3-4 Star)</SelectItem>
                          <SelectItem value="luxury">Luxury Hotels (4-5 Star)</SelectItem>
                          <SelectItem value="resort">Resorts & Unique Stays</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Transportation</Label>
                      <Select
                        value={tourData.transportation}
                        onValueChange={(value) => setTourData((prev) => ({ ...prev, transportation: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select transportation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy Transport</SelectItem>
                          <SelectItem value="comfortable">Comfortable AC Vehicles</SelectItem>
                          <SelectItem value="luxury">Luxury Vehicles</SelectItem>
                          <SelectItem value="mixed">Mixed (Flights + Ground)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Meal Preferences</Label>
                      <Select
                        value={tourData.meals}
                        onValueChange={(value) => setTourData((prev) => ({ ...prev, meals: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select meal plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Meals Included</SelectItem>
                          <SelectItem value="breakfast">Breakfast Only</SelectItem>
                          <SelectItem value="half">Half Board (Breakfast + Dinner)</SelectItem>
                          <SelectItem value="full">Full Board (All Meals)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
                        value={tourData.specialRequests}
                        onChange={(e) => setTourData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Activities */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">What interests you?</h3>
                  <p className="text-muted-foreground">Select activities and experiences you'd like to include</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activities.map((activity) => {
                    const Icon = activity.icon
                    const isSelected = tourData.activities.includes(activity.id)

                    return (
                      <Card
                        key={activity.id}
                        className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                          isSelected ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-lg"
                        }`}
                        onClick={() => toggleActivity(activity.id)}
                      >
                        <CardContent className="p-4 text-center">
                          <Icon
                            className={`h-8 w-8 mx-auto mb-2 ${isSelected ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <h4 className="font-medium text-sm">{activity.name}</h4>
                          {isSelected && <CheckCircle className="h-4 w-4 text-primary mx-auto mt-2" />}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {tourData.activities.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium">Selected activities:</span>
                    {tourData.activities.map((activityId) => {
                      const activity = activities.find((a) => a.id === activityId)
                      return (
                        <Badge key={activityId} variant="secondary">
                          {activity?.name}
                        </Badge>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Contact & Quote */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Get Your Custom Quote</h3>
                  <p className="text-muted-foreground">Provide your contact details to receive a detailed quote</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={tourData.contactInfo.name}
                        onChange={(e) =>
                          setTourData((prev) => ({
                            ...prev,
                            contactInfo: { ...prev.contactInfo, name: e.target.value },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={tourData.contactInfo.email}
                        onChange={(e) =>
                          setTourData((prev) => ({
                            ...prev,
                            contactInfo: { ...prev.contactInfo, email: e.target.value },
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+92 300 1234567"
                        value={tourData.contactInfo.phone}
                        onChange={(e) =>
                          setTourData((prev) => ({
                            ...prev,
                            contactInfo: { ...prev.contactInfo, phone: e.target.value },
                          }))
                        }
                      />
                    </div>
                  </div>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Tour Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Destinations:</span>
                          <span className="text-sm font-medium">{tourData.destinations.length} selected</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Group Size:</span>
                          <span className="text-sm font-medium">{tourData.groupSize} people</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Duration:</span>
                          <span className="text-sm font-medium">
                            {tourData.startDate && tourData.endDate
                              ? `${Math.ceil(
                                  (new Date(tourData.endDate).getTime() - new Date(tourData.startDate).getTime()) /
                                    (1000 * 60 * 60 * 24),
                                )} days`
                              : "Not specified"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Budget Range:</span>
                          <span className="text-sm font-medium capitalize">{tourData.budget || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Activities:</span>
                          <span className="text-sm font-medium">{tourData.activities.length} selected</span>
                        </div>
                        <Separator />
                        <div className="text-center">
                          <span className="text-lg font-bold text-primary">Custom Quote Required</span>
                          <p className="text-xs text-muted-foreground mt-1">
                            Our experts will provide personalized pricing based on your requirements
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="px-8 hover:scale-105 transition-transform bg-green-500 hover:bg-green-600 text-white"
                    onClick={contactWhatsApp}
                  >
                    💬 Get Quote on WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our travel experts will contact you within 24 hours with a detailed quote and itinerary.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button onClick={nextStep} disabled={currentStep === steps.length} className="flex items-center gap-2">
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

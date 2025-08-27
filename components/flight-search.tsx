"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plane, ArrowLeftRight, Calendar, Users, MapPin } from "lucide-react"

export function FlightSearch() {
  const [tripType, setTripType] = useState("roundtrip")
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 })
  const [showPassengers, setShowPassengers] = useState(false)

  const cities = [
    { code: "KHI", name: "Karachi", country: "Pakistan" },
    { code: "LHE", name: "Lahore", country: "Pakistan" },
    { code: "ISB", name: "Islamabad", country: "Pakistan" },
    { code: "DXB", name: "Dubai", country: "UAE" },
    { code: "LHR", name: "London", country: "UK" },
    { code: "JED", name: "Jeddah", country: "Saudi Arabia" },
    { code: "RUH", name: "Riyadh", country: "Saudi Arabia" },
    { code: "DOH", name: "Doha", country: "Qatar" },
  ]

  return (
    <Card className="max-w-6xl mx-auto hover:shadow-2xl transition-all duration-500 animate-slide-in-up">
      <CardContent className="p-8">
        {/* Trip Type Tabs */}
        <Tabs value={tripType} onValueChange={setTripType} className="mb-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="roundtrip" className="text-sm">
              Round Trip
            </TabsTrigger>
            <TabsTrigger value="oneway" className="text-sm">
              One Way
            </TabsTrigger>
            <TabsTrigger value="multicity" className="text-sm">
              Multi City
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Search Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* From */}
            <div className="space-y-2 animate-fade-in animation-delay-300">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                From
              </label>
              <Select>
                <SelectTrigger className="h-12 hover:border-primary transition-colors">
                  <SelectValue placeholder="Departure city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.code} value={city.code}>
                      <div className="flex items-center justify-between w-full">
                        <span>{city.name}</span>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {city.code}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex items-end justify-center pb-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 bg-transparent"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            {/* To */}
            <div className="space-y-2 animate-fade-in animation-delay-600">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                To
              </label>
              <Select>
                <SelectTrigger className="h-12 hover:border-primary transition-colors">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.code} value={city.code}>
                      <div className="flex items-center justify-between w-full">
                        <span>{city.name}</span>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {city.code}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Departure Date */}
            <div className="space-y-2 animate-fade-in animation-delay-900">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Departure
              </label>
              <Input type="date" className="h-12 hover:border-primary transition-colors" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Return Date */}
            {tripType === "roundtrip" && (
              <div className="space-y-2 animate-fade-in animation-delay-1200">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Return
                </label>
                <Input type="date" className="h-12 hover:border-primary transition-colors" />
              </div>
            )}

            {/* Passengers */}
            <div className="space-y-2 animate-fade-in animation-delay-1500">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Passengers
              </label>
              <div className="relative">
                <Button
                  variant="outline"
                  className="w-full h-12 justify-start hover:border-primary transition-colors bg-transparent"
                  onClick={() => setShowPassengers(!showPassengers)}
                >
                  {passengers.adults + passengers.children + passengers.infants} Passenger(s)
                </Button>

                {showPassengers && (
                  <Card className="absolute top-full left-0 right-0 z-10 mt-2 animate-fade-in">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Adults (12+)</span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers((p) => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{passengers.adults}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers((p) => ({ ...p, adults: p.adults + 1 }))}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Children (2-11)</span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers((p) => ({ ...p, children: Math.max(0, p.children - 1) }))}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{passengers.children}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers((p) => ({ ...p, children: p.children + 1 }))}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Infants (0-2)</span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers((p) => ({ ...p, infants: Math.max(0, p.infants - 1) }))}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{passengers.infants}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPassengers((p) => ({ ...p, infants: p.infants + 1 }))}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <Button className="w-full" onClick={() => setShowPassengers(false)}>
                        Done
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Class */}
            <div className="space-y-2 animate-fade-in animation-delay-1800">
              <label className="text-sm font-medium">Class</label>
              <Select>
                <SelectTrigger className="h-12 hover:border-primary transition-colors">
                  <SelectValue placeholder="Economy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <Button
            className="w-full h-14 text-lg hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-2000"
            size="lg"
          >
            <Plane className="mr-2 h-5 w-5 animate-bounce" />
            Search Flights
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

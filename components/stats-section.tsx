"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"
import { Users, MapPin, Award, Clock } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Success in Numbers</h2>
          <p className="text-xl text-muted-foreground">Trusted by thousands of travelers across Pakistan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Clock className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium">Years of Experience</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium">Happy Customers</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium">Destinations</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={100000} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium">Successful Trips</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

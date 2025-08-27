import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Camera, Info } from "lucide-react"

export function DestinationGuides() {
  const guides = [
    {
      title: "Complete Guide to Northern Pakistan",
      description: "Everything you need to know about traveling to Pakistan's northern regions",
      image: "/northern-pakistan-tour.jpg",
      readTime: "15 min read",
      category: "Travel Guide",
      highlights: [
        "Best time to visit each region",
        "Transportation and accommodation",
        "Must-visit attractions and hidden gems",
        "Local culture and customs",
        "Photography tips and best viewpoints",
      ],
    },
    {
      title: "Dubai Travel Essentials",
      description: "Your comprehensive guide to experiencing the best of Dubai",
      image: "/dubai-skyline.png",
      readTime: "12 min read",
      category: "City Guide",
      highlights: [
        "Top attractions and activities",
        "Shopping and dining recommendations",
        "Cultural etiquette and dress codes",
        "Transportation options",
        "Budget planning and money-saving tips",
      ],
    },
    {
      title: "Turkey: History Meets Modern",
      description: "Discover the perfect blend of ancient history and contemporary culture",
      image: "/turkey-cappadocia.png",
      readTime: "18 min read",
      category: "Cultural Guide",
      highlights: [
        "Historical sites and museums",
        "Traditional Turkish cuisine",
        "Hot air balloon experiences",
        "Local markets and bazaars",
        "Language basics and useful phrases",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Travel Guides</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guides and insider tips to help you make the most of your journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{guide.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  {guide.readTime}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{guide.title}</CardTitle>
                <p className="text-muted-foreground">{guide.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {guide.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Camera className="h-4 w-4 mr-2" />
                  Read Full Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

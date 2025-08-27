import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Users, Shield, Heart, Clock, MapPin } from "lucide-react"

export function PilgrimageGuide() {
  const services = [
    {
      icon: Book,
      title: "Religious Guidance",
      description: "Complete step-by-step guidance for performing Umrah and Hajj rituals correctly",
      features: ["Pre-departure orientation", "Ritual demonstrations", "Islamic lectures", "Q&A sessions"],
    },
    {
      icon: Users,
      title: "Group Coordination",
      description: "Well-organized groups with experienced coordinators for a smooth pilgrimage experience",
      features: ["Small group sizes", "Dedicated coordinators", "Group activities", "Peer support"],
    },
    {
      icon: Shield,
      title: "Visa & Documentation",
      description: "Complete visa processing and documentation support for hassle-free travel",
      features: ["Visa application", "Document verification", "Travel insurance", "Emergency contacts"],
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Medical support and health guidance throughout your spiritual journey",
      features: ["Medical checkups", "Vaccination guidance", "On-site medical support", "Health insurance"],
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and support during your pilgrimage",
      features: ["Emergency hotline", "Local representatives", "WhatsApp support", "Multilingual staff"],
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of local customs, best practices, and sacred sites",
      features: ["Historical insights", "Cultural guidance", "Sacred site tours", "Local recommendations"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Complete Pilgrimage Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Our comprehensive services ensure your spiritual journey is meaningful, comfortable, and worry-free from
            start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="mr-2 mb-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                Umrah Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Umrah can be performed at any time of the year. It includes Tawaf around the Kaaba, Sa'i between Safa
                and Marwah, and other sacred rituals.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Best Time:</span>
                  <span className="text-sm font-medium">Year-round</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Duration:</span>
                  <span className="text-sm font-medium">7-14 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Visa Validity:</span>
                  <span className="text-sm font-medium">30 days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Hajj Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Hajj is performed during specific dates in the Islamic month of Dhul Hijjah. It includes all Umrah
                rituals plus additional rites at Mina, Arafat, and Muzdalifah.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">When:</span>
                  <span className="text-sm font-medium">Dhul Hijjah 8-13</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Duration:</span>
                  <span className="text-sm font-medium">21-25 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Hajj:</span>
                  <span className="text-sm font-medium">June 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

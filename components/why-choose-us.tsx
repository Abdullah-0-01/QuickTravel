import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Award, Users, Clock, Heart, Globe } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Licensed & Trusted",
      description: "Government licensed travel agency with full insurance coverage and legal compliance.",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Over a decade of expertise in travel planning and customer service excellence.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced travel consultants and religious guides to assist you at every step.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support via phone, WhatsApp, and AI chatbot assistance.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Tailored travel solutions designed specifically for your needs and preferences.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Strong partnerships with airlines, hotels, and service providers worldwide.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose QuickTravel?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us Pakistan's most trusted travel agency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

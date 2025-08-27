import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, Globe, Clock, Heart, FileText } from "lucide-react"

export function InsuranceBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Complete coverage for medical emergencies, trip cancellations, and unexpected events.",
    },
    {
      icon: Phone,
      title: "24/7 Emergency Support",
      description: "Round-the-clock assistance hotline for emergencies and claims support worldwide.",
    },
    {
      icon: Globe,
      title: "Worldwide Coverage",
      description: "Protection across all destinations with partnerships with global healthcare providers.",
    },
    {
      icon: Clock,
      title: "Quick Claims Process",
      description: "Fast and hassle-free claims processing with digital submission and tracking.",
    },
    {
      icon: Heart,
      title: "Pre-existing Conditions",
      description: "Coverage for pre-existing medical conditions with proper declaration and approval.",
    },
    {
      icon: FileText,
      title: "Easy Documentation",
      description: "Simple policy documents and clear terms with no hidden clauses or surprises.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Travel Insurance?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience peace of mind with comprehensive coverage and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
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
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

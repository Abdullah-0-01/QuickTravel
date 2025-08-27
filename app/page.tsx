import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParallaxHero } from "@/components/parallax-hero"
import { StatsSection } from "@/components/stats-section"
import { AnimatedServices } from "@/components/animated-services"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <ParallaxHero />

      <StatsSection />

      {/* Features Section with enhanced animations */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              <AnimatedGradientText variant="luxury" className="text-4xl md:text-5xl font-black">
                Why Choose QuickTravel?
              </AnimatedGradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Experience the difference with our premium travel services and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted & Secure",
                description: "Licensed travel agency with 15+ years of experience and secure booking system.",
                gradient: "from-primary/20 to-accent/20",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock customer support via WhatsApp, phone, and AI chatbot.",
                gradient: "from-accent/20 to-primary/20",
              },
              {
                icon: Award,
                title: "Best Prices",
                description: "Competitive rates with exclusive deals and flexible payment options.",
                gradient: "from-primary/20 to-secondary/20",
              },
              {
                icon: Star,
                title: "5-Star Service",
                description: "Personalized service with attention to every detail of your journey.",
                gradient: "from-secondary/20 to-primary/20",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className={`text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fade-in-up border-2 border-transparent hover:border-primary/30 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className="shimmer-effect">
                      <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-3">
                      <AnimatedGradientText variant="gold" className="text-lg font-bold">
                        {feature.title}
                      </AnimatedGradientText>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatedServices />

      <Footer />
    </div>
  )
}

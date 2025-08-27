import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      experience: "20+ years",
      specialization: "Strategic Planning",
      image: "/team-ahmed-hassan-demo.jpg", // Updated with demo image
    },
    {
      name: "Fatima Khan",
      role: "Head of Operations",
      experience: "15+ years",
      specialization: "Umrah & Hajj Services",
      image: "/team-fatima-khan-demo.jpg", // Updated with demo image
    },
    {
      name: "Muhammad Ali",
      role: "Travel Consultant",
      experience: "12+ years",
      specialization: "International Tours",
      image: "/team-muhammad-ali-demo.jpg", // Updated with demo image
    },
    {
      name: "Ayesha Malik",
      role: "Customer Relations",
      experience: "8+ years",
      specialization: "Customer Support",
      image: "/team-ayesha-malik-demo.jpg", // Updated with demo image
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground">
            Dedicated professionals committed to making your travel dreams come true
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg?height=120&width=120&query=professional headshot"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <Badge variant="secondary" className="mb-3">
                  {member.experience}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

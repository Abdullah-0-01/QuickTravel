import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Award, Users, Globe } from "lucide-react"

export function CeoMessage() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* CEO Profile */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceo.jpg-yW2x3DLlYHa7kUxBnocGSpLJJOSoCF.jpeg"
                    alt="Waqas Muhammad Ashraf - CEO & Founder"
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">CEO & Founder</Badge>
                  <h2 className="text-3xl font-bold mb-2">Waqas Muhammad Ashraf</h2>
                  <p className="text-muted-foreground mb-4">20+ Years in Travel Industry</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Travel Expert</Badge>
                    <Badge variant="secondary">Business Leader</Badge>
                    <Badge variant="secondary">Hajj Specialist</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CEO Message */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <strong>Assalam-o-Alaikum and warm greetings to all our valued travelers,</strong>
                </p>

                <p>
                  When I founded QuickTravel Services over two decades ago, I had a simple yet profound vision: to make
                  the sacred journey of Hajj and Umrah accessible, comfortable, and spiritually enriching for every
                  Muslim brother and sister. What started as a small travel agency in Karachi has now grown into
                  Pakistan's most trusted name in pilgrimage and travel services.
                </p>

                <p>
                  Having personally performed Hajj and Umrah multiple times, I understand the spiritual significance and
                  logistical challenges that pilgrims face. This personal experience drives our commitment to providing
                  not just travel services, but a complete spiritual journey that honors the sanctity of these blessed
                  pilgrimages. Whether you're embarking on your first Umrah or planning your Hajj, we ensure every
                  detail is handled with the reverence it deserves.
                </p>

                <p>
                  Our journey began with a deep understanding that travel is not just about reaching a destination—it's
                  about the experiences, the memories, and the spiritual transformation that occurs along the way.
                  Whether you're embarking on the sacred pilgrimage to Makkah and Madinah, exploring the breathtaking
                  landscapes of Northern Pakistan, or discovering the wonders of international destinations, we are here
                  to ensure your journey is seamless and memorable.
                </p>

                <p>
                  Over the years, we have had the honor of serving more than 50,000 pilgrims and travelers, each with
                  their unique dreams and aspirations. This responsibility has taught us that trust is not just earned
                  through competitive prices or luxury accommodations—it's built through genuine care, attention to
                  detail, and unwavering commitment to our clients' satisfaction.
                </p>

                <p>
                  At QuickTravel, we believe that every journey should be a reflection of our values: integrity,
                  excellence, and service. Our team of dedicated professionals works tirelessly to ensure that from the
                  moment you contact us until you return home with cherished memories, every aspect of your travel
                  experience exceeds your expectations.
                </p>

                <p>
                  As we continue to grow and evolve, our commitment remains unchanged: to serve you with the highest
                  standards of professionalism while maintaining the personal touch that makes QuickTravel feel like
                  family. Your trust in us is not just our greatest achievement—it's our greatest responsibility.
                </p>

                <p className="font-semibold">
                  Thank you for choosing QuickTravel Services. We look forward to being part of your next adventure.
                </p>

                <div className="pt-6 border-t">
                  <p className="font-bold text-xl">Waqas Muhammad Ashraf</p>
                  <p className="text-muted-foreground">Chief Executive Officer & Founder</p>
                  <p className="text-muted-foreground">QuickTravel Services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">20+ Years</h3>
            <p className="text-muted-foreground">Industry Experience</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">50,000+</h3>
            <p className="text-muted-foreground">Happy Travelers</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100+</h3>
            <p className="text-muted-foreground">Destinations Covered</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

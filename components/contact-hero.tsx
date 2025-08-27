import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up animation-delay-300">
            Ready to plan your next adventure? Our travel experts are here to help you create the perfect journey.
            Contact us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground">+92 300 1234567</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@quicktravel.com.pk</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Main Street, Lahore</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Office Hours</h3>
              <p className="text-muted-foreground">Mon-Sat: 9AM-8PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/quicktravel-official-logo.png"
                alt="QuickTravel Services"
                className="h-10 w-10 object-contain hover:scale-105 transition-transform duration-300"
              />
              <span className="font-bold text-xl hover:text-primary transition-colors duration-300">QuickTravel</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted travel partner for flights, Umrah, Hajj, and custom tour packages across Pakistan and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/flights" className="block text-sm text-muted-foreground hover:text-primary">
                Flights & Packages
              </Link>
              <Link href="/umrah-hajj" className="block text-sm text-muted-foreground hover:text-primary">
                Umrah & Hajj
              </Link>
              <Link href="/custom-tours" className="block text-sm text-muted-foreground hover:text-primary">
                Custom Tours
              </Link>
              <Link href="/insurance" className="block text-sm text-muted-foreground hover:text-primary">
                Travel Insurance
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <Link href="/visa-assistance" className="block text-sm text-muted-foreground hover:text-primary">
                Visa Assistance
              </Link>
              <Link href="/destinations" className="block text-sm text-muted-foreground hover:text-primary">
                Popular Destinations
              </Link>
              <Link href="/travel-guide" className="block text-sm text-muted-foreground hover:text-primary">
                Travel Guide
              </Link>
              <Link href="/emergency-help" className="block text-sm text-muted-foreground hover:text-primary">
                Emergency Help
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <div>+92 21 34130046</div>
                  <div>+92 21 34130047</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <div>+92 322 3800039</div>
                  <div>+92 330 3830039</div>
                  <div>+92 331 5551504</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">quicktravelservices@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Office No. 2020, 2nd Floor, Iconic Trade Center, Behind Medicare Hospital, BMCHS Block 3, Sharafabad,
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 QuickTravel. All rights reserved. Zenovate Digital</p>
        </div>
      </div>
    </footer>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6 animate-fade-in-up animation-delay-300">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Our Locations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Head Office - Lahore</h4>
            <p className="text-muted-foreground text-sm">123 Main Street, Gulberg III, Lahore, Punjab</p>
            <Badge variant="secondary" className="mt-1">
              Main Office
            </Badge>
          </div>
          <div>
            <h4 className="font-semibold">Branch Office - Karachi</h4>
            <p className="text-muted-foreground text-sm">456 Shahrah-e-Faisal, Karachi, Sindh</p>
            <Badge variant="outline">Branch</Badge>
          </div>
          <div>
            <h4 className="font-semibold">Branch Office - Islamabad</h4>
            <p className="text-muted-foreground text-sm">789 Blue Area, Islamabad, ICT</p>
            <Badge variant="outline">Branch</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Contact Numbers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Main Hotline:</span>
            <span className="font-medium">+92 300 1234567</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Umrah & Hajj:</span>
            <span className="font-medium">+92 301 1234567</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Emergency:</span>
            <span className="font-medium">+92 302 1234567</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Business Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Monday - Friday:</span>
            <span className="font-medium">9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Saturday:</span>
            <span className="font-medium">10:00 AM - 6:00 PM</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Sunday:</span>
            <span className="font-medium">Closed</span>
          </div>
          <Badge className="w-full justify-center">24/7 Emergency Support Available</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Quick Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm">WhatsApp: +92 300 1234567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">info@quicktravel.com.pk</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm">www.quicktravel.com.pk</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

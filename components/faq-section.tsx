"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, Plane, CreditCard, Shield, MapPin, Phone } from "lucide-react"

export function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [openItems, setOpenItems] = useState<number[]>([])

  const categories = [
    { id: "all", name: "All Questions", icon: Search },
    { id: "booking", name: "Booking & Payment", icon: CreditCard },
    { id: "flights", name: "Flights", icon: Plane },
    { id: "umrah", name: "Umrah & Hajj", icon: MapPin },
    { id: "insurance", name: "Travel Insurance", icon: Shield },
    { id: "support", name: "Customer Support", icon: Phone },
  ]

  const faqs = [
    {
      category: "booking",
      question: "How do I book a travel package?",
      answer:
        "You can book a travel package through our website, by calling our customer service at +92-21-1234567, or by visiting our office. Simply select your desired package, fill in the required details, and make the payment to confirm your booking.",
    },
    {
      category: "booking",
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, credit/debit cards (Visa, MasterCard), JazzCash, EasyPaisa, and cash payments at our office. For international bookings, we also accept PayPal and wire transfers.",
    },
    {
      category: "booking",
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking subject to our cancellation policy. Cancellations made 30+ days before departure incur 10% charges, 15-29 days incur 25% charges, and less than 15 days incur 50% charges. No refund for cancellations within 7 days of departure.",
    },
    {
      category: "flights",
      question: "Are flight tickets included in tour packages?",
      answer:
        "Yes, most of our tour packages include round-trip flight tickets from major Pakistani cities. The specific inclusions are clearly mentioned in each package description. For custom tours, flights can be added based on your preferences.",
    },
    {
      category: "flights",
      question: "Can I choose my preferred airline?",
      answer:
        "For premium and VIP packages, you can request specific airlines subject to availability and additional charges if applicable. For economy packages, we use our partner airlines to provide the best value for money.",
    },
    {
      category: "flights",
      question: "What if my flight gets delayed or cancelled?",
      answer:
        "In case of flight delays or cancellations by the airline, we will assist you with rebooking on the next available flight at no extra cost. We recommend purchasing travel insurance to cover additional expenses due to such disruptions.",
    },
    {
      category: "umrah",
      question: "What is included in Umrah packages?",
      answer:
        "Our Umrah packages include round-trip flights, accommodation in Makkah and Madinah, transportation between cities, visa processing, religious guidance, and group coordination. Meals and personal expenses are additional unless specified.",
    },
    {
      category: "umrah",
      question: "How long does visa processing take for Umrah?",
      answer:
        "Umrah visa processing typically takes 7-10 working days. We handle all visa formalities on your behalf. You need to provide a valid passport (minimum 6 months validity), photographs, and required documents.",
    },
    {
      category: "umrah",
      question: "Do you provide religious guidance during Umrah?",
      answer:
        "Yes, all our Umrah packages include experienced religious guides who will assist you with the rituals, provide spiritual guidance, and ensure you complete your pilgrimage according to Islamic teachings.",
    },
    {
      category: "insurance",
      question: "Is travel insurance mandatory?",
      answer:
        "While not mandatory for all destinations, we highly recommend travel insurance for all international trips. It's required for some countries and provides coverage for medical emergencies, trip cancellations, and lost baggage.",
    },
    {
      category: "insurance",
      question: "What does travel insurance cover?",
      answer:
        "Our travel insurance covers medical emergencies up to $100,000, trip cancellation/interruption, flight delays, lost/stolen baggage, personal liability, and emergency evacuation. Specific coverage details vary by plan.",
    },
    {
      category: "support",
      question: "How can I contact customer support?",
      answer:
        "You can reach our 24/7 customer support through phone (+92-21-1234567), WhatsApp (+92-300-1234567), email (info@quicktravel.com.pk), or live chat on our website. We also have offices in Karachi, Lahore, and Islamabad.",
    },
    {
      category: "support",
      question: "Do you provide support during travel?",
      answer:
        "Yes, we provide 24/7 support during your travel. You'll have emergency contact numbers and our local representatives will assist you at your destination. For group tours, a tour manager accompanies the group.",
    },
    {
      category: "booking",
      question: "What documents do I need for international travel?",
      answer:
        "For international travel, you need a valid passport (minimum 6 months validity), visa (if required), travel insurance, vaccination certificates (if required), and confirmed flight tickets. We assist with visa processing and provide a complete checklist.",
    },
    {
      category: "flights",
      question: "Can I earn frequent flyer miles?",
      answer:
        "Yes, you can earn frequent flyer miles on most of our flight bookings. Please provide your frequent flyer number during booking. Miles earning depends on the airline's policy and fare type.",
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            <Input
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full flex items-center gap-2"
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
              </Button>
            )
          })}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-medium pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No questions found matching your search.</p>
          </div>
        )}

        {/* Contact Support */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

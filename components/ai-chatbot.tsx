"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, X, Globe, Mic, MicOff, MapPin, Plane, DollarSign, Shield, Users } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  language?: "en" | "ur"
  image?: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI travel assistant. I can help you in English or Urdu. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      language: "en",
    },
    {
      id: "2",
      text: "سلام! میں آپ کا AI ٹریول اسسٹنٹ ہوں۔ میں انگریزی یا اردو میں آپ کی مدد کر سکتا ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
      isBot: true,
      timestamp: new Date(),
      language: "ur",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "ur">("en")
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = {
    en: [
      {
        text: "✈️ Flight Booking",
        response:
          "I can help you find and book flights to any destination worldwide. What's your departure city and where would you like to go?",
        icon: Plane,
      },
      {
        text: "🕌 Umrah Packages",
        response:
          "We offer comprehensive Umrah packages with different accommodation levels. Our packages include flights, hotels, transportation, and religious guidance. Would you like to see our Economy (PKR 185,000), Premium (PKR 285,000), or VIP (PKR 485,000) packages?",
        image: "/kaaba-makkah-background.jpg",
      },
      {
        text: "🗺️ Custom Tours",
        response:
          "Create your perfect tour with our custom tour builder! You can choose destinations, activities, accommodation preferences, and duration. Popular destinations include Northern Pakistan, Dubai, Turkey, and Europe. Where would you like to explore?",
        icon: MapPin,
      },
      {
        text: "🛡️ Travel Insurance",
        response:
          "Travel insurance is essential for your safety and peace of mind. We offer comprehensive coverage including medical emergencies, trip cancellation, lost baggage, and flight delays. Our plans start from PKR 2,500 per person.",
        icon: Shield,
      },
      {
        text: "💰 Best Deals",
        response:
          "Check out our current special offers! Dubai packages from PKR 85,000, Turkey tours from PKR 125,000, and domestic Northern Pakistan tours from PKR 45,000. Limited time offers available!",
        icon: DollarSign,
      },
      {
        text: "👥 Group Bookings",
        response:
          "Planning a group trip? We offer special discounts for groups of 10+ people. Family packages, corporate tours, and educational trips available with dedicated tour guides.",
        icon: Users,
      },
    ],
    ur: [
      {
        text: "✈️ فلائٹ بکنگ",
        response:
          "میں آپ کو دنیا بھر کی کسی بھی منزل کے لیے فلائٹ تلاش کرنے اور بک کرنے میں مدد کر سکتا ہوں۔ آپ کا روانگی شہر کیا ہے اور آپ کہاں جانا چاہتے ہیں؟",
        icon: Plane,
      },
      {
        text: "🕌 عمرہ پیکجز",
        response:
          "ہم مختلف قیام کی سطح کے ساتھ جامع عمرہ پیکجز پیش کرتے ہیں۔ ہمارے پیکجز میں فلائٹس، ہوٹلز، ٹرانسپورٹیشن، اور مذہبی رہنمائی شامل ہے۔ کیا آپ ہمارے اکانومی (PKR 185,000)، پریمیم (PKR 285,000)، یا وی آئی پی (PKR 485,000) پیکجز دیکھنا چاہیں گے؟",
        image: "/kaaba-makkah-background.jpg",
      },
      {
        text: "🗺️ کسٹم ٹورز",
        response:
          "ہمارے کسٹم ٹور بلڈر کے ساتھ اپنا بہترین ٹور بنائیں! آپ منزلات، سرگرمیاں، قیام کی ترجیحات، اور مدت منتخب کر سکتے ہیں۔ مقبول منزلات میں شمالی پاکستان، دبئی، ترکی، اور یورپ شامل ہیں۔ آپ کہاں جانا چاہتے ہیں؟",
        icon: MapPin,
      },
      {
        text: "🛡️ ٹریول انشورنس",
        response:
          "آپ کی حفاظت اور ذہنی سکون کے لیے ٹریول انشورنس ضروری ہے۔ ہم طبی ایمرجنسی، ٹرپ منسوخی، سامان کھونے، اور فلائٹ میں تاخیر سمیت جامع کوریج پیش کرتے ہیں۔ ہمارے پلانز PKR 2,500 فی شخص سے شروع ہوتے ہیں۔",
        icon: Shield,
      },
      {
        text: "💰 بہترین ڈیلز",
        response:
          "ہمارے موجودہ خصوصی آفرز دیکھیں! دبئی پیکجز PKR 85,000 سے، ترکی ٹورز PKR 125,000 سے، اور گھریلو شمالی پاکستان ٹورز PKR 45,000 سے۔ محدود وقت کے آفرز دستیاب ہیں!",
        icon: DollarSign,
      },
      {
        text: "👥 گروپ بکنگز",
        response:
          "گروپ ٹرپ کی منصوبہ بندی کر رہے ہیں؟ ہم 10+ لوگوں کے گروپس کے لیے خصوصی رعایت پیش کرتے ہیں۔ خاندانی پیکجز، کارپوریٹ ٹورز، اور تعلیمی سفر مخصوص ٹور گائیڈز کے ساتھ دستیاب ہیں۔",
        icon: Users,
      },
    ],
  }

  const generateBotResponse = (userMessage: string): { text: string; image?: string } => {
    const lowerMessage = userMessage.toLowerCase()

    // English responses
    if (currentLanguage === "en") {
      if (lowerMessage.includes("flight") || lowerMessage.includes("book") || lowerMessage.includes("ticket")) {
        return {
          text: "I'd be happy to help you with flight booking! ✈️\n\nPopular routes from Pakistan:\n• Karachi to Dubai\n• Lahore to London\n• Islamabad to Jeddah\n• Karachi to Bangkok\n\nFor the best rates and current availability, please contact us directly on WhatsApp. Our travel experts will provide you with personalized quotes and help you find the perfect flight!\n\n💬 Click the WhatsApp button to get instant quotes!",
        }
      }
      if (
        lowerMessage.includes("umrah") ||
        lowerMessage.includes("hajj") ||
        lowerMessage.includes("makkah") ||
        lowerMessage.includes("madinah")
      ) {
        return {
          text: "🕌 Our Umrah & Hajj packages are designed for a spiritual and comfortable journey:\n\n✨ ECONOMY PACKAGE\n• 3-star hotels near Haram\n• Shared transportation\n• Group guidance\n\n⭐ PREMIUM PACKAGE\n• 4-star hotels with Haram view\n• Private AC transport\n• Personal guide\n\n👑 VIP PACKAGE\n• 5-star luxury hotels\n• Private car with driver\n• 24/7 personal assistance\n\nAll packages include flights, visa, meals, and religious guidance. For current rates and availability, please contact us on WhatsApp for personalized quotes!\n\n💬 Get instant quote on WhatsApp!",
          image: "/kaaba-makkah-background.jpg",
        }
      }
      if (lowerMessage.includes("tour") || lowerMessage.includes("custom") || lowerMessage.includes("package")) {
        return {
          text: "🗺️ Create your perfect custom tour! Popular destinations:\n\n🏔️ NORTHERN PAKISTAN\n• Hunza Valley, Skardu, Fairy Meadows\n• 5-7 days packages available\n\n🏙️ DUBAI & UAE\n• City tours, desert safari, shopping\n• 3-5 days packages available\n\n🇹🇷 TURKEY\n• Istanbul, Cappadocia, Pamukkale\n• 7-10 days packages available\n\n🇪🇺 EUROPE\n• Multi-city tours available\n• 10-15 days packages available\n\nFor customized itineraries and current rates, contact us on WhatsApp. Our experts will create the perfect tour for your preferences and budget!\n\n💬 Contact us on WhatsApp for custom quotes!",
          image: "/northern-pakistan-tour.jpg",
        }
      }
      if (
        lowerMessage.includes("price") ||
        lowerMessage.includes("cost") ||
        lowerMessage.includes("cheap") ||
        lowerMessage.includes("budget")
      ) {
        return {
          text: "💰 We offer competitive rates for all our services:\n\n✈️ FLIGHTS\n• Domestic and international routes\n• Best available rates guaranteed\n\n🏨 TOUR PACKAGES\n• Northern Pakistan tours\n• International destinations\n• Custom itineraries available\n\n🕌 UMRAH & HAJJ\n• Multiple package options\n• Government approved rates\n\nFor current pricing and special offers, please contact us directly on WhatsApp. Our team will provide you with the most competitive quotes based on your specific requirements!\n\n💬 Get instant pricing on WhatsApp!",
        }
      }
      return {
        text: "I'm here to help with all your travel needs! 🌟\n\nI can assist you with:\n✈️ Flight bookings worldwide\n🕌 Umrah & Hajj packages\n🗺️ Custom tour planning\n🛡️ Travel insurance\n📋 Visa assistance\n💰 Best deals and offers\n\nFor detailed information, current rates, and personalized service, please contact us on WhatsApp. Our travel experts are ready to help you plan your perfect journey!\n\n💬 Contact us on WhatsApp for instant assistance!",
      }
    }

    // Urdu responses
    if (currentLanguage === "ur") {
      if (lowerMessage.includes("فلائٹ") || lowerMessage.includes("بک") || lowerMessage.includes("ٹکٹ")) {
        return {
          text: "میں آپ کو فلائٹ بکنگ میں خوشی سے مدد کروں گا! ✈️\n\nپاکستان سے مقبول راستے:\n• کراچی سے دبئی\n• لاہور سے لندن\n• اسلام آباد سے جدہ\n• کراچی سے بنکاک\n\nبہترین ریٹس اور موجودہ دستیابی کے لیے، براہ کرم ہم سے WhatsApp پر رابطہ کریں۔ ہمارے ٹریول ایکسپرٹس آپ کو ذاتی کوٹس فراہم کریں گے!\n\n💬 فوری کوٹس کے لیے WhatsApp بٹن دبائیں!",
        }
      }
      if (
        lowerMessage.includes("عمرہ") ||
        lowerMessage.includes("حج") ||
        lowerMessage.includes("مکہ") ||
        lowerMessage.includes("مدینہ")
      ) {
        return {
          text: "🕌 ہمارے عمرہ اور حج پیکجز روحانی اور آرام دہ سفر کے لیے ڈیزائن کیے گئے ہیں:\n\n✨ اکانومی پیکج\n• حرم کے قریب 3 ستارہ ہوٹلز\n• مشترکہ ٹرانسپورٹ\n• گروپ گائیڈنس\n\n⭐ پریمیم پیکج\n• حرم کے منظر والے 4 ستارہ ہوٹلز\n• پرائیویٹ AC ٹرانسپورٹ\n• ذاتی گائیڈ\n\n👑 وی آئی پی پیکج\n• 5 ستارہ لگژری ہوٹلز\n• ڈرائیور کے ساتھ پرائیویٹ کار\n• 24/7 ذاتی اسسٹنس\n\nموجودہ ریٹس اور دستیابی کے لیے WhatsApp پر رابطہ کریں!\n\n💬 WhatsApp پر فوری کوٹ حاصل کریں!",
          image: "/kaaba-makkah-background.jpg",
        }
      }
      return {
        text: "میں آپ کی تمام سفری ضروریات میں مدد کے لیے حاضر ہوں! 🌟\n\nمیں آپ کی مدد کر سکتا ہوں:\n✈️ دنیا بھر میں فلائٹ بکنگ\n🕌 عمرہ اور حج پیکجز\n🗺️ کسٹم ٹور پلاننگ\n🛡️ ٹریول انشورنس\n📋 ویزا اسسٹنس\n💰 بہترین ڈیلز اور آفرز\n\nتفصیلی معلومات اور ذاتی سروس کے لیے WhatsApp پر رابطہ کریں!\n\n💬 فوری مدد کے لیے WhatsApp پر رابطہ کریں!",
      }
    }

    return { text: "For detailed assistance and current rates, please contact us on WhatsApp! 💬" }
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
      language: currentLanguage,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI processing delay
    setTimeout(() => {
      const response = generateBotResponse(inputMessage)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        language: currentLanguage,
        image: response.image,
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply: { text: string; response: string; image?: string }) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.text,
      isBot: false,
      timestamp: new Date(),
      language: currentLanguage,
    }

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: reply.response,
      isBot: true,
      timestamp: new Date(),
      language: currentLanguage,
      image: reply.image,
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
  }

  const toggleVoiceInput = () => {
    if (!isListening) {
      // Start voice recognition (mock implementation)
      setIsListening(true)
      setTimeout(() => {
        setIsListening(false)
        setInputMessage("I need help with flight booking") // Mock voice input
      }, 3000)
    } else {
      setIsListening(false)
    }
  }

  return (
    <>
      {/* AI Chatbot Popup */}
      {isOpen && (
        <Card className="fixed bottom-24 left-4 w-96 h-[600px] z-50 animate-slide-in-up shadow-2xl flex flex-col border-2 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5 animate-pulse" />
                AI Travel Assistant
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentLanguage(currentLanguage === "en" ? "ur" : "en")}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {currentLanguage === "en" ? "اردو" : "EN"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit bg-primary-foreground/20 text-primary-foreground">
              {currentLanguage === "en" ? "🟢 Online • Instant Response" : "🟢 آن لائن • فوری جواب"}
            </Badge>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[85%] p-3 rounded-lg ${
                        message.isBot
                          ? "bg-muted text-foreground border border-border"
                          : "bg-primary text-primary-foreground"
                      } ${message.language === "ur" ? "text-right" : "text-left"}`}
                      style={{ direction: message.language === "ur" ? "rtl" : "ltr" }}
                    >
                      {message.image && (
                        <img
                          src={message.image || "/placeholder.svg"}
                          alt="Travel destination"
                          className="w-full h-32 object-cover rounded-md mb-2"
                        />
                      )}
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <span className="text-xs opacity-70 block mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted border border-border p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-300"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-600"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-muted/30">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickReplies[currentLanguage].slice(0, 6).map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-auto p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200 border-primary/20"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply.text}
                  </Button>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={currentLanguage === "en" ? "Type your message..." : "اپنا پیغام ٹائپ کریں..."}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border-primary/20 focus:border-primary"
                  style={{ direction: currentLanguage === "ur" ? "rtl" : "ltr" }}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleVoiceInput}
                  className={`${isListening ? "bg-red-100 text-red-600 border-red-300" : "border-primary/20 hover:bg-primary hover:text-primary-foreground"} transition-all duration-200`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button onClick={sendMessage} size="icon" className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-primary-foreground/20"
        size="icon"
      >
        <Bot className="h-7 w-7 text-primary-foreground animate-pulse" />
      </Button>
    </>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CeoMessageHero } from "@/components/ceo-message-hero"
import { CeoMessage } from "@/components/ceo-message"

export default function CeoMessagePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CeoMessageHero />
      <CeoMessage />
      <Footer />
    </div>
  )
}

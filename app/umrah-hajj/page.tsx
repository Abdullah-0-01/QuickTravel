import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UmrahPackages } from "@/components/umrah-packages"
import { HajjPackages } from "@/components/hajj-packages"
import { PilgrimageGuide } from "@/components/pilgrimage-guide"
import { UmrahHajjHero } from "@/components/umrah-hajj-hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UmrahHajjPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <UmrahHajjHero />

      {/* Package Selection Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Choose Your Sacred Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Carefully crafted packages for your spiritual pilgrimage with complete guidance and support
            </p>
          </div>

          <Tabs defaultValue="umrah" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="umrah" className="text-lg py-3">
                Umrah Packages
              </TabsTrigger>
              <TabsTrigger value="hajj" className="text-lg py-3">
                Hajj Packages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="umrah">
              <UmrahPackages />
            </TabsContent>

            <TabsContent value="hajj">
              <HajjPackages />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <PilgrimageGuide />

      <Footer />
    </div>
  )
}

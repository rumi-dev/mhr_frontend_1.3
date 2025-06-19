"use client"

import { HeroSection } from "@/components/buyers/HeroSection"
import { BuyingGuideSection } from "@/components/buyers/BuyingGuideSection"
import { AdditionalInfoSection } from "@/components/buyers/AdditionalInfoSection"

export default function BuyersPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BuyingGuideSection />
      <AdditionalInfoSection />
    </div>
  )
}

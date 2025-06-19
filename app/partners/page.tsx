"use client"

import { HeroSection } from "@/components/partners/HeroSection"
import { TopPartnersSection } from "@/components/partners/TopPartnersSection"
import { PartnersGridSection } from "@/components/partners/PartnersGridSection"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TopPartnersSection />
      <PartnersGridSection />
    </div>
  )
}

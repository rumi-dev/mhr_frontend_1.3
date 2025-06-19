"use client"

import { HeroSection } from "@/components/about/HeroSection"
import { AboutContentSection } from "@/components/about/AboutContentSection"
import { CTASection } from "@/components/about/CTASection"
import { ProjectsSection } from "@/components/about/ProjectsSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutContentSection />
      <CTASection />
      <ProjectsSection />
    </div>
  )
}

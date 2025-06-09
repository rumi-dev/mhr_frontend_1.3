"use client"

import { motion } from "framer-motion"
import PropertyCard from "@/components/ui/PropertyCard"
import type { Property } from "@/types"

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Villa",
    price: "$1,200,000",
    location: "Palm Jumeirah, Dubai",
    description:
      "Stunning 5-bedroom villa with private beach access, infinity pool, and panoramic sea views in one of Dubai's most prestigious locations.",
    image: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmainpageFeature1.12345678.png&w=1200&q=75",
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: "$850,000",
    location: "Downtown Dubai",
    description:
      "Contemporary 3-bedroom apartment with Burj Khalifa views, high-end finishes, and access to world-class amenities in the heart of the city.",
    image: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmainpageFeature2.12345678.png&w=1200&q=75",
  },
  {
    id: "3",
    title: "Waterfront Mansion",
    price: "$3,500,000",
    location: "Emirates Hills",
    description:
      "Exclusive 7-bedroom mansion with private marina, home theater, and expansive outdoor entertaining areas in a gated community.",
    image: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmainpageFeature3.12345678.png&w=1200&q=75",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">Featured Projects</h2>
          <p className="text-white">Showcasing The Best Deal Of Mystic Heaven Realty</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import PropertyCard from "@/components/ui/PropertyCard"
import type { Property } from "@/types"

import mainpageFeature1 from "@/app/assets/mainpageFeature1.png"
import mainpageFeature2 from "@/app/assets/mainpageFeature2.png"
import mainpageFeature3 from "@/app/assets/mainpageFeature3.png"

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Villa",
    price: "$1,200,000",
    location: "Palm Jumeirah, Dubai",
    description:
      "Stunning 5-bedroom villa with private beach access, infinity pool, and panoramic sea views in one of Dubai's most prestigious locations.",
    image: mainpageFeature1,
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: "$850,000",
    location: "Downtown Dubai",
    description:
      "Contemporary 3-bedroom apartment with Burj Khalifa views, high-end finishes, and access to world-class amenities in the heart of the city.",
    image: mainpageFeature2,
  },
  {
    id: "3",
    title: "Waterfront Mansion",
    price: "$3,500,000",
    location: "Emirates Hills",
    description:
      "Stunning 5-bedroom villa with private beach access, infinity pool, and panoramic sea views in one of Dubai's most prestigious locations.",
    image: mainpageFeature3,
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-black">
      <div className="">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row items-center">
            <div className="h-3 bg-gradient-to-r from-[#D9D9D9] to-[#000000] flex-1"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFAE6A] mx-2 sm:mx-4 md:mx-6 mb-2">Featured Projects</h2>
            <div className="h-3 bg-gradient-to-r from-[#000000] to-[#D9D9D9] flex-1"></div>
          </div>
          <p className="text-white text-base sm:text-lg md:text-xl mt-2">Showcasing The Best Deal Of Mystic Heaven Realty</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto px-4 sm:px-6 lg:px-8">
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

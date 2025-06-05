"use client"

import { motion } from "framer-motion"
import PropertyCard from "@/components/ui/PropertyCard"
import type { Property } from "@/types"

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Title",
    price: "Price",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    title: "Title",
    price: "Price",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    title: "Title",
    price: "Price",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=300&width=400",
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

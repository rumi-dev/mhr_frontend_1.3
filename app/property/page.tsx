"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"
import Link from "next/link"
import propertiesHeroImage from "@/app/assets/propertiesHeroImage.png"
import propertyimage1 from "@/app/assets/propertyimage1.png"
import propertyimage2 from "@/app/assets/propertyimage2.png"
import propertyimage3 from "@/app/assets/propertyimage3.png"
import propertyimage4 from "@/app/assets/propertyimage4.png"

const properties = [
  {
    id: "1",
    title: "124 main ad.",
    location: "New York, New York, NY",
    price: "$300000",
    type: "Villa",
    image: propertyimage1,
    developer: "EMAAR",
  },
  {
    id: "2",
    title: "124 main ad.",
    location: "New York, New York, NY",
    price: "$300000",
    type: "Villa",
    image: propertyimage2,
    developer: "EMAAR",
  },
  {
    id: "3",
    title: "124 main ad.",
    location: "New York, New York, NY",
    price: "$300000",
    type: "Villa",
    image: propertyimage3,
    developer: "EMAAR",
  },
  {
    id: "4",
    title: "124 main ad.",
    location: "New York, New York, NY",
    price: "$300000",
    type: "Villa",
    image: propertyimage4,
    developer: "EMAAR",
  },
]

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState("Dubai")
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    priceRange: [300000, 500000],
    propertyTypes: [],
    bedrooms: [],
    availability: [],
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={propertiesHeroImage}
            alt="City Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.p
            className="text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mystic Heaven Reality
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            View Properties
          </motion.h1>

          <motion.div
            className="flex justify-center space-x-2 mb-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "Dubai" ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setActiveTab("Dubai")}
            >
              Dubai
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === "India" ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setActiveTab("India")}
            >
              India
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Link
              href="/property/map"
              className="bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white px-8 py-3 rounded-md flex items-center mx-auto w-fit transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View Properties Map
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold mb-6">Filters</h3>

                {/* Locations */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Locations</h4>
                  {/* Location checkboxes would go here */}
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">$300000</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded">
                      <div className="h-full bg-[var(--primary)] rounded" style={{ width: "60%" }}></div>
                    </div>
                    <span className="text-sm">$500000</span>
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Property Type</h4>
                  <div className="space-y-2">
                    {["Apartments", "Villa", "Penthouse", "Town House"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bedroom */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Bedroom</h4>
                  <div className="space-y-2">
                    {["1", "2", "3", "4+"].map((bed) => (
                      <label key={bed} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{bed}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Availability</h4>
                  <div className="space-y-2">
                    {["Under Constructions", "New", "Re-Sale"].map((avail) => (
                      <label key={avail} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{avail}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={350}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {property.developer}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{property.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">{property.price}</span>
                        <span className="text-gray-600">{property.type}</span>
                      </div>
                      <Link
                        href={`/property/viewdetails/${property.id}`}
                        className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white py-2 px-4 rounded-md transition-colors block text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

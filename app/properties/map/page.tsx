"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Search, Phone, Mail, MessageCircle } from "lucide-react"
import propertyimage1 from "@/app/assets/propertyimage1.png"
import propertyimage2 from "@/app/assets/propertyimage2.png"
import propertyimage3 from "@/app/assets/propertyimage3.png"
import propertyimage4 from "@/app/assets/propertyimage4.png"
import graphwave from "@/app/assets/graphwave.png"

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

export default function ViewDetailsPage() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [activeTab, setActiveTab] = useState("Dubai")

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Search */}
      <section className="relative py-16 text-white">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-purple-900 to-black opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center">
            <div className="scale-125">
              <Image 
                src={graphwave} 
                alt="Graph Wave" 
                width={300}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Search className="w-6 h-6" />
              <input
                type="text"
                placeholder="Enter City, Community or Area"
                className="bg-white/10 border border-white/30 rounded-md px-4 py-3 text-white placeholder-white/70 w-96"
              />
              <select className="bg-black/5 border border-white/30 rounded-md px-4 py-3 text-white">
                <option >Villa</option>
                <option>Apartment</option>
                <option>Penthouse</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px] w-full">
            {/* Map Section */}
            <div className="relative w-full h-full">
              <h2 className="text-2xl font-bold text-white mb-4">LUXURY PROPERTIES</h2>

              {/* Location Tabs */}
              <div className="flex space-x-2 mb-4">
                <button
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeTab === "Dubai" ? "bg-pink-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                  onClick={() => setActiveTab("Dubai")}
                >
                  Dubai
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeTab === "India" ? "bg-pink-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                  onClick={() => setActiveTab("India")}
                >
                  India
                </button>
              </div>

              {/* Map */}
              <div className="relative h-[500px] bg-gray-800 rounded-lg overflow-hidden">
                <Image 
                  src={require('@/app/assets/viewmapPageMap.png')} 
                  alt="Map" 
                  fill 
                  className="object-cover" 
                />
               
              </div>
            </div>

            {/* Properties List */}
            <div className="space-y-4 overflow-y-auto pr-2">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex w-full">
                    <div className="w-1/3 flex-shrink-0">
                      <div className="relative w-full h-32">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="font-bold mb-1">{property.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold">{property.price}</span>
                        <span className="text-gray-600">{property.type}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-primary-700 text-white p-2 rounded-md hover:bg-primary-800 transition-colors">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="bg-primary-700 text-white p-2 rounded-md hover:bg-primary-800 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

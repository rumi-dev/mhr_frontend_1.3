"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { motion } from "framer-motion"
import mainpagehero1 from "@/app/assets/mainpagehero1.png"
import mainpagehero2 from "@/app/assets/mainpagehero2.png"
import mainpagehero3 from "@/app/assets/mainpagehero3.png"

const heroImages = [
  {
    id: 1,
    src: mainpagehero1,
    alt: "Luxury Villa with Pool",
  },
  {
    id: 2,
    src: mainpagehero2,
    alt: "Modern High-rise Apartment",
  },
  {
    id: 3,
    src: mainpagehero3,
    alt: "City View Property",
  },
]

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Dubai")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Auto-cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index)
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images with Smooth Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === activeImageIndex ? 1 : 0,
              scale: index === activeImageIndex ? 1 : 1.05,
              zIndex: index === activeImageIndex ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              transformOrigin: 'center',
              willChange: 'transform, opacity'
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              priority
              className="object-cover"
              style={{
                willChange: 'transform, opacity',
              }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 text-white">
            <motion.p
              className="text-2xl md:text-3xl mb-2 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Mystic Heaven Reality
            </motion.p>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your Dream <span className="text-[#5E2D4F]">Home</span>, Awaits
            </motion.h1>

            <motion.div
              className="flex space-x-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                className={`px-6 py-2 rounded-t-md transition-all duration-300 ${
                  activeTab === "Dubai"
                    ? "bg-[#5E2D4F] text-white shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
                onClick={() => setActiveTab("Dubai")}
              >
                Dubai
              </button>
              <button
                className={`px-6 py-2 rounded-t-md transition-all duration-300 ${
                  activeTab === "India"
                    ? "bg-[#5E2D4F] text-white shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
                onClick={() => setActiveTab("India")}
              >
                India
              </button>
            </motion.div>

            <motion.form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-2 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <input
                type="text"
                placeholder="Enter City, Community or Area"
                className="flex-grow px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#5E2D4F]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#5E2D4F] hover:bg-[#4A2440] text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </motion.form>
          </div>

          {/* Single Column Image Gallery with Square Images */}
          <div className="hidden lg:flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">
            {heroImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 w-40 h-40 ${
                  index === activeImageIndex
                    ? "ring-2 ring-[#5E2D4F] shadow-2xl scale-105"
                    : "hover:scale-102 hover:shadow-lg"
                }`}
                onClick={() => handleImageClick(index)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: index === activeImageIndex ? 1.05 : 1.02 }}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                {index === activeImageIndex && (
                  <motion.div
                    className="absolute inset-0 bg-[#5E2D4F]/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

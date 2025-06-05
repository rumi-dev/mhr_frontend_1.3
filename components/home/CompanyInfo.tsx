"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const stats = [
  { label: "Successful Projects", value: "1000+" },
  { label: "Happy Clients", value: "5000+" },
  { label: "Properties Sold", value: "10000+" },
]

const galleryImages = [
  {
    id: 1,
    src: "/images/dubai-waterfront.png",
    alt: "Dubai Waterfront Development",
  },
  {
    id: 2,
    src: "/images/emaar-tower.png",
    alt: "EMAAR Tower Development",
  },
  {
    id: 3,
    src: "/images/modern-architecture.png",
    alt: "Modern Architecture",
  },
  {
    id: 4,
    src: "/images/city-view-property.png",
    alt: "City View Properties",
  },
]

export default function CompanyInfo() {
  return (
    <>
      {/* Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Logo Section - 40% (2 columns) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Mystic Heaven Reality Logo"
                  width={200}
                  height={200}
                  className="mb-6"
                />
              </div>
            </motion.div>

            {/* Text Content Section - 60% (3 columns) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Mystic Heaven Reality</h2>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Mystic Haven Reality is a trusted channel partner, helping buyers find apartments, villas, and luxury
                homes from top developers like Sobha, Alaziz, Damac, and highest. We make property buying easy,
                transparent, and hassle-free by offering expert guidance and exclusive access to premium real estate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">{stat.value}</p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Our Portfolio</h2>
            <p className="text-gray-600 text-lg">Showcasing our premium real estate developments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">
            {/* Left Column - 30% and 70% heights */}
            <div className="flex flex-col gap-6 h-full">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg group"
                style={{ height: "30%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[0].src || "/placeholder.svg"}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg group"
                style={{ height: "70%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[1].src || "/placeholder.svg"}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Right Column - 50% and 50% heights */}
            <div className="flex flex-col gap-6 h-full">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg group"
                style={{ height: "50%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[2].src || "/placeholder.svg"}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg group"
                style={{ height: "50%" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[3].src || "/placeholder.svg"}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const stats = [
  { label: "Successful Projects", value: "1000+" },
  { label: "Happy Clients", value: "5000+" },
  { label: "Properties Sold", value: "10000+" },
]

import mainpagecompanyinfo1 from "@/app/assets/mainpagecompanyinfo1.png"
import mainpagecompanyinfo2 from "@/app/assets/mainpagecompanyinfo2.png"
import mainpagecompanyinfo3 from "@/app/assets/mainpagecompanyinfo3.png"
import mainpagecompanyinfo4 from "@/app/assets/mainpagecompanyinfo4.png"
import maskedLogo from "@/app/assets/maskedlogo.png"

const galleryImages = [
  {
    id: 1,
    src: mainpagecompanyinfo1,
    alt: "Luxury Development",
  },
  {
    id: 2,
    src: mainpagecompanyinfo2,
    alt: "Modern Architecture",
  },
  {
    id: 3,
    src: mainpagecompanyinfo3,
    alt: "Luxury Interiors",
  },
  {
    id: 4,
    src: mainpagecompanyinfo4,
    alt: "Premium Amenities",
  },
]

export default function CompanyInfo() {
  return (
    <>
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Section - Logo */}
            <motion.div
              className="lg:col-span-4 xl:col-span-3 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full max-w-xs">
                <Image
                  src={maskedLogo}
                  alt="Mystic Heaven Reality Logo"
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Section - Content */}
            <motion.div
              className="lg:col-span-8 xl:col-span-9 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[var(--primary)]">
                Mystic Heaven Reality
              </h2>

              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-700">
                Mystic Haven Reality is a trusted channel partner, helping buyers find apartments, villas, and luxury
                homes from top developers like Sobha, Alaziz, Damac, and highest. We make property buying easy,
                transparent, and hassle-free by offering expert guidance and exclusive access to premium real estate.
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[var(--primary)] px-4 sm:px-6 py-6 sm:py-8 rounded-lg">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="px-2 py-4 sm:py-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white/90">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 h-auto md:h-[500px] lg:h-[600px]">
            {/* Left Column */}
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              <motion.div
                className="relative rounded-lg shadow-lg group overflow-hidden"
                style={{ height: '30%', minHeight: '180px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              <motion.div
                className="relative rounded-lg shadow-lg group overflow-hidden"
                style={{ height: '70%', minHeight: '300px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              <motion.div
                className="relative rounded-lg shadow-lg group overflow-hidden"
                style={{ height: '50%', minHeight: '250px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                className="relative rounded-lg shadow-lg group overflow-hidden"
                style={{ height: '50%', minHeight: '250px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

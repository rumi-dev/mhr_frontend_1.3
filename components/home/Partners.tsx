"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Partner } from "@/types"

const partners: Partner[] = [
  {
    id: "1",
    name: "Sobha Realty",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners1.12345678.png&w=400&q=75",
  },
  {
    id: "2",
    name: "Danube Properties",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners2.12345678.png&w=400&q=75",
  },
  {
    id: "3",
    name: "Damac",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners3.12345678.png&w=400&q=75",
  },
  {
    id: "4",
    name: "Emaar",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners4.12345678.png&w=400&q=75",
  },
  {
    id: "5",
    name: "Arada",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners5.12345678.png&w=400&q=75",
  },
  {
    id: "6",
    name: "Nakheel",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners6.12345678.png&w=400&q=75",
  },
  {
    id: "7",
    name: "Meraas",
    logo: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourpartners7.12345678.png&w=400&q=75",
  },
]

export default function Partners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Partners
        </motion.h2>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          {/* Horizontal Scrolling Container */}
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-48 h-24 relative">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for Visual Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Auto-scroll Animation */}
        <motion.div
          className="flex gap-8 overflow-hidden mt-8"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div key={`auto-${index}`} className="flex-shrink-0 opacity-30">
              <div className="w-32 h-16 relative">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

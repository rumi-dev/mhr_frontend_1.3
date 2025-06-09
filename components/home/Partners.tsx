"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Partner } from "@/types"

import ourpartners1 from "@/app/assets/ourpartners1.png"
import ourpartners2 from "@/app/assets/ourpartners2.png"
import ourpartners3 from "@/app/assets/ourpartners3.png"
import ourpartners4 from "@/app/assets/ourpartners4.png"
import ourpartners5 from "@/app/assets/ourpartners5.png"
import ourpartners6 from "@/app/assets/ourpartners6.png"
import ourpartners7 from "@/app/assets/ourpartners7.png"

const partners: Partner[] = [
  {
    id: "1",
    name: "Sobha Realty",
    logo: ourpartners1,
  },
  {
    id: "2",
    name: "Danube Properties",
    logo: ourpartners2,
  },
  {
    id: "3",
    name: "Damac",
    logo: ourpartners3,
  },
  {
    id: "4",
    name: "Emaar",
    logo: ourpartners4,
  },
  // {
  //   id: "5",
  //   name: "Arada",
  //   logo: ourpartners5,
  // },
  // {
  //   id: "6",
  //   name: "Nakheel",
  //   logo: ourpartners6,
  // },
  {
    id: "7",
    name: "Meraas",
    logo: ourpartners7,
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
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-12 w-[calc(100%-2rem)] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0 bg-white rounded-lg hover:shadow-lg transition-all duration-300 p-4 sm:p-6 group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-48 h-24 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter  group-hover:grayscale-0 transition-all duration-300"
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
        {/* <motion.div
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
        </motion.div> */}
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

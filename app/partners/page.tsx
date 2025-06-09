"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ourpartners1 from "@/app/assets/ourpartners1.png"
import ourpartners2 from "@/app/assets/ourpartners2.png"
import ourpartners3 from "@/app/assets/ourpartners3.png"
import ourpartners5 from "@/app/assets/ourpartners5.png"
import ourpartners6 from "@/app/assets/ourpartners6.png"
import ourpartners7 from "@/app/assets/ourpartners7.png"
import ourpartners4 from "@/app/assets/ourpartners4.png"
import partnerpageheroimage from "@/app/assets/partnerpageheroimage.png"

const partners = [ 
  {
    id: "1",
    name: "Danube Properties",
    logo: ourpartners1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    name: "Sobha Realty",
    logo: ourpartners2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "Damac",
    logo: ourpartners3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    name: "Arada",
    logo: ourpartners5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "5",
    name: "Emaar",
    logo: ourpartners4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "6",
    name: "Danube Properties",
    logo: ourpartners6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const topPartners = [
  { name: "Danube Properties", logo: ourpartners1 },
  { name: "Sobha Realty", logo: ourpartners2 },
  { name: "Damac", logo: ourpartners3 },
  { name: "Arada", logo: ourpartners5 },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={partnerpageheroimage}
            alt="Our Partners"
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
            Our Partners
          </motion.h1>
        </div>
      </section>

      {/* Top Partners Logos */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 overflow-x-auto">
            {topPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex flex-col h-full bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-grow">
                  <div className="text-center mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={80}
                      className="mx-auto mb-4"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{partner.description}</p>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3 px-4 rounded-md transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

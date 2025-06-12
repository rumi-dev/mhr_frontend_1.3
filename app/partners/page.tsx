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
    name: "Sobha Realty",
    logo: ourpartners1,
    description:
      "Sobha Realty is a leading luxury real estate developer known for its commitment to quality and innovation in the real estate sector. With a strong presence in the UAE, Sobha Realty has delivered numerous landmark projects that redefine luxury living.",
  },
  {
    id: "2",
    name: "Danube Properties",
    logo: ourpartners2,
    description:
      "Danube Properties is a leading private master developer in the UAE, known for its innovative and high-quality real estate projects. The company has established itself as a trusted name in the industry with a diverse portfolio of residential and commercial properties.",
  },
  {
    id: "3",
    name: "Damac",
    logo: ourpartners3,
    description:
      "DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002, delivering iconic developments. The company is known for its high-quality properties and strategic locations across the region.",
  },
  {
    id: "4",
    name: "Emaar",
    logo: ourpartners4,
    description:
      "Emaar Properties is one of the world's most valuable and admired real estate development companies. With proven competencies in property, shopping malls & retail, and hospitality & leisure, Emaar has reshaped the global property landscape.",
  },
  {
    id: "7",
    name: "Meraas",
    logo: ourpartners7,
    description:
      "Meraas is a Dubai-based holding company that develops and manages an extensive portfolio of companies in the design, hospitality, real estate, and food and beverage sectors. Meraas is known for its innovative approach to urban development and community building.",
  },
]

const topPartners = [
  { name: "Sobha Realty", logo: ourpartners1 },
  { name: "Danube Properties", logo: ourpartners2 },
  { name: "Damac", logo: ourpartners3 },
  { name: "Emaar", logo: ourpartners4 },
  { name: "Meraas", logo: ourpartners7 },
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

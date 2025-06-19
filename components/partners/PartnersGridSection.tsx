"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import partnersLogo1 from "@/app/assets/ourpartners1.png"
import partnersLogo2 from "@/app/assets/partners logo/damac.png"
import partnersLogo4 from "@/app/assets/partners logo/danube.png"
import partnersLogo5 from "@/app/assets/ourpartners4.png"


const partners = [
  {
    id: "1",
    name: "Sobha Realty",
    logo: partnersLogo1,
    description:
      "Sobha Realty is a leading luxury real estate developer known for its commitment to quality and innovation in the real estate sector. With a strong presence in the UAE, Sobha Realty has delivered numerous landmark projects that redefine luxury living.",
  },
  {
    id: "2",
    name: "Danube Properties",
    logo: partnersLogo2,
    description:
      "Danube Properties is a leading private master developer in the UAE, known for its innovative and high-quality real estate projects. The company has established itself as a trusted name in the industry with a diverse portfolio of residential and commercial properties.",
  },
  {
    id: "3",
    name: "Damac",
    logo: partnersLogo2,
    description:
      "DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002, delivering iconic developments. The company is known for its high-quality properties and strategic locations across the region.",
  },
  {
    id: "4",
    name: "Emaar",
    logo: partnersLogo4,
    description:
      "Emaar Properties is one of the world's most valuable and admired real estate development companies. With proven competencies in property, shopping malls & retail, and hospitality & leisure, Emaar has reshaped the global property landscape.",
  },
  {
    id: "7",
    name: "Meraas",
    logo: partnersLogo5,
    description:
      "Meraas is a Dubai-based holding company that develops and manages an extensive portfolio of companies in the design, hospitality, real estate, and food and beverage sectors. Meraas is known for its innovative approach to urban development and community building.",
  },
  {
    id: "5",
    name: "Meraas",
    logo: partnersLogo5,
    description:
      "Meraas is a Dubai-based holding company that develops and manages an extensive portfolio of companies in the design, hospitality, real estate, and food and beverage sectors. Meraas is known for its innovative approach to urban development and community building.",
  },
]

export const PartnersGridSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex flex-col h-full bg-white rounded-lg p-6 shadow-lg pt-20 pb-14"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-grow">
                <div className="text-center mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="mx-auto mb-4"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{partner.description}</p>
              </div>
              <div className="mt-4">
                <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white py-3 px-4 rounded-full transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

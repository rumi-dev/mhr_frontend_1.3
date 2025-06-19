"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import partnersLogo1 from "@/app/assets/partners logo/arada.png"
import partnersLogo2 from "@/app/assets/partners logo/damac.png"
import partnersLogo3 from "@/app/assets/partners logo/danube.png"
import partnersLogo5 from "@/app/assets/partners logo/sobha.png"

const topPartners = [
  { name: "Sobha Realty", logo: partnersLogo1 },
  { name: "Danube Properties", logo: partnersLogo2 },
  { name: "Damac", logo: partnersLogo3 },
  { name: "Meraas", logo: partnersLogo5 },
]

export const TopPartnersSection = () => {
  return (
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
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={60}
                className=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

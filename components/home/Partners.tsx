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
  // {
  //   id: "4",
  //   name: "Emaar",
  //   logo: ourpartners4,
  // },
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
  // {
  //   id: "7",
  //   name: "Meraas",
  //   logo: ourpartners7,
  // },
]

export default function Partners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className=" ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Partners
        </motion.h2>

       
        <div className="flex justify-center gap-4 sm:gap-6 mt-8 overflow-x-auto px-2 sm:px-4 py-2 sm:py-4 snap-x snap-mandatory">
          {partners.map((partner, index) => (
                <Image key={index}
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
              
                  className="object-contain w-32 sm:w-40 h-20 opacity-80 hover:opacity-100 transition-opacity duration-300 snap-start shrink-0"
                />
          ))}
        </div>
      </div>

    
    </section>
  )
}

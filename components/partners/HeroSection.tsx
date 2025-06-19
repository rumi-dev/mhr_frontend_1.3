"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import partnerpageheroimage from "@/app/assets/partnerpageheroimage.png"

export const HeroSection = () => {
  return (
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
  )
}

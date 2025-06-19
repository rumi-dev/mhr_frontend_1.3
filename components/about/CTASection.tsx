import { motion } from "framer-motion"
import Image from "next/image"
import aboutusPage3rdImage from "@/app/assets/aboutusPage3rdImage.png"

export const CTASection = () => {
  return (
    <section className="relative py-16 text-white text-center m-10">
      <div className="absolute inset-0 z-0">
        <Image src={aboutusPage3rdImage} alt="Building Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Dream Home Is Just A Step Away Let Mystic Haven Realty Guide You
          </h2>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

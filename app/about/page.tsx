"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projectImages = [
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
  "/placeholder.svg?height=200&width=300",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="City Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Gateway To Luxury Living
          </motion.h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <p className="text-xl">Guiding Your Home</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Building Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Company */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Company</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
                pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus
                sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam
                eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat
                pharetra vitae sit amet enim.
              </p>
            </motion.div>

            {/* Our Team */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
                pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus
                sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam
                eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat
                pharetra vitae sit amet enim.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
                pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus
                sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam
                eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat
                pharetra vitae sit amet enim.
              </p>
            </motion.div>

            {/* Our Commitments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Commitments</h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
                pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus
                sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam
                eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat
                pharetra vitae sit amet enim.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
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

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Explore New Off Plan Project</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
              pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

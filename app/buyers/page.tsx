"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const buyingSteps = [
  {
    step: 1,
    title: "Define Your Requirements",
    description: "Decide on location, budget, and property type (apartment, villa, townhouse)",
    subtext: "Consider future investment value and lifestyle preferences.",
    color: "text-pink-400",
  },
  {
    step: 2,
    title: "Explore Properties",
    description: "Browse listings from top developers like Sobha, Akadia, Damac, and Nakheel",
    subtext: "Schedule property viewings with our expert real estate agents.",
    color: "text-pink-400",
  },
  {
    step: 3,
    title: "Secure Financing",
    description: "Choose between a bank mortgage or developer payment plans",
    subtext: "Submit required documents for loan approval",
    color: "text-pink-400",
  },
  {
    step: 4,
    title: "Make an Offer & Sign the Agreement",
    description: "Negotiate the price and sign a Sales Purchase Agreement (SPA)",
    subtext: "& Pay the initial deposit (usually 5-10% of the property price)",
    color: "text-pink-400",
  },
  {
    step: 5,
    title: "Complete Legal & Payment Processes",
    description: "Arrange property valuation and necessary approvals",
    subtext: "Pay the remaining amount as per the agreed plan.",
    color: "text-pink-400",
  },
  {
    step: 6,
    title: "Property Handover & Registration",
    description: "Arrange property valuation and necessary approvals",
    subtext: "Pay the remaining amount as per the agreed plan.",
    color: "text-pink-400",
  },
]

export default function BuyersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Dubai Skyline"
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
            For Buyers
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Your Guide to buying your dream home
          </motion.p>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Buying Guide</h2>
          </motion.div>

          <div className="space-y-12">
            {buyingSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 ${item.color}`}>
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <p className="text-gray-400 text-sm">{item.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Financing Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-pink-400">Financing Options</h2>
              <div className="space-y-4">
                <p>Easy Installment Plans-Spread payments over months or years</p>
                <p>Post-Handover Payment Options-Pay after moving in</p>
                <p>Zero Interest Plans-Some properties offer 0% interest financing</p>
              </div>
            </motion.div>

            {/* Need Assistance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-pink-400">Need Assistance?</h2>
              <p>Our experts can guide you in choosing the best financing option based on your budget and needs.</p>
            </motion.div>

            {/* Working with Mystic Haven Reality */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-pink-400">Working with Mystic Haven Reality</h2>
              <div className="space-y-4">
                <p>
                  Exclusive Listings-Access to premium properties from Sobha, Akadia, Damac, and Nakheel Expert
                  Advice-Personalized guidance from real estate professionals
                </p>
                <p>Seamless Process-From property selection to final purchase</p>
                <p>Financing Assistance-Help with mortgages and payment plans</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

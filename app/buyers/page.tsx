"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import forBuyersHeroImg from "@/app/assets/forBuyersHeroImg.png"
import forBuyersGuideImage from "@/app/assets/forBuyersGuideImage.png"

const buyingSteps = [
  {
    step: 1,
    title: "Define Your Requirements",
    description: "Decide on location, budget, and property type (apartment, villa, townhouse)",
    subtext: "Consider future investment value and lifestyle preferences.",
    color: "text-[var(--primary)]",
  },
  {
    step: 2,
    title: "Explore Properties",
    description: "Browse listings from top developers like Sobha, Akadia, Damac, and Nakheel",
    subtext: "Schedule property viewings with our expert real estate agents.",
    color: "text-[var(--primary)]",
  },
  {
    step: 3,
    title: "Secure Financing",
    description: "Choose between a bank mortgage or developer payment plans",
    subtext: "Submit required documents for loan approval",
    color: "text-[var(--primary)]",
  },
  {
    step: 4,
    title: "Make an Offer & Sign the Agreement",
    description: "Negotiate the price and sign a Sales Purchase Agreement (SPA)",
    subtext: "& Pay the initial deposit (usually 5-10% of the property price)",
    color: "text-[var(--primary)]",
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
    color: "text-[var(--primary)]",
  },
]

export default function BuyersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={forBuyersHeroImg}
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
          <Image 
            src={forBuyersGuideImage} 
            alt="Buying Guide Background" 
            fill 
            className="object-cover" 
            priority
          />
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

          <div className="w-full px-4">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col items-center gap-8">
                {buyingSteps.map((item, index) => {
                  // Determine alignment based on index
                  const alignment = index % 2 === 0 ? 'self-start' : 'self-end';
                  
                  return (
                    <motion.div
                      key={item.step}
                      className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full md:w-1/2 ${alignment}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className={`text-5xl font-bold ${item.color} min-w-[60px]`}>{item.step}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                          <p className="text-gray-200 mb-2">{item.description}</p>
                          <p className="text-gray-300 text-sm">{item.subtext}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="relative py-16 bg-black text-white">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/80 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-12">
            {/* Financing Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/80 backdrop-blur-sm p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Financing Options</h2>
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
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Need Assistance?</h2>
              <p>Our experts can guide you in choosing the best financing option based on your budget and needs.</p>
            </motion.div>

            {/* Working with Mystic Haven Reality */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Working with Mystic Haven Reality</h2>
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

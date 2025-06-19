import { motion } from "framer-motion"
import Image from "next/image"
import forBuyersGuideImage from "@/app/assets/forBuyersGuideImage.png"

const buyingSteps = [
  {
    step: 1,
    title: "Define Your Requirements",
    description: "Decide on location, budget, and property type (apartment, villa, townhouse)",
    subtext: "Consider future investment value and lifestyle preferences.",
  },
  {
    step: 2,
    title: "Explore Properties",
    description: "Browse listings from top developers like Sobha, Akadia, Damac, and Nakheel",
    subtext: "Schedule property viewings with our expert real estate agents.",
  },
  {
    step: 3,
    title: "Secure Financing",
    description: "Choose between a bank mortgage or developer payment plans",
    subtext: "Submit required documents for loan approval",
  },
  {
    step: 4,
    title: "Make an Offer & Sign the Agreement",
    description: "Negotiate the price and sign a Sales Purchase Agreement (SPA)",
    subtext: "& Pay the initial deposit (usually 5-10% of the property price)",
  },
  {
    step: 5,
    title: "Complete Legal & Payment Processes",
    description: "Arrange property valuation and necessary approvals",
    subtext: "Pay the remaining amount as per the agreed plan.",
  },
  {
    step: 6,
    title: "Property Handover & Registration",
    description: "Arrange property valuation and necessary approvals",
    subtext: "Pay the remaining amount as per the agreed plan.",
  },
]

export const BuyingGuideSection = () => {
  return (
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
          <div className="flex flex-row items-center">
            <div className="h-3 bg-gradient-to-r from-[#000000] to-[#D9D9D9] flex-1"></div>
            <h2 className="text-4xl font-bold text-[#FFAE6A] mx-2 sm:mx-4 md:mx-6 mb-2">Buying Guide</h2>
            <div className="h-3 bg-gradient-to-r from-[#D9D9D9] to-[#000000] flex-1"></div>
          </div>
        </motion.div>

        <div className="w-full px-4">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-8">
              {buyingSteps.map((item, index) => {
                const alignment = index % 3 === 0 ? 'self-start' : index % 3 === 1 ? 'self-center' : 'self-end';

                return (
                  <motion.div
                    key={item.step}
                    className={` rounded-lg p-6 w-full md:w-2/4 ${alignment} `}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">

                      <div>
                        <h3 className="text-xl font-bold mb-2 text-[var(--primary2)]">
                          <span className={`text-xl font-bold text-white inline`}>Step{item.step}: </span>
                          {item.title}</h3>
                        <p className="text-gray-200 mb-2 text-lg">{item.description}</p>
                        <p className="text-gray-300 text-lg">{item.subtext}</p>
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
  )
}

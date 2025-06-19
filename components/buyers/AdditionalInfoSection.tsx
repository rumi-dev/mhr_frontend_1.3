import { motion } from "framer-motion"

export const AdditionalInfoSection = () => {
  return (
    <section className="relative py-16 bg-black text-white">
      <div className="absolute top-0 left-0 right-0  z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-12">
          {/* Financing Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" backdrop-blur-sm p-8 rounded-lg"
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
  )
}

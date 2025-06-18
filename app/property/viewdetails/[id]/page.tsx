"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Square, Check } from "lucide-react"
import dynamic from 'next/dynamic';

// Dynamically import the GoogleMap component with SSR disabled
const GoogleMapComponent = dynamic(
  () => import('@/components/map/GoogleMap'),
  { ssr: false }
);
import propertyimage1 from "@/app/assets/propertyimage1.png"
import propertyimage2 from "@/app/assets/propertyimage2.png"
import propertyimage3 from "@/app/assets/propertyimage3.png"
import propertyimage4 from "@/app/assets/propertyimage4.png"

const features = ["Swimming Pool", "Sea View", "Private Pool", "Smart Home Tech"]

const amenities = ["Gym", "Security", "Parking", "Gardens"]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black text-white pt-20">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={propertyimage1} alt="Luxury Villa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luxury 2 - Bedroom Villa
          </motion.h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">Description</h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              This stunning 3 bedroom villa offers a breathtaking sea view, a private pool, and cutting edge smart home
              features. Located in the heart of Dubai, it provides unparalleled luxury and comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Property Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={propertyimage2}
                  alt="The Oasis Property"
                  width={600}
                  height={500}
                  className="w-full"
                />
                {/* Overlay Text */}
                <div className="absolute top-6 left-6">
                  <div className="text-white text-sm font-light tracking-wider">THE OASIS</div>
                </div>
                {/* Developer Logo */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white text-black px-4 py-2 font-bold text-xl">EMAAR</div>
                </div>
              </div>
            </motion.div>

            {/* Property Details */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Price */}
              <div className="text-4xl md:text-5xl font-light text-white">$500000.00</div>

              {/* Property Info */}
              <div className="flex items-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Dubai</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2" />
                  <span>3 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2" />
                  <span>1500 sq ft</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-light mb-6 text-white">Features</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 mr-3 text-white" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-xl font-light mb-6 text-white">Amenities</h3>
                  <div className="space-y-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 mr-3 text-white" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schedule Visit Button */}
              <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white py-4 px-8 rounded-md text-lg font-medium transition-colors">
                Schedule a Visit
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GoogleMapComponent />
          </motion.div>
        </div>
      </section>

    </div>
  )
}

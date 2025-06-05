"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Square, Check, Globe } from "lucide-react"

const features = ["Swimming Pool", "Sea View", "Private Pool", "Smart Home Tech"]

const amenities = ["Gym", "Security", "Parking", "Gardens"]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="text-black font-bold text-xl">MH</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-primary-400 transition-colors">
                Home
              </Link>
              <div className="flex items-center text-white">
                <span className="mr-1">▶</span>
                <Link href="/properties" className="hover:text-primary-400 transition-colors">
                  Properties
                </Link>
              </div>
              <Link href="/about" className="text-white hover:text-primary-400 transition-colors">
                About Us
              </Link>
              <Link href="/buyers" className="text-white hover:text-primary-400 transition-colors">
                For Buyers
              </Link>
              <Link href="/partners" className="text-white hover:text-primary-400 transition-colors">
                Partners
              </Link>
              <Link href="/contact" className="text-white hover:text-primary-400 transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Globe Icon */}
            <button className="text-white hover:text-primary-400 transition-colors">
              <Globe className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-villa-1.png" alt="Luxury Villa" fill className="object-cover" priority />
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
                  src="/images/luxury-entrance.png"
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
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-md text-lg font-medium transition-colors">
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
            <Image src="/images/sharjah-map.png" alt="Location Map - Sharjah/Ajman" fill className="object-cover" />
            {/* Map Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 w-12 h-16 relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                  <div className="text-purple-900 font-bold text-xl">MH</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2 text-sm">
                <li>About Mystic Haven Realty</li>
                <li>Our Mission</li>
                <li>Trusted Channel Partner</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-purple-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:text-purple-300 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-purple-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/buyers" className="hover:text-purple-300 transition-colors">
                    For Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-purple-300 transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p>Office Address: [Your Address Here]</p>
                <p>Phone: [Your Number]</p>
                <p>Email: [Your Email]</p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2 text-sm">
                <p>Facebook | Instagram | LinkedIn | Twitter</p>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-sm">
            <p>© 2025 Mystic Haven Realty. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Facebook, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Dubai Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Where Finding Home Feels Like Destiny
          </motion.h1>

          <motion.button
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Connect
          </motion.button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Get in touch with Mystic Haven Realty We're here to help you find your dream home or the perfect
              investment property.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm resize-none"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-gray-800 px-12 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In To Touch
          </motion.h2>

          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://instagram.com"
              className="bg-white p-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-8 h-8 text-gray-800" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="bg-white p-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8 text-gray-800" />
            </Link>
            <Link
              href="https://facebook.com"
              className="bg-white p-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-8 h-8 text-gray-800" />
            </Link>
            <Link
              href="mailto:info@mysticheavenrealty.com"
              className="bg-white p-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-8 h-8 text-gray-800" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Mystic Heaven Reality"
                  width={40}
                  height={40}
                  className="mr-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-pink-400 transition-colors">
                    About Mystic Haven Reality
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:text-pink-400 transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/partner" className="hover:text-pink-400 transition-colors">
                    Trusted Channel Partner
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-pink-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:text-pink-400 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-pink-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/buyers" className="hover:text-pink-400 transition-colors">
                    For Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-pink-400 transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-pink-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Office Address:</span>
                  <br />
                  <span className="text-white/80">[Your Address Here]</span>
                </p>
                <p>
                  <span className="font-medium">Phone:</span>
                  <br />
                  <span className="text-white/80">[Your Number]</span>
                </p>
                <p>
                  <span className="font-medium">Email:</span>
                  <br />
                  <span className="text-white/80">[Your Email]</span>
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <Link href="https://facebook.com" className="hover:text-pink-400 transition-colors">
                    Facebook
                  </Link>{" "}
                  |{" "}
                  <Link href="https://instagram.com" className="hover:text-pink-400 transition-colors">
                    Instagram
                  </Link>{" "}
                  |{" "}
                  <Link href="https://linkedin.com" className="hover:text-pink-400 transition-colors">
                    LinkedIn
                  </Link>{" "}
                  |{" "}
                  <Link href="https://twitter.com" className="hover:text-pink-400 transition-colors">
                    Twitter
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>© 2025 Mystic Haven Reality . All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"
import contactusPageHeroImage from "@/app/assets/contactusPageHeroImage.png"
import contactUsPageFormBackground from "@/app/assets/contactUsPageFormBackground.png"
import maskedlogo from "@/app/assets/maskedlogo.png"

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
            src={contactusPageHeroImage}
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
            className="bg-[var(--primary)] hover:brightness-110 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Connect
          </motion.button>
        </div>
      </section>

      {/* Contact Form & Social Media Section */}
      <section className="relative py-16 overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src={contactUsPageFormBackground} alt="Background" fill className="object-cover" />
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
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-12">
              Get in touch with Mystic Haven Realty. We're here to help you find your dream home or the perfect
              investment property.
            </p>
            
          

          <motion.div
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-2xl"
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

            {/* Social Media Icons */}
            <h5 className="mt-14 text-2xl md:text-3xl lg:text-4xl font-bold mb-8 max-w-4xl mx-auto text-white">Get In To Touch</h5>

            <motion.div 
              className="flex justify-center space-x-6 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="https://instagram.com"
                className=" hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-12 h-12 text-white " />
              </Link>
              <Link
                href="https://linkedin.com"
                className=" hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-12 h-12 text-white " />
              </Link>
              <Link
                href="https://facebook.com"
                className=" hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-12 h-12 text-white " />
              </Link>
              <Link
                href="mailto:info@mysticheavenrealty.com"
                className=" hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="w-12 h-12 text-white " />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

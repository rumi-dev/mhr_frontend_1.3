"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile1: "",
    mobile2: "",
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
          {/* Left Side - Map and Contact Info */}
          <motion.div
            className="border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 relative">
              <Image src="/placeholder.svg?height=400&width=600" alt="Map" fill className="object-cover" />
            </div>

            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold mb-4">Title</h3>

              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <p className="text-gray-700">Address</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <p className="text-gray-700">12345 - 67890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  <p className="text-gray-700">Mail</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Consultation Form */}
          <motion.div
            className="border border-gray-200 rounded-lg p-6 flex flex-col h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get Consultation</h2>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile1"
                  placeholder="Mobile"
                  value={formData.mobile1}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile2"
                  placeholder="Mobile"
                  value={formData.mobile2}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex-1">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-800 hover:bg-primary-900 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

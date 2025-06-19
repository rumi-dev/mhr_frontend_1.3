"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

// Dynamically import the GoogleMap component with SSR disabled
const GoogleMapComponent = dynamic(
  () => import('@/components/map/GoogleMap'),
  { ssr: false }
)

export default function Consultation() {
  const [isContactExpanded, setIsContactExpanded] = useState(true);
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
    <>

      <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Map and Contact Info */}
          <motion.div
            className="border border-gray-200 rounded-lg  flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 min-h-[300px]">
              <GoogleMapComponent />
            </div>

            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Contact Information</h3>
                <div className="space-y-3 text-[#404040]">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p className="text-base">Address</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p className="text-base">Phone</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p className="text-base">Email</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Consultation Form */}
          <motion.div
            className="border border-gray-200 rounded-lg p-6 flex flex-col overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 md:text-3xl">Get Consultation</h2>

            <form onSubmit={handleSubmit} className="space-y-4 flex-col">
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="flex flex-col space-y-4 w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 transition-all duration-200`}
                    required
                  />
                  <input
                    type="tel"
                    name="mobile1"
                    placeholder="Mobile"
                    value={formData.mobile1}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 transition-all duration-200`}
                    required
                  />
                  <input
                    type="tel"
                    name="mobile2"
                    placeholder="Mobile"
                    value={formData.mobile2}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 transition-all duration-200`}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-4 w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 transition-all duration-200`}
                    required
                  />
                  <div className="h-[200px]">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      
                      className={`w-full h-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 transition-all duration-200 resize-none`}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-1/2 md:w-1/3 bg-[var(--primary)] rounded-full hover:bg-primary-dark text-white font-medium py-3 px-4 transition-colors"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}

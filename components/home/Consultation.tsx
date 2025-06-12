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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Map and Contact Info */}
          <motion.div
            className="border border-gray-200 rounded-lg overflow-hidden h-[400px] md:h-[600px] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 relative">
              <GoogleMapComponent />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => setIsContactExpanded(!isContactExpanded)}
                >
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label={isContactExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isContactExpanded ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {isContactExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 space-y-3">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                          <p className="text-gray-700">Dubai, United Arab Emirates</p>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                          <p className="text-gray-700">+971 12 34 56 78</p>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                          <p className="text-gray-700">info@mhr.com</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

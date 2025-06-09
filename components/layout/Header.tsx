"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import mhrLogo from "@/app/assets/MHR Logo.png"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About Us", href: "/about" },
  { label: "For Buyers", href: "/buyers" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="fixed w-full z-50 bg-black/30 backdrop-blur-sm text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={mhrLogo}
            alt="Mystic Heaven Reality"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-primary-400 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="flex items-center">
          <Globe className="w-5 h-5" />
        </button>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-primary-600"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 hover:text-primary-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { IoMdArrowDropright } from "react-icons/io"
import { useRouter,usePathname } from "next/navigation"
import mhrLogo from "@/app/assets/MHR Logo.png"

const navItems = [
  { key: 1, label: "Home", href: "/" },
  { key: 2, label: "Properties", href: "/property" },
  { key: 3, label: "About Us", href: "/about" },
  { key: 4, label: "For Buyers", href: "/buyers" },
  { key: 5, label: "Partners", href: "/partners" },
  { key: 6, label: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 text-white ${isScrolled ? 'bg-[var(--primary)]' : ''}`}
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
            <div key={item.key} className="flex items-center">
              { pathname == item.href && <IoMdArrowDropright className="w-4 h-4 mr-2" />}
              <Link href={item.href} className="hover:text-primary-400 transition-colors">
                {item.label}
              </Link>
               {navItems.length !== item.key && <div className="w-px h-full bg-white mx-3"></div>}
            </div>
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
                key={item.key}
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

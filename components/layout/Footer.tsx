import Link from "next/link"
import Image from "next/image"
import mhrLogo from "@/app/assets/MHR Logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#5E2D4F] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex justify-start mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src={mhrLogo}
              alt="Mystic Heaven Reality"
              width={150}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Mystic Haven Reality</Link>
              </li>
              <li>
                <Link href="/mission">Our Mission</Link>
              </li>
              <li>
                <Link href="/partner">Trusted Channel Partner</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/properties">Properties</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/buyers">For Buyers</Link>
              </li>
              <li>
                <Link href="/partners">Partners</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <ul className="space-y-2">
              <li>
                Office Address: <span className="opacity-75">Your Address</span>
              </li>
              <li>
                Phone: <span className="opacity-75">Your Number</span>
              </li>
              <li>
                Email: <span className="opacity-75">Your Email</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-accent">
                Instagram
              </Link>
              <Link href="https://linkedin.com" className="hover:text-accent">
                LinkedIn
              </Link>
              <Link href="https://twitter.com" className="hover:text-accent">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© 2023 Mystic Haven Reality. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

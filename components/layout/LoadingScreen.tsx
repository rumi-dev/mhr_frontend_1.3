"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import mhrLogo from "@/app/assets/MHR Logo.png"

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Set timeout for the loading screen to be visible
    const timer = setTimeout(() => {
      setIsVisible(false)
      onLoadingComplete()
    }, 4000) // 4 seconds total

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--primary)]">
      <motion.div
        initial={{ width: '10%' }}
        animate={{ width: '50%' }}
        transition={{ 
          duration: 3,
          ease: [0.16, 1, 0.3, 1], // Custom easing for smooth animation
        }}
        className="relative h-auto max-w-[500px] w-full"
        style={{ aspectRatio: '16/5' }} // Maintain logo aspect ratio
      >
        <Image
          src={mhrLogo}
          alt="Mystic Haven Reality"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  )
}

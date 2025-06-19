import { motion } from "framer-motion"
import Image from "next/image"
import aboutpageheroimage from "@/app/assets/aboutpageheroimage.png"

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutpageheroimage}
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative text-center px-4 w-auto">
          {[...Array(3)].map((_, index) => (
            <h1 
              key={index}
              className={`text-[1.2rem] md:text-5xl lg:text-6xl font-bold  w-auto ${
                index === 0 ? 'opacity-10 -translate-y-[-2.5rem] ' : 
                index === 1 ? 'opacity-40 -translate-y-[-1.5rem]  ' : 
                'opacity-100'
              }`}
            >
              Your Gateway To Luxury Living
            </h1>
          ))}
      </div>
    </section>
  )
}

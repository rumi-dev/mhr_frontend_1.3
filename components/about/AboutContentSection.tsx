import { motion } from "framer-motion"
import Image from "next/image"
import aboutuspagesection2image from "@/app/assets/aboutuspagesection2image.png"

export const AboutContentSection = () => {
  const content = [
    {
      title: "Our Company",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat pharetra vitae sit amet enim.",
      direction: 'left' as const
    },
    {
      title: "Our Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat pharetra vitae sit amet enim.",
      direction: 'right' as const
    },
    {
      title: "Our Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat pharetra vitae sit amet enim.",
      direction: 'left' as const
    },
    {
      title: "Our Commitments",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et, pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam libero, finibus sit amet molestie quis, tempor congue quam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Sed turpis est, lacinia vel aliquam eget, commodo nec eros. Sed dignissim eget turpis quis vehicula. Quisque vitae nisl nec lectus feugiat pharetra vitae sit amet enim.",
      direction: 'right' as const
    }
  ]

  return (
    <section className="relative py-16 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={aboutuspagesection2image} alt="Building Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-row items-center mb-4">
            <div className="h-3 bg-gradient-to-r from-[#D9D9D9] to-[#000000] flex-1"></div>
            <h2 className="text-4xl font-bold text-[#FFAE6A] mx-2 sm:mx-4 md:mx-6 mb-2">About Us</h2>
            <div className="h-3 bg-gradient-to-r from-[#000000] to-[#D9D9D9] flex-1"></div>
          </div>
          <p className="text-xl text-white">Guiding Your Home</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-12">
          {content.map((item, index) => {
            const isEven = index % 2 === 1; // 0-based index, so odd index is even item
            const alignment = isEven ? 'justify-end' : 'justify-start';
            const initialX = isEven ? 50 : -50;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: initialX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`w-full flex ${alignment} `}
              >
                <div className={`max-w-[600px] `}>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

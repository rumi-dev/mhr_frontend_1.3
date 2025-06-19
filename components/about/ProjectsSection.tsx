import { motion } from "framer-motion"
import Image from "next/image"
import aboutUsPageExploreImg1 from "@/app/assets/aboutUsPageExploreImg1.png"
import aboutUsPageExploreImg2 from "@/app/assets/aboutUsPageExploreImg2.png"
import aboutUsPageExploreImg3 from "@/app/assets/aboutUsPageExploreImg3.png"
import aboutUsPageExploreImg4 from "@/app/assets/aboutUsPageExploreImg4.png"

const projectImages = [
  aboutUsPageExploreImg1,
  aboutUsPageExploreImg2,
  aboutUsPageExploreImg3,
  aboutUsPageExploreImg4,
]

export const ProjectsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Explore New Off Plan Project</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula turpis, pretium sed porta et,
            pharetra eu velit. Nam ullamcorper ligula ligula, a mattis libero luctus a. Nunc quam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Project ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

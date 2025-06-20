import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import type { Property } from "@/types"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/viewdetails/${property.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg text-black cursor-pointer hover:shadow-xl transition-shadow">
        <div className="relative h-64">
          <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{property.title}</h3>
            <div className="flex items-center text-[#404040]">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>

          <p className="text-lg font-semibold mb-4">{property.price}</p>
          <p className="text-sm mb-4 line-clamp-3">{property.description}</p>
        </div>
      </div>
    </Link>
  )
}

import { StaticImageData } from "next/image"

export interface Property {
  id: string
  title: string
  price: string
  location: string
  description: string
  image: string | StaticImageData
}

export interface Partner {
  id: string
  name: string
  logo: string | StaticImageData
}

export interface NavItem {
  label: string
  href: string
}

"use client"

import Image from "next/image"
import Link from "next/link"

export interface SliderItem {
  id: string
  image: string
  label: string
  href?: string
}

interface InfiniteSliderProps {
  items: SliderItem[]
}

export default function InfiniteSlider({ items }: InfiniteSliderProps) {
  // Duplicate items to create the seamless loop effect
  const duplicatedItems = [...items, ...items]

  return (
    <section className="w-full overflow-hidden py-8 lg:py-12">
      <div className="flex animate-infinite-scroll">
        {duplicatedItems.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={item.href || "#"}
            className="group mx-2 shrink-0 lg:mx-3"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-xl sm:h-32 sm:w-32 lg:h-36 lg:w-36">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

          </Link>
        ))}
      </div>
    </section>
  )
}

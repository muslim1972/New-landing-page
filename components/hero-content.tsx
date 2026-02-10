"use client"

import Image from "next/image"
import { MessageCircle, Share2, Info } from "lucide-react"

interface HeroContentProps {
  heroImage: string
  heroAlt: string
  commentCount?: number
}

export default function HeroContent({
  heroImage,
  heroAlt,
  commentCount = 33,
}: HeroContentProps) {
  return (
    <section className="relative mx-auto mt-8 max-w-[1080px] px-4">
      <div className="relative">
        {/* Main Hero Image Area */}
        <div className="overflow-hidden rounded-xl bg-secondary">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary lg:aspect-[16/9]">
            <Image
              src={heroImage || "/placeholder.svg"}
              alt={heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1080px"
            />
          </div>
        </div>

        {/* Side Action Buttons - desktop only */}
        <div className="absolute -right-16 top-1/4 hidden flex-col gap-4 xl:flex">
          <button
            type="button"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            aria-label={`${commentCount} comments`}
          >
            <MessageCircle className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
              {commentCount}
            </span>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            aria-label="Share"
          >
            <Share2 className="h-5 w-5 text-muted-foreground" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            aria-label="Info"
          >
            <Info className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Side Actions */}
      <div className="mt-4 flex items-center gap-3 xl:hidden">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary"
        >
          <MessageCircle className="h-4 w-4" />
          {commentCount}
        </button>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
          aria-label="Share"
        >
          <Share2 className="h-4 w-4 text-muted-foreground" />
        </button>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
          aria-label="Info"
        >
          <Info className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}

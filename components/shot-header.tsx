"use client"

import { Heart, Bookmark } from "lucide-react"
import Image from "next/image"

import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"

interface ShotHeaderProps {
  title: string
  authorName: string
  studioName: string
  authorAvatar: string
  availableForWork?: boolean
}

export default function ShotHeader({
  title,
  authorName,
  studioName,
  authorAvatar,
  availableForWork = true,
}: ShotHeaderProps) {
  const { language } = useLanguage()
  const text = CONTENT[language].hero

  return (
    <section className="mx-auto max-w-[1080px] px-4 pt-8 lg:pt-12">
      {/* Shot Title */}
      <h1 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl">
        {title}
      </h1>

      {/* Author Info Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
            <Image
              src={authorAvatar}
              alt={`${authorName} avatar`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span className="text-sm font-semibold text-foreground">
              {authorName}
            </span>
            {text.labels.for && <span className="text-sm text-muted-foreground">{text.labels.for}</span>}
            <span className="text-sm font-semibold text-foreground">
              {studioName}
            </span>
            {availableForWork && (
              <span className="text-xs font-medium text-emerald-600">
                {text.labels.available}
              </span>
            )}
            <button
              type="button"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {text.labels.follow}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            aria-label="Like"
          >
            <Heart className="h-5 w-5 text-foreground" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            aria-label="Bookmark"
          >
            <Bookmark className="h-5 w-5 text-foreground" />
          </button>
          <a
            href="mailto:muslim@shamelapp.com"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

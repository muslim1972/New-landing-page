"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"

export interface ProjectCard {
  id: string
  image: string
  title: string
  href?: string
}

interface MoreProjectsProps {
  studioName: string
  projects: ProjectCard[]
  viewProfileHref?: string
}

export default function MoreProjects({
  studioName,
  projects,
  viewProfileHref = "#",
}: MoreProjectsProps) {
  const { language } = useLanguage()
  const text = CONTENT[language].moreProjects

  return (
    <section className="mx-auto max-w-[1080px] px-4 py-8 lg:py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">
          {text.title} {studioName}
        </h2>
        <Link
          href={viewProfileHref}
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          {text.viewProfile}
        </Link>
      </div>

      {/* Project Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href || "#"}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-secondary">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-sm font-bold text-foreground text-center group-hover:text-primary transition-colors leading-relaxed">
              {project.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

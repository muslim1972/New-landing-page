"use client"

import Header from "@/components/header"
import ShotHeader from "@/components/shot-header"
import HeroContent from "@/components/hero-content"
import ShotDescription from "@/components/shot-description"
import StudioProfile from "@/components/studio-profile"
import MoreProjects from "@/components/more-projects"
import InfiniteSlider from "@/components/infinite-slider"
import Footer from "@/components/footer"
import type { ProjectCard } from "@/components/more-projects"
import type { SliderItem } from "@/components/infinite-slider"
import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"
import Hero3D from "@/components/hero-3d"

export default function Page() {
  const { language } = useLanguage()
  const content = CONTENT[language]
  const hero = content.hero

  const AUTHOR = {
    name: hero.author.name,
    studio: hero.author.studio,
    avatar: "/images/Myphoto.jpg",
    availableForWork: true,
  }

  const HERO_DATA = {
    image: "/images/hero-dog.jpg",
    alt: hero.title,
    commentCount: 33,
  }

  const STUDIO = {
    name: hero.author.studio,
    tagline: hero.author.tagline,
    logoText: language === 'ar' ? "تير\nميني" : "TER\nMINI", // Dynamic based on lang
  }

  const MORE_PROJECTS: ProjectCard[] = content.moreProjects.projects.map(p => ({
    id: p.id,
    image: (p as any).imagePath || `/images/project-${p.id}.jpg`,
    title: p.title
  }))

  const SLIDER_ITEMS: SliderItem[] = (content.slider as unknown as string[]).map((img, index) => ({
    id: index.toString(),
    image: img,
    label: ""
  }))

  return (
    <div className="min-h-screen bg-background text-foreground" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />

      <main>
        <ShotHeader
          title={hero.title}
          authorName={AUTHOR.name}
          studioName={AUTHOR.studio}
          authorAvatar={AUTHOR.avatar}
          availableForWork={AUTHOR.availableForWork}
        />

        <section className="relative mx-auto mt-8 max-w-[850px] px-4">
          <div className="overflow-hidden rounded-xl bg-secondary shadow-xl">
            <div className="relative aspect-[4/3] w-full lg:aspect-[16/9]">
              <Hero3D />
            </div>
          </div>
        </section>

        <ShotDescription paragraphs={hero.description} />

        <StudioProfile
          studioName={STUDIO.name}
          tagline={STUDIO.tagline}
          avatar="/images/Logo.png"
        />

        <MoreProjects
          studioName={STUDIO.name}
          projects={MORE_PROJECTS}
          viewProfileHref="#"
        />

        <InfiniteSlider items={SLIDER_ITEMS} />
      </main>

      <Footer />
    </div>
  )
}

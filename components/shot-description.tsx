interface ShotDescriptionProps {
  paragraphs: string[]
}

export default function ShotDescription({ paragraphs }: ShotDescriptionProps) {
  return (
    <section className="mx-auto max-w-[850px] px-4 py-8 lg:py-12">
      <div className="space-y-6 text-center">
        {paragraphs.map((text) => (
          <p
            key={text.slice(0, 30)}
            className="text-xl leading-relaxed text-foreground/90 lg:text-2xl font-serif font-medium"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

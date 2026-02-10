interface ShotDescriptionProps {
  paragraphs: string[]
}

export default function ShotDescription({ paragraphs }: ShotDescriptionProps) {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-12 lg:py-16">
      <div className="space-y-4">
        {paragraphs.map((text) => (
          <p
            key={text.slice(0, 30)}
            className="text-base leading-relaxed text-foreground lg:text-lg"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

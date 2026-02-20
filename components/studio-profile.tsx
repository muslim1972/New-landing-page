import Image from "next/image"

interface StudioProfileProps {
  studioName: string
  tagline: string
  avatar: string
}

export default function StudioProfile({
  studioName,
  tagline,
  avatar,
}: StudioProfileProps) {
  return (
    <section className="mx-auto max-w-[720px] px-4 pb-12">
      {/* Divider with Logo */}
      <div className="flex items-center gap-6">
        <div className="h-px flex-1 bg-border" />
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-border">
          <Image
            src={avatar}
            alt={studioName}
            fill
            className="object-cover"
          />
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Studio Info */}
      <div className="mt-6 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold text-foreground">{studioName}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{tagline}</p>
        <a
          href="mailto:muslim@shamelapp.com"
          className="mt-5 rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

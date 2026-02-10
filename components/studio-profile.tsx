interface StudioProfileProps {
  studioName: string
  tagline: string
  logoText: string
}

export default function StudioProfile({
  studioName,
  tagline,
  logoText,
}: StudioProfileProps) {
  return (
    <section className="mx-auto max-w-[720px] px-4 pb-12">
      {/* Divider with Logo */}
      <div className="flex items-center gap-6">
        <div className="h-px flex-1 bg-border" />
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-border">
          <span className="whitespace-pre-line text-center text-xs font-bold uppercase leading-tight tracking-wider text-foreground">
            {logoText}
          </span>
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Studio Info */}
      <div className="mt-6 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold text-foreground">{studioName}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{tagline}</p>
        <button
          type="button"
          className="mt-5 rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}

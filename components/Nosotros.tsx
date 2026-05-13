'use client'

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-cobalt overflow-hidden relative">
      {/* Forma decorativa — círculo cream top-right */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cream/5" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-magenta/10" />

      <div className="container-max section-pad">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Texto izquierda */}
          <div>
            <span className="chip bg-mustard text-cobalt border-mustard mb-6">
              🎶 Nuestra Playlist
            </span>

            <h2 className="font-heading text-display text-cream mb-6 leading-tight">
              ¿Por qué hablas como Tulio?
            </h2>

            <p className="font-body text-body text-cream/75 mb-5 leading-relaxed">
              Amo la forma en la que demuestras tu amor. Acá siempre encontrarás nuestra música :)
            </p>
          </div>

          {/* Playlist de Spotify */}
          <div className="rounded-card overflow-hidden shadow-card">
            <iframe
              src="https://open.spotify.com/embed/playlist/6UUMpyMJZsEiBwga4sa3f3?utm_source=generator"
              width="100%"
              height="352"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
              style={{ borderRadius: '1.5rem' }}
            />
          </div>
        </div>
      </div>

      {/* Onda SVG de transición hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FAF0E6"/>
        </svg>
      </div>
    </section>
  )
}

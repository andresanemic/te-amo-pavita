'use client'

const SHAPES = [
  { shape: 'circle',   color: 'bg-magenta',    size: 'w-4 h-4' },
  { shape: 'square',   color: 'bg-mustard',    size: 'w-3 h-3' },
  { shape: 'circle',   color: 'bg-coral',      size: 'w-5 h-5' },
  { shape: 'triangle', color: 'text-periwinkle', size: 'w-5 h-5' },
  { shape: 'circle',   color: 'bg-teal',       size: 'w-3 h-3' },
  { shape: 'square',   color: 'bg-orange',     size: 'w-4 h-4' },
  { shape: 'circle',   color: 'bg-magenta',    size: 'w-3 h-3' },
  { shape: 'triangle', color: 'text-mustard',  size: 'w-4 h-4' },
]

export default function Footer() {
  return (
    <footer className="bg-cobalt relative overflow-hidden pt-16">
      {/* Círculo decorativo */}
      <div className="absolute top-8 right-12 w-32 h-32 rounded-full bg-cream/5" />
      <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-magenta/10" />

      <div className="container-max pb-8 relative z-10">
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="font-heading text-[5rem] leading-none text-magenta mb-2">
            P <span className="text-cream">&</span> A
          </div>

          <p className="font-body text-body text-cream/60 mb-1">
            Hecho con amor. Para Pam, de Andrés.
          </p>
          <p className="font-body text-small text-cream/40">
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Línea decorativa de formas geométricas */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {SHAPES.map((s, i) => (
              <span key={i} className="opacity-50 hover:opacity-100 transition-opacity">
                {s.shape === 'circle' && (
                  <span className={`block rounded-full ${s.color} ${s.size}`} />
                )}
                {s.shape === 'square' && (
                  <span className={`block rounded-sm ${s.color} ${s.size} rotate-12`} />
                )}
                {s.shape === 'triangle' && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className={`${s.color} ${s.size}`}>
                    <polygon points="10,2 18,17 2,17"/>
                  </svg>
                )}
              </span>
            ))}
          </div>

          <p className="text-center font-body text-small text-cream/30 mt-6">
            Te amo, Pavita ♥
          </p>
        </div>
      </div>
    </footer>
  )
}

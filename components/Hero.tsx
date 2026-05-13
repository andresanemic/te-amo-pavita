'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.opacity = '0'
    ref.current.style.transform = 'translateY(40px)'
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 200)
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cream overflow-hidden"
    >
      {/* ── Formas decorativas de fondo ── */}

      {/* Círculo grande magenta — top right */}
      <div className="
        absolute -top-32 -right-32 w-[480px] h-[480px]
        rounded-full bg-magenta/10 animate-float-slow
      "/>

      {/* Semicírculo cobalt — bottom left */}
      <div className="
        absolute -bottom-24 -left-24 w-80 h-80
        rounded-full bg-cobalt/10 animate-float
      "/>

      {/* Triángulo mustard SVG */}
      <svg
        className="absolute top-1/4 right-12 w-20 h-20 text-mustard/40 animate-float"
        viewBox="0 0 80 80" fill="currentColor"
      >
        <polygon points="40,8 72,68 8,68"/>
      </svg>

      {/* Squiggle coral SVG */}
      <svg
        className="absolute bottom-1/3 left-8 w-16 h-16 text-coral/30 animate-float-slow"
        viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="4"
        strokeLinecap="round"
      >
        <path d="M10 30 Q20 10 30 30 Q40 50 50 30"/>
      </svg>

      {/* Círculo periwinkle pequeño */}
      <div className="
        absolute top-20 left-1/3 w-8 h-8
        rounded-full bg-periwinkle/40 animate-float
        animation-delay-1000
      "/>

      {/* Puntos decorativos */}
      {[
        { top: '15%', left: '8%',  color: 'bg-magenta' },
        { top: '70%', left: '15%', color: 'bg-mustard'  },
        { top: '30%', right: '8%', color: 'bg-teal'     },
        { top: '80%', right: '20%',color: 'bg-coral'    },
      ].map((d, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 rounded-full ${d.color}/50`}
          style={{ top: d.top, left: (d as any).left, right: (d as any).right }}
        />
      ))}

      {/* ── Contenido ── */}
      <div className="container-max relative z-10 py-32 md:py-40" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">

          {/* Chip */}
          <div className="mb-8 flex justify-center">
            <span className="chip bg-magenta text-white border-magenta text-sm">
              🌍 Neza × Santiago
            </span>
          </div>

          {/* Título */}
          <h1 className="h-hero mb-6">
            Pam{' '}
            <span className="text-magenta">&</span>{' '}
            Andrés
          </h1>

          {/* Subtítulo */}
          <p className="font-body text-subhead text-cobalt/70 mb-6 max-w-xl mx-auto">
            ¡El amor entre Chile y México es real!
          </p>

          {/* Párrafo */}
          <p className="t-body max-w-lg mx-auto mb-12 text-cobalt/60">
            Eres lo más bello que me ha pasado en el último tiempo.
            Llenas mi vida de colores y cosas bonitas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#fotos" className="btn-primary">
              Ver fotos
            </a>
            <a href="#nosotros" className="btn-outline">
              Nuestra playlist
            </a>
          </div>
        </div>

        {/* Flecha scroll */}
        <div className="flex flex-col items-center mt-20 gap-2 animate-bounce-y">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-magenta">
            <path d="M12 5v14M12 19l-5-5M12 19l5-5"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

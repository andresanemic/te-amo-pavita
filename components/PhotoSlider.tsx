'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

const PHOTOS: { src: string; caption: string }[] = [
  { src: '/images/foto-1.jpg', caption: 'En el café más raro de la CDMX' },
  { src: '/images/foto-2.jpg', caption: 'La primera de muchas luchas' },
  { src: '/images/foto-3.jpg', caption: 'Mi foto favorita juntos' },
  { src: '/images/foto-4.jpg', caption: 'Me inspiré en tu playera para la web' },
  { src: '/images/foto-5.jpg', caption: '¡Vamos a recorrer el mundo!' },
]

// Gradientes placeholder por índice cuando no existe la imagen
const PLACEHOLDERS = [
  'from-magenta to-coral',
  'from-cobalt to-periwinkle',
  'from-teal to-cobalt',
  'from-mustard to-orange',
  'from-coral to-orange',
  'from-periwinkle to-teal',
]

// Overlay de hover — gradiente de color + texto del chip, uno por foto
const HOVER_STYLES = [
  { gradient: 'from-magenta/70',    text: 'text-magenta'    },
  { gradient: 'from-cobalt/70',     text: 'text-cobalt'     },
  { gradient: 'from-teal/70',       text: 'text-teal'       },
  { gradient: 'from-mustard/70',    text: 'text-mustard'    },
  { gradient: 'from-periwinkle/70', text: 'text-periwinkle' },
  { gradient: 'from-coral/70',      text: 'text-coral'      },
]

function Slide({ photo, index }: { photo: (typeof PHOTOS)[0]; index: number }) {
  return (
    <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_36%] px-3">
      <div className="relative aspect-[4/5] rounded-photo overflow-hidden shadow-card group">
        {/* Gradiente placeholder — queda debajo, visible solo si la imagen falla */}
        <div className={`absolute inset-0 bg-gradient-to-br ${PLACEHOLDERS[index % PLACEHOLDERS.length]} flex flex-col items-center justify-center`}>
          <span className="text-5xl mb-3">📸</span>
          <span className="font-body font-700 text-white/80 text-small text-center px-4">
            foto {index + 1}
          </span>
        </div>

        {/* Imagen real — encima del gradiente */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />

        {/* Overlay con leyenda al hover — color varía por foto */}
        <div className={`
          absolute inset-x-0 bottom-0
          bg-gradient-to-t ${HOVER_STYLES[index % HOVER_STYLES.length].gradient} to-transparent
          p-5 translate-y-full group-hover:translate-y-0
          transition-transform duration-300
        `}>
          <span className={`
            inline-block bg-cream/95 backdrop-blur-sm
            rounded-pill px-4 py-2
            font-body text-small font-700 leading-snug
            ${HOVER_STYLES[index % HOVER_STYLES.length].text}
          `}>
            {photo.caption}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function PhotoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="fotos" className="bg-cream relative overflow-hidden">

      {/* Onda SVG en la parte de arriba — transición suave desde cobalt */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full -mb-1">
          <path d="M0 0 Q360 60 720 30 Q1080 0 1440 60 L1440 0 Z" fill="#E8402A"/>
        </svg>
      </div>

      {/* Fondo de puntos */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="container-max pt-8 pb-section">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="chip bg-coral text-white border-coral mb-5">
            📷 Son pololos!
          </span>
          <h2 className="h-display mb-4">
            Pam <span className="text-magenta">&</span> Andrés
          </h2>
          <p className="t-body max-w-md mx-auto text-cobalt/60">
            La chica de migración no podrá dudar de nosotros.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {PHOTOS.map((photo, i) => (
                <Slide key={photo.src} photo={photo} index={i} />
              ))}
            </div>
          </div>

          {/* Botón anterior */}
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
              w-12 h-12 rounded-full bg-magenta shadow-card
              flex items-center justify-center
              hover:bg-coral hover:scale-110 transition-all duration-200
              z-10 hidden md:flex
            "
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4l-6 6 6 6" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Botón siguiente */}
          <button
            onClick={scrollNext}
            aria-label="Siguiente"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
              w-12 h-12 rounded-full bg-magenta shadow-card
              flex items-center justify-center
              hover:bg-coral hover:scale-110 transition-all duration-200
              z-10 hidden md:flex
            "
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Instrucción móvil */}
        <p className="text-center font-body text-small text-cobalt/40 mt-6 md:hidden">
          Desliza para ver más fotos →
        </p>
      </div>
    </section>
  )
}

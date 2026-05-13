'use client'

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <polygon points="24,4 30,18 46,18 33,28 38,44 24,34 10,44 15,28 2,18 18,18"/>
      </svg>
    ),
    color:  'magenta',
    border: 'border-magenta',
    bg:     'bg-magenta/5',
    iconC:  'text-magenta',
    rotate: '-rotate-1',
    title:  'Me hace querer ser mejor',
    text:   'Desde que la conozco quiero llegar más lejos, esforzarme más. Ella no me lo pide — simplemente, con su ejemplo, me lo inspira.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M8 40V20l16-14 16 14v20M18 40v-12h12v12"/>
      </svg>
    ),
    color:  'cobalt',
    border: 'border-cobalt',
    bg:     'bg-cobalt/5',
    iconC:  'text-cobalt',
    rotate: 'rotate-1',
    title:  'Hacer planes juntos es mi pasatiempo favorito',
    text:   'Pensar en el departamento, el barrio, las rutinas. Con Pam, el futuro pasó de ser algo difuso a ser algo que quiero ya.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M6 8h36a2 2 0 012 2v22a2 2 0 01-2 2H14l-8 6V10a2 2 0 012-2z"/>
      </svg>
    ),
    color:  'teal',
    border: 'border-teal',
    bg:     'bg-teal/5',
    iconC:  'text-teal',
    rotate: '-rotate-1',
    title:  'Me escucha de verdad',
    text:   'No solo oye mis palabras — entiende lo que hay detrás. Hay personas que hacen que hablar sea fácil. Pam es una de ellas.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="24" cy="24" r="18"/>
        <path d="M16 28s2 4 8 4 8-4 8-4M18 20v2M30 20v2"/>
      </svg>
    ),
    color:  'mustard',
    border: 'border-mustard',
    bg:     'bg-mustard/5',
    iconC:  'text-mustard',
    rotate: 'rotate-1',
    title:  'Me hace reír como nadie',
    text:   'Y no con chistes ensayados. Con ella el humor es natural, inesperado y completamente nuestro.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="24" cy="24" r="18"/>
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4"/>
        <path d="M17 17l2 2M29 29l2 2M29 17l-2 2M17 29l-2 2"/>
      </svg>
    ),
    color:  'periwinkle',
    border: 'border-periwinkle',
    bg:     'bg-periwinkle/5',
    iconC:  'text-periwinkle',
    rotate: '-rotate-1',
    title:  'No le da miedo lo que viene',
    text:   'Construir una vida en otro país no es sencillo. Pam lo sabe y aun así eligió apostar. Eso me parece de las cosas más valientes que he visto.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-12 h-12">
        <path d="M24 42S6 28 6 17a10 10 0 0118-6 10 10 0 0118 6c0 11-18 25-18 25z"/>
      </svg>
    ),
    color:  'coral',
    border: 'border-coral',
    bg:     'bg-coral/5',
    iconC:  'text-coral',
    rotate: 'rotate-1',
    title:  'Mi vida es más bonita desde que está',
    text:   'No exagero. Hay un antes y un después. Y el después tiene su nombre.',
  },
]

export default function PorQueElla() {
  return (
    <section id="porque" className="bg-cream bg-diagonals overflow-hidden relative">
      {/* Forma decorativa */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mustard/10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-coral/10 translate-y-1/2 -translate-x-1/3" />

      <div className="container-max section-pad relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="chip bg-teal text-white border-teal mb-5">
            💚 Te amo
          </span>
          <h2 className="h-display mb-4">Por qué Pam.</h2>
          <p className="t-body max-w-md mx-auto text-cobalt/60">
            Razones que no caben en un mensaje de voz.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className={`
                bg-cream border-[3px] ${c.border} ${c.bg}
                rounded-card p-7 shadow-card
                hover:shadow-card-hover hover:-translate-y-1
                transition-all duration-300
                ${c.rotate}
                hover:rotate-0
              `}
            >
              <div className={`${c.iconC} mb-5`}>{c.icon}</div>
              <h3 className="font-heading text-heading text-cobalt mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="font-body text-body text-cobalt/65 leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

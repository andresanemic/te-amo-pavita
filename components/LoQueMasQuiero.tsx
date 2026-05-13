'use client'

export default function LoQueMasQuiero() {
  return (
    <section className="bg-teal relative overflow-hidden">
      {/* Semicírculo decorativo arriba */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-b-full bg-cream/5" />

      {/* Forma flotante — círculo cream */}
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-cream/10 animate-float" />
      <div className="absolute bottom-16 left-16 w-16 h-16 rounded-full bg-magenta/20 animate-float-slow" />

      {/* Triángulo decorativo SVG */}
      <svg
        className="absolute bottom-8 right-24 w-16 h-16 text-mustard/30"
        viewBox="0 0 60 60" fill="currentColor"
      >
        <polygon points="30,5 55,52 5,52"/>
      </svg>

      {/* Squiggle */}
      <svg
        className="absolute top-1/3 left-10 w-14 h-14 text-cream/20"
        viewBox="0 0 60 60" fill="none" stroke="currentColor"
        strokeWidth="4" strokeLinecap="round"
      >
        <path d="M10 30 Q20 10 30 30 Q40 50 50 30"/>
      </svg>

      <div className="container-max section-pad relative z-10 text-center">
        {/* Título */}
        <h2 className="font-heading text-display text-cream mb-6 leading-tight">
          Lo que más quiero<br/>ahora mismo:
        </h2>

        {/* Frase grande */}
        <p className="font-heading text-hero text-magenta leading-tight mb-10">
          Estar contigo.
        </p>

        {/* Párrafo */}
        <p className="font-body text-body text-cream/75 max-w-xl mx-auto leading-relaxed mb-10">
          Desayunar juntos. Pasear a los perritos. Comer muchos tacos.
          Ir a la Patagonia. Jugar con Patitas. Dormir abrazados.
          Darte besos en la carita. Amarte mucho mucho.
        </p>

        {/* Badge */}
        <span className="chip border-cream text-cream bg-transparent text-base px-6 py-2">
          🏠 Pronto
        </span>
      </div>

      {/* Onda SVG de transición hacia footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 L0 40 Q360 10 720 40 Q1080 70 1440 40 L1440 60 Z" fill="#1A3EBF"/>
        </svg>
      </div>
    </section>
  )
}

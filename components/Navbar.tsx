'use client'

import { useEffect, useRef, useState } from 'react'

const LINKS = [
  { label: 'Cuac',   href: '#nosotros' },
  { label: 'Fotos',  href: '#fotos'    },
  { label: 'Te amo', href: '#porque'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 animate-slide-down
          ${scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-nav'
            : 'bg-transparent'}
        `}
      >
        <div className="container-max flex items-center justify-between h-[76px]">
          {/* Logo */}
          <a
            href="#hero"
            className="font-heading text-2xl text-magenta select-none"
          >
            P <span className="text-cobalt">&</span> A
          </a>

          {/* Links escritorio */}
          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="
                    font-body font-700 text-small uppercase tracking-wider
                    text-cobalt hover:text-magenta transition-colors relative group
                  "
                >
                  {l.label}
                  <span className="
                    absolute -bottom-1 left-0 w-0 h-0.5 bg-magenta rounded-full
                    transition-all duration-300 group-hover:w-full
                  "/>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburguesa móvil */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-[2px] bg-cobalt rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cobalt rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-cobalt rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Panel lateral móvil */}
      <div className={`
        fixed inset-0 z-40 md:hidden
        transition-opacity duration-300
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-cobalt/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div className={`
          absolute top-0 right-0 h-full w-72 bg-cream shadow-card-hover
          flex flex-col pt-24 px-8 gap-6
          transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Círculo decorativo */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-magenta/20" />

          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading text-2xl text-cobalt hover:text-magenta transition-colors"
            >
              {l.label}
            </a>
          ))}

          <div className="mt-auto mb-8">
            <p className="font-body text-small text-cobalt/50">Hecho con ♥ para Pam</p>
          </div>
        </div>
      </div>
    </>
  )
}

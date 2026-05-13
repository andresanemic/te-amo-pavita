/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── COLORES ─────────────────────────────────────────────────────────────
      colors: {
        cream:      '#FAF0E6',   // fondo general — blanco roto cálido
        magenta:    '#E91E8C',   // acento principal — rosa intenso
        coral:      '#E8402A',   // acento secundario — rojo coral
        cobalt:     '#1A3EBF',   // azul cobalto — texto oscuro, contraste
        periwinkle: '#5B7FD4',   // azul cielo — elementos decorativos
        teal:       '#1A7A5E',   // verde azulado — acentos naturales
        mustard:    '#E8A020',   // amarillo cálido — chips y detalles
        orange:     '#F07030',   // naranja suave — degradados y hover
      },

      // ─── TIPOGRAFÍAS ─────────────────────────────────────────────────────────
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'], // Fredoka One
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'], // Nunito
      },

      fontSize: {
        'hero':    ['clamp(3.5rem, 10vw, 7rem)',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.2rem, 5vw, 4.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.6rem, 3vw, 2.4rem)', { lineHeight: '1.2' }],
        'subhead': ['clamp(1.1rem, 2vw, 1.4rem)', { lineHeight: '1.5' }],
        'body':    ['1.125rem',                   { lineHeight: '1.65' }],
        'small':   ['0.9rem',                     { lineHeight: '1.5' }],
      },

      // ─── ESPACIADO ───────────────────────────────────────────────────────────
      spacing: {
        'section':    '7rem',
        'section-sm': '4rem',
      },

      // ─── BORDES ──────────────────────────────────────────────────────────────
      borderRadius: {
        'card':   '1.5rem',
        'pill':   '9999px',
        'photo':  '1.25rem',
      },

      // ─── SOMBRAS ─────────────────────────────────────────────────────────────
      boxShadow: {
        'card':  '0 4px 28px rgba(0,0,0,0.10)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.16)',
        'nav':   '0 2px 24px rgba(0,0,0,0.09)',
      },

      // ─── ANIMACIONES CSS ─────────────────────────────────────────────────────
      keyframes: {
        slideDown: {
          '0%':   { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)',      opacity: '1' },
        },
        fadeUp: {
          '0%':   { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':      { transform: 'translateY(-12px) rotate(3deg)' },
          '66%':      { transform: 'translateY(6px) rotate(-2deg)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.5s ease forwards',
        'fade-up':    'fadeUp 0.7s ease forwards',
        'bounce-y':   'bounceY 1.8s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}

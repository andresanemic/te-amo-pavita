# te-amo-pavita — Guía del proyecto

Sitio web personal de amor. Hecho por Andrés para Pam.
Stack: Next.js 14 · App Router · Tailwind CSS · TypeScript · Embla Carousel.

---

## Cómo correr el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

---

## Estructura de archivos

```
te-amo-pavita/
│
├── app/
│   ├── layout.tsx          # Root layout — <html>, <body>, metadata del sitio
│   ├── page.tsx            # Página principal: importa y ordena los componentes
│   └── globals.css         # Tailwind base + Google Fonts + clases utilitarias globales
│
├── components/
│   ├── Navbar.tsx          # Barra fija con scroll-blur y panel lateral en móvil
│   ├── Hero.tsx            # Sección principal — pantalla completa, formas decorativas
│   ├── Nosotros.tsx        # Sección "Nuestra historia" — fondo cobalt, stats visuales
│   ├── PhotoSlider.tsx     # Carrusel de fotos con Embla Carousel — loop infinito
│   ├── PorQueElla.tsx      # Grid de 6 cards — razones por las que ama a Pam
│   ├── LoQueMasQuiero.tsx  # Sección teal — frase grande + párrafo íntimo
│   └── Footer.tsx          # Footer cobalt con formas geométricas decorativas
│
├── public/
│   └── images/             # Todas las fotos del carrusel y del sitio
│
├── tailwind.config.js      # TODOS los tokens de diseño (colores, tipografías, etc.)
├── next.config.js          # Config de Next.js
├── postcss.config.js       # Requerido por Tailwind
├── package.json            # Dependencias (incluye embla-carousel-react)
└── tsconfig.json           # Config de TypeScript
```

---

## Colores

**Archivo:** `tailwind.config.js` → `theme.extend.colors`

| Token          | Hex        | Uso principal                                |
|----------------|------------|----------------------------------------------|
| `cream`        | `#FAF0E6`  | Fondo general de la página                   |
| `magenta`      | `#E91E8C`  | Acento principal — botones, logo, énfasis    |
| `coral`        | `#E8402A`  | Acento secundario — badges, hover, ondas SVG |
| `cobalt`       | `#1A3EBF`  | Texto principal, sección Nosotros, Footer    |
| `periwinkle`   | `#5B7FD4`  | Tarjeta de stats, elementos decorativos      |
| `teal`         | `#1A7A5E`  | Sección "Lo que más quiero", card #3         |
| `mustard`      | `#E8A020`  | Badge "Nuestra historia", detalles           |
| `orange`       | `#F07030`  | Degradados, hover, formas decorativas        |

### Uso en Tailwind

```html
<div class="bg-magenta text-cream">       <!-- fondo magenta, texto cream -->
<div class="border-cobalt text-cobalt">   <!-- borde y texto cobalt -->
<div class="bg-teal/10">                  <!-- teal al 10% de opacidad -->
```

---

## Tipografías

**Archivos:** `tailwind.config.js` → `theme.extend.fontFamily` / `app/globals.css`

| Variable CSS      | Familia       | Clase Tailwind    | Uso                              |
|-------------------|---------------|-------------------|----------------------------------|
| `--font-heading`  | Fredoka One   | `font-heading`    | Títulos, logo, números grandes   |
| `--font-body`     | Nunito        | `font-body`       | Párrafos, botones, labels, chips |

Las fuentes se cargan en `globals.css` vía Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap');
```

**Cambiar fuentes:** edita el `@import` en `globals.css` y las variables `--font-heading` / `--font-body` en `:root`.

### Tamaños (responsivos con clamp)

| Clase Tailwind  | Rango            | Uso                          |
|-----------------|------------------|------------------------------|
| `text-hero`     | 3.5rem → 7rem    | Título principal del Hero    |
| `text-display`  | 2.2rem → 4.5rem  | Títulos de sección           |
| `text-heading`  | 1.6rem → 2.4rem  | Títulos de cards             |
| `text-subhead`  | 1.1rem → 1.4rem  | Subtítulos                   |
| `text-body`     | 1.125rem         | Párrafos                     |
| `text-small`    | 0.9rem           | Labels, captions, metadata   |

---

## Clases utilitarias globales

Definidas en `app/globals.css` dentro de `@layer components`:

| Clase             | Qué hace                                                   |
|-------------------|------------------------------------------------------------|
| `.container-max`  | Centra el contenido: `max-w-6xl mx-auto px-5 md:px-10 lg:px-16` |
| `.section-pad`    | `py-section` — padding vertical estándar de secciones      |
| `.h-hero`         | Fredoka One + text-hero + text-cobalt                      |
| `.h-display`      | Fredoka One + text-display + text-cobalt                   |
| `.h-heading`      | Fredoka One + text-heading + text-cobalt                   |
| `.t-body`         | Nunito + text-body + text-cobalt/80                        |
| `.t-small`        | Nunito + text-small + text-cobalt/60                       |
| `.chip`           | Badge estilo sticker: pill, border-2, uppercase, tracking  |
| `.btn-primary`    | Botón magenta → coral al hover                             |
| `.btn-outline`    | Botón borde cobalt → relleno cobalt al hover               |
| `.bg-dots`        | Patrón dot-grid SVG como background (usado en PhotoSlider) |
| `.bg-diagonals`   | Patrón de líneas diagonales (usado en PorQueElla)          |

---

## Imágenes — carrusel

**Carpeta:** `public/images/`

El carrusel espera 12 fotos con estos nombres exactos:

| Archivo         | Leyenda por defecto                               |
|-----------------|---------------------------------------------------|
| `foto-1.jpg`    | El primero de muchos momentos juntos              |
| `foto-2.jpg`    | Desde distintos rincones del mundo                |
| `foto-3.jpg`    | Esa sonrisa que me tiene enamorado                |
| `foto-4.jpg`    | Siempre juntos, aunque sea en fotos               |
| `foto-5.jpg`    | Mi pavita bella                                   |
| `foto-6.jpg`    | Cada foto, una prueba de que esto es real         |
| `foto-7.jpg`    | Los planes que estamos construyendo               |
| `foto-8.jpg`    | La distancia es solo un detalle                   |
| `foto-9.jpg`    | Pronto, el mismo techo                            |
| `foto-10.jpg`   | Todo lo que viene nos espera                      |
| `foto-11.jpg`   | Neza × el mundo                                   |
| `foto-12.jpg`   | Para siempre y un día más                         |

- Si una imagen no existe → se muestra un gradiente de color como placeholder (nunca rompe el layout)
- Para cambiar leyendas: edita el array `PHOTOS` en `components/PhotoSlider.tsx` (línea 7)
- Para agregar más fotos: agrega entradas al mismo array y pon las imágenes en `/public/images/`
- Formatos recomendados: `.jpg` o `.webp`. Proporción ideal: 4:5 (portrait)

---

## Componentes — resumen

### `Navbar.tsx`
- Fija arriba (`fixed top-0 z-50`), animación `slide-down` al cargar
- Fondo transparente → `cream/90 + backdrop-blur` al hacer scroll (umbral: 40px)
- Menú hamburguesa abre panel lateral (`translate-x`) en móvil — **no dropdown**
- Links definidos en el array `LINKS` (línea 5) — edítalos para cambiar el menú

### `Hero.tsx`
- Pantalla completa (`min-h-screen`), fondo `cream`
- Formas decorativas: círculos, triángulo, squiggle — todos SVG inline o `div` CSS
- Animación de entrada: `opacity + translateY` vía `useEffect` con `setTimeout(200ms)`
- Contenido editable directamente en el JSX

### `Nosotros.tsx`
- Fondo `cobalt`, texto `cream`
- Grid 2 columnas: texto a la izquierda, tarjeta de stats a la derecha
- Stats en array `STATS` (línea 4) — edita número y label
- Onda SVG de transición al final (hacia la sección siguiente en `cream`)

### `PhotoSlider.tsx`
- Usa **Embla Carousel** con plugin **Autoplay** (3500ms, no pausa al interactuar)
- Loop infinito, `dragFree: true` (arrastrável libremente en móvil)
- Slides visibles: 1 en móvil, 2 en tablet, ~3 en desktop (con peek del siguiente)
- Botones prev/next: círculos magenta, visibles solo en desktop
- Array `PHOTOS` (línea 7): cada entrada tiene `src` y `caption`

### `PorQueElla.tsx`
- Grid `sm:grid-cols-2 lg:grid-cols-3`
- Cada card tiene rotación leve (`-rotate-1` / `rotate-1`) que desaparece al hover
- Array `CARDS` (línea 4): edita `title`, `text`, `color`, `border`, `bg`, `rotate`
- Iconos: SVG inline dentro de la definición del array

### `LoQueMasQuiero.tsx`
- Fondo `teal`, texto en `cream` y `magenta`
- Formas decorativas flotantes CSS + SVG
- Contenido editable directamente en el JSX
- Onda SVG de transición al footer (hacia `cobalt`)

### `Footer.tsx`
- Fondo `cobalt`
- Logo "P & A" en Fredoka One grande, magenta
- Franja de formas geométricas (círculos, cuadrados, triángulos) en colores variados
- Array `SHAPES` (línea 3) para personalizar la franja decorativa

---

## Animaciones CSS

Definidas en `tailwind.config.js` → `theme.extend.keyframes` y `animation`:

| Clase Tailwind     | Efecto                                       | Usado en                 |
|--------------------|----------------------------------------------|--------------------------|
| `animate-slide-down` | Navbar entra desde arriba al montar        | Navbar                   |
| `animate-fade-up`  | Elemento sube con fade (disponible para uso) | Hero (vía JS directo)    |
| `animate-bounce-y` | Rebote vertical suave en loop               | Flecha scroll del Hero   |
| `animate-float`    | Flotación con leve rotación — 6s loop       | Formas decorativas       |
| `animate-float-slow` | Igual pero 9s — más lento                 | Formas grandes de fondo  |
| `animate-spin-slow` | Rotación completa — 20s loop               | Disponible               |

---

## Dependencias

| Paquete                    | Versión   | Para qué                                   |
|----------------------------|-----------|--------------------------------------------|
| `next`                     | 14.2.3    | Framework                                  |
| `react` / `react-dom`      | ^18       | UI                                         |
| `embla-carousel-react`     | ^8.1.5    | Carrusel de fotos                          |
| `embla-carousel-autoplay`  | ^8.1.5    | Plugin autoplay para Embla                 |
| `tailwindcss`              | ^3.4.1    | Estilos                                    |
| `typescript`               | ^5        | Tipado                                     |

# Evalia · Next.js

Migración del sitio estático original a Next.js 15 (App Router) + TypeScript, optimizado para SEO y deploy en Vercel.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (strict)
- **next/font** (Poppins self-hosted, sin FOUT)
- **CSS** del sistema de diseño original (`tokens.css`, `base.css`, `components.css`, `chrome.css`, `flow.css`, `landing.css`) — importados via `app/globals.css`
- **Vercel-ready**: zero config

## Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar dev server
npm run dev
# → http://localhost:3000

# 3. Build de producción
npm run build
npm start

# 4. Type-check
npm run type-check

# 5. Lint
npm run lint
```

## Deploy a Vercel

```bash
# Desde la raíz del proyecto
vercel             # primera vez: setup interactivo
vercel --prod      # deploy a producción
```

O conectar el repo de GitHub a Vercel y se deploya automáticamente con cada push a `main`.

## Estructura

```
evalia-next/
├── app/                              ← App Router
│   ├── layout.tsx                    ← root layout (metadata, fonts, JSON-LD Organization)
│   ├── page.tsx                      ← landing principal (/)
│   ├── globals.css                   ← imports del sistema de diseño
│   ├── sitemap.ts                    ← genera sitemap.xml
│   ├── robots.ts                     ← genera robots.txt
│   ├── not-found.tsx                 ← 404 personalizada
│   ├── caso-epsa/page.tsx
│   ├── demos/
│   │   ├── page.tsx                  ← /demos (listado)
│   │   ├── thayari-consistencia/page.tsx
│   │   └── el-abra-consistencia/page.tsx
│   ├── analisis/
│   │   ├── page.tsx                  ← /analisis (índice)
│   │   ├── antofagasta-carga/page.tsx
│   │   ├── etapas-seia/page.tsx
│   │   ├── organizaciones/page.tsx
│   │   └── responsables-estatales/page.tsx
│   └── components-catalog/page.tsx   ← uso interno (excluido en robots.txt)
│
├── components/
│   ├── TopBar.tsx                    ← nav universal con dropdown
│   ├── Footer.tsx                    ← footer universal
│   ├── PageShell.tsx                 ← wrapper para páginas con HTML preservado
│   ├── Button.tsx                    ← <Button variant="primary|ghost|outline">
│   ├── SectionLabel.tsx
│   └── LandingScripts.tsx            ← carga el JS runtime original
│
├── lib/
│   ├── seo.ts                        ← canonical, ogImage, SITE constants
│   ├── landing-content.ts            ← HTML del index particionado en chunks
│   └── page-content-*.ts             ← HTML de cada otra página
│
├── styles/
│   ├── tokens.css                    ← design tokens
│   ├── base.css
│   ├── components.css
│   ├── chrome.css
│   ├── flow.css
│   └── landing.css
│
├── public/
│   ├── assets/                       ← logos, imágenes, íconos
│   └── data/                         ← CSVs de los análisis
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## SEO implementado

- **Metadata API**: `title`, `description`, `keywords`, `authors`, `creator`, `publisher` global + override por página
- **OpenGraph + Twitter Cards**: tags completos en cada página (incluyendo `og:image`, `og:type`, `og:locale`)
- **Canonical URLs**: vía `alternates.canonical` en cada página
- **Sitemap.xml**: generado dinámicamente en `/sitemap.xml` con priorities y changefreq
- **Robots.txt**: en `/robots.txt`, allow root excepto rutas internas
- **JSON-LD estructurado**:
  - `Organization` (en root layout)
  - `Service` (en home)
  - `FAQPage` (en home — mejora visibilidad en SERP de Google)
  - `BreadcrumbList` (en cada página interna)
- **Fonts optimizadas**: Poppins via `next/font`, eliminando FOUT y mejorando CLS
- **Headers de seguridad**: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- **Imágenes**: formatos modernos (AVIF/WebP) configurados en `next.config.ts`

## Navegación

- **Prefetch automático**: `<Link>` de Next prefetchea las rutas visibles → clicks instantáneos
- **Smooth scroll**: anclas internas (`#evaluacion-ambiental`, `#qa`, etc.) con `scroll-behavior: smooth` y `scroll-padding-top: 80px` (compensa el topbar fijo)
- **404 personalizado**: `app/not-found.tsx` con branding y CTA de regreso al home
- **TopBar y Footer universales**: componentes React, no dependen de inyección JS

## Próximos pasos (componentización incremental)

El index.html y las otras páginas se migraron preservando su HTML original con `dangerouslySetInnerHTML` para mantener fidelidad visual al 100% desde el día 1. Esto da SEO completo y navegación rápida sin reescribir 49.000 líneas.

Tareas pendientes para refactorización progresiva (no bloquean deploy):

1. **Componentizar el Hero** → `components/Hero.tsx` con props tipadas
2. **Componentizar las secciones de la landing**:
   - `<Intro />` (sección 01)
   - `<UseCase />` (sección 02 — caso de uso, agentes, flujo SEIA)
   - `<HowItWorks />` (sección 03 — 3 pasos)
   - `<Impact />` (sección 04)
   - `<Security />` (sección 05)
   - `<Faq />` (sección 06 — usando `<details>` nativos)
   - `<NextSteps />` (sección 07)
3. **Convertir tools-data.ts** desde el JSON inline en `index.html` a un módulo TypeScript tipado
4. **Componentizar el modal de herramientas** → `components/ToolModal.tsx` (Client Component con state)
5. **Componentizar las demos** (Thayari, El Abra) → estructura compartida
6. **Reemplazar `<img>` por `<Image>` de next/image** para optimización automática
7. **Internacionalización**: si se planea English, agregar `[locale]` segment

## Notas de migración

- El JS runtime original (`reveal-on-scroll`, modal de tools, dropdown del nav) se ejecuta vía `<Script strategy="afterInteractive">` para no bloquear el render.
- El TopBar es Client Component por el dropdown interactivo. El resto del sitio es Server Components (mejor SEO + performance).
- Los CSVs en `public/data/` están servidos estáticamente. Si en el futuro se quieren cargar dinámicamente, considerar moverlos a un endpoint API o ISR.
- Las páginas `/demos/*` son grandes (~1-2.5 MB de HTML cada una). Vercel las generará estáticamente en build time. Si quieres reducir bundle size, considera componentizarlas a futuro o cargar partes lazy.

## Variables de entorno

Por ahora no hay. Cuando se agreguen analytics, ZIP code lookup, formularios, etc., crear `.env.local` y `.env.example`.

## Contacto

Producto de **Inventures** — [evalia@inventures.cl](mailto:evalia@inventures.cl)

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SITE, canonical, ogImage } from "@/lib/seo";

// Importamos los CSS directamente (ES module imports) — más robusto que
// @import dentro de globals.css cuando los archivos viven fuera de /app.
import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/components.css";
import "../styles/chrome.css";
import "../styles/flow.css";
import "../styles/landing.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#002132" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Consultoría ambiental amplificada por IA`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "evaluación ambiental",
    "EIA",
    "DIA",
    "SEIA",
    "consultoría ambiental",
    "Adenda",
    "ICSARA",
    "PAC",
    "RCA",
    "inteligencia artificial",
    "IA",
    "Inventures",
    "Chile",
  ],
  authors: [{ name: "Inventures", url: "https://inventures.cl" }],
  creator: "Inventures",
  publisher: "Inventures",
  alternates: {
    canonical: canonical("/"),
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: canonical("/"),
    siteName: SITE.name,
    title: `${SITE.name} · Consultoría ambiental amplificada por IA`,
    description: SITE.description,
    images: [
      {
        url: ogImage(),
        width: 1200,
        height: 630,
        alt: "Evalia · Inventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Consultoría ambiental amplificada por IA`,
    description: SITE.description,
    images: [ogImage()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD: Organization schema (renderizado dentro del body — recomendado
  // por Next.js App Router; NO usar <head> directamente).
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evalia",
    legalName: "Evalia by Inventures",
    url: SITE.url,
    logo: `${SITE.url}/assets/evalia-logo-white.svg`,
    description: SITE.description,
    email: SITE.email,
    parentOrganization: {
      "@type": "Organization",
      name: "Inventures",
      url: "https://inventures.cl",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
  };

  // Pre-hydration: aplica data-accent desde localStorage al <html> antes de
  // que React hidrate. Evita el "hydration failed" del JS legacy.
  const accentBootstrap = `(function(){try{var t=JSON.parse(localStorage.getItem('evalia.tweaks.v1')||'{}');var a=t.accent||'cyan';document.documentElement.setAttribute('data-accent',a);}catch(e){}})();`;

  return (
    <html
      lang="es-CL"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body className="ev-landing" suppressHydrationWarning>
        {/* Resource hints — React 19 los hoistea al <head> automáticamente.
            Reducen latencia de DNS+TLS+TCP cuando el browser eventualmente
            necesita Plotly (en /analisis/*) o Chart.js (en antofagasta-carga). */}
        <link
          rel="preconnect"
          href="https://cdn.plot.ly"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        {/* dns-prefetch como fallback para browsers que ignoran preconnect */}
        <link rel="dns-prefetch" href="//cdn.plot.ly" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Preload del hero LCP — mejora Largest Contentful Paint del home */}
        <link
          rel="preload"
          as="image"
          href="/assets/hero-landscape.jpg"
          fetchPriority="high"
        />

        {/* Bootstrap inline — corre antes de hidratación */}
        <script dangerouslySetInnerHTML={{ __html: accentBootstrap }} />
        {/* JSON-LD: schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

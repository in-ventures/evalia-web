import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { LandingScripts } from "@/components/LandingScripts";
import {
  LANDING_PRE,
  LANDING_MID,
  LANDING_POST,
} from "@/lib/landing-content";
import { SITE, canonical, ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Consultoría ambiental amplificada por IA",
  description: SITE.description,
  alternates: { canonical: canonical("/") },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: canonical("/"),
    siteName: SITE.name,
    title: "Evalia · Consultoría ambiental amplificada por IA",
    description: SITE.description,
    images: [{ url: ogImage(), width: 1200, height: 630, alt: "Evalia" }],
  },
};

// JSON-LD: Service schema (lo que ofrece Evalia)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Evalia",
  provider: {
    "@type": "Organization",
    name: "Inventures",
    url: "https://inventures.cl",
  },
  serviceType: "Consultoría ambiental amplificada por IA",
  description: SITE.description,
  areaServed: { "@type": "Country", name: "Chile" },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Titulares de proyectos en evaluación ambiental, consultoras ambientales",
  },
  url: canonical("/"),
};

// JSON-LD: FAQPage schema (mejora visibilidad en SERP)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Mis documentos ambientales van a entrenar un modelo de IA de terceros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los contratos enterprise con los proveedores de modelos prohíben el uso de datos del cliente para entrenamiento. Adicionalmente se configura retención nula: los prompts no se almacenan ni temporalmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si la IA inventa un hallazgo que no existe en el documento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evalia mitiga y restringe las alucinaciones de los modelos. No reemplaza el criterio técnico: lo acelera. Cada hallazgo es trazable al documento, página y párrafo fuente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Esto viene a reemplazar a mi equipo ambiental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Evalia absorbe la carga mecánica para que el equipo ambiental del cliente use su tiempo en lo que no es delegable: criterio técnico, redacción, decisión regulatoria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué infraestructura necesito desplegar o integrar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ninguna. Evalia es un servicio, no un software. Ustedes entregan documentos por un canal acordado y seguro, y Evalia entrega sus resultados. Sin integraciones y sin instalaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mi proyecto puede cruzarse con datos de otro cliente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto opera en un espacio lógico separado, sin acceso cruzado entre clientes ni entre proyectos del mismo cliente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo validar esto antes de contratar Evalia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Podemos realizar una demo acotada a un capítulo del EIA, un proceso PAC, o un bloque de ICSARA. Luego, costo y alcance se definen según el proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se cobra el servicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un pago mensual a definir según alcance y plazos acordados. Esta definición depende de la etapa del proyecto, complejidad y herramientas a utilizar.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {LANDING_PRE && (
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: LANDING_PRE }}
        />
      )}
      <TopBar />
      {/* El HTML legacy puede tener nesting que el browser auto-corrige,
          causando diff espurio en hidratación. Como confiamos en este HTML
          preservado, suprimimos el warning. */}
      <main id="main" suppressHydrationWarning>
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: LANDING_MID }}
        />
      </main>
      <Footer />
      {LANDING_POST && (
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: LANDING_POST }}
        />
      )}
      <LandingScripts />
    </>
  );
}

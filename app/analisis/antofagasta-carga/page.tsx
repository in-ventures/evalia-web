import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ANALISIS_ANTOFAGASTA_CSS, ANALISIS_ANTOFAGASTA_HTML, ANALISIS_ANTOFAGASTA_JS } from "@/lib/page-content-analisis-antofagasta-carga";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/analisis/antofagasta-carga";
const TITLE = "Carga documental · Antofagasta";
const DESC = "Análisis de la carga documental de proyectos en evaluación ambiental en la región de Antofagasta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: canonical(PATH) },
  openGraph: {
    type: "article",
    locale: SITE.locale,
    url: canonical(PATH),
    siteName: SITE.name,
    title: `${TITLE} · ${SITE.name}`,
    description: DESC,
    images: [{ url: ogImage(), width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · ${SITE.name}`,
    description: DESC,
    images: [ogImage()],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: canonical("/") },
    { "@type": "ListItem", position: 2, name: "Analisis", item: canonical("/analisis") },
    { "@type": "ListItem", position: 3, name: "Carga documental · Antofagasta", item: canonical("/analisis/antofagasta-carga") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={ANALISIS_ANTOFAGASTA_HTML}
      pageCss={ANALISIS_ANTOFAGASTA_CSS}
      runtime={ANALISIS_ANTOFAGASTA_JS}
      jsonLd={breadcrumb}
      externalScripts={["https://cdn.jsdelivr.net/npm/chart.js@4.5.1"]}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

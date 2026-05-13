import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ANALISIS_ETAPAS_CSS, ANALISIS_ETAPAS_HTML, ANALISIS_ETAPAS_JS } from "@/lib/page-content-analisis-etapas-seia";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/analisis/etapas-seia";
const TITLE = "Tiempos por etapa SEIA";
const DESC = "Estudio de los tiempos por etapa en el Sistema de Evaluación de Impacto Ambiental (SEIA) chileno.";

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
    { "@type": "ListItem", position: 3, name: "Tiempos por etapa SEIA", item: canonical("/analisis/etapas-seia") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={ANALISIS_ETAPAS_HTML}
      pageCss={ANALISIS_ETAPAS_CSS}
      runtime={ANALISIS_ETAPAS_JS}
      jsonLd={breadcrumb}
      externalScripts={["https://cdn.plot.ly/plotly-2.32.0.min.js"]}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

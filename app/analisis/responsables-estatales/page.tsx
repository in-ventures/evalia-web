import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ANALISIS_RESP_CSS, ANALISIS_RESP_HTML, ANALISIS_RESP_JS } from "@/lib/page-content-analisis-responsables-estatales";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/analisis/responsables-estatales";
const TITLE = "Tiempos de OAECAS y SEA en tramitar";
const DESC = "Análisis de responsables estatales en el proceso de evaluación ambiental chileno.";

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
    { "@type": "ListItem", position: 3, name: "Tiempos de OAECAS y SEA en tramitar", item: canonical("/analisis/responsables-estatales") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={ANALISIS_RESP_HTML}
      pageCss={ANALISIS_RESP_CSS}
      runtime={ANALISIS_RESP_JS}
      jsonLd={breadcrumb}
      externalScripts={["https://cdn.plot.ly/plotly-2.32.0.min.js"]}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

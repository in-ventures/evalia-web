import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ANALISIS_CSS, ANALISIS_HTML, ANALISIS_JS } from "@/lib/page-content-analisis";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/analisis";
const TITLE = "Estudios y análisis del SEIA";
const DESC = "Estudios cuantitativos sobre el Sistema de Evaluación Ambiental chileno: tiempos, organismos, responsables, carga documental.";

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
    { "@type": "ListItem", position: 2, name: "Estudios y análisis del SEIA", item: canonical("/analisis") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={ANALISIS_HTML}
      pageCss={ANALISIS_CSS}
      runtime={ANALISIS_JS}
      jsonLd={breadcrumb}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

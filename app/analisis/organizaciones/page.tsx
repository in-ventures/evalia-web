import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ANALISIS_ORGS_CSS, ANALISIS_ORGS_HTML, ANALISIS_ORGS_JS } from "@/lib/page-content-analisis-organizaciones";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/analisis/organizaciones";
const TITLE = "Ranking por organismo · SEIA";
const DESC = "Ranking de organismos del Estado por participación en evaluaciones ambientales.";

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
    { "@type": "ListItem", position: 3, name: "Ranking por organismo · SEIA", item: canonical("/analisis/organizaciones") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={ANALISIS_ORGS_HTML}
      pageCss={ANALISIS_ORGS_CSS}
      runtime={ANALISIS_ORGS_JS}
      jsonLd={breadcrumb}
      externalScripts={["https://cdn.plot.ly/plotly-2.32.0.min.js"]}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

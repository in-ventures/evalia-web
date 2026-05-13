import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { DEMOS_LIST_CSS, DEMOS_LIST_HTML, DEMOS_LIST_JS } from "@/lib/page-content-demos";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/demos";
const TITLE = "Demos · Casos ambientales reales";
const DESC = "Demos navegables de Evalia construidas sobre documentación pública de proyectos ambientales reales en evaluación.";

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
    { "@type": "ListItem", position: 2, name: "Demos · Casos ambientales reales", item: canonical("/demos") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={DEMOS_LIST_HTML}
      pageCss={DEMOS_LIST_CSS}
      runtime={DEMOS_LIST_JS}
      jsonLd={breadcrumb}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

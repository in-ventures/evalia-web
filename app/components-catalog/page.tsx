import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { COMPONENTS_CSS, COMPONENTS_HTML } from "@/lib/page-content-components";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/components-catalog";
const TITLE = "Catálogo de componentes";
const DESC = "Catálogo del sistema de diseño de Evalia (uso interno).";

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
    { "@type": "ListItem", position: 2, name: "Catálogo de componentes", item: canonical("/components-catalog") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={COMPONENTS_HTML}
      pageCss={COMPONENTS_CSS}
      jsonLd={breadcrumb}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

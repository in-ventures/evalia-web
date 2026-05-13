import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { DEMO_THAYARI_CSS, DEMO_THAYARI_HTML, DEMO_THAYARI_JS } from "@/lib/page-content-demos-thayari-consistencia";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/demos/thayari-consistencia";
const TITLE = "Demo · Thayari · Análisis de consistencia";
const DESC = "Demo del análisis de consistencia de Evalia aplicado al proyecto Thayari de SQM Salar.";

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
    { "@type": "ListItem", position: 2, name: "Demos", item: canonical("/demos") },
    { "@type": "ListItem", position: 3, name: "Demo · Thayari · Análisis de consistencia", item: canonical("/demos/thayari-consistencia") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={DEMO_THAYARI_HTML}
      pageCss={DEMO_THAYARI_CSS}
      runtime={DEMO_THAYARI_JS}
      jsonLd={breadcrumb}
      bodyClass="ev-demo"
      clientOnly
    />
  );
}

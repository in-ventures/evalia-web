import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { DEMO_ELABRA_CSS, DEMO_ELABRA_HTML, DEMO_ELABRA_JS } from "@/lib/page-content-demos-el-abra-consistencia";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/demos/el-abra-consistencia";
const TITLE = "Demo · El Abra · Análisis de consistencia";
const DESC = "Demo del análisis de consistencia de Evalia aplicado al proyecto Continuidad Operacional El Abra.";

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
    { "@type": "ListItem", position: 3, name: "Demo · El Abra · Análisis de consistencia", item: canonical("/demos/el-abra-consistencia") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={DEMO_ELABRA_HTML}
      pageCss={DEMO_ELABRA_CSS}
      runtime={DEMO_ELABRA_JS}
      jsonLd={breadcrumb}
      bodyClass="ev-demo ev-theme-bright"
      clientOnly
    />
  );
}

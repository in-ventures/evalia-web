import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CASO_EPSA_CSS, CASO_EPSA_HTML, CASO_EPSA_JS } from "@/lib/page-content-caso-epsa";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/caso-epsa";
const TITLE = "Caso EPSA · Puerto Exterior";
const DESC = "Caso de uso de Evalia aplicado a la consultoría ambiental del proyecto Puerto Exterior de EPSA.";

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
    { "@type": "ListItem", position: 2, name: "Caso EPSA · Puerto Exterior", item: canonical("/caso-epsa") }
  ],
};

export default function Page() {
  return (
    <PageShell
      html={CASO_EPSA_HTML}
      pageCss={CASO_EPSA_CSS}
      runtime={CASO_EPSA_JS}
      jsonLd={breadcrumb}
      bodyClass="ev-demo ev-theme-bright"
    />
  );
}

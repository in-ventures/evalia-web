import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import {
  POR_QUE_EVALIA_HTML,
  POR_QUE_EVALIA_CSS,
  POR_QUE_EVALIA_JS,
} from "@/lib/page-content-por-que-evalia";
import { canonical, ogImage, SITE } from "@/lib/seo";

const PATH = "/por-que-evalia";
const TITLE = "Por qué Evalia";
const DESC =
  "Cuándo basta un prompt directo y cuándo se necesita un servicio orquestado como Evalia. La diferencia no son páginas, es el tipo de tarea: cruce exhaustivo, trazable y defendible ante el SEA.";

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
    { "@type": "ListItem", position: 2, name: TITLE, item: canonical(PATH) },
  ],
};

export default function Page() {
  return (
    <PageShell
      html={POR_QUE_EVALIA_HTML}
      pageCss={POR_QUE_EVALIA_CSS}
      runtime={POR_QUE_EVALIA_JS}
      jsonLd={breadcrumb}
    />
  );
}

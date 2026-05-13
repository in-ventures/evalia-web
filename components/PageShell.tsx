import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { BodyClass } from "@/components/BodyClass";
import { PageRuntime } from "@/components/PageRuntime";
import { ClientHtmlInject } from "@/components/ClientHtmlInject";

type Props = {
  html: string;
  /** CSS específico de esta página (no el bundle compartido). Se renderiza
   *  como <style> antes del body para evitar hydration mismatch. */
  pageCss?: string;
  /** JS runtime original a inyectar (opcional) */
  runtime?: string;
  /** Si la página debe mostrar el topbar/footer universal (default: true) */
  withChrome?: boolean;
  /** Schema JSON-LD adicional para esta página */
  jsonLd?: unknown;
  /** Scripts de CDN externos a cargar (Plotly, Chart.js, etc.).
   *  Se renderizan como <script src> sincrónicos antes del runtime, replicando
   *  el patrón original donde Plotly venía en el <head> bloqueando.
   */
  externalScripts?: string[];
  /** Clase a aplicar al <body> mientras la página esté montada. */
  bodyClass?: string;
  /** Si true: inyecta el HTML SOLO en el cliente (via useEffect), evitando
   *  SSR del contenido. Usar para HTML legacy MUY complejo (tablas con tbody
   *  implícitos, etc.) donde suppressHydrationWarning no es suficiente.
   *  Trade-off: el contenido no aparece en SSR → SEO neutro. Usar solo en
   *  páginas donde el SEO del contenido no importa (e.g. demos navegables). */
  clientOnly?: boolean;
};

/**
 * Renderiza el contenido HTML preservado de una página migrada del sitio
 * estático original, envuelto en TopBar y Footer del nuevo Next.js.
 *
 * Estrategia para scripts:
 * - CDN libs como <script src> directo (no next/script): el browser los
 *   carga sincrónicamente en orden DOM, igual que el HTML original.
 * - Runtime inline como <script dangerouslySetInnerHTML>: también sincrónico,
 *   ejecutado DESPUÉS de los CDN. Las funciones quedan en scope global.
 *
 * Esto replica exactamente el comportamiento del HTML estático, donde Plotly
 * estaba en el <head> (sin async/defer) y bloqueaba hasta cargar antes de
 * que se ejecutara el runtime del body.
 */
export function PageShell({
  html,
  pageCss,
  runtime,
  withChrome = true,
  jsonLd,
  externalScripts = [],
  bodyClass,
  clientOnly = false,
}: Props) {
  return (
    <>
      {bodyClass ? <BodyClass className={bodyClass} /> : null}
      {/* CSS page-specific cuando NO es clientOnly. En clientOnly, el CSS
          se inyecta junto con el HTML para evitar FOUC. */}
      {pageCss && !clientOnly ? (
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: pageCss }}
        />
      ) : null}
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      {withChrome && <TopBar />}
      <main id="main" suppressHydrationWarning>
        {clientOnly ? (
          /* HTML legacy MUY complejo (tablas, meta auto-hoisted): inyectar
             solo en el cliente vía ref para evitar hydration mismatch
             persistente. SEO neutro porque el contenido no llega en SSR. */
          <ClientHtmlInject html={html} pageCss={pageCss} />
        ) : (
          <div
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </main>
      {withChrome && <Footer />}

      {/* Carga scripts externos + ejecuta runtime via useEffect. Esto re-corre
          en CADA navegación entre páginas (SPA), no solo en hard refresh. */}
      <PageRuntime externalScripts={externalScripts} runtime={runtime} />
    </>
  );
}

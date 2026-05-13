"use client";

import { useEffect, useRef } from "react";

type Props = {
  html: string;
  pageCss?: string;
};

/**
 * Inyecta HTML legacy COMPLEJO (con tables, tbody implícitos, meta auto-hoisted,
 * etc.) después del mount via ref. Esto evita el hydration mismatch porque
 * el SSR renderiza un div vacío y el contenido aparece solo en el client.
 *
 * Trade-off: el contenido NO está en el HTML rendered por SSR → SEO neutro.
 * Para páginas marketing usar PageShell normal con dangerouslySetInnerHTML.
 * Para demos navegables (donde el contenido es muy dinámico/no-SEO) usar esta.
 */
export function ClientHtmlInject({ html, pageCss }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = html;
    }
  }, [html]);

  return (
    <>
      {pageCss ? (
        <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      ) : null}
      <div ref={ref} />
    </>
  );
}

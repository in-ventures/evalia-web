"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
  /** URLs de scripts externos a cargar antes del runtime (CDN, etc.) */
  externalScripts?: string[];
  /** JS runtime inline a ejecutar después de cargar los externos */
  runtime?: string;
};

/**
 * Carga scripts externos y ejecuta el runtime inline en cada navegación.
 *
 * Por qué existe: cuando navegas entre páginas vía next/link (SPA), los
 * <script> tags renderizados por el servidor NO se re-ejecutan. Solo corren
 * en hard refresh. Este componente usa useEffect para garantizar que el
 * runtime corra en cada cambio de ruta, sin recargar la página.
 *
 * Cómo funciona:
 *   1. Carga los CDN dinámicamente si no están ya cargados (idempotente)
 *   2. Cuando todos están listos, ejecuta el runtime envuelto en IIFE
 *   3. El IIFE aísla las variables (const/let) para que re-ejecuciones
 *      no fallen por redeclaración
 */
export function PageRuntime({ externalScripts = [], runtime }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (!runtime) return;
    let cancelled = false;

    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
          `script[data-cdn="${src}"]`,
        );
        if (existing) {
          // Si está cargado o ya tiene listener, resolver inmediato
          if (existing.dataset.loaded === "true") {
            resolve();
            return;
          }
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error(`Failed: ${src}`)), { once: true });
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.setAttribute("data-cdn", src);
        s.onload = () => {
          s.dataset.loaded = "true";
          resolve();
        };
        s.onerror = () => reject(new Error(`Failed to load: ${src}`));
        document.head.appendChild(s);
      });

    (async () => {
      try {
        // Cargar todos los CDN en serie para preservar orden
        for (const src of externalScripts) {
          if (cancelled) return;
          await loadScript(src);
        }
        if (cancelled) return;

        // Pequeño delay para asegurar que el HTML inyectado vía
        // dangerouslySetInnerHTML del PageShell ya esté en el DOM
        await new Promise((r) => requestAnimationFrame(() => r(null)));

        // Ejecutar el runtime aislado en IIFE para evitar conflictos en
        // re-ejecuciones (const/let no se pueden redeclarar al top-level)
        const wrapped = `(function(){\n${runtime}\n})();`;
        // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
        new Function(wrapped)();
      } catch (err) {
        console.error("[PageRuntime] Error:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
    // pathname cambia con la navegación → re-ejecuta el runtime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

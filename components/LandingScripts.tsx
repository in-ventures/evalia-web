"use client";

import Script from "next/script";
import { LANDING_JS } from "@/lib/landing-content";

/**
 * Inyecta el JS runtime original de la landing (reveal-on-scroll, modal de
 * herramientas, dropdown, smooth scroll). Se carga después de hidratación.
 */
export function LandingScripts() {
  return (
    <Script id="landing-runtime" strategy="afterInteractive">
      {LANDING_JS}
    </Script>
  );
}

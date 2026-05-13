"use client";

import { useEffect } from "react";

/**
 * Setea document.body.className mientras la página esté montada.
 * Restaura "ev-landing" (default del layout root) al desmontar.
 *
 * Esto permite cambiar el contexto del diseño (ev-landing vs ev-demo)
 * por ruta sin tener que crear layouts anidados.
 */
export function BodyClass({ className }: { className: string }) {
  useEffect(() => {
    const prev = document.body.className;
    document.body.className = className;
    return () => {
      document.body.className = prev || "ev-landing";
    };
  }, [className]);

  return null;
}

/**
 * SEO helpers — base URL, canonical, OG image
 */

export const SITE = {
  url: "https://evalia.inventures.cl",
  name: "Evalia",
  brand: "Evalia · Inventures",
  description:
    "Aceleramos la evaluación ambiental de grandes proyectos y aseguramos su calidad. Evalia opera con IA sobre la documentación de EIA y DIA para acelerar Adendas y asegurar consistencia.",
  locale: "es_CL",
  twitter: "@inventurescl",
  email: "evalia@inventures.cl",
} as const;

export function canonical(path: string = "/"): string {
  if (!path.startsWith("/")) path = "/" + path;
  return `${SITE.url}${path === "/" ? "" : path}`;
}

export function ogImage(path: string = "/og-image.png"): string {
  return `${SITE.url}${path}`;
}

/**
 * URL para los CTAs de "Agendar demo".
 * Apunta a Google Calendar Appointment Scheduling de Evalia.
 * Migrado desde mailto: el usuario elige slot directamente y recibe
 * invite con Google Meet automático.
 */
export const BOOKING_URL = "https://calendar.app.google/EAPCWafB7YmCepzAA";

/** Alias retro-compatible para imports existentes. */
export const MAILTO_DEMO = BOOKING_URL;

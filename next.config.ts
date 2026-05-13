import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Compresión gzip/brotli para todas las respuestas (Vercel ya hace esto pero
  // explicitarlo asegura comportamiento consistente en otros hostings).
  compress: true,

  // optimizeCss: requiere instalar `critters` (en devDependencies). Si no
  // está instalado, Next falla silenciosamente o rompe el render en dev.
  // Activar después de `npm install` para que critters esté disponible.
  // experimental: {
  //   optimizeCss: true,
  // },

  // Output optimizaciones
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      // Seguridad + SEO (global)
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },

      // Cache agresivo para assets estáticos (logos, imágenes, fonts).
      // Estos archivos no cambian — un año de cache + immutable evita
      // re-validación. Vercel/CDN obedecen estos headers.
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

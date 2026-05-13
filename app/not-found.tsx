import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <TopBar />
      <main
        id="main"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 560, textAlign: "center" }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--ev-muted)",
              marginBottom: 24,
            }}
          >
            Error 404
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.1,
              margin: "0 0 24px",
              color: "var(--ev-ink)",
            }}
          >
            No encontramos esta página.
          </h1>
          <p style={{ color: "var(--ev-muted)", marginBottom: 40, fontSize: 17 }}>
            Es posible que el enlace haya cambiado o que el contenido haya sido
            movido.
          </p>
          <Link href="/" className="ev-btn ev-btn--primary">
            Volver al inicio <span className="ev-btn__arrow">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { SITE } from "@/lib/seo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ev-site-footer">
      <div className="ev-site-footer__left">
        <div className="ev-footer__brand">
          <img
            src="/assets/evalia-logo-white.svg"
            alt="Evalia"
            className="ev-footer__logo"
            width={120}
            height={32}
          />
          <span className="ev-footer__by">por Inventures</span>
        </div>
        <div className="ev-footer__tag">
          Consultoría ambiental amplificada por IA. Una operación de Inventures.
        </div>
      </div>
      <div className="ev-site-footer__mid">
        <div className="ev-footer__eyebrow">Producto de</div>
        <a
          href="https://inventures.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="ev-footer__inv-name"
        >
          Inventures{" "}
          <span className="ev-footer__external-note">inventures.cl ↗</span>
        </a>
      </div>
      <div className="ev-site-footer__right">
        <div className="ev-footer__eyebrow">Contacto</div>
        <a href={`mailto:${SITE.email}`} className="ev-footer__mail">
          {SITE.email}
        </a>
        <div className="ev-footer__loc">Santiago · Chile · {year}</div>
      </div>
    </footer>
  );
}

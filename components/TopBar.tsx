"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/seo";

const NAV_LINKS = [
  { href: "/#evaluacion-ambiental", label: "Soluciones IA" },
  { href: "/#demos", label: "Demos" },
  { href: "/#que-es", label: "Servicio Evalia" },
  { href: "/#impacto", label: "Impacto" },
  { href: "/#seguridad", label: "Seguridad" },
  { href: "/#qa", label: "Preguntas" },
];

const STUDIES = [
  { href: "/analisis", label: "Ver todos los estudios", lead: true },
  { href: "/analisis/etapas-seia", label: "Tiempos por etapa SEIA" },
  { href: "/analisis/responsables-estatales", label: "Tiempos de OAECAS y SEA en tramitar" },
  { href: "/analisis/antofagasta-carga", label: "Carga documental · Antofagasta" },
  { href: "/analisis/organizaciones", label: "Ranking por organismo" },
];

export function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isSolid, setIsSolid] = useState(!isHome);
  const [open, setOpen] = useState(false);          // dropdown desktop
  const [mobileOpen, setMobileOpen] = useState(false); // menú hamburguesa

  // Solid background scroll handler
  useEffect(() => {
    if (!isHome) {
      setIsSolid(true);
      return;
    }
    const onScroll = () => setIsSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`ev-site-nav${isSolid ? " is-solid" : ""}`}
        id="site-nav"
        aria-label="Navegación principal"
      >
        <div className="ev-site-nav__left">
          <Link href="/" aria-label="Evalia — Inicio" className="ev-nav-brand">
            <img
              src="/assets/evalia-logo-white.svg"
              alt="Evalia"
              className="ev-nav-brand__logo"
            />
            <span className="ev-nav-brand__by">por Inventures</span>
          </Link>
        </div>
        <div className="ev-site-nav__right">
          <div className="nav-group">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <span className="nav-divider"></span>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown__trigger"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Estudios
              <span className="nav-dropdown__chevron" aria-hidden="true">
                ▾
              </span>
            </button>
            <div className="nav-dropdown__menu" role="menu">
              {STUDIES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  role="menuitem"
                  className={s.lead ? "nav-dropdown__head" : undefined}
                >
                  {s.label}
                  {s.lead ? <span className="arr"> →</span> : null}
                </Link>
              ))}
            </div>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Agendar demo
          </a>
        </div>

        {/* Botón hamburguesa — solo visible en mobile via CSS */}
        <button
          type="button"
          className="ev-nav__burger"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="ev-mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`ev-nav__burger-icon${mobileOpen ? " is-open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>

      {/* Menú overlay mobile */}
      <div
        id="ev-mobile-menu"
        className={`ev-mobile-menu${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="ev-mobile-menu__inner">
          <ul className="ev-mobile-menu__list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ev-mobile-menu__divider" />
          <div className="ev-mobile-menu__section-title">Estudios</div>
          <ul className="ev-mobile-menu__list">
            {STUDIES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className={s.lead ? "ev-mobile-menu__lead" : undefined}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ev-mobile-menu__cta"
            onClick={() => setMobileOpen(false)}
          >
            Agendar demo →
          </a>
        </div>
      </div>
    </>
  );
}

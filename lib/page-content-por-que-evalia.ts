// page-content-por-que-evalia.ts
// HTML, CSS y JS de la página /por-que-evalia.
// Adaptado desde un mockup standalone:
//   - Sin tipografías itálicas (se eliminaron todos los <em>)
//   - "chico" → "pequeño"
//   - CSS scoped bajo .por-page para no contaminar el resto del sitio
//   - No carga Fraunces (solo Hanken Grotesk, que ya está global)

export const POR_QUE_EVALIA_HTML = `
<div class="por-page">
  <div class="por-glow" aria-hidden="true"></div>
  <svg class="por-contour" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g stroke="#0c4a5e" stroke-width="1" opacity="0.55">
      <path d="M-50 220 C 300 120, 600 320, 900 200 S 1500 160, 1500 160"/>
      <path d="M-50 300 C 320 200, 640 400, 960 280 S 1500 240, 1500 240"/>
      <path d="M-50 540 C 360 460, 700 660, 1040 540 S 1500 520, 1500 520"/>
      <path d="M-50 620 C 380 540, 720 740, 1080 620 S 1500 600, 1500 600"/>
      <path d="M-50 700 C 400 620, 740 820, 1120 700 S 1500 680, 1500 680"/>
    </g>
  </svg>

  <div class="por-main">
    <header class="por-hero por-wrap">
      <span class="por-eyebrow por-reveal"><span class="num">07</span><span class="bar"></span>Por qué Evalia</span>
      <h1 class="por-h1 por-reveal">No es cuántas páginas. Es qué tipo de tarea.</h1>
      <p class="por-lead por-reveal">Para un documento pequeño y limpio, hacerlo con un prompt está perfecto. El problema aparece cuando hay que cruzar miles de páginas y los hallazgos tienen que ser exhaustivos y defendibles ante el SEA.</p>
    </header>

    <section class="por-section por-wrap">
      <div class="por-split">
        <div class="por-panel por-reveal">
          <span class="tag">Basta un prompt</span>
          <h3>Tareas simples, documento acotado</h3>
          <ul>
            <li>Documento pequeño y bien estructurado</li>
            <li>Una pregunta puntual o un resumen</li>
            <li>Sin necesidad de respaldo trazable</li>
          </ul>
        </div>
        <div class="por-panel por-panel--no por-reveal">
          <span class="tag">Necesita Evalia</span>
          <h3>Cruce exhaustivo sobre el expediente</h3>
          <ul>
            <li>Miles de páginas, tablas y anexos heterogéneos</li>
            <li>Detectar <b>todas</b> las inconsistencias, no algunas</li>
            <li>Cada hallazgo trazable a su página y capítulo</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="por-section por-wrap">
      <div class="por-section-head por-reveal">
        <span class="por-eyebrow"><span class="bar"></span>El detalle técnico</span>
        <h2 class="por-h2">Por qué un prompt directo se queda corto a gran escala</h2>
      </div>
      <div class="por-grid">
        <div class="por-cell por-reveal">
          <span class="ix">01</span>
          <h4>El recall se degrada</h4>
          <p>Un modelo no atiende igual a la página 30 que a la 3.400. Lo del medio se pierde, y la consistencia exige verlo todo a la vez.</p>
        </div>
        <div class="por-cell por-reveal">
          <span class="ix">02</span>
          <h4>Consistencia es cruce, no lectura</h4>
          <p>Hay que indexar, recuperar y comparar cada cifra y compromiso contra todas sus apariciones. Eso es un pipeline orquestado, no un prompt.</p>
        </div>
        <div class="por-cell por-reveal">
          <span class="ix">03</span>
          <h4>El riesgo invisible</h4>
          <p>La inconsistencia que el modelo omite hoy es la observación que llega en el ICSARA mañana. Y la omisión no avisa.</p>
        </div>
        <div class="por-cell por-reveal">
          <span class="ix">04</span>
          <h4>Trazabilidad defendible</h4>
          <p>Cada afirmación queda atada a documento, capítulo y página. El equipo técnico valida sin releer el expediente completo.</p>
        </div>
      </div>
    </section>

    <section class="por-pull por-wrap">
      <blockquote class="por-reveal">Encuentra lo evidente y <span>omite el resto en silencio.</span></blockquote>
      <cite class="por-reveal">— El modo de falla que más cuesta en una evaluación ambiental</cite>
    </section>

    <section class="por-section por-wrap">
      <p class="por-note por-reveal"><b>En resumen:</b> en documentos pequeños y tareas simples, un prompt directo es eficiente y más barato. Evalia no compite ahí. Aporta donde el cruce debe ser exhaustivo, trazable y defendible.</p>
    </section>

    <section class="por-section por-wrap">
      <div class="por-cta por-reveal">
        <h3>¿Probamos con tu proyecto?</h3>
        <a class="por-btn" href="https://calendar.app.google/EAPCWafB7YmCepzAA" target="_blank" rel="noopener noreferrer">Agendar demo <span class="arrow">→</span></a>
      </div>
    </section>
  </div>
</div>
`;

export const POR_QUE_EVALIA_CSS = `
/* ===========================================================
   /por-que-evalia — estilos scoped bajo .por-page
   No usa Fraunces ni font-style: italic en ningún elemento.
   =========================================================== */
.por-page{
  --por-bg:#002132;
  --por-bg-2:#06293a;
  --por-card:rgba(255,255,255,.025);
  --por-ink:#eaf2f3;
  --por-ink-soft:#8ba6ad;
  --por-ink-faint:#5e7c84;
  --por-accent:#5cd0bd;
  --por-accent-soft:rgba(92,208,189,.12);
  --por-line:rgba(255,255,255,.09);
  --por-line-soft:rgba(255,255,255,.05);
  --por-radius:18px;
  --por-maxw:1080px;

  position:relative;
  background:var(--por-bg);
  color:var(--por-ink);
  font-family:"Hanken Grotesk",system-ui,-apple-system,BlinkMacSystemFont,sans-serif;
  font-size:17px;
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
  min-height:100vh;
  padding-top:64px; /* deja espacio para el topbar fijo */
}

.por-page *{ box-sizing:border-box; }
.por-page h1, .por-page h2, .por-page h3, .por-page h4{ color:var(--por-ink); }
.por-page a{ color:inherit; }

.por-page .por-glow{
  position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(60% 50% at 78% 8%, rgba(92,208,189,.10), transparent 60%),
    radial-gradient(70% 60% at 10% 100%, rgba(11,71,92,.55), transparent 60%);
}
.por-page .por-contour{
  position:absolute;inset:0;z-index:0;pointer-events:none;opacity:.5;width:100%;height:100%;
}
.por-page .por-main{ position:relative; z-index:1; }

.por-page .por-wrap{ max-width:var(--por-maxw); margin:0 auto; padding:0 28px; }
.por-page .por-section{ padding:46px 0; }

/* eyebrow */
.por-page .por-eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;
  color:var(--por-ink-soft);font-weight:600;
}
.por-page .por-eyebrow .num{ color:var(--por-accent); font-variant-numeric:tabular-nums; }
.por-page .por-eyebrow .bar{ width:26px;height:1px;background:var(--por-line); }

/* hero */
.por-page .por-hero{ padding:96px 28px 72px; }
.por-page .por-h1{
  font-weight:600;
  font-size:clamp(34px,6vw,62px);
  line-height:1.05;
  letter-spacing:-.02em;
  margin:26px 0 0;
  max-width:16ch;
}
.por-page .por-lead{
  margin-top:26px;max-width:54ch;
  font-size:clamp(17px,2.2vw,20px);
  color:var(--por-ink-soft);line-height:1.5;
}

/* split: cuándo basta / cuándo no */
.por-page .por-split{
  display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:30px;
}
.por-page .por-panel{
  border:1px solid var(--por-line);border-radius:var(--por-radius);
  padding:30px 28px;background:var(--por-card);
}
.por-page .por-panel--no{
  border-color:rgba(92,208,189,.32);
  background:linear-gradient(180deg,var(--por-accent-soft),rgba(92,208,189,.02));
}
.por-page .por-panel .tag{
  font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;
  font-weight:600;color:var(--por-ink-faint);
}
.por-page .por-panel--no .tag{ color:var(--por-accent); }
.por-page .por-panel h3{ font-size:21px;font-weight:600;margin:10px 0 18px;letter-spacing:-.01em; }
.por-page .por-panel ul{ list-style:none;display:flex;flex-direction:column;gap:11px;padding:0;margin:0; }
.por-page .por-panel li{
  position:relative;padding-left:24px;color:var(--por-ink-soft);font-size:15.5px;line-height:1.45;
}
.por-page .por-panel li::before{
  content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;
  background:var(--por-ink-faint);
}
.por-page .por-panel--no li::before{ background:var(--por-accent); }
.por-page .por-panel--no li{ color:var(--por-ink); }
.por-page .por-panel--no li b{ color:var(--por-accent); font-weight:600; }

/* reasons */
.por-page .por-section-head{ max-width:38ch; }
.por-page .por-h2{
  font-weight:600;font-size:clamp(26px,3.6vw,38px);letter-spacing:-.02em;line-height:1.1;margin-top:18px;
}
.por-page .por-grid{
  display:grid;grid-template-columns:repeat(2,1fr);gap:1px;
  margin-top:36px;background:var(--por-line-soft);
  border:1px solid var(--por-line-soft);border-radius:var(--por-radius);overflow:hidden;
}
.por-page .por-cell{
  background:var(--por-bg);padding:32px 30px;
  transition:background .35s ease;
}
.por-page .por-cell:hover{ background:var(--por-bg-2); }
.por-page .por-cell .ix{
  font-family:"Hanken Grotesk",sans-serif;
  font-weight:600;font-size:13px;letter-spacing:.18em;
  color:var(--por-accent); font-variant-numeric:tabular-nums;
}
.por-page .por-cell h4{ font-size:19px;font-weight:600;margin:14px 0 9px;letter-spacing:-.01em; }
.por-page .por-cell p{ color:var(--por-ink-soft);font-size:15px;line-height:1.5; }

/* pull quote — sin itálica, solo presencia tipográfica */
.por-page .por-pull{ padding:64px 28px; }
.por-page .por-pull blockquote{
  max-width:24ch;
  font-family:"Hanken Grotesk",sans-serif;
  font-weight:500;
  font-size:clamp(30px,5.2vw,52px);line-height:1.12;letter-spacing:-.015em;
}
.por-page .por-pull blockquote span{ color:var(--por-accent); }
.por-page .por-pull cite{
  display:block;margin-top:24px;font-style:normal;
  font-family:"Hanken Grotesk",sans-serif;
  font-size:14px;color:var(--por-ink-faint);letter-spacing:.04em;
}

/* honest note */
.por-page .por-note{
  border-left:2px solid var(--por-accent);padding:6px 0 6px 24px;
  max-width:62ch;color:var(--por-ink-soft);font-size:16px;line-height:1.55;
}
.por-page .por-note b{ color:var(--por-ink);font-weight:600; }

/* cta */
.por-page .por-cta{
  margin:40px 0 96px;border:1px solid var(--por-line);border-radius:24px;
  padding:48px 40px;background:var(--por-card);
  display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;
}
.por-page .por-cta h3{ font-size:clamp(22px,3vw,30px);font-weight:600;letter-spacing:-.01em;max-width:18ch; }
.por-page .por-btn{
  display:inline-flex;align-items:center;gap:10px;white-space:nowrap;
  background:var(--por-accent);color:#002132;font-weight:600;font-size:16px;
  padding:15px 26px;border-radius:999px;text-decoration:none;
  transition:transform .2s ease,box-shadow .2s ease;
}
.por-page .por-btn:hover{ transform:translateY(-2px);box-shadow:0 12px 30px rgba(92,208,189,.25); }
.por-page .por-btn .arrow{ transition:transform .2s ease; }
.por-page .por-btn:hover .arrow{ transform:translateX(4px); }

/* reveal animation */
.por-page .por-reveal{
  opacity:0;transform:translateY(18px);
  transition:opacity .7s cubic-bezier(.2,.6,.2,1),transform .7s cubic-bezier(.2,.6,.2,1);
}
.por-page .por-reveal.is-in{ opacity:1;transform:none; }

@media(max-width:760px){
  .por-page{ font-size:16px; padding-top:72px; }
  .por-page .por-split{ grid-template-columns:1fr; }
  .por-page .por-grid{ grid-template-columns:1fr; }
  .por-page .por-hero{ padding:56px 24px 40px; }
  .por-page .por-pull{ padding:48px 24px; }
  .por-page .por-cta{ flex-direction:column;align-items:flex-start; }
}
`;

export const POR_QUE_EVALIA_JS = `
(function(){
  'use strict';
  if (typeof window === 'undefined') return;
  var els = document.querySelectorAll('.por-page .por-reveal');
  if (!els.length || typeof IntersectionObserver === 'undefined') {
    // fallback: mostrar todo
    els.forEach(function(el){ el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(function(el, i){
    el.style.transitionDelay = (Math.min(i, 6) * 60) + 'ms';
    io.observe(el);
  });
})();
`;

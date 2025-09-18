import React, { useId, useRef } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Supieron interpretar nuestra visión y la llevaron a un resultado elegante y funcional.",
    name: "Laura Gómez",
    role: "Cliente Residencial",
    company: "Proyecto Miraflores",
    stars: 5,
    avatar: "/avatars/laura.jpg",
  },
  {
    quote:
      "Creatividad y cumplimiento de plazos. El proceso fue claro y profesional.",
    name: "Carlos Martínez",
    role: "Promotor Inmobiliario",
    company: "Grupo CIMA",
    stars: 5,
    avatar: "/avatars/carlos.jpg",
  },
  {
    quote:
      "Atención al detalle y excelente coordinación con el equipo técnico.",
    name: "Ana Torres",
    role: "Arquitecta",
    company: "AT Studio",
    stars: 4,
    avatar: "/avatars/ana.jpg",
  },
  // agrega o reemplaza con los de tu proyecto
];

function Stars({ n = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? styles.starOn : styles.starOff}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const titleId = useId();
  const scrollerRef = useRef(null);

  const scrollByCard = (dir = "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.card}`);
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  // ── JSON-LD opcional ───────────────────────────────────────────────
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   name: "Servicios de Arquitectura",
  //   aggregateRating: {
  //     "@type": "AggregateRating",
  //     ratingValue:
  //       (testimonials.reduce((a, t) => a + t.stars, 0) / testimonials.length).toFixed(1),
  //     reviewCount: testimonials.length,
  //   },
  //   review: testimonials.map((t) => ({
  //     "@type": "Review",
  //     reviewBody: t.quote,
  //     reviewRating: { "@type": "Rating", ratingValue: t.stars, bestRating: 5 },
  //     author: { "@type": "Person", name: t.name },
  //   })),
  // };
  // <script type="application/ld+json"
  //   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

  return (
    <section
      className={styles.section}
      aria-labelledby={titleId}
      id="testimonios"
    >
      <div className={styles.container}>
        <p className={styles.kicker}>TESTIMONIOS</p>
        <h2 id={titleId} className={styles.title}>
          Lo que dicen nuestros clientes
        </h2>
        <div className={styles.underline} />

        {/* Móvil: carrusel por scroll-snap */}
        <div className={styles.controlsMobile}>
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            className={styles.ctrlBtn}
            aria-label="Anterior testimonio"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            className={styles.ctrlBtn}
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>

        <div
          ref={scrollerRef}
          className={styles.scroller}
          role="region"
          aria-label="Carrusel de testimonios"
        >
          {testimonials.map((t, i) => (
            <article
              key={t.name + i}
              className={`${styles.card} ${styles.reveal}`}
            >
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>

              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} />
                  ) : (
                    <span>
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                </div>

                <div className={styles.identity}>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.meta}>
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>

                <Stars n={t.stars} />
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: grid (se activa por CSS con media query) */}
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <article
              key={t.name + i}
              className={`${styles.card} ${styles.reveal}`}
            >
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} />
                  ) : (
                    <span>
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                </div>
                <div className={styles.identity}>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.meta}>
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
                <Stars n={t.stars} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { fadeUp, growX, stagger } from "../lib/motion";

export default function Contact() {
  const waText = encodeURIComponent(
    "¡Hola! Me gustaría hablar sobre un proyecto. ¿Tienes un momento?"
  );

  return (
    <section
      className={styles.contact}
      id="contacto"
      aria-labelledby="contact-title"
    >
      {/* Decoración de fondo */}
      <span aria-hidden className={styles.glow} />

      <motion.div
        className={styles.container}
        variants={stagger(0.12, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          id="contact-title"
          className={styles.title}
          variants={fadeUp(0)}
        >
          CONTACTO
        </motion.h2>
        <motion.div className={styles.line} variants={growX(0.05)} />

        <motion.p className={styles.description} variants={fadeUp(0.08)}>
          ¿Tienes una idea en mente?{" "}
          <strong>Hablemos y hagámosla realidad.</strong>
          Suelo responder en menos de <u>24 h</u>.
        </motion.p>

        {/* Datos */}
        <motion.div className={styles.infoGrid} variants={stagger(0.08, 0.12)}>
          <motion.div className={styles.card} variants={fadeUp(0)}>
            <h3 className={styles.label}>EMAIL</h3>
            <p className={styles.value}>
              <a
                href="mailto:peralta.martinez@arquitectura.com"
                className={styles.link}
              >
                peralta.martinez@arquitectura.com
              </a>
            </p>
            <span className={styles.hint}>Preferido para presupuestos</span>
          </motion.div>

          <motion.div className={styles.card} variants={fadeUp(0.02)}>
            <h3 className={styles.label}>TELÉFONO</h3>
            <p className={styles.value}>
              <a href="tel:+34600123456" className={styles.link}>
                +34 600 123 456
              </a>
            </p>
            <span className={styles.hint}>L–V · 9:00–18:00 CET</span>
          </motion.div>

          <motion.div className={styles.card} variants={fadeUp(0.04)}>
            <h3 className={styles.label}>UBICACIÓN</h3>
            <p className={styles.value}>Madrid, España</p>
            <span className={styles.hint}>
              Proyectos presenciales y remotos
            </span>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div className={styles.ctaGroup} variants={fadeUp(0.16)}>
          <motion.a
            href={`https://wa.me/34600123456?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
            aria-label="Iniciar conversación por WhatsApp"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Iniciar conversación <span aria-hidden>→</span>
          </motion.a>

          <a
            href="mailto:peralta.martinez@arquitectura.com"
            className={styles.secondaryBtn}
            aria-label="Contactar por email"
          >
            Enviar email
          </a>
        </motion.div>

        {/* Redes */}
        <motion.ul className={styles.social} variants={fadeUp(0.2)}>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.iconLink}
            >
              {/* LinkedIn SVG */}
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H18v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.77-2.61 3.59V23H7.5V8z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className={styles.iconLink}
            >
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M7.2 10.5c.9 0 1.6-.7 1.6-1.6S8.1 7.3 7.2 7.3H3V14h4.3c1.2 0 2.2-1 2.2-2.2 0-1-.7-1.9-1.7-2.1zM5 8.6h2c.4 0 .7.3.7.7s-.3.7-.7.7H5V8.6zm2.2 3.9H5v-1.4h2.1c.4 0 .8.3.8.7s-.3.7-.7.7zM21 9.8h-6.6c.2-1.6 1.7-2.1 3-2.1 1 .1 1.9.5 2.4 1.1l.9-1.7c-.8-.7-2.1-1.2-3.6-1.2-3 0-5 1.9-5 5.1 0 3.1 2 5 4.8 5 2.5 0 4.2-1.4 4.6-3.6.1-.5.1-1 .1-1.6V9.8zm-2.1 2.4c0 1.4-.8 2.3-2.2 2.3-1.3 0-2.1-.9-2.3-2.3h4.5zM14 6h4v1.2h-4V6z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.iconLink}
            >
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8.3 23c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.9 2.9 1.4.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.7 11.7 0 0 1 6.2 0C18 4.9 19 5.2 19 5.2c.6 1.7.3 3 .2 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
          </li>
        </motion.ul>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>© 2024 PERALTA MARTÍNEZ ARQUITECTA</p>
        <p>COLEGIADA Nº 12345 · COAM</p>
      </motion.footer>
    </section>
  );
}

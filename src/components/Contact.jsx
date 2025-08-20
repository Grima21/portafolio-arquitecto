import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { fadeUp, growX, stagger } from "../lib/motion";

export default function Contact() {
  // ✅ Mensaje para WhatsApp (cámbialo a tu gusto)
  const waText = encodeURIComponent(
    "Hola, me interesa cotizar un proyecto de arquitectura. ¿Podemos hablar?"
  );

  return (
    <section
      className={styles.contact}
      id="contacto"
      aria-labelledby="contact-title"
    >
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

        <motion.p className={styles.description} variants={fadeUp(0.1)}>
          ¿Interesado en colaborar? Me encantaría conocer tu proyecto y explorar
          cómo podemos crear algo excepcional juntos.
        </motion.p>

        {/* Datos de contacto con reveal en cascada */}
        <motion.div className={styles.infoGrid} variants={stagger(0.08, 0.12)}>
          <motion.div variants={fadeUp(0)}>
            <h3 className={styles.label}>EMAIL</h3>
            <p className={styles.value}>
              <a
                href="mailto:peralta.martinez@arquitectura.com"
                className={styles.link}
              >
                peralta.martinez@arquitectura.com
              </a>
            </p>
          </motion.div>

          <motion.div variants={fadeUp(0.02)}>
            <h3 className={styles.label}>TELÉFONO</h3>
            <p className={styles.value}>
              <a href="tel:+34600123456" className={styles.link}>
                +34 600 123 456
              </a>
            </p>
          </motion.div>

          <motion.div variants={fadeUp(0.04)}>
            <h3 className={styles.label}>UBICACIÓN</h3>
            <p className={styles.value}>Madrid, España</p>
          </motion.div>
        </motion.div>

        {/* CTA principal */}
        <motion.a
          href={`https://wa.me/34600123456?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
          aria-label="Iniciar conversación por WhatsApp"
          variants={fadeUp(0.16)}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          INICIAR CONVERSACIÓN <span aria-hidden>→</span>
        </motion.a>
      </motion.div>

      {/* Footer con fade suave */}
      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>© 2024 PERALTA MARTINEZ ARQUITECTA</p>
        <p>COLEGIADA Nº 12345 - COAM</p>
      </motion.footer>
    </section>
  );
}

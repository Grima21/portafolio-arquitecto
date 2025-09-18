import styles from "./Profile.module.css";
import { motion } from "framer-motion";
import { fadeUp, stagger, growX, slideInX, growY } from "../lib/motion";

export default function Profile() {
  return (
    <motion.section
      className={styles.profile}
      id="perfil"
      aria-labelledby="profile-title"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className={styles.container} variants={stagger(0.08, 0.2)}>
        {/* Columna izquierda */}
        <motion.div className={styles.left} variants={slideInX("left", 0.02)}>
          <div className={styles.headerRow}>
            <motion.h2
              id="profile-title"
              className={styles.title}
              variants={fadeUp(0, 24)}
            >
              PERFIL PROFESIONAL
            </motion.h2>

            <motion.div className={styles.meta} variants={fadeUp(0.05, 12)}>
              <span className={styles.availableDot} aria-hidden="true" />
              <span className={styles.availableText}>
                Disponible para nuevos proyectos
              </span>
            </motion.div>
          </div>

          <motion.div className={styles.line} variants={growX(0.15)} />

          <motion.p className={styles.lead} variants={fadeUp(0.1, 18)}>
            Arquitecta colegiada <strong>(LEED AP BD+C)</strong> con más de una
            década diseñando proyectos residenciales y comerciales. Enfoque
            contemporáneo y sostenible: luz natural, ventilación cruzada y
            materiales eficientes. Objetivo: espacios{" "}
            <strong>bonitos, funcionales y medibles</strong>.
          </motion.p>

          <motion.div
            className={styles.bullets}
            variants={stagger(0.06, 0.05)}
            aria-label="Cómo trabajo"
          >
            <motion.div className={styles.bullet} variants={fadeUp(0, 14)}>
              <span className={styles.bulletDot} />
              <p>
                <strong>Proceso claro:</strong> de anteproyecto a permisos y
                dirección de obra.
              </p>
            </motion.div>
            <motion.div className={styles.bullet} variants={fadeUp(0.03, 14)}>
              <span className={styles.bulletDot} />
              <p>
                <strong>Sostenibilidad real:</strong> optimización energética y
                confort térmico.
              </p>
            </motion.div>
            <motion.div className={styles.bullet} variants={fadeUp(0.06, 14)}>
              <span className={styles.bulletDot} />
              <p>
                <strong>Coordinación ágil:</strong> trabajo integrado con
                especialistas y proveedores.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className={styles.ctaRow} variants={fadeUp(0.08, 16)}>
            <a className={styles.btnPrimary} href="#contacto">
              Agendar consulta
            </a>
            <a
              className={styles.btnSecondary}
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Descargar CV
            </a>
          </motion.div>

          <motion.ul className={styles.stats} variants={stagger(0.06, 0.1)}>
            <motion.li variants={fadeUp(0, 12)}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Proyectos</span>
            </motion.li>
            <motion.li variants={fadeUp(0.03, 12)}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Años</span>
            </motion.li>
            <motion.li variants={fadeUp(0.06, 12)}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Clientes</span>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Columna derecha */}
        <motion.div className={styles.right} variants={slideInX("right", 0.06)}>
          {/* Educación */}
          <motion.section
            className={styles.card}
            aria-labelledby="edu-title"
            variants={stagger(0.05, 0.05)}
          >
            <motion.h3
              id="edu-title"
              className={styles.cardTitle}
              variants={fadeUp(0, 12)}
            >
              EDUCACIÓN
            </motion.h3>

            <motion.ul className={styles.timeline} variants={stagger(0.05, 0)}>
              <motion.li className={styles.tItem} variants={fadeUp(0, 10)}>
                <span className={styles.tBullet} aria-hidden="true" />
                <div>
                  <p className={styles.degree}>
                    Máster en Arquitectura Sostenible
                  </p>
                  <p className={styles.institution}>ETSAM — Madrid</p>
                </div>
              </motion.li>

              <motion.li className={styles.tItem} variants={fadeUp(0.03, 10)}>
                <span className={styles.tBullet} aria-hidden="true" />
                <div>
                  <p className={styles.degree}>Arquitectura</p>
                  <p className={styles.institution}>
                    Universidad Politécnica de Madrid — UPM
                  </p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.section>

          {/* Certificaciones */}
          <motion.section
            className={styles.card}
            aria-labelledby="cert-title"
            variants={stagger(0.05, 0.05)}
          >
            <motion.h3
              id="cert-title"
              className={styles.cardTitle}
              variants={fadeUp(0, 12)}
            >
              CERTIFICACIONES
            </motion.h3>

            <motion.ul className={styles.badges} variants={stagger(0.05, 0)}>
              <motion.li className={styles.badge} variants={fadeUp(0, 8)}>
                LEED AP BD+C
              </motion.li>
              <motion.li className={styles.badge} variants={fadeUp(0.03, 8)}>
                Colegiada COAM nº 12345
              </motion.li>
              <motion.li className={styles.badge} variants={fadeUp(0.06, 8)}>
                Certificación Passivhaus
              </motion.li>
            </motion.ul>
          </motion.section>

          {/* Servicios */}
          <motion.section
            className={styles.card}
            aria-labelledby="serv-title"
            variants={stagger(0.05, 0.05)}
          >
            <motion.h3
              id="serv-title"
              className={styles.cardTitle}
              variants={fadeUp(0, 12)}
            >
              SERVICIOS
            </motion.h3>

            <motion.ul className={styles.services} variants={stagger(0.05, 0)}>
              <motion.li className={styles.service} variants={fadeUp(0, 8)}>
                Diseño Arquitectónico
              </motion.li>
              <motion.li className={styles.service} variants={fadeUp(0.03, 8)}>
                Consultoría Técnica
              </motion.li>
              <motion.li className={styles.service} variants={fadeUp(0.06, 8)}>
                Arquitectura Sostenible
              </motion.li>
              <motion.li className={styles.service} variants={fadeUp(0.09, 8)}>
                Rehabilitación
              </motion.li>
            </motion.ul>
          </motion.section>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

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
      <motion.div className={styles.container} variants={stagger(0.1, 0.3)}>
        {/* Lado izquierdo */}
        <motion.div className={styles.left} variants={slideInX("left", 0.02)}>
          <motion.h2
            id="profile-title"
            className={styles.title}
            variants={fadeUp(0, 30)}
            whileHover={{
              color: "#000000",
              transition: { duration: 0.3 },
            }}
          >
            PERFIL PROFESIONAL
          </motion.h2>
          <motion.div className={styles.line} variants={growX(0.2)} />

          <motion.p
            className={styles.paragraph}
            variants={fadeUp(0, 20)}
            whileHover={{
              x: 5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            Arquitecta colegiada con más de una década de experiencia en el
            diseño y desarrollo de proyectos arquitectónicos contemporáneos.
          </motion.p>
          <motion.p
            className={styles.paragraph}
            variants={fadeUp(0, 20)}
            whileHover={{
              x: 5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            Mi práctica se centra en la creación de espacios que integran
            funcionalidad, estética y sostenibilidad, utilizando principios de
            diseño minimalista y tecnologías innovadoras.
          </motion.p>
          <motion.p
            className={styles.paragraph}
            variants={fadeUp(0, 20)}
            whileHover={{
              x: 5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            Graduada en Arquitectura por la Universidad Politécnica de Madrid,
            con especialización en Arquitectura Sostenible y certificación LEED
            AP.
          </motion.p>
        </motion.div>

        {/* Lado derecho */}
        <motion.div className={styles.right} variants={slideInX("right", 0.06)}>
          <motion.div className={styles.column} variants={stagger(0.1, 0.2)}>
            <motion.h3
              className={styles.subtitle}
              variants={fadeUp(0, 15)}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              EDUCACIÓN
            </motion.h3>
            <motion.p className={styles.degree} variants={fadeUp(0, 12)}>
              Arquitectura
            </motion.p>
            <motion.p className={styles.institution} variants={fadeUp(0, 12)}>
              Universidad Politécnica de Madrid
            </motion.p>
            <motion.p className={styles.degree} variants={fadeUp(0, 12)}>
              Máster Arquitectura Sostenible
            </motion.p>
            <motion.p className={styles.institution} variants={fadeUp(0, 12)}>
              ETSAM
            </motion.p>
          </motion.div>

          <motion.div className={styles.column} variants={stagger(0.06, 0.02)}>
            <motion.h3
              className={styles.subtitle}
              variants={fadeUp(0, 15)}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              CERTIFICACIONES
            </motion.h3>
            <motion.p
              className={styles.certification}
              variants={fadeUp(0.04)}
              whileHover={{
                x: 5,
                color: "#000", // Cambia por tu color de acento
                transition: { duration: 0.2 },
              }}
            >
              LEED AP BD+C
            </motion.p>
            <motion.p
              className={styles.certification}
              variants={fadeUp(0.06)}
              whileHover={{
                x: 5,
                color: "#2563eb", // Cambia por tu color de acento
                transition: { duration: 0.2 },
              }}
            >
              Colegiada COAM nº 12345
            </motion.p>
            <motion.p
              className={styles.certification}
              variants={fadeUp(0.08)}
              whileHover={{
                x: 5,
                color: "#2563eb", // Cambia por tu color de acento
                transition: { duration: 0.2 },
              }}
            >
              Certificación Passivhaus
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.lineR}
            variants={growY(0.5)}
          ></motion.div>
          <motion.div
            className={styles.column}
            variants={fadeUp(0, 25)}
            whileHover={{
              y: -3,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <motion.h3
              className={styles.subtitle}
              variants={fadeUp(0, 15)}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              SERVICIOS
            </motion.h3>
            <motion.p
              className={styles.service}
              variants={fadeUp(0, 12)}
              whileHover={{
                x: 8,
                fontWeight: "bold",
                color: "#000000",
                transition: { duration: 0.2 },
              }}
            >
              Diseño Arquitectónico
            </motion.p>
            <motion.p
              className={styles.service}
              variants={fadeUp(0, 12)}
              whileHover={{
                x: 8,
                fontWeight: "bold",
                color: "#000000",
                transition: { duration: 0.2 },
              }}
            >
              Consultoría Técnica
            </motion.p>
            <motion.p
              className={styles.service}
              variants={fadeUp(0, 12)}
              whileHover={{
                x: 8,
                fontWeight: "bold",
                color: "#000000",
                transition: { duration: 0.2 },
              }}
            >
              Arquitectura Sostenible
            </motion.p>
            <motion.p
              className={styles.service}
              variants={fadeUp(0, 12)}
              whileHover={{
                x: 8,
                fontWeight: "bold",
                color: "#000000",
                transition: { duration: 0.2 },
              }}
            >
              Rehabilitación
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

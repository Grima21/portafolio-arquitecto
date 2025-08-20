import styles from "./Hero.module.css";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, growX } from "../lib/motion";
import CountUp from "../components/CountUp";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <motion.div
        className={styles.heroContainer}
        variants={stagger(0.08, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            id="hero-title"
            className={styles.heroTitle}
            variants={fadeUp(0)}
          >
            ARQUITECTURA{" "}
            <span className={styles.titleYellow}>CONTEMPORÁNEA</span>{" "}
          </motion.h1>

          {/* HR animada */}
          <motion.hr
            className={styles.hrContent}
            variants={growX(0.1)}
            style={reduce ? undefined : { willChange: "transform" }}
          />

          <motion.p className={styles.heroSubtitle} variants={fadeUp(0.15)}>
            Especializada en diseños arquitectonico contemporaneo y sostenible.
            Creando espacios funcionales que integran innovacion estetica.
          </motion.p>
        </div>
        {/* Status con count-up + reveal */}
        <motion.div className={styles.status} variants={fadeUp(0.2)}>
          <div className={styles.statusContainer}>
            <p className={styles.statusParrafo}>
              <CountUp to={50} />
            </p>
            <p className={styles.statusDescription}>Proyectos</p>
          </div>
          <div className={styles.statusContainer}>
            <p className={styles.statusParrafo}>
              <CountUp to={10} />
            </p>
            <p className={styles.statusDescription}>Años</p>
          </div>
          <div className={styles.statusContainer}>
            <p className={styles.statusParrafo}>
              <CountUp to={25} />
            </p>
            <p className={styles.statusDescription}>Clientes</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            ARQUITECTURA{" "}
            <span className={styles.titleYellow}>CONTEMPORÁNEA</span>{" "}
          </h1>
          <hr className={styles.hrContent} />
          <p className={styles.heroSubtitle}>
            Especializada en diseños arquitectonico contemporaneo y sostenible.
            Creando espacios funcionales que integran innovacion estetica.
          </p>
        </div>
        <div className={styles.status}>
          <div className={styles.statusContainer}>
            <p className={styles.statusParrafo}>50+</p>
            <p className={styles.statusDescription}>Proyectos</p>
          </div>
          <div className={styles.statusContainer}>
            <p className={styles.statusParrafo}>10+</p>
            <p className={styles.statusDescription}>Años</p>
          </div>
          <div className={styles.statusContainer}>
            <p className={styles.statusParrafo}>25+</p>
            <p className={styles.statusDescription}>Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

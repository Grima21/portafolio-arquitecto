import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <h2 className={styles.title}>CONTACTO</h2>
        <div className={styles.line}></div>

        <p className={styles.description}>
          ¿Interesado en colaborar? Me encantaría conocer tu proyecto y explorar
          cómo podemos crear algo excepcional juntos.
        </p>

        <div className={styles.infoGrid}>
          <div>
            <h3 className={styles.label}>EMAIL</h3>
            <p className={styles.value}>ana.martinez@arquitectura.com</p>
          </div>
          <div>
            <h3 className={styles.label}>TELÉFONO</h3>
            <p className={styles.value}>+34 600 123 456</p>
          </div>
          <div>
            <h3 className={styles.label}>UBICACIÓN</h3>
            <p className={styles.value}>Madrid, España</p>
          </div>
        </div>

        <button className={styles.button}>
          INICIAR CONVERSACIÓN <span>→</span>
        </button>
      </div>

      <footer className={styles.footer}>
        <p>© 2024 ANA MARTÍNEZ ARQUITECTA</p>
        <p>COLEGIADA Nº 12345 - COAM</p>
      </footer>
    </section>
  );
}

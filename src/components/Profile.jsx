import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.profile} id="perfil">
      <div className={styles.container}>
        {/* Lado izquierdo */}
        <div className={styles.left}>
          <h2 className={styles.title}>PERFIL PROFESIONAL</h2>
          <div className={styles.line}></div>
          <p className={styles.paragraph}>
            Arquitecta colegiada con más de una década de experiencia en el
            diseño y desarrollo de proyectos arquitectónicos contemporáneos.
          </p>
          <p className={styles.paragraph}>
            Mi práctica se centra en la creación de espacios que integran
            funcionalidad, estética y sostenibilidad, utilizando principios de
            diseño minimalista y tecnologías innovadoras.
          </p>
          <p className={styles.paragraph}>
            Graduada en Arquitectura por la Universidad Politécnica de Madrid,
            con especialización en Arquitectura Sostenible y certificación LEED
            AP.
          </p>
        </div>

        {/* Lado derecho */}
        <div className={styles.right}>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>EDUCACIÓN</h3>
            <p className={styles.degree}>Arquitectura</p>
            <p className={styles.institution}>
              Universidad Politécnica de Madrid
            </p>
            <p className={styles.degree}>Máster Arquitectura Sostenible</p>
            <p className={styles.institution}>ETSAM</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.subtitle}>CERTIFICACIONES</h3>
            <p className={styles.certification}>LEED AP BD+C</p>
            <p className={styles.certification}>Colegiada COAM nº 12345</p>
            <p className={styles.certification}>Certificación Passivhaus</p>
          </div>
          <div className={styles.lineR}></div>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>SERVICIOS</h3>
            <p className={styles.service}>Diseño Arquitectónico</p>
            <p className={styles.service}>Consultoría Técnica</p>
            <p className={styles.service}>Dirección de Obra</p>
            <p className={styles.service}>Arquitectura Sostenible</p>
            <p className={styles.service}>Rehabilitación</p>
          </div>
        </div>
      </div>
    </section>
  );
}

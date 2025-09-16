import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.logo}>
          <a className={styles.logoName} href="#home">
            Peralta Martinez
          </a>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <a className={styles.navLink} href="#proyectos">
              PROYECTOS
            </a>
            <a className={styles.navLink} href="#perfil">
              PERFIL
            </a>
            <a className={styles.navLink} href="#contacto">
              CONTACTO
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

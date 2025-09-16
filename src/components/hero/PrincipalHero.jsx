import Hero from "./Hero";
import NavBar from "./NavBar";
import styles from "./PrincipalHero.module.css";
export default function PrincipalHero() {
  return (
    <section className={styles.wrapper}>
      {/* Overlay opcional */}
      <div className={styles.overlay} />

      <NavBar />
      <Hero />
    </section>
  );
}

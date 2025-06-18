import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Casa Moderna Minimalista",
    category: "Residencial",
    year: "2024",
    location: "Madrid",
    area: "280 m²",
    image: "./src/assets/img.jpg",
  },
  {
    id: 2,
    title: "Complejo Comercial Urban Plaza",
    category: "Comercial",
    year: "2023",
    location: "Barcelona",
    area: "1,200 m²",
    image: "./src/assets/img.jpg",
  },
  {
    id: 3,
    title: "Edificio de Oficinas EcoTech",
    category: "Corporativo",
    year: "2023",
    location: "Valencia",
    area: "850 m²",
    image: "./src/assets/img.jpg",
  },
  {
    id: 4,
    title: "Vivienda Unifamiliar Sostenible",
    category: "Residencial",
    year: "2022",
    location: "Sevilla",
    area: "320 m²",
    image: "./src/assets/img.jpg",
  },
  {
    id: 5,
    title: "Centro Cultural Contemporáneo",
    category: "Cultural",
    year: "2022",
    location: "Bilbao",
    area: "2,100 m²",
    image: "./src/assets/img.jpg",
  },
  {
    id: 6,
    title: "Rehabilitación Edificio Histórico",
    category: "Rehabilitación",
    year: "2021",
    location: "Toledo",
    area: "450 m²",
    image: "./src/assets/img.jpg",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>PROYECTOS SELECCIONADOS</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.projectsContent}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.projectContentInfo}>
                <div className={styles.projectInfo}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.metaLine}></div>
                  <span className={styles.category}>
                    {project.category.toUpperCase()}
                  </span>
                </div>

                <div className={styles.projectTitle}>
                  <h3 className={styles.projecttitle}>{project.title}</h3>
                </div>

                <div className={styles.details}>
                  <div className={styles.detailsLabel}>
                    <span className={styles.label}>AÑO</span>
                    <span className={styles.value}>{project.year}</span>
                  </div>
                  <div className={styles.detailsLabel}>
                    <span className={styles.label}>UBICACIÓN</span>
                    <span className={styles.value}>{project.location}</span>
                  </div>
                  <div className={styles.detailsLabel}>
                    <span className={styles.label}>ÁREA</span>
                    <span className={styles.value}>{project.area}</span>
                  </div>
                </div>
              </div>

              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { MoveRight } from "lucide-react";

// Tus funciones de animación existentes
const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

const fadeUp = (delay = 0, y = 24) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const growX = (delay = 0) => ({
  hidden: { scaleX: 0, opacity: 0, originX: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// Animaciones adicionales para tu sección
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
  {
    id: 1,
    title: "Casa Moderna Minimalista",
    description:
      "Reordenamos el programa para maximizar la luz natural y la ventilación cruzada Cocina-estar integrados y circulación clara para uso diario eficiente.",
    category: "Residencial",
    year: "2024",
    location: "Madrid",
    area: "280 m²",
    image: "./assets/img.jpg",
  },
  {
    id: 2,
    title: "Complejo Comercial Urban Plaza",
    description:
      "Reordenamos el programa para maximizar la luz natural y la ventilación cruzada Cocina-estar integrados y circulación clara para uso diario eficiente.",
    category: "Comercial",
    year: "2023",
    location: "Barcelona",
    area: "1,200 m²",
    image: "./assets/img.jpg",
  },
  {
    id: 3,
    title: "Edificio de Oficinas EcoTech",
    description:
      "Reordenamos el programa para maximizar la luz natural y la ventilación cruzada Cocina-estar integrados y circulación clara para uso diario eficiente.",
    category: "Corporativo",
    year: "2023",
    location: "Valencia",
    area: "850 m²",
    image: "./assets/img.jpg",
  },
  {
    id: 4,
    title: "Vivienda Unifamiliar Sostenible",
    description:
      "Reordenamos el programa para maximizar la luz natural y la ventilación cruzada Cocina-estar integrados y circulación clara para uso diario eficiente.",
    category: "Residencial",
    year: "2022",
    location: "Sevilla",
    area: "320 m²",
    image: "./assets/img.jpg",
  },
  {
    id: 5,
    title: "Centro Cultural Contemporáneo",
    description:
      "Reordenamos el programa para maximizar la luz natural y la ventilación cruzada Cocina-estar integrados y circulación clara para uso diario eficiente.",
    category: "Cultural",
    year: "2022",
    location: "Bilbao",
    area: "2,100 m²",
    image: "./assets/img.jpg",
  },
  {
    id: 6,
    title: "Rehabilitación Edificio Histórico",
    description:
      "Reordenamos el programa para maximizar la luz natural y la ventilación cruzada Cocina-estar integrados y circulación clara para uso diario eficiente.",
    category: "Rehabilitación",
    year: "2021",
    location: "Toledo",
    area: "450 m²",
    image: "./assets/img.jpg",
  },
];

export default function Projects() {
  return (
    <motion.section
      className={styles.projects}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={styles.container}>
        {/* Header animado */}
        <motion.div className={styles.header} variants={stagger(0.1, 0.2)}>
          <motion.h2 className={styles.title} variants={fadeUp(0, 30)}>
            PROYECTOS SELECCIONADOS
          </motion.h2>
          <motion.div
            className={styles.line}
            variants={growX(0.3)}
          ></motion.div>
        </motion.div>

        {/* Contenido de proyectos */}
        <motion.div
          className={styles.projectsContent}
          variants={stagger(0.15, 0.5)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
              variants={fadeUp(0, 40)}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Información del proyecto */}
              <motion.div
                className={styles.projectContentInfo}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <motion.div
                  className={styles.projectInfo}
                  variants={stagger(0.05)}
                >
                  <motion.span
                    className={styles.number}
                    variants={fadeUp(0, 20)}
                    whileHover={{
                      scale: 1.1,
                      color: "#your-accent-color", // Cambia por tu color de acento
                      transition: { duration: 0.2 },
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <motion.div
                    className={styles.metaLine}
                    variants={growX(0.1)}
                  ></motion.div>
                  <motion.span
                    className={styles.category}
                    variants={fadeUp(0.1, 15)}
                  >
                    {project.category.toUpperCase()}
                  </motion.span>
                </motion.div>

                <motion.div
                  className={styles.projectTitle}
                  variants={fadeUp(0.2, 25)}
                >
                  <h3 className={styles.projecttitle}>{project.title}</h3>
                  <p className={styles.projectdescription}>
                    {project.description}
                  </p>
                  <button className={styles.btnproject}>
                    Ver proyecto <MoveRight className={styles.arrow} />
                  </button>
                </motion.div>

                <motion.div
                  className={styles.details}
                  variants={stagger(0.1, 0.3)}
                >
                  <motion.div
                    className={styles.detailsLabel}
                    variants={fadeUp(0, 15)}
                  >
                    <span className={styles.label}>AÑO</span>
                    <span className={styles.value}>{project.year}</span>
                  </motion.div>
                  <motion.div
                    className={styles.detailsLabel}
                    variants={fadeUp(0, 15)}
                  >
                    <span className={styles.label}>UBICACIÓN</span>
                    <span className={styles.value}>{project.location}</span>
                  </motion.div>
                  <motion.div
                    className={styles.detailsLabel}
                    variants={fadeUp(0, 15)}
                  >
                    <span className={styles.label}>ÁREA</span>
                    <span className={styles.value}>{project.area}</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Contenedor de imagen */}
              <motion.div
                className={styles.imageContainer}
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  variants={scaleIn}
                  whileHover={{
                    filter: "brightness(1.1)",
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

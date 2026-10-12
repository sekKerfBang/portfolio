import type { Project } from '../../src/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion des ressources humaines",
    description: "Application de gestion RH pour le suivi des employés, des congés et des fiches de paie.",
    technologies: "Django, Bootstrap Template, Bootstrap",
    link: "https://github.com/sekKerfBang/GestionRH",
    image: "/LogoGrh.svg",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Portfolio personnel présentant mon parcours, mes compétences et mes réalisations.",
    technologies: "Django, React",
    link: "https://github.com/sekKerfBang/portfolio",
    image: "/Portfolio.jpg",
  },
  {
    id: 3,
    title: "Quizz App",
    description: "Application de quiz permettant aux utilisateurs d’évaluer leurs connaissances.",
    technologies: "SpringBoot, React, Docker, PostgreSql",
    link: "https://github.com/sekKerfBang/quizz",
    image: "/Quizz.jpg",
  },
  {
    id: 4,
    title: "Téléconsultation",
    description: "Application de prise de rendez-vous et d’échange en ligne entre patients et médecins.",
    technologies: "Django, Scss, Js, html, Css",
    link: "https://github.com/sekKerfBang/teleconsultation",
    image: "/Teleconsultat.jpg",
  }
];

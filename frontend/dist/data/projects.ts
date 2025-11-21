import type { Project } from '../../src/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion des Ressources Humaine",
    description: "Un site perso fait avec Django",
    technologies: "Django, Bootstrap Template, Bootstrap",
    link: "https://github.com/sekKerfBang/GestionRH",
    image: "/LogoGrh.svg",
  },
  {
    id: 2,
    title: "PortFolio",
    description: "Curriculum Vitae",
    technologies: "Django, React",
    link: "https://github.com/sekKerfBang/portfolio",
    image: "/Portfolio.jpg",
  },
  {
    id: 3,
    title: "Quizz App",
    description: "Un site permettant au utilisateur d'evaluer leurs niveau",
    technologies: "SpringBoot, React, Docker, PostgreSql",
    link: "https://github.com/sekKerfBang/quizz",
    image: "/Quizz.jpg", 
  },
  {
    id: 4,
    title: "Teleconsutation",
    description: "Un site permettant au malade de communiquer et prendre rendez vous avec leurs medecins online",
    technologies: "Django, Scss, Js, html, Css",
    link: "https://github.com/sekKerfBang/teleconsultation",
    image: "/Teleconsultat.jpg",
  }
];

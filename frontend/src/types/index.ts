// Définit la forme des données renvoyées par Django
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
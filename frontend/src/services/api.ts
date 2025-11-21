import axios from 'axios';
import type { ContactForm, Project, Skill } from '../types';

// URL de base de l'API Django, remplacée automatiquement par Vite en build prod
// const API_BASE = __API_BASE_URL__ as string;
const API_BASE = import.meta.env.VITE_API_BASE;

// Instance Axios
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Récupère tous les projets depuis Django
 */
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get('/projects/');
    console.log('Projets chargés:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des projets:', error);
    throw error;
  }
};

/**
 * Récupère toutes les compétences
 */
export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const response = await api.get('/skills/');
    console.log('Compétences chargées:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des compétences:', error);
    throw error;
  }
};

/**
 * Envoie un message de contact à Django
 */
export const sendContactMessage = async (data: ContactForm): Promise<void> => {
  try {
    await api.post('/contact/', data);
    console.log('Message envoyé avec succès');
  } catch (error) {
    console.error('Erreur envoi message:', error);
    throw error;
  }
};


// import axios from 'axios';
// import type { ContactForm, Project, Skill } from '../types';

// // URL de base de l'API Django
// const API_BASE = 'http://localhost:8000/api';

// // Instance Axios avec configuration
// const api = axios.create({
//   baseURL: API_BASE,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// /**
//  * Récupère tous les projets depuis Django
//  * @returns Promise<Project[]> - Liste des projets
//  */
// export const fetchProjects = async (): Promise<Project[]> => {
//   try {
//     const response = await api.get('/projects/');
//     console.log('Projets chargés:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Erreur lors du chargement des projets:', error);
//     throw error;
//   }
// };

// /**
//  * Récupère toutes les compétences
//  * @returns Promise<Skill[]> - Liste des compétences
//  */
// export const fetchSkills = async (): Promise<Skill[]> => {
//   try {
//     const response = await api.get('/skills/');
//     return response.data;
//   } catch (error) {
//     console.error('Erreur lors du chargement des compétences:', error);
//     throw error;
//   }
// };

// /**
//  * Envoie un message de contact à Django
//  * @param data - Données du formulaire
//  * @returns Promise<void>
//  */
// export const sendContactMessage = async (data: ContactForm): Promise<any> => {
//   try {
//     await api.post('/contact/', data);
//   } catch (error) {
//     console.error('Erreur envoi message:', error);
//     throw error;
//   }
// };
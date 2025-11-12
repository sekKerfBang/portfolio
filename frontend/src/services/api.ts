import axios from 'axios';
import type { ContactForm, Project, Skill } from '../types';

// URL de base de l'API Django
const API_BASE = 'http://localhost:8000/api';

// Instance Axios avec configuration
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Récupère tous les projets depuis Django
 * @returns Promise<Project[]> - Liste des projets
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
 * @returns Promise<Skill[]> - Liste des compétences
 */
export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const response = await api.get('/skills/');
    return response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des compétences:', error);
    throw error;
  }
};

/**
 * Envoie un message de contact à Django
 * @param data - Données du formulaire
 * @returns Promise<void>
 */
export const sendContactMessage = async (data: ContactForm): Promise<any> => {
  try {
    await api.post('/contact/', data);
  } catch (error) {
    console.error('Erreur envoi message:', error);
    throw error;
  }
};
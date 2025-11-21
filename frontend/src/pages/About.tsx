import { useEffect, useState } from 'react';
import { fetchSkills } from '../services/api';
import type { Skill } from '../types';

const About: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetchSkills().then(setSkills);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Titre */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-16">
          À propos de moi
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Photo + Bio */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative group">
                <img
                  src="/Skb.jpeg"
                  alt="Sekou Kerfala Bangoura - Développeur Fullstack"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-semibold">Développeur passionné</p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Contact rapide</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Email : kerfala789@gmail.com</li>
                  <li>Téléphone : +224 620-21-77-14 / 660-02-01-62</li>
                  <li>Localisation : Yimbaya Pharmacie, Guinée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Qui suis-je ?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Je suis un <strong>développeur fullstack</strong> passionné par la création d'applications web modernes et performantes. 
                Avec une connaissance solide en <strong>Django, Spring boot</strong> côté backend et <strong>React + Angular + TypeScript</strong> côté frontend, 
                je transforme des idées en solutions digitales élégantes, fonctionnelles avec des outils comme <strong>Tailwind CSS</strong> pour des interfaces utilisateur attrayantes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                J'aime travailler sur des projets qui ont un impact réel, que ce soit des applications métier, des plateformes SaaS ou des sites vitrines.
                Mon objectif : livrer un code propre, scalable et maintenable.
              </p>
            </section>

            {/* Parcours */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Mon parcours</h2>
              <div className="space-y-8">
                {[
                  { year: "2020 - 2024", title: "Licence Professionnelle", company: "Ecole International de Commerce et de la Tecnologie (IST)", desc: "Obtention du Diplome" },
                  { year: "08/2024 - 09/2024", title: "Certification en Développement Frontend (Angular)", company: "Orange Digital Center(ODC)", desc: "Formation Angular Technologie" },
                  { year: "11/2024 - 12/2024", title: "Certification en Développement Frontend (React)", company: "Udemy", desc: "React + toolkit + redux" },
                  { year: "2022 - 2023", title: "Formation en Base de Donnee Relationnelle et Conception des Systemes Informatiques", company: "Ecole International de Commerce et de la Technologie (IST)", desc: "Cours Universitaire" },
                  { year: "2021 - 2022", title: "Algorithme et Technologie Web", company: "Ecole International de Commerce et de la Tecnologie (IST)", desc: "Cours Universitaire" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                      <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                    </div>
                    <div className="flex-1 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                      <p className="text-sm font-medium text-blue-600">{item.year}</p>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.company}</p>
                      <p className="text-gray-700 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Compétences */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Mes compétences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map(skill => (
                  <div key={skill.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to action */}
            <section className="text-center py-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Prêt à travailler ensemble ?</h3>
              <p className="mb-4">Discutons de votre projet !</p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition"
              >
                Me contacter
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
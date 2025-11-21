import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects, fetchSkills } from '../services/api';
// import type { Project, Skill } from '../types';

const Home: React.FC = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [skillCount, setSkillCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projects, skills] = await Promise.all([fetchProjects(), fetchSkills()]);
        setProjectCount(projects.length);
        setSkillCount(skills.length);
      } catch (err) {
        console.error('Erreur chargement données:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte Hero */}
          <div className="space-y-6 max-w-xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Bonjour, je suis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                Sékou Kerfala Bangoura
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Développeur Fullstack
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Je crée des applications web modernes, performantes et élégantes avec{' '}
              <strong className="text-blue-600">Django</strong>,{' '}
              <strong className="text-blue-600" >Spring Boot</strong>, {' '}
              <strong className="text-indigo-600">React</strong>,{' '}
              <strong className="text-purple-600">TypeScript</strong>,{' '}
              <strong className="text-pink-600">Tailwind CSS</strong>, intégrant parfois de l&apos;
              <strong className="text-pink-600">AI</strong>.{' '}

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Me contacter
              </Link>
            </div>
          </div>

          {/* Image ou Avatar */}
          <div className="flex justify-center lg:justify-end pt-8 md:pt-12 lg:pt-0">
        <div className="relative group">
            {/* Halo animé */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Photo avec VISAGE BIEN VISIBILE */}
            <img
            src="/Skb.jpeg"
            alt="Sékou Kerfala Bangoura - Développeur Fullstack"
            loading="lazy"
            className="
                relative w-80 h-80 md:w-96 md:h-96 
                rounded-full object-cover 
                shadow-2xl border-8 border-white 
                group-hover:scale-105 
                transition-transform duration-500 
                z-10
                object-center object-[center_25%]
            "/>
        </div>
        </div>
          {/* <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="skb.jpeg"
                alt="Mon portrait"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600">
                {loading ? '...' : projectCount}
              </div>
              <p className="text-gray-700 mt-2 text-lg font-medium">Projets réalisés</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-indigo-600">
                {loading ? '...' : skillCount}
              </div>
              <p className="text-gray-700 mt-2 text-lg font-medium">Compétences maîtrisées</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-purple-600">100%</div>
              <p className="text-gray-700 mt-2 text-lg font-medium">Engagement & Qualité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Technologies que j’utilise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Django', color: 'bg-green-100 text-green-700' },
              { name: 'Spring Boot', color: 'bg-yellow-100 text-yellow-700' },
              { name: 'React', color: 'bg-blue-100 text-blue-700' },
              { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-700' },
              { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-700' },
              { name: 'PostgreSQL', color: 'bg-purple-100 text-purple-700' },
              { name: 'MySql', color: 'bg-cyan-100 text-cyan-700' },
            ].map(tech => (
              <span
                key={tech.name}
                className={`px-5 py-3 rounded-full font-medium text-sm shadow-sm hover:scale-110 transition-transform ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à lancer votre projet ?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discutons de vos idées et transformons-les en réalité digitale.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
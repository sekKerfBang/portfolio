import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../../public/data/projects';

const Projects: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Projets</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations les plus abouties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;



// import { useEffect } from 'react';
// import ProjectCard from '../components/ProjectCard';
// // import type { Project } from '../types';
// import { projects as localProjects } from '../data/projects';

// const Projects: React.FC = () => {

//   useEffect(() => {
//     const elements = document.querySelectorAll('.animate-on-scroll');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in-up');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     elements.forEach(el => observer.observe(el));
//     return () => elements.forEach(el => observer.unobserve(el));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Projets</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Découvrez mes réalisations les plus abouties
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {localProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className="animate-on-scroll"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import { useState, useEffect } from 'react';
// import ProjectCard from '../components/ProjectCard';
// import { fetchProjects } from '../services/api';
// import type { Project } from '../types';
// import { projects } from '../data/projects';

// const Projects: React.FC = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadProjects = async () => {
//       try {
//         const data = await fetchProjects();
//         setProjects(data);
//       } catch (err) {
//         setError('Impossible de charger les projets.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadProjects();
//   }, []);

//   // Animation au scroll
//   useEffect(() => {
//     const elements = document.querySelectorAll('.animate-on-scroll');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in-up');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     elements.forEach(el => observer.observe(el));
//     return () => elements.forEach(el => observer.unobserve(el));
//   }, [projects]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
//           <p className="mt-4 text-gray-600">Chargement des projets...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
//         <div className="text-center p-8 bg-white rounded-xl shadow-lg">
//           <p className="text-red-600 text-xl font-semibold">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Projets</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Découvrez mes réalisations les plus abouties
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="animate-on-scroll"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>

//         {projects.length === 0 && !loading && (
//           <div className="text-center py-20">
//             <p className="text-gray-500 text-lg">Aucun projet pour le moment.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;

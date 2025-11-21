// frontend/src/components/ProjectCard.tsx
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group animate-on-scroll bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.split(', ').map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-medium rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          Voir le projet
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
// import type { Project } from '../types';

// /**
//  * Carte de projet avec effet hover
//  * @param project - Données du projet
//  */
// const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.technologies.split(', ').map((tech, i) => (
//             <span
//               key={i}
//               className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Voir le projet
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
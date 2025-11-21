import { useEffect } from 'react';
import SkillBar from '../components/SkillBar';
import { skills } from '../../public/data/skills';

const Skills: React.FC = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(entry =>
          entry.isIntersecting && entry.target.classList.add('animate-fade-in-up')
        )
    );
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">Compétences</span>
          </h1>
          <p className="text-xl text-gray-600">
            Technologies que je maîtrise au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div
              key={skill.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <SkillBar skill={skill} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;



// import { useEffect } from 'react';
// import SkillBar from '../components/SkillBar';
// import { skills as localSkills } from '../data/skills';

// const Skills: React.FC = () => {

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
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 md:py-24">
//       <div className="container mx-auto px-6 max-w-4xl">
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">Compétences</span>
//           </h1>
//           <p className="text-xl text-gray-600">
//             Technologies que je maîtrise au quotidien
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {localSkills.map((skill, i) => (
//             <div
//               key={skill.id}
//               className="animate-on-scroll"
//               style={{ animationDelay: `${i * 100}ms` }}
//             >
//               <SkillBar skill={skill} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;



// import { useState, useEffect } from 'react';
// import SkillBar from '../components/SkillBar';
// import { fetchSkills } from '../services/api';
// import type { Skill } from '../types';

// const Skills: React.FC = () => {
//   const [skills, setSkills] = useState<Skill[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSkills().then(data => {
//       setSkills(data);
//       setLoading(false);
//     }).catch(() => setLoading(false));
//   }, []);

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
//   }, [skills]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 md:py-24">
//       <div className="container mx-auto px-6 max-w-4xl">
//         <div className="text-center mb-16 animate-on-scroll">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">Compétences</span>
//           </h1>
//           <p className="text-xl text-gray-600">
//             Technologies que je maîtrise au quotidien
//           </p>
//         </div>

//         {loading ? (
//           <div className="text-center py-20">
//             <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skills.map((skill, i) => (
//               <div
//                 key={skill.id}
//                 className="animate-on-scroll"
//                 style={{ animationDelay: `${i * 100}ms` }}
//               >
//                 <SkillBar skill={skill} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Skills;
// // import { useState, useEffect } from 'react';
// // import SkillBar from '../components/SkillBar';
// // import { fetchSkills } from '../services/api';
// // import type { Skill } from '../types';

// // /**
// //  * Page des compétences avec barres animées
// //  */

// // const Skills: React.FC = () => {
// //   const [skills, setSkills] = useState<Skill[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const loadSkills = async () => {
// //       try {
// //         const data = await fetchSkills();
// //         setSkills(data);
// //       } catch (err) {
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     loadSkills();
// //   }, []);

// //   return (
// //     <div className="container mx-auto px-4 py-24">
// //       <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
// //         Compétences Techniques
// //       </h1>
// //       <div className="max-w-2xl mx-auto">
// //         {loading ? (
// //           <p className="text-center">Chargement des compétences...</p>
// //         ) : (
// //           skills.map(skill => <SkillBar key={skill.id} skill={skill} />)
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;
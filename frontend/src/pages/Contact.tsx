import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_3lyhzah',  // ← À remplacer (EmailJS > Services)
        'template_i03phcy', // ← À remplacer (EmailJS > Templates)
        formData,
        '-g2RULlt4yahs0SpL'   // ← À remplacer (EmailJS > Account > Public Key)
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
      
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  // Animation au scroll
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

      {/* Hero Contact */}
      <section className="container mx-auto px-6 text-center mb-16 animate-on-scroll">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Contacter</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une idée ? Un projet ? Discutons-en ensemble.
        </p>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Formulaire */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Envoyez-moi un message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Sekou Kerfala Bangoura"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="sekou@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    status === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>

                {/* Feedback */}
                <div className="text-center mt-4 h-6">
                  {status === 'success' && (
                    <p className="text-green-600 font-medium animate-pulse">
                      Message envoyé avec succès !
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600 font-medium animate-pulse">
                      Erreur d'envoi. Réessayez.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Infos de contact */}
          <div className="animate-on-scroll order-1 lg:order-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
              <ul className="space-y-5 text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                  </div> 
                  <span>kerfala789@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  </div>
                  <span>+224 6 20 21 77 14 / 6 60 02 01 62 </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                  </div>
                  <span>Conakry, Guinée</span>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-moi</h3>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', icon: '🔗', link: 'https://www.linkedin.com/in/s%C3%A9kou-kerfala-bangoura-338a89288/ ' },
                  { name: 'GitHub', icon: '🐙', link: 'https://github.com/sekKerfBang ' },
                  { name: 'Twitter', icon: '🐦', link: 'https://x.com/Kerfala1622823 ' },
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl hover:bg-blue-100 hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg text-center">
              <p className="text-lg font-bold">Disponible pour de nouveaux projets</p>
              <p className="text-sm mt-1">Réponse sous 24h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Final */}
      <section className="mt-20 py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à collaborer ?
          </h3>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Je suis ouvert à toute opportunité de collaboration.
          </p>
          <Link
            to="/"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { sendContactMessage } from '../services/api';
// import type { ContactForm } from '../types';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<ContactForm>({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('sending');
//     try {
//       await sendContactMessage(formData);
//       setStatus('success');
//       setFormData({ name: '', email: '', message: '' });
//       setTimeout(() => setStatus('idle'), 4000);
//     } catch {
//       setStatus('error');
//       setTimeout(() => setStatus('idle'), 4000);
//     }
//   };

//   // Animation au scroll (déclenchée une fois)
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

//       {/* Hero Contact */}
//       <section className="container mx-auto px-6 text-center mb-16 animate-on-scroll">
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
//           Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Contacter</span>
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           Une idée ? Un projet ? Discutons-en ensemble.
//         </p>
//       </section>

//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//           {/* Formulaire */}
//           <div className="animate-on-scroll order-2 lg:order-1">
//             <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
//               <h2 className="text-3xl font-bold text-gray-800 mb-8">Envoyez-moi un message</h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Nom</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Sekou Kerfala Bangoura"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="sekou@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                     placeholder="Décrivez votre projet..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={status === 'sending'}
//                   className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
//                     status === 'sending'
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-2xl'
//                   }`}
//                 >
//                   {status === 'sending' ? (
//                     <span className="flex items-center justify-center">
//                       <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//                       </svg>
//                       Envoi en cours...
//                     </span>
//                   ) : (
//                     'Envoyer le message'
//                   )}
//                 </button>

//                 {/* Feedback */}
//                 <div className="text-center mt-4 h-6">
//                   {status === 'success' && (
//                     <p className="text-green-600 font-medium animate-pulse">
//                       Message envoyé avec succès !
//                     </p>
//                   )}
//                   {status === 'error' && (
//                     <p className="text-red-600 font-medium animate-pulse">
//                       Erreur d’envoi. Réessayez.
//                     </p>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Infos de contact */}
//           <div className="animate-on-scroll order-1 lg:order-2 space-y-8">
//             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
//               <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
//               <ul className="space-y-5 text-lg">
//                 <li className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
//                   </div> 
//                   <span>kerfala789@gmail.com</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
//                   </div>
//                   <span>+224 6 20 21 77 14 / 6 60 02 01 62 </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
//                   </div>
//                   <span>Conakry, Guinée</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Réseaux sociaux */}
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-moi</h3>
//               <div className="flex gap-4">
//                 {[
//                   { name: 'LinkedIn', icon: '🔗', link: 'https://www.linkedin.com/in/s%C3%A9kou-kerfala-bangoura-338a89288/' },
//                   { name: 'GitHub', icon: '🐙', link: 'https://github.com/sekKerfBang' },
//                   { name: 'Twitter', icon: '🐦', link: 'https://x.com/Kerfala1622823' },
//                 ].map(social => (
//                   <a
//                     key={social.name}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl hover:bg-blue-100 hover:scale-110 transition-all duration-300"
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Disponibilité */}
//             <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg text-center">
//               <p className="text-lg font-bold">Disponible pour de nouveaux projets</p>
//               <p className="text-sm mt-1">Réponse sous 24h</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Final */}
//       <section className="mt-20 py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">
//             Prêt à collaborer ?
//           </h3>
//           <p className="text-lg mb-6 max-w-xl mx-auto">
//             Je suis ouvert à toute opportunité de collaboration.
//           </p>
//           <Link
//             to="/"
//             className="inline-block px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
//           >
//             Retour à l’accueil
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
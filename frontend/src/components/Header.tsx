import { Link } from 'react-router-dom';

/**
 * Barre de navigation fixe en haut
 * Utilise Tailwind pour le style (vous pouvez remplacer par Bootstrap si besoin)
 */
const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
          Mon Portfolio
        </Link>
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-blue-200 transition">Accueil</Link></li>
          <li><Link to="/about" className="hover:text-blue-200 transition">À propos</Link></li>
          <li><Link to="/projects" className="hover:text-blue-200 transition">Projets</Link></li>
          <li><Link to="/skills" className="hover:text-blue-200 transition">Compétences</Link></li>
          <li><Link to="/contact" className="hover:text-blue-200 transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
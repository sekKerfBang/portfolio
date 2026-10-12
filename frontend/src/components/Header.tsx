import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/skills', label: 'Compétences' },
  { to: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-slate-900 text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black tracking-tight text-white">
            SKB<span className="text-amber-400">.</span>
          </span>
          <span>
            <span className="block text-sm font-bold leading-tight text-slate-950 sm:text-base">
              Sékou Kerfala Bangoura
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">
              Développement · Réseaux · Communication
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <ul id="navigation-mobile" className="space-y-1 border-t border-slate-100 px-5 py-3 md:hidden">
          {navigation.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;

import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoDark from '../../assets/logo-monogram-dark.svg';
import logoLight from '../../assets/logo-monogram-light.svg';
import { profile } from '../../data/profile';
import type { Theme } from '../../hooks/useTheme';
import './Header.css';


interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-inner">
          <NavLink to={'/#top'} className={'brand'}>
            <img
              src={theme === 'dark' ? logoLight  : logoDark }
              alt="Jordan Paris monogram"
              className="logo"
            />
            {profile.first_name} <span>.</span> {profile.last_name}
          </NavLink>
          <div className={`nav-links${isOpen ? ' open' : ''}`} id="nav-links">
            <a href="#apropos" onClick={closeMenu}>
              à propos
            </a>
            <a href="#competences" onClick={closeMenu}>
              compétences
            </a>
            <a href="#projets" onClick={closeMenu}>
              projets
            </a>
            <a href="#parcours" onClick={closeMenu}>
              parcours
            </a>
            <a href="#contact" onClick={closeMenu}>
              contact
            </a>
            <span className="status">
              <span className="dot"></span>Disponible — stage
            </span>
          </div>
          <div className="nav-end">
            <button
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="nav-toggle"
              aria-label="Menu"
              aria-expanded={isOpen}
              aria-controls="nav-links"
              onClick={() => setIsOpen((open) => !open)}
            >
              menu
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

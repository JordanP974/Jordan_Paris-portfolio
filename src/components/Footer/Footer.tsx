import logoDark from '../../assets/logo-monogram-dark.svg';
import logoLight from '../../assets/logo-monogram-light.svg';
import type { Theme } from '../../hooks/useTheme';
import './Footer.css';

interface FooterProps {
  theme: Theme;
}

function Footer({ theme }: FooterProps) {
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="foot-brand">
          <img
            src={theme === 'dark' ? logoLight : logoDark }
            alt="Jordan Paris monogram"
            className="foot-logo"
          />
          <h4>Jordan Paris</h4>
          <p>Développeur Web Full Stack</p>
        </div>
        <nav className="nav-footer" aria-label="Navigation secondaire">
          <h4>Navigation</h4>
          <a href="#top">accueil</a>
          <a href="#apropos">à propos</a>
          <a href="#competences">compétences</a>
          <a href="#projets">projets</a>
          <a href="#parcours">parcours</a>
        </nav>
        <div className="foot-end">
          <p>© 2026 Jordan Paris</p>
          <p>Développé avec React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

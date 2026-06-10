import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const LINKS = [
  { path: '/',         label: 'Home'     },
  { path: '/about',    label: 'About'    },
  { path: '/projects', label: 'Projects' },
  { path: '/contact',  label: 'Contact'  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const [progress, setProgress]  = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
        <div className="container nav-content">
          <Link to="/" className="nav-brand">
            <span className="brand-bracket">&lt;</span>KP<span className="brand-bracket">/&gt;</span>
          </Link>

          <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
            {LINKS.map(({ path, label }, i) => (
              <li key={path}>
                <Link to={path} className={`nav-link${pathname === path ? ' active' : ''}`}>
                  <span className="nav-num">0{i + 1}.</span>{label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu open/closed
  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };
  // Close menu when a navigation link is clicked (for mobile UX)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    // Header with glass effect and sticky positioning
    <header className="header glass">
      <div className="header-left">
        {/* Brand / Logo */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>Kailash Parajuli</Link>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        {/* Dark/Light theme toggle button (sun/moon icon) */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        {/* Mobile menu toggle (hamburger icon) */}
        <button className="nav-toggle" onClick={handleMenuToggle} aria-label="Toggle navigation">☰</button>
      </div>
    </header>
  );
}

export default Navbar;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Navigation</h3>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/projects" className="footer-link">Projects</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-links">
              <a href="https://github.com/parajuli-10" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/kailash-parajuli" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
              Designer and developer crafting digital experiences at the intersection of product and engineering.
            </p>
          </div>
        </div>

        <div className="footer-divider">
          <p className="footer-copyright">
            © {currentYear} Kailash Parajuli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <section className="hero">
        <div className="container hero-content">
          <h1 style={{ fontSize: '4rem' }}>404</h1>
          <p style={{ fontSize: 'var(--text-lg)' }}>
            Page not found. This might be a link that's broken or moved.
          </p>
          <div className="hero-cta">
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <Link to="/projects" className="btn btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

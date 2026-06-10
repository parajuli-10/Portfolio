import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Designer & Developer</h1>
          <p>
            I craft digital products and experiences at the intersection of design thinking and
            engineering precision. Focusing on solving real problems with thoughtful, user-centered solutions.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of recent projects that showcase my approach to problem-solving and product thinking.
          </p>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-image">
                  <img src={project.image.src} alt={project.image.alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-links">
                    {project.links.live && (
                      <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo →
                      </a>
                    )}
                    {project.links.code && (
                      <a href={project.links.code} className="project-link" target="_blank" rel="noopener noreferrer">
                        View Code →
                      </a>
                    )}
                    <Link to={`/projects`} className="project-link">
                      Case Study →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Have a project in mind or want to discuss an idea? I'd love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-primary">Send me a message</Link>
        </div>
      </section>
    </div>
  );
}

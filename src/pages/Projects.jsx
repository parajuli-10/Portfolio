import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <h1 className="section-title">Projects & Case Studies</h1>
          <p className="section-subtitle">
            A detailed look at problems I've solved, approaches I've taken, and what I learned along the way.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-image">
                  <img src={project.image.src} alt={project.image.alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>
                    {project.period}
                  </p>
                  <p className="project-summary">{project.summary}</p>

                  {/* Stack */}
                  {project.stack && project.stack.length > 0 && (
                    <div style={{ marginBottom: 'var(--space-lg)' }}>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', fontWeight: 600 }}>
                        Stack
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                        {project.stack.map((tech) => (
                          <span key={tech} className="skill-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

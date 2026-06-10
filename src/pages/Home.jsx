import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import projects from '../data/projects';

const ROLES = [
  'Designer & Developer',
  'Product Thinker',
  'Full-Stack Engineer',
  'Enterprise IT Specialist',
  'UI/UX Enthusiast',
];

function useTypewriter(texts, speed = 80, pause = 2200) {
  const [display, setDisplay]   = useState('');
  const [idx, setIdx]           = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let t;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}

export default function Home() {
  const featured  = projects.filter(p => p.featured);
  const typedText = useTypewriter(ROLES);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
        </div>

        <div className="container hero-layout">
          {/* Text side */}
          <div className="hero-text">
            <p className="hero-greeting fade-in-up" style={{ animationDelay: '0.05s' }}>
              Hi, I&apos;m
            </p>
            <h1 className="hero-name gradient-text fade-in-up" style={{ animationDelay: '0.15s' }}>
              Kailash Parajuli
            </h1>
            <h2 className="hero-role fade-in-up" style={{ animationDelay: '0.25s' }}>
              <span>{typedText}</span>
              <span className="tw-cursor" />
            </h2>
            <p className="hero-desc fade-in-up" style={{ animationDelay: '0.35s' }}>
              I craft digital products at the intersection of design thinking and engineering
              precision — focused on solving real problems with clean, thoughtful solutions.
            </p>
            <div className="hero-cta fade-in-up" style={{ animationDelay: '0.45s' }}>
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact"  className="btn btn-secondary">Get in Touch</Link>
              <a href="/Kailash_Parajuli_CV.pdf" className="btn btn-ghost" download>↓ CV</a>
            </div>
            <div className="hero-socials fade-in-up" style={{ animationDelay: '0.55s' }}>
              <a
                href="https://github.com/parajuli-10"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kailash-parajuli"
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div className="hero-image fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="photo-wrapper">
              <div className="photo-ring photo-ring-outer" />
              <div className="photo-ring photo-ring-inner" />
              <img
                src="/profile.jpeg"
                alt="Kailash Parajuli"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              A selection of recent projects showcasing my approach to problem-solving and product thinking.
            </p>
          </Reveal>

          <div className="projects-grid">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 110}>
                <article className="project-card">
                  <div className="project-image">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
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
                      <Link to="/projects" className="project-link">Case Study →</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Let&apos;s work together</h2>
              <p>Have a project in mind or want to discuss an idea? I&apos;d love to hear from you.</p>
              <Link to="/contact" className="btn btn-primary">Send me a message</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default function About() {
  const skills = {
    'Product & Design': ['Product Strategy', 'UX/UI Design', 'Prototyping', 'User Research', 'Design Systems'],
    'Frontend': ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Vite', 'React Router'],
    'Backend': ['Node.js', 'Express', 'SQL', 'REST API Design', 'Database Design'],
    'Enterprise IT': ['SCCM', 'Microsoft Intune', 'Active Directory', 'Entra ID', 'Windows 10/11', 'PowerShell'],
  };

  return (
    <div>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <h1 className="section-title">About Me</h1>

          <div className="about-content" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="about-text">
              <p>
                I'm a designer and developer focused on solving real problems through thoughtful product thinking and
                clean engineering. I work at the intersection of product strategy, user experience, and technical implementation.
              </p>

              <p>
                My background spans product design, full-stack development, and enterprise systems. I've worked on everything
                from early-stage product concepts to scaled enterprise deployments. What ties it all together: a commitment to
                understanding the problem deeply before reaching for solutions.
              </p>

              <p>
                When I'm not designing or building, you'll find me thinking about how to make systems more reliable, products
                more usable, and teams more effective. I'm always interested in discussing ideas, approaches, and what makes
                great software.
              </p>

              <p style={{ marginTop: 'var(--space-xl)' }}>
                <strong>Currently:</strong> Open to product roles, full-stack development, and interesting design challenges.
              </p>
            </div>

            <div className="about-skills">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <p className="skill-category-title">{category}</p>
                  <div className="skill-list">
                    {skillList.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline or additional context could go here */}
    </div>
  );
}

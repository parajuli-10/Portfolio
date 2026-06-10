import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send the email via a service like EmailJS
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Have a project in mind? Want to discuss an idea? Feel free to reach out.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <input
                className="form-input"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-input form-textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>

            {submitted && (
              <p style={{ color: 'var(--accent-blue-light)', fontSize: 'var(--text-sm)' }}>
                ✓ Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>

          {/* Contact info */}
          <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--border-color)' }}>
            <h3 className="section-title" style={{ fontSize: 'var(--text-xl)' }}>Other Ways to Connect</h3>
            <div className="footer-links" style={{ marginTop: 'var(--space-lg)' }}>
              <a href="https://github.com/parajuli-10" className="footer-link" target="_blank" rel="noopener noreferrer">
                GitHub: parajuli-10
              </a>
              <a href="https://linkedin.com/in/kailash-parajuli" className="footer-link" target="_blank" rel="noopener noreferrer">
                LinkedIn: Kailash Parajuli
              </a>
              <a href="mailto:kailashparajuli642@gmail.com" className="footer-link">
                Email: kailashparajuli642@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="hero" className="fade-in">
      <img 
        src="WeddingDiaryAustralia_-1023.jpeg" 
        alt="Kailash Parajuli" 
        className="profile-photo" 
      />
      <h1>Hi, I'm Kailash Parajuli</h1>
      <h2>Web Developer | IT Support Specialist | Cloud Enthusiast</h2>

      <p className="hero-summary">
        Solution-oriented IT professional with hands-on experience in web development, cloud services, and enterprise tech support. 
        Skilled in React.js, Node.js, Microsoft 365, PowerShell scripting, and modern DevOps tools. Passionate about building clean, secure, and scalable digital experiences.
      </p>

      <div className="cta">
        <Link to="/projects" className="btn">View Projects</Link>
        <a href="Kailash_Parajuli_CV.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </div>
    </section>
  );
}

export default Home;

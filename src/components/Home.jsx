import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="hero" className="fade-in">
      {/* Hero section with introduction */}
      <img 
        src="WeddingDiaryAustralia_-1023.jpeg" 
        alt="Kailash Parajuli" 
        className="profile-photo" 
      />
      <h1>Hi, I'm Kailash</h1>
      <p>Tech-Savvy Web Developer | Cloud &amp; IT Support Enthusiast</p>
      <div className="cta">
        {/* Call-to-action buttons */}
        <Link to="/projects" className="btn">View My Work</Link>
        <a href="Kailash_Parajuli_CV.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
        <Link to="/contact" className="btn">Contact Me</Link>
      </div>
    </section>
  );
}

export default Home;

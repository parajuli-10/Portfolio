import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="fade-in glass">
      <h2>About Me</h2>
      <p>
        Hi, I’m Kailash Parajuli, a freelance web developer and IT specialist based in Melbourne. 
        I build fast, responsive, and SEO-optimized websites for individuals, startups, and small businesses.
      </p>
      <p>
        With a background in Information Technology and industry experience at Western Health, 
        I combine design sense with technical problem-solving — from front-end development to backend configuration and IT support.
      </p>
      <p>
        I’ve worked on a variety of projects across legal, retail, and service industries — crafting modern websites 
        tailored to business goals, user needs, and performance best practices.
      </p>
      <p>
        Curious to see what I’ve built? <Link to="/projects">Check out my Projects</Link> to explore live examples of my work.
      </p>
    </section>
  );
}

export default About;

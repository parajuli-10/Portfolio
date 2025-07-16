import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      id="hero"
      className="fade-in"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/Profile_photo.jpeg"
        alt="Kailash Parajuli"
        className="profile-photo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hi, I'm Kailash Parajuli
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Web Developer | IT Support Specialist | Cloud Enthusiast
      </motion.h2>

      <motion.p
        className="hero-summary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Solution-oriented IT professional with hands-on experience in web development, cloud services, and enterprise tech support.
        Skilled in React.js, Node.js, Microsoft 365, PowerShell scripting, and modern DevOps tools.
        Passionate about building clean, secure, and scalable digital experiences.
      </motion.p>

      <motion.div
        className="cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link to="/projects" className="btn">View Projects</Link>
        <a href="/Kailash_Parajuli_CV.pdf" className="btn" download>Download Resume</a>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </motion.div>
    </motion.section>
  );
}

export default Home;

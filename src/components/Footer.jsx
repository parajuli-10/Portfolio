import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Kailash Parajuli</p>
      <div className="social">
        {/* Social media links */}
        <a href="https://github.com/parajuli-10" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kailash-parajuli-6402201a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:mail@kailashparajuli.com.np">Email</a>      
      </div>
    </footer>
  );
}

export default Footer;

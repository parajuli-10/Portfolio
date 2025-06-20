import React from "react";

function ProjectCard({ title, description, tech, liveUrl, codeUrl }) {
  return (
    <div className="project-item glass">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Links to live demo and source code */}
      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </div>
  );
}

export default ProjectCard;

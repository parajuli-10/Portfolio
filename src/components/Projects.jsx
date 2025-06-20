import React, { useState } from "react";
import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Compute unique filter categories (tech stack names)
  const techCategories = ["All", ...new Set(projectsData.flatMap(project => project.tech))];

  // Filter projects based on selected tech/category
  const filteredProjects = selectedFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.tech.includes(selectedFilter));

  return (
    <section id="projects" className="fade-in">
      <h2>Projects</h2>
      {/* Filter buttons */}
      <div className="filters">
        {techCategories.map(category => (
          <button 
            key={category} 
            className={`filter-btn ${selectedFilter === category ? "active" : ""}`}
            onClick={() => setSelectedFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="project-list">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.title} 
            title={project.title} 
            description={project.description}
            tech={project.tech}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

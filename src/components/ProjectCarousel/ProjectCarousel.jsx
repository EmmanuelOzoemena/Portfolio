import React, { useState } from "react";
import toolIcons from "../../utils/toolIcons";
import "./ProjectCarousel.css";

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="carousel-container">
      <h1 className="title">Projects</h1>
      <p className="sub-title">What I’ve Built</p>

      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>

      <div className="carousel-content">
        <button className="arrow left" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="project-card">
          <img src={currentProject.image} alt={currentProject.title} />
        </div>

        <button className="arrow right" onClick={handleNext}>
          &#8594;
        </button>
      </div>

      <div className="project-details">
        <h3>{currentProject.title}</h3>
        <p>{currentProject.description}</p>

        <div className="tech-stacks">
          {currentProject.tools.map((tool) => (
          <span key={tool} className="tool-icon">
            {toolIcons[tool]}
          </span>
        ))}
        </div>

        <div className="project-buttons">
          <a
            href={currentProject.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Live Demo
          </a>

          <a
            href={currentProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"

          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;

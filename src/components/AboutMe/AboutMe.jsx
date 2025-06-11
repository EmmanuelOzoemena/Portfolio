import { useState } from "react";
import "./AboutMe.css";
import aboutMe from "../../data/aboutMe";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const toggleText = () => setShowMore(!showMore);

  const maxLength = 300; // characters to show on mobile by default
  const shortText = aboutMe.description.slice(0, maxLength) + "...";

  const shouldTruncate = isMobile && aboutMe.description.length > maxLength;

  return (
    <>
      <div className="about-me">
        <h1 className="title">About Me</h1>
        <p className="sub-title">Why choose me?</p>

        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>

        <div className="about-me-description">
          {/* <p>{aboutMe.description}</p> */}

          <p>{shouldTruncate && !showMore ? shortText : aboutMe.description}</p>

          {shouldTruncate && (
            <button className="toggle-btn" onClick={toggleText}>
              {showMore ? "Show less" : "Show more"}
            </button>
          )}

          <h3 className="technologies">Technologies I Use:</h3>
          <div className="tech-grid">
            {aboutMe.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                • {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

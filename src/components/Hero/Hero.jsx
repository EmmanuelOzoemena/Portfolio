import "./Hero.css";
import profilePic from "../../profile-pic.png";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-image">
          <img src={profilePic} alt="Profile-picture" />
        </div>

        <div className="hero-content">
          <p className="hero-text-p1">Hi there, I'm</p>

          <p className="hero-title">Emmanuel Ozoemena</p>

          <p className="hero-text-p2">Frontend Developer</p>

          <div className="btn-container">
            <button className="btn btn-color-2">Download CV</button>
            <button className="btn btn-color-1">Contact Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

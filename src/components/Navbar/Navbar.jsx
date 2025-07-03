import { useState } from "react";
import "./Navbar.css";
// import logo from "../../logo.webp"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="marquee">
{/*           <p>
            💻 Frontend Developer | 🔍 Problem Solver | 💡 Innovative Thinker
          </p> */}

          <p>
            You're viewing an early version of my portfolio. Final refinements are in progress...
          </p>
          
        </div>

        <div className="nav-list">
          <div className="logo">logo</div>

          <div className="links">
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="#Resume">Resume</a>
              </li>
            </ul>
          </div>
          <button className="hamburger-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon close-icon"
                viewBox="0 0 24 24"
                fill="white"
                width="24"
                height="24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon menu-icon"
                viewBox="0 0 24 24"
                fill="white"
                width="24"
                height="24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="#About" onClick={closeMenu}>
                  About
                </a>
              </li>

              <li>
                <a href="#Projects" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#Resume" onClick={closeMenu}>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

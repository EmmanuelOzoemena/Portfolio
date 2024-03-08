import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu()
    }
  }, [])

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}> 
        <span className='nav_hamburger_line'></span>
        <span className='nav_hamburger_line'></span>
        <span className='nav_hamburger_line'></span>
      </a>

      <div className={`navbar-items  ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
             onClick={closeMenu} 
              activeClass="navbar-active-content" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className='navbar-content'
            >
              Services
            </Link>
          </li>

          <li>
            <Link
             onClick={closeMenu} 
              activeClass="navbar-active-content" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className='navbar-content'
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
             onClick={closeMenu} 
              activeClass="navbar-active-content" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className='navbar-content'
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
             onClick={closeMenu} 
              activeClass="navbar-active-content" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className='navbar-content'
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
        <Link
          onClick={closeMenu} 
          activeClass="navbar-active-content" 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className='btn btn-outline-primary'
        >
          Contact Me
        </Link>
    </nav>
  )
}


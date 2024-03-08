import React from 'react'

export default function AboutMe() {
  return (
    <section id='AboutMe' className='about-section'>
      <div className='about-section-img'>
        <img src="./img/about-me.png" alt="About Me" />
      </div>

      <div className='hero-section-content-box about-section-box'>
          <div className='hero-section-content'>
            <p className='section-title'>About</p>
            <h1 className='skills-section-heading'>About Me</h1>
            <p className='hero-section-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias asperiores quidem excepturi? Eveniet architecto fugiat provident labore alias tempore corporis ipsam, vel, error temporibus repellat animi consectetur praesentium ratione. Neque.</p>

            <p className='hero-section-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias asperiores quidem excepturi? Eveniet architecto fugiat provident labore alias tempore corporis ipsam.</p>
          </div>
      </div>
    </section>
  )
}

import React from 'react';
import heroImage from '../assets/hero-banner.jpg'


function Sections() {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">

          <h1 className="h1 hero-title">Kane Williams</h1>
          <p className="hero-subtitle">Creative Web & App Developer</p>

          <div className="hero-banner">
            <img
              src={heroImage}
              width="800"
              height="800"
              alt="Kane Williams"
              className="w-100"
            />
          </div>

          <p className="section-text">
            Hi, I’m Lawal Abdullateef and I am a creative web & app developer who dreams of making the world a better place by creating captivating products.
          </p>

          <a href="#" className="btn has-before">
            <span className="span">Download CV</span>
            <ion-icon name="download-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Sections;

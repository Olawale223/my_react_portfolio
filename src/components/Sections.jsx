import React from 'react';
import pf1 from '../assets/pf1.jpg'


function Sections() {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">

          <h1 className="h1 hero-title">Lawal Abdullateef</h1>
          <p className="hero-subtitle">Creative Web & App Developer</p>

          <div className="hero-banner">
            <img
              src={pf1}
              width="800"
              height="800"
              alt="olawale"
              className="w-100"
            />
          </div>

          <p className="section-text">
            Hi, I’m Lawal Abdullateef and I am a creative web & app developer who dreams of making the world a better place by creating captivating products.
          </p>

          <a href="https://onedrive.live.com/?cid=C0059F1B4BF6A23D&id=C0059F1B4BF6A23D!s743f66b2a36647e3a3e6d3c7adb698b0&action=download&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy9jMDA1OWYxYjRiZjZhMjNkL0lRQ3laajkwWnFQalI2UG0wOGV0dHBpd0FkN0dPeFZjYTYwNVc2Z3pBM29JTzJjP2U9cVJ3RVphaHR0cHM6Ly9vbmVkcml2ZS5saXZlLmNvbS9wZXJzb25hbC9jMDA1OWYxYjRiZjZhMjNkL19sYXlvdXRzLzE1L2Rvd25sb2FkLmFzcHg_U291cmNlVXJsPS9wZXJzb25hbC9jMDA1OWYxYjRiZjZhMjNkL0RvY3VtZW50cy9MYXdhbCBBYmR1bGxhdGVlZiBPbGF3YWxlLmRvY3g" className="btn has-before">
            <span className="span">Download CV</span>
            <ion-icon name="download-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Sections;

import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Get in touch</p>
        </li>

        <li>
          <a href="mailto:info@kwilliams.com" className="footer-link">info@kwilliams.com</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Locations</p>
        </li>

        <li>
          <a href="#" className="footer-link">San Francisco — California</a>
        </li>

      </ul>

      <ul className="social-list">

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-dribbble"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-skype"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

      </ul>

    </div>
  </footer>
  )
}

export default Footer
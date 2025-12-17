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
          <a href="mailto:lawalabdullateef16@gmail.com" className="footer-link">lawalabdullateef16@gmail.com</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4 footer-list-title">Locations</p>
        </li>

        <li>
          <a href="#" className="footer-link">Lagos - Nigeria</a>
        </li>

      </ul>

      <ul className="social-list">

        <li>
          <a href="https://github.com/Olawale223" className="social-link">
            <ion-icon name="logo-github"></ion-icon>
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
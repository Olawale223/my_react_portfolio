import React, { useState, useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link"; // <-- for smooth scrolling
import logo2 from '../assets/logo2.svg';

function HeaderNavbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const headerRef = useRef(null);

  const toggleNavbar = () => setIsNavActive(!isNavActive);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <Link smooth to="#home" className="logo" onClick={() => setIsNavActive(false)}>
            <img src={logo2} width="170" height="40" alt="Pfolio home" />
          </Link>

          <button
            className={`nav-toggle-btn ${isNavActive ? "active" : ""}`}
            onClick={toggleNavbar}
            aria-label="Toggle menu"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>
        </div>
      </header>

      <nav className={`navbar ${isNavActive ? "active" : ""}`}>
        <ul className="navbar-list">
          <li><Link smooth to="#home" className="navbar-link" onClick={() => setIsNavActive(false)}>About</Link></li>
          <li><Link smooth to="#resume" className="navbar-link" onClick={() => setIsNavActive(false)}>Resume</Link></li>
          <li><Link smooth to="#services" className="navbar-link" onClick={() => setIsNavActive(false)}>Services</Link></li>
          <li><Link smooth to="#portfolio" className="navbar-link" onClick={() => setIsNavActive(false)}>Portfolio</Link></li>
          <li><Link smooth to="#contact" className="navbar-link" onClick={() => setIsNavActive(false)}>Contact</Link></li>
        </ul>
      </nav>

      <div className={`overlay ${isNavActive ? "active" : ""}`} onClick={toggleNavbar}></div>
    </>
  );
}

export default HeaderNavbar;

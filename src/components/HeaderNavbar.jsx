import React, { useState, useRef, useEffect } from "react";
import logo2 from '../assets/logo2.svg';

function HeaderNavbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const headerRef = useRef(null);

  // Scroll effect for header background
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

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <a href="#" className="logo">
            <img src={logo2} 
            width="170" 
            height="40" 
            alt="Pfolio home" />
          </a>

          {/* Toggle button */}
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

      {/* Navbar */}
      <nav className={`navbar ${isNavActive ? "active" : ""}`}>
        <ul className="navbar-list">
          <li><a href="#" className="navbar-link">Home</a></li>
          <li><a href="#" className="navbar-link">Resume</a></li>
          <li><a href="#" className="navbar-link">Services</a></li>
          <li><a href="#" className="navbar-link">Portfolio</a></li>
          <li><a href="#" className="navbar-link">Blog</a></li>
          <li><a href="#" className="navbar-link">Contact</a></li>
        </ul>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${isNavActive ? "active" : ""}`}
        onClick={toggleNavbar}
      ></div>
    </>
  );
}

export default HeaderNavbar;

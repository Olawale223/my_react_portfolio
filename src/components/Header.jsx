import React, { useEffect, useRef } from 'react';

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" data-header ref={headerRef}>
      <div className="container">

        <a href="#" className="logo">
          <img
            src="./assets/images/logo.svg"
            width="170"
            height="40"
            alt="Pfolio home"
          />
        </a>

        <button
          className="nav-toggle-btn"
          data-nav-toggler
          data-nav-toggle-btn
          aria-label="Toggle menu"
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>

      </div>
    </header>
  );
}

export default Header;
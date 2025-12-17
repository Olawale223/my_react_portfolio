import React from 'react'

function Navbar({logo}) {
    const [isNavActive, setIsNavActive] = React.useState(false);
    const toggleNavbar=() =>{
        setIsNavActive(!isNavActive)
    };
  return (
    
    <div>     
    <nav className={`navbar ${isNavActive ? 'active' : ''}`} data-navbar>
        <ul className="navbar-list">
          <li><a href="#" className="navbar-link">Home</a></li>
          <li><a href="#" className="navbar-link">Resume</a></li>
          <li><a href="#" className="navbar-link">Services</a></li>
          <li><a href="#" className="navbar-link">Portfolio</a></li>
          <li><a href="#" className="navbar-link">Blog</a></li>
          <li><a href="#" className="navbar-link">Contact</a></li>
        </ul>
      </nav>
      <div
        className={`overlay ${isNavActive ? 'active' : ''}`} 
        data-nav-toggler 
        data-overlay 
        onClick={toggleNavbar}>
        </div>
        {/* Toggle button, assuming it's for mobile */}
      <button 
        className={`nav-toggle-btn ${isNavActive ? 'active' : ''}`} 
        data-nav-toggle-btn 
        onClick={toggleNavbar}
        >Toggle Menu</button>
      </div>
  )
}

export default Navbar
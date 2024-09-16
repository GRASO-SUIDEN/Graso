import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS
import './sidenav.css'

const SideNav = () => {
  return (
    <>
    <div className="mobile-nav">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="gradient-bg p-4">
          <span className="text-muted">
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>Portfolio</li>
              <li>Whitepaper</li>
              <li>About us</li>
            </ul>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-light gradient-bg p-3">
        <div className="container-fluid"> <h1 className='nav-logo'>Gravos</h1>
          <button
            className="navbar-toggler custom-toggler;"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 
        </div>
      </nav>
      </div>
    </>
  );
};

export default SideNav;

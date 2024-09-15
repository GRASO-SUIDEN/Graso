import React from 'react';
import './Sidenav.css'; 

const SideNav = () => {
  return (
    import React, { useState } from 'react';
    import './SideNav.css'; // Import your CSS file if you have one
    
    const SideNav = () => {
      const [isNavOpen, setIsNavOpen] = useState(false);
    
      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };
    
      return (
        <>
          <div className="menuicon" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>
          </div>
          <div className={`overlay ${isNavOpen ? 'show' : ''}`} onClick={toggleNav}></div>
          <div className={`side-nav ${isNavOpen ? 'show' : ''}`}>
            <div className="close-btn" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#bb9245" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </div>
            <ul>
              <li><div className="diamond"></div>Explore</li>
              <li><div className="diamond"></div>Portfolio</li>
              <li><div className="diamond"></div>Whitepaper</li>
              <li><div className="diamond"></div>About us</li>
              <li className="start-btn">Get started</li>
            </ul>
          </div>
        </>
      );
    };
    
    export default SideNav;
    
  );
};

export default SideNav;

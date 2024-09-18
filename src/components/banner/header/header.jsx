import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <nav className='nav-holder'>
        <nav className='inner-nav'>
          <div className="logo">GRASO</div>
          <ul>
            <li>
              <Link to="/" className='nav-link'>Explore</Link>
              </li>
            <li>
            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
              </li>
            <li>Features</li>
            <li>Whitepaper</li>
            <li><Link to="/about" className='nav-link'>About</Link> </li>
            <li className="start-btn">Get started</li>
          </ul>
        </nav>
      </nav>

    </div>
  );
};

export default Header;

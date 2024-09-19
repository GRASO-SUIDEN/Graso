import React from 'react';
import './logo.css'; 
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <h2 className="logo-text"><Link to="/" className='nav-link'> Graso</Link></h2> 
    </div>
  );
};

export default Logo;

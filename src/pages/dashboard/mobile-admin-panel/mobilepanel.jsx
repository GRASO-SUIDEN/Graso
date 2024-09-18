import React from 'react'
import { Link } from 'react-router-dom';

export const MobilePanel = () => {
  return (
    <div className="mobile-nav">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="gradient-bg p-4">
          <span className="text-muted">
            <ul>
              <li>Profile</li>
              <li>Explore</li>
              <li>Wishlist</li>
              <li>Watchlist</li>
              <li>Notification</li>
              <li>Deposit</li>
              <li>Withdraw</li>
              <li>Stake</li>
              <li>Settings</li>
              <li>Refer to earn</li>
              <li>Log out</li>
            </ul>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-light gradient-bg p-3">
        <div className="container-fluid"> <h1 className='nav-logo'><Link to="/" className='nav-link'>Gravos</Link></h1>
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
  );
};
  

export default MobilePanel;

import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-holder">
        <nav className="inner-nav">
          <div className="logo">GRASO</div>
          <ul>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>Dashboard</li>
            <li>Features</li>
            <li>Whitepaper</li>
            <li>About us</li>
            <li className="start-btn">Get started</li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

export default Header;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css'; // Ensure this is where your main CSS is
import '../assets/responsive.css'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navigation-wrap">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/Images/logo.png" alt="NIKE Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          
          aria-label="Toggle navigation"
        >
          <i className="fas fa-stream navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/cloths" className="nav-link">Clothing</NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
           <HashLink smooth to="/#testimonial" className="nav-link">Reviews</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#faq" className="nav-link">FAQ</HashLink>
            </li>
            <li className="nav-item">
              <button className="main-btn">1200 345 123</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// AboutPage.js

import React from 'react';
import './about.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
    <div className="App">
        <div className="about-page">
      <h2>About CSC Center</h2>
      <p>Welcome to our CSC Center! We are committed to providing various services to our community.</p>
      <p>Our mission is to bridge the digital divide by offering access to digital services and resources.</p>
      <p>Visit us to avail of services such as:</p>
      <ul>
        <li>Application for various government schemes</li>
        <li>Utility bill payments</li>
        <li>Insurance services</li>
        <li>And much more...</li>
      </ul>
    </div>
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="Logo" /> */}
        <h4>Vaibhav Documnets center</h4>
      </div>
    
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
        </li>

        {/* <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li> */}
      </ul>
    </nav>
  </div>
    <div style={{top:0}} className="footer">
    <div className="footer-content">
      <div>
        <h3>@Vaibhav CSC Center</h3>
        <p>Content related to CSC Center</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>Email: vaibhav@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 CSC Center, City, Country</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </>
    
  );
}

export default AboutPage;

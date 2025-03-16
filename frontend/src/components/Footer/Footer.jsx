import React from "react";
import "./Footer.css"; // Importing the external CSS file
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" />BoloBazzar
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <p className="footer-title">Contact Us</p>
          <p>📧 Email: contacts@bolobazaar.com</p>
          <p>📍 Location: 5173 near Industrial Area, Chandigarh</p>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2025 BoloBazaar. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

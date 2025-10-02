// src/components/Footer/Footer.jsx
import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";

const Footer = () => {
  const sections = useSelector((state) => state.footer.sections);

  return (
    <footer className="footer">
      {/* Back to top */}
      <div className="back-to-top">
        <a href="#top">Back to top</a>
      </div>

      {/* Footer links */}
      <div className="footer-links">
        {sections.map((section, index) => (
          <div className="footer-column" key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="/#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom part */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
          />
        </div>
        <div className="footer-options">
          <button className="footer-btn">🌐 English</button>
          <button className="footer-btn">🇮🇳 India</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

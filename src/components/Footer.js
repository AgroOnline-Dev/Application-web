import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-col">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <Link className="footer-link" to="/ecommerce">
                E-commerce
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/accomp-tech">
                AccompTech
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/investissement">
                Investissement
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Suivez nous</h4>
          <div>
            <Link to="/">
              <img
                className="social-links"
                id="facebook"
                src={facebook}
                alt="footer-img"
              />
            </Link>
            <Link to="/">
              <img className="social-links" src={whatsapp} alt="footer-img" />
            </Link>
            <Link to="/">
              <img className="social-links" src={twitter} alt="footer-img" />
            </Link>
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li> +237 674 458 258</li>
            <li> +237 674 458 258</li>
            <li> agroonloneo@gmail.com</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

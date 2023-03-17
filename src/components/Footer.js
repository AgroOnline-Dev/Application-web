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
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/ecommerce">E-commerce</Link>
                </li>
                <li>
                  <Link to="/accomp-tech">AccompTech</Link>
                </li>
                <li>
                  <Link to="/investissement">Investissement</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Suivez nous</h4>
              <div>
                <Link to="/">
                  <img className="social-links" src={facebook} />
                </Link>
                <Link to="/">
                  <img className="social-links" src={whatsapp} />
                </Link>
                <Link to="/">
                  <img className="social-links" src={twitter} />
                </Link>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li> +237 674 458 258</li>
                <li> +237 674 458 258</li>
                <li> agroonloneo@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

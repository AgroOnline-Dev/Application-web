import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Accueil
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="nav-link" to="/ecommerce">
            E-commerce
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="nav-link" to="/accomp-tech">
            AccompTech
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="nav-link" to="/investissement">
            Investissement
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

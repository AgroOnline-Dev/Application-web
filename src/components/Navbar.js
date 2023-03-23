import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import search from "../assets/Search Icon.png";
import cart from "../assets/Path 6.png";
import profileOffline from "../assets/profile.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/ecommerce">
              E-commerce
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/accomp-tech">
              AccompTech
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/investissement">
              Investissement
            </Link>
          </li>
        </ul>
        <div>
          <img className="nav-icons" src={search} alt="search" />
          <img className="nav-icons" src={cart} alt="shopping cart" />
          <div>
            <img
              className="nav-icons profile"
              src={profileOffline}
              alt="profile"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

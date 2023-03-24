import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import search from "../assets/Search Icon.png";
import cart from "../assets/Path 6.png";
import profileOffline from "../assets/profile.png";
import { FiLogIn } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
function Navbar() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener("click", (event) => {
    if (event.target !== menuRef.current && event.target !== imgRef.current) {
      setOpenDropDown(false);
    }
  });
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink className="nav-link" to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/ecommerce">
                E-commerce
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/accomp-tech-landing">
                AccompTech
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/investissement">
                Investissement
              </NavLink>
            </li>
          </ul>
          <div className="nav-icons-sec">
            <img className="nav-icons" src={search} alt="search" />
            <img className="nav-icons" src={cart} alt="shopping cart" />
            <div className="dropdown">
              <img
                className="nav-icons profile"
                src={profileOffline}
                alt="profile"
                onClick={handleDropDown}
                ref={imgRef}
              />
              {openDropDown && (
                <div className=" dropdown-content" ref={menuRef}>
                  <Link to="/login">
                    <p className="dropdown-item">
                      <MdSubscriptions className="dropdown-icon" /> S'inscrire
                    </p>
                  </Link>
                  <Link to="signup">
                    <p className="dropdown-item">
                      <FiLogIn className="dropdown-icon" /> Se Connecter
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

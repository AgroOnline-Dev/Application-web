import React, { useRef, useState } from "react";
import profileOnline from "../assets/profile-2.png";
import logo from "../assets/Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
function NavbarAgronome() {
  const navigate = useNavigate();
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
  const deleteToken = () => {
    localStorage.removeItem("myToken");
    navigate("/Ingenieur/login");
  };
  return (
    <>
      <nav>
        <div className="nav-center  ">
          <div className="nav-logo display">
            <img src={logo} alt="logo" />
            <Link className="link" to={"/Ingenieur"}>
              <p className="name">AGRO On-Line</p>
            </Link>
          </div>
          <div className="nav-links display">
            <p>Noumbissi Stael</p>
            <img
              className="nav-icons profile conn"
              src={profileOnline}
              alt="profile"
              onClick={handleDropDown}
              ref={imgRef}
            />
            {openDropDown && (
              <div className=" dropdown-content ingDropdown" ref={menuRef}>
                <Link to="/Ingenieur/profile" className="link">
                  <p className="dropdown-item">
                    <MdSubscriptions className="dropdown-icon" /> Profile
                  </p>
                </Link>

                <p className="dropdown-item" onClick={deleteToken}>
                  <FiLogIn className="dropdown-icon" /> Logout
                </p>
              </div>
            )}
            {/* <p>+</p> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAgronome;

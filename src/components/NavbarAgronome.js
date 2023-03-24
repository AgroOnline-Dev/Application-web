import React from "react";
import profileOnline from "../assets/profile-2.png";
import logo from "../assets/Logo.png";

function NavbarAgronome() {
  return (
    <>
      <nav>
        <div className="nav-center  ">
          <div className="nav-logo display">
            <img src={logo} alt="logo" />
            <p className="name">AGRO On-Line</p>
          </div>
          <div className="nav-links display">
            <p>Noumbissi Stael</p>
            <img
              className="nav-icons profile conn"
              src={profileOnline}
              alt="profile"
            />
            <p>+</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAgronome;

import logo from "../assets/Logo.png";
import React, { useState } from "react";

function NavBarSign() {
  const [currentPage, setCurrentPage] = useState("Sign Up");
  const handlePage = () => {
    setCurrentPage((state) => {
      if (state === "Sign Up") {
        return "Sign In";
      } else {
        return "Sign Up";
      }
    });
  };
  return (
    <>
      <nav>
        <div className="nav-center sign ">
          <div className="nav-logo display">
            <img src={logo} alt="logo" />
            <p className="name">AGRO On-Line</p>
          </div>
          <div className="nav-links display">
            <p>{currentPage}</p>
            {/* <button onClick={handlePage}>click</button> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarSign;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarUserNotConnected from "../components/NavbarUserNotConnected";
import NavbarUserConnected from "../components/NavbarUserConnected";
import NavbarAgronome from "../components/NavbarAgronome";
import NavBarSign from "../components/NavBarSign";
function Accueil() {
  return (
    <>
      <NavbarUserConnected />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Accueil;

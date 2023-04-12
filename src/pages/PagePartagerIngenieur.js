import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Accueil() {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Accueil;

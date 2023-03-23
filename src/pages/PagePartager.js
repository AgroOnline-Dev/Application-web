import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Accueil() {
  return (
    <div className="page">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Accueil;

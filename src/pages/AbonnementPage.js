import React from "react";
import NavBarSign from "../components/NavBarSign";
import logoOm from "../assets/Orange_Money_logo_PNG-1.png";
import logoMomo from "../assets/SeekPng.com_money-png-images_691715.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function AbonnementPage() {
  return (
    <>
      <div className="page">
        <div className="abonnement-container">
          <h1>Abonnement Mensuel</h1>
          <div className="lin"></div>
          <div className="abonnement-box-container">
            <div>
              <div className="abonnement-pay-option">
                <span />
                <div>
                  <h3>Orange Money</h3>
                  <p>
                    Id et amet consequat pariatur proident velit nostrud labore
                    anim eiusmod irure aliqua. Veniam qui dolor
                  </p>
                </div>
                <img src={logoOm} alt="logo" />
              </div>
              <div className="abonnement-pay-option">
                <span />
                <div>
                  <h3>Mobile Money</h3>
                  <p>
                    Id et amet consequat pariatur proident velit nostrud labore
                    anim eiusmod irure aliqua. Veniam qui dolor
                  </p>
                </div>
                <img src={logoMomo} alt="logo" />
              </div>
            </div>

            <div className="abonnement-amount">
              <p>Montant</p>
              <br />
              <hr className="line"></hr>
              <h1>5000fcfa</h1>
            </div>
          </div>
          <div className="abonnement-input">
            <label htmlFor="number">numero de telephone</label>
            <input id="number" type="number" />
          </div>
          <Link to="/accompTech/agronomeProfiles">
            <button className="abonnement-pay-btn">Payer</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AbonnementPage;

import React from "react";
import NavBarSign from "../components/NavBarSign";
import DefaultPhoto from "../assets/DefaultProfil.jpg";
import Footer from "../components/Footer";
import { MdLocationPin } from "react-icons/md";
function ModifyProfileIng() {
  return (
    <>
      <NavBarSign currentPageProps="Nke Debonheur" />
      <div className="page">
        <div className="profile-container">
          <div className="profile-col-left">
            <p className="profile-box-header">Infos compte</p>
            <div className="profile-box">
              <img src={DefaultPhoto} alt="profile" className="profile-img" />
              <h3>Nke Debonheur</h3>
              <p className="profile-small-text">debonheurnke@gmail.com</p>
              <MdLocationPin />
              <p>SUD</p>
              <p>Ebolowa</p>
            </div>
          </div>
          <div className="profile-col-right">
            <p className="profile-box-header">Modification compte</p>
            <div className="profile-box">
              <form className="form-container">
                <div className="profile-form-input">
                  <div className="input-container">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" placeholder="Nke" />
                  </div>
                  <div className="input-container">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" placeholder="Nke" />
                  </div>
                  <div className="input-container">
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" id="prenom" placeholder="Nke" />
                  </div>

                  <div className="input-container">
                    <label htmlFor="nouveau mot de passe">
                      nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      id="nouveau mot de passe"
                      placeholder="Nke"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="region">region</label>
                    <input type="text" id="region" placeholder="Nke" />
                  </div>

                  <div className="input-container">
                    <label htmlFor="ancien mot de passe">
                      ancien mot de passe
                    </label>
                    <input
                      type="password"
                      id="ancien mot de passe"
                      placeholder="Nke"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="ville">ville</label>
                    <input type="text" id="ville" placeholder="Nke" />
                  </div>
                </div>

                <button>Modifier</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ModifyProfileIng;

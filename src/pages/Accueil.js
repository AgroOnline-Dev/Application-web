import React from "react";
import PLANTES from "../assets/PLANTES1.png";
import produit1 from "../assets/images -10.png";
import produit2 from "../assets/images -8.png";
import produit3 from "../assets/images -9.png";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import farmerTablet from "../assets/farmer-tablet.jpg";
function Accueil() {
  return (
    <>
      <div className="accueil-container">
        <div className="accueil-header">
          <div className="accueil-header-left">
            <h1>AGRO On-Line</h1>
            <p>
              Plateforme de commerce des produits agricoles, d'échange entre
              agriculteurs et de demande d'investissement en ligne
            </p>
            <button>Savoir plus</button>
          </div>
          <div className="accueil-header-right">
            <img src={PLANTES} alt="agriculteur numerique" />
          </div>
        </div>
        <div className="accueil-services-container">
          <section> Nos services</section>
          <div className="accueil-services">
            <div className="accueil-service">
              <div className="accueil-icon">
                <BsCart4 />
              </div>
              <h2>E-Commerce</h2>
              <p>
                Accompagnement technique avec des conseils pratiques pour nos
                agriculteurs
              </p>
            </div>
            <div className="accueil-service">
              <div className="accueil-icon">
                <FaCoins />
              </div>
              <h2>investissement</h2>
              <p>
                Accompagnement technique avec des conseils pratiques pour nos
                agriculteurs
              </p>
            </div>
            <div className="accueil-service">
              <div className="accueil-icon">
                <BsCart4 />
              </div>
              <h2>accomptech</h2>
              <p>
                Accompagnement technique avec des conseils pratiques pour nos
                agriculteurs
              </p>
            </div>
          </div>
        </div>
        <div className="accueil-product-container">
          <section>nos produits</section>
          <p>
            Denique Antiochensis ordinis vertices sub uno elogio iussit occidi
            ideo efferatus, quod ei celebrari
          </p>
          <div className="accueil-produit">
            <img src={produit1} alt="maise" />
            <img src={produit3} alt="citron" />
            <img src={produit2} alt="pasteque" />
          </div>
          <div className="accueil-icons">
            <div className="accueil-side-icon-left">
              <BsChevronLeft />
            </div>
            <div className="accueil-side-icon-right">
              <BsChevronRight />
            </div>
          </div>
        </div>
        {/* <div className="accueil-download">
          <div className="accueil-download-text">
            <h2>NOTRE APPLICATION EST DISPONIBLE POUR VOTRE SMART PHONE</h2>
            <p>
              Denique Antiochensis ordinis vertices sub uno elogio iussit occidi
              ideo efferatus, quod ei celebrari vilitatem intempestivam urgenti,
              cum inpenderet inopia, perissent ad unum ni comes orientis tunc
              Honoratus
            </p>
            <button>Telecharger</button>
          </div>
          <div className="accueil-download-img">
            <img src={farmerTablet} alt="farmer&tablet" />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Accueil;

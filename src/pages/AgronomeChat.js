import React from "react";
import NavBarSign from "../components/NavBarSign";
import DefaultPhoto from "../assets/DefaultProfil.jpg";
import FarmerCard from "../components/FarmerCard";
import { BsChevronDown } from "react-icons/bs";
import Footer from "../components/Footer";
import NavbarAgronome from "../components/NavbarAgronome";

function AgronomeChat() {
  return (
    <>
      <NavbarAgronome />
      <div className="page">
        <div className="ing-chat-container">
          <section className="ing-chat-display">
            <div className="ing-chat-display-left">
              <input type="text" placeholder="rechercher les profils" />
              <p className="count">
                10 agriculteurs <BsChevronDown />{" "}
              </p>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
              <div className="cardComponent">
                <FarmerCard />
              </div>
            </div>
            <div className="ing-chat-display-right">
              <div className="right-header">
                <img
                  src={DefaultPhoto}
                  alt="farmer profile"
                  className="farmerCard-img"
                />
                <p>johnson</p>
              </div>
              <div className="left-content">
                <p>
                  Bonjour <br />
                  <br /> <br /> Samuel Iste minus et. Non necessitatibus ut est
                  est id amet. Officiis sequi dolorum assumenda ipsam magnam cum
                  possimus. Laudantium nulla amet tempore excepturi id expedita
                  dolorum quisquam deserunt. Odit vel sint dolor eos. Ea
                  blanditiis animi. Quibusdam unde unde. Perspiciatis vel
                  pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet
                  aliquid. Iste minus et. Non necessitatibus ut est est id amet.
                  Officiis sequi dolorum assumenda ipsam magnam cum possimus.{" "}
                  <br /> <br /> <br /> Laudantium nulla amet tempore excepturi
                  id expedita dolorum quisquam deserunt. Odit vel sint dolor
                  eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis
                  vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam
                  amet aliquid.Iste minus et. Non necessitatibus ut est est id
                  amet. Officiis sequi dolorum Iste minus et. Non necessitatibus
                  ut est est id amet. Officiis sequi dolorum assumenda ipsam
                  magnam cum possimus. <br /> <br /> Laudantium nulla amet
                  tempore excepturi id expedita dolorum
                </p>
              </div>
            </div>
          </section>
          <input type="text" className="ing-chat-write" />
          <button className="chat-sent-btn">Envoyer</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AgronomeChat;

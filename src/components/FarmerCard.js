import React from "react";
import DefaultPhoto from "../assets/DefaultProfil.jpg";

function FarmerCard() {
  return (
    <div className="farmerCard-container">
      <img src={DefaultPhoto} alt="farmer profile" className="farmerCard-img" />
      <div className="farmerCard-text">
        <h4>johnson</h4>
        <p>Lorem ipsum dolor sit amet Consectetur…</p>
      </div>
      <p>6min</p>
    </div>
  );
}

export default FarmerCard;

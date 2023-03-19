import React from "react";
import profile from "../assets/Pprofile.png";
function AgronomeCard({ name, email, specialty, experience }) {
  return (
    <div className="card">
      <img src={profile} alt="agronome profile" />
      <div>
        <h1> {name}</h1>
        <h3> {email}</h3>
        <h5>{specialty}</h5>
        <p>{experience}</p>
      </div>
    </div>
  );
}

export default AgronomeCard;

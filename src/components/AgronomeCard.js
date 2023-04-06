import React from "react";
// import profile from "../assets/DefaultProfil.jpg";
function AgronomeCard({ name, email, specialty, experience, profile }) {
  const url = "http://localhost:5000/";

  var nom = "";

  if (profile) {
    nom = profile;
  } else {
    nom = "../assets/DefaultProfil.jpg";
  }
  return (
    <div className="card">
      <img src={url + nom} alt="agronome profile" className="round-circle" />
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

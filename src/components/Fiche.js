import React from "react";
import { Link } from "react-router-dom";

function Fiche({ name, description }) {
  return (
    <div className="card ">
      <img src="" alt="pdf" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <Link to="/">Open</Link>
        </div>
      </div>
    </div>
  );
}

export default Fiche;

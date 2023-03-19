import React from "react";
import { Link } from "react-router-dom";

function Fiche({ name }) {
  return (
    <div className="card fiche">
      <img src="" alt="pdf" />
      <div>
        <h2>{name}</h2>
        <p>
          culpa officia exercitation occaecat amet aute minim. Irure dolor
          cupidatat et duis ut duis exercitation.Sint nisi esse enim ea
          cupidatat cupidatat culpa ad.
        </p>
        <div>
          <Link to="/">Open</Link>
        </div>
      </div>
    </div>
  );
}

export default Fiche;

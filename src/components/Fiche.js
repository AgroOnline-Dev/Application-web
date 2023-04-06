import React from "react";
import { Link } from "react-router-dom";
import { FaRegFilePdf, FaDownload } from "react-icons/fa";

function Fiche({ name, description, id }) {
  const downloadLink = `http://localhost:5000/FichesTechniques/${id}/${name}`;
  console.log(downloadLink);
  return (
    <div className="fiche-container">
      <div>
        <FaRegFilePdf className="pdf" />
      </div>
      <div>
        <div className="fiche-text">
          <h2>{name}</h2>
          <p>{description} </p>
          <p>
            Cupidatat nullsdfdsfsdfsdfsdDolor irure consequat officia do
            cupidatat est anim deserunt veniam loSit consectetur officia laborum
            ullamco commodo mollit quis reprehenderit consequat dolore. Nulla
            enim aliquip excepteur mollit anim. Non deserunt voluptate
            consectetur cupidatat pariatur excepteur. Labore adipisicing eu
            labore laborum aliquip. Fugiat voluptate Lorem do veniam.
          </p>
        </div>
        <div className="open-pdf">
          <a href={downloadLink} target="_blank">
            telecharger
          <FaDownload className="download" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fiche;

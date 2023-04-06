import axios from "axios";
import React, { useEffect, useState } from "react";
import Fiche from "../components/Fiche";
import { Link } from "react-router-dom";
import AgronomePageHeader from "../components/AgronomePageHeader";
import Chat from "../components/Chat";

function FicheTechnique(props) {
  const url = "http://localhost:5000/FichesTechniques";
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setResult(data);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <AgronomePageHeader />
      <div className="act">
        {result.map((item) => {
          return (
            <div className="item" key={item.id}>
              <Fiche
                id={item.id}
                name={item.nom}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FicheTechnique;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fiche from "../components/Fiche";

function FicheTechnique(props) {
  const url = "http://localhost:3001/agriculturer/fiche-technique";
  // console.log(props.location.state);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setResult(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="page-fiche">
      {result.map((item) => {
        return (
          <div key={item.id}>
            <Fiche name={item.nom} />
          </div>
        );
      })}
    </div>
  );
}

export default FicheTechnique;

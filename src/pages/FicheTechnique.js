import axios from "axios";
import React, { useEffect, useState } from "react";
import Fiche from "../components/Fiche";
import { Link } from "react-router-dom";
import AgronomePageHeader from "../components/AgronomePageHeader";

function FicheTechnique(props) {
  const url = "http://localhost:5000/agriculturer/fiche-technique";
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
    <div>
      <AgronomePageHeader />
      <div className="act">
        {result.map((item) => {
          return (
            <div className="item" key={item.id}>
              <Link to="/accomp-tech">
                <Fiche name={item.nom} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FicheTechnique;

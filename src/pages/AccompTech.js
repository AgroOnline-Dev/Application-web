import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import AgronomeCard from "../components/AgronomeCard";
import axios from "axios";
const url = "http://localhost:3001/agriculturer/agronomes";

function AccompTech() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setInfo(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="act">
        {info.map((item) => {
          return (
            <Link
              key={item.id}
              to={{
                pathname: "/fiche-technique",
                state: { data: item },
              }}
            >
              <div className="item">
                <AgronomeCard
                  name={item.name}
                  email={item.email}
                  specialty={item.specialty}
                  experience={item.experience}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AccompTech;

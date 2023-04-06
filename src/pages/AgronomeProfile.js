import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AgronomeCard from "../components/AgronomeCard";
const url = "http://localhost:5000/agriculturer/agronomes";

function AccompTechLanding() {
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
                pathname: "/accompTech/chat",
                state: { data: item },
              }}
            >
              <div className="item">
                <AgronomeCard
                  name={item.name}
                  email={item.email}
                  specialty={item.specialty}
                  experience={item.experience}
                  profile={item.profile_image}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AccompTechLanding;

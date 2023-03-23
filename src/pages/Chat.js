import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../components/Message";
import profile from "../assets/Pprofile.png";

function Chat() {
  const url = "http://localhost:3001/agriculturer/chat";
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
    <div className="chat-container">
      <div className="chat-header">
        <img src={profile} alt="profile" />
        <p>User name</p>
      </div>
      <div className="chat-wrapper">
        {result.map((item) => {
          return (
            <div key={item.room}>
              <Message user={item.user} content={item.contenu} />
            </div>
          );
        })}
      </div>
      <div>
        <input />
        <button> send</button>
      </div>
    </div>
  );
}

export default Chat;
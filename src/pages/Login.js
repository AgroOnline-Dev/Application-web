import React, { useState } from "react";
import Navbar from "../components/NavBarSign";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("myToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(config);
    const formData = { email, password };
    axios
      .post("http://localhost:5000/agronome/signin", formData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };
  return (
    <>
      <Navbar currentPageProps="Login " />
      <div className="login-container">
        <div className="login-sec1">
          <h2>Hey friend</h2>
          <p>Don't yet have an account? We will be privileged to have you. </p>
          <Link to="/signup" className="changeSection">
            Sign Up{" "}
          </Link>
        </div>
        <div className="login-sec2">
          <h1>Connect to your account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

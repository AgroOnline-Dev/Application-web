import React, { useState } from "react";
import Navbar from "../components/NavBarSign";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

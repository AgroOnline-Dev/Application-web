import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBarSign";

function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar currentPageProps="Sign Up" />
      <div className="login-container">
        <div className="login-sec1">
          <h2>Welcome back</h2>
          <p>
            Connect to your account with your info and acontinue your activities
          </p>
          <Link to="/login" className="changeSection">
            Sign In
          </Link>
        </div>
        <div className="login-sec2">
          <h1>Create an account</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="text" placeholder="Speciality" required />
            <input type="text" placeholder="Experience" required />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

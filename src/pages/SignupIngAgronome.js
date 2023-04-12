import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBarSign";
import axios from "axios";
import useIngenieurNavigation, {
  useGetIngItem,
} from "../utils/useIngenieurNavigation";

function Signup() {
  useIngenieurNavigation();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const navigateIng = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, password, speciality, experience };
    try {
      const serverResponse = await axios.post(
        "http://localhost:5000/agronome/signup",
        formData
      );
      const token = serverResponse.data.token;
      localStorage.setItem("myToken", token);
      console.log("success");
      navigateIng("/Ingenieur");
    } catch (error) {
      console.log("error");
      setError(error.response.data.msg);
    }
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
          <Link to="/Ingenieur/login" className="changeSection">
            Sign In
          </Link>
        </div>
        <div className="login-sec2">
          <h1>Create an account</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              // required
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <input
              type="text"
              placeholder="Speciality"
              onChange={(e) => setSpeciality(e.target.value)}
              // required
            />
            <input
              type="text"
              placeholder="Experience"
              onChange={(e) => setExperience(e.target.value)}
              // required
            />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

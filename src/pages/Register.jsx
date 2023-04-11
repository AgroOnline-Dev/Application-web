import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBarSign";
import axios from "axios";

function Register() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profil, setProfil] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, password };
    axios
      .post("http://localhost:5000/news-r/signup", formData)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        localStorage.setItem("myToken", token);
      })
      .catch((error) => {
        // console.log(error.response.data);
        setError(error.response.data.msg);
      });
  };
  // console.log(error);

  return (
    <>
      <Navbar currentPageProps='Sign Up' />
      <div className='login-container'>
        <div className='login-sec1'>
          <h2>Welcome back</h2>
          <p>
            Connect to your account with your info and acontinue your activities
          </p>
          <Link to='/Login-e-commerce' className='changeSection'>
            Sign In
          </Link>
        </div>
        <div className='login-sec2'>
          <h1>Create an account</h1>
          {error && <div className='error'>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              // required
            />
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button>Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import "../App.css";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <Nav />
      <div className='container'>
        <div className='auth-form-container'>
          <h2>Register</h2>
          <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full name</label>
            <input
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='full Name'
            />
            <label htmlFor='email'>email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='youremail@gmail.com'
              id='email'
              name='email'
            />
            <label htmlFor='password'>password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type='password'
              placeholder='********'
              id='password'
              name='password'
            />
            <label htmlFor='password'>confirm password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type='password'
              placeholder='********'
              id='passwordConfirm'
              name='password'
            />

            <button type='submit'>Sign Up</button>
          </form>
          <Link className='link-btn' to={"/Login"}>
            Already have an account? Login here.
          </Link>
        </div>
      </div>
    </>
  );
};
export default Register;

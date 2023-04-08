import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Nav from "./Nav";
import "../App.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <Nav />
      <div className='container'>
        <div className='auth-form-container'>
          <h2>Login</h2>
          <form className='login-form' onSubmit={handleSubmit}>
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
            <button type='submit'>Log In</button>
          </form>
          <Link className='link-btn' to={"/Register"}>
            Already have an account? Login here.
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;

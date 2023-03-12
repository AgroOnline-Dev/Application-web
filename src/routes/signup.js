import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:3001/agronome/signup";
// import { useNavigate } from "react-router-dom";
function Login() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const signupData = {
      enteredName,
      enteredEmail,
      enteredPassword,
    };
    try {
      const resp = await axios.post(url, {
        email: enteredEmail,
        password: enteredPassword,
        name: enteredName,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  // const navigate = useNavigate();
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h4>contact form</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="enter your name"
            required
            id="name"
            className="form-input"
            ref={nameRef}
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="enter your email"
            id="email"
            className="form-input"
            ref={emailRef}
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            required
            type="password"
            id="password"
            className="form-input"
            ref={passwordRef}
          ></input>
        </div>
        <button className="btn btn-block">login</button>
        <Link to="signin" className="title">
          {" "}
          Signin
        </Link>
      </form>
    </div>
  );
}

export default Login;

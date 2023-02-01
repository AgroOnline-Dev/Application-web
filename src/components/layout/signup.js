import React, { useRef, useState, useEffect } from "react";

function Login() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const signupData = {
      enteredName,
      enteredEmail,
      enteredPassword,
    };
    console.log(signupData);
  }

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
        <p className="title">sign in</p>
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import Navbar from "../components/NavBarSign";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationUserConfig from "../components/NavigationUserConfig";
function Login() {
  NavigationUserConfig();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alertType, setAlertType] = useState("danger");
  const [message, setMessage] = useState("");
  const [logged, setStatus] = useState(false);
  const [alertStyle, setAlertStyle] = useState({ display: "none" });
  const sendAlertMessage = (text, type = "danger", time = 5) => {
    setAlertType(type);
    setMessage(text);
    setAlertStyle({ display: "block" });
    setTimeout(() => {
      setAlertStyle({ display: "none" });
      if (type === "success") {
        document.location.replace("/ecommerce");
      }
    }, 3000);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("user-token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(config);
    const formData = { email, password, token };
    axios
      .post("http://localhost:5000/news-r/signin", formData, config)
      .then((response) => {
        console.log(response);
        const token = response.data.msg;
        console.log(token);
        localStorage.setItem("user-token", token);
        navigate("/ecommerce");
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
    <>
      <Navbar currentPageProps='Login ' />
      <div className='login-container'>
        <div className='login-sec1'>
          <h2>Hey friend</h2>
          <p>Don't yet have an account? We will be privileged to have you. </p>
          <Link to='/signUp-e-commerce' className='changeSection'>
            Sign Up{" "}
          </Link>
        </div>
        <div className='login-sec2'>
          <h1>Connect to your account</h1>
          <div
            className={`alert alert-${alertType}`}
            style={alertStyle}
            role='alert'
          >
            {message}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
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

import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import search from "../assets/Search Icon.png";
import cart from "../assets/Path 6.png";
import profileOffline from "../assets/profile.png";
import { FiLogIn } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
import axios from "axios";
function Navbar() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [logged, status] = useState(false);
  const [user, setUser] = useState("");
  const [counter, setCounter] = useState();
  const [connected, setConnected] = useState(false);
  const [profil, setProfil] = useState("");
  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener("click", (event) => {
    if (event.target !== menuRef.current && event.target !== imgRef.current) {
      setOpenDropDown(false);
    }
  });
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const token = localStorage.getItem("user-token");
    const formData = { token };
    axios
      .post("http://localhost:5000/news-r/verification", formData)
      .then((response) => {
        console.log(response.data.user);
      });
  }, []);

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-logo'>
            <NavLink to='/'>
              <img src={logo} alt='logo' />
            </NavLink>
          </div>
          <ul className='nav-links'>
            <li>
              <NavLink className='nav-link' to='/'>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/ecommerce'>
                E-commerce
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/accompTech'>
                AccompTech
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/investissement'>
                Investissement
              </NavLink>
            </li>
          </ul>
          <div className='nav-icons-sec'>
            <img className='nav-icons' src={search} alt='search' />
            <Link>
              <img className='nav-icons' src={cart} alt='shopping cart' />
            </Link>

            <div className='dropdown'>
              <img
                className='nav-icons profile'
                src={profileOffline}
                alt='profile'
                onClick={handleDropDown}
                ref={imgRef}
              />
              {openDropDown && (
                <div className=' dropdown-content' ref={menuRef}>
                  <Link to='/login'>
                    <p className='dropdown-item'>
                      <MdSubscriptions className='dropdown-icon' /> S'inscrire
                    </p>
                  </Link>
                  <Link to='signup'>
                    <p className='dropdown-item'>
                      <FiLogIn className='dropdown-icon' /> Se Connecter
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

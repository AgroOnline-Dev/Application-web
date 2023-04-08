import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Nav = () => {
  const [logged, status] = useState(false);
  const [user, Uuser] = useState("");
  const [switcheToggled1, setswitcheToggled1] = useState(false);
  const [switcheToggled2, setswitcheToggled2] = useState(false);
  const [switcheToggled3, setswitcheToggled3] = useState(false);
  const myClass = "nav-link";

  const ToggleSwitch = () => {
    setswitcheToggled1((current) => !current);
    console.log(switcheToggled1);
    setswitcheToggled2((current) => !current);
    console.log(switcheToggled2);
    setswitcheToggled3((current) => !current);
    if (!switcheToggled1) {
      setswitcheToggled2(false);
      setswitcheToggled3(false);
    }
    if (!switcheToggled2) {
      setswitcheToggled1(false);
      setswitcheToggled3(false);
    }
    if (!switcheToggled3) {
      setswitcheToggled1(false);
      setswitcheToggled2(false);
    }
  };
  return (
    <nav
      className='navbar navbar-expand-lg  navbar-dark'
      id='navbar'
      style={{ background: "green" }}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand'>AGRO On-Line</Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item' onClick={ToggleSwitch}>
              <Link
                className={`nav-link  ${switcheToggled1 ? "active" : ""}`}
                to={"/"}
                aria-current='page'
              >
                Home
              </Link>
            </li>
            {logged ? (
              <li className='nav-item'>
                <span className='nav-link'>{user}</span>
              </li>
            ) : (
              <>
                <li className='nav-item' onClick={ToggleSwitch}>
                  <Link
                    className={`nav-link  ${switcheToggled2 ? "active" : ""}`}
                    to={"/Register"}
                    onClick={ToggleSwitch}
                  >
                    Sign Up
                  </Link>
                </li>
                <li className='nav-item' onClick={ToggleSwitch}>
                  <Link
                    className={`nav-link  ${switcheToggled3 ? "active" : ""}`}
                    to={"/Login"}
                  >
                    Sign In
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Seetings
                  </Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' href='#'>
                        profile
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' href='#'>
                        Actions
                      </Link>
                    </li>

                    <li>
                      <Link className='dropdown-item' href='#'>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

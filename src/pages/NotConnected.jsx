import { useParams, Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Flow 1.css";
import NavbarUserNotConnected from "../components/NavbarUserNotConnected";
const NotConnected = () => {
  return (
    <div>
      <NavbarUserNotConnected />
      <Link className='Not-connected-text' to={"/Login-e-commerce"}>
        {" "}
        You are nont connected{" "}
      </Link>
    </div>
  );
};
export default NotConnected;

import React, { useEffect, useState } from "react";
import NavBarSign from "../components/NavBarSign";
import DefaultPhoto from "../assets/DefaultProfil.jpg";
import Footer from "../components/Footer";
import { MdLocationPin } from "react-icons/md";
import useNavigationIng, {
  useNavigateConnect,
} from "../utils/useIngenieurNavigation";
import axios from "axios";
import url from "../utils/url";
import NavbarAgronome from "../components/NavbarAgronome";
function ModifyProfileIng() {
  useNavigateConnect();
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [region, setRegion] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(image);
      const object = { name, prenom, region, ville, email, password };
      const file = { image: image };
      const data = new FormData();
      data.append("file", image);
      console.log(file);
      const res = await axios.post(`${url}profile`, image, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
    } catch (error) {
      console.log("error");
      console.log(error.response);
    }
  };
  // console.log(image[0]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("myToken");
      // console.log(token);
      const res = await axios.post(`${url}getUserInfo`, { token });
      // console.log(res.data);
      setUser(res.data);
      // console.log(user);
      // return res.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // if (condition) {
  // }

  // console.log(fetchData());
  return (
    <>
      <NavbarAgronome />
      <div className="page">
        <div className="profile-container">
          <div className="profile-col-left">
            <p className="profile-box-header">Infos compte</p>
            <div className="profile-box">
              <img src={DefaultPhoto} alt="profile" className="profile-img" />
              <input
                type="file"
                name="profile"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <h3>{user.name}</h3>
              <p className="profile-small-text">{user.email}</p>
              <MdLocationPin />
              <p>SUD</p>
              <p>Ebolowa</p>
            </div>
          </div>
          <div className="profile-col-right">
            <p className="profile-box-header">Modification compte</p>
            <div className="profile-box">
              <form className="form-container">
                <div className="profile-form-input">
                  <div className="input-container">
                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      placeholder="Nke"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Nke"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="prenom">Prenom</label>
                    <input
                      type="text"
                      id="prenom"
                      placeholder="Nke"
                      onChange={(e) => {
                        setPrenom(e.target.value);
                      }}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="nouveau mot de passe">
                      nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      id="nouveau mot de passe"
                      placeholder="Nke"
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="region">region</label>
                    <input
                      type="text"
                      id="region"
                      placeholder="Nke"
                      onChange={(e) => {
                        setRegion(e.target.value);
                      }}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="ancien mot de passe">
                      ancien mot de passe
                    </label>
                    <input
                      type="password"
                      id="ancien mot de passe"
                      placeholder="Nke"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="ville">ville</label>
                    <input
                      type="text"
                      id="ville"
                      placeholder="Nke"
                      onChange={(e) => {
                        setVille(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <button onClick={handleSubmit}>Modifier</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ModifyProfileIng;

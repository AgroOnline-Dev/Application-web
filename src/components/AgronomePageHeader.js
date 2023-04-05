import React from "react";
import { NavLink } from "react-router-dom";

function AgronomePageHeader() {
  return (
    <>
      <div className="accomptech-header-container">
        <div className="header-text">
          <p>chat</p>
          <p>Fiche Technique</p>
          <p>seminaire</p>
        </div>
        <div className="header-navigation">
          <NavLink to="/accompTech/chat">
            <div className="circle">
              <span className="round">1</span>
            </div>
          </NavLink>
          <div className="lineh"></div>
          <NavLink to="/accompTech/fiche-technique">
            <div className="circle">
              <span className="round">2</span>
            </div>
          </NavLink>
          <div className="lineh"></div>
          <NavLink to="/accompTech/videoConference">
            <div className="circle">
              <span className="round">3</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AgronomePageHeader;

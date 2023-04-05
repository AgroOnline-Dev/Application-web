import React from "react";
import { Outlet } from "react-router-dom";
import AgronomePageHeader from "../components/AgronomePageHeader";

function AccompTechMainPage() {
  return (
    <div>
      <AgronomePageHeader />
      <Outlet />
    </div>
  );
}

export default AccompTechMainPage;

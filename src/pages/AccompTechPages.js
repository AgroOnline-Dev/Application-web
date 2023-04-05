import React from "react";
import { Outlet } from "react-router-dom";
import AgronomePageHeader from "../components/AgronomePageHeader";

function AccompTechPages() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default AccompTechPages;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const NavigationUserConfig = () => {
  const userNavigation = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      userNavigation("/ecommerce");
    }
  }, []);
};
export const userNavigateConnexion = () => {
  const userNavigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-token")) {
      userNavigation("/Login-e-commerce");
    }
  }, []);
};

export default NavigationUserConfig;

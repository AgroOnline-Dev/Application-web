import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import url from "./url";

const useNavigationIng = () => {
  const ingenieurNavigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("myToken")) {
      ingenieurNavigate("/Ingenieur");
    }
  }, []);
};

export const useNavigateConnect = () => {
  const ingenieurNavigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("myToken")) {
      ingenieurNavigate("/Ingenieur/login");
    }
  }, []);
};

export default useNavigationIng;

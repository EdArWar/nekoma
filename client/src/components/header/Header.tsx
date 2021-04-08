import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.scss";
import HeaderHome from "./headerHome/HeaderHome";
import HeaderOther from "./headerOther/HeaderOther";

const Header = () => {
  const location = useLocation();
  let isHomeWatches: any;
  if (
    location.pathname === "/home" ||
    location.pathname === "/" ||
    location.pathname === "/index"
  ) {
    isHomeWatches = true;
  } else {
    isHomeWatches = false;
  }

  window.scroll(0, 0);

  return <>{isHomeWatches ? <HeaderHome /> : <HeaderOther />}</>;
};

export default Header;

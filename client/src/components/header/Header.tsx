import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCartSidebarState } from "../../redux/global.slice";
import "./Header.scss";
import HeaderHome from "./headerHome/HeaderHome";
import HeaderOther from "./headerOther/HeaderOther";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
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

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(setCartSidebarState(false));
  }, [isHomeWatches]);

  return <>{isHomeWatches ? <HeaderHome /> : <HeaderOther />}</>;
};

export default Header;

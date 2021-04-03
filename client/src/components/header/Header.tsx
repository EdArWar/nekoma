import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCartState, setSidebarState } from "../../redux/global.slice";
import { api_logout } from "./../../api/API";
import "./Header.scss";
import HeaderHome from "./headerHome/HeaderTest";
import HeaderOther from "./headerOther/HeaderOther";

const Header = () => {
  const sidebarState = useSelector((state: any) => state.global.sidebar);
  const cartState = useSelector((state: any) => state.global.cart);

  const dispatch = useDispatch();

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

  if (window.scrollY > 0) {
    // window.scrollY = 0;
  }
  // $("html, body").animate({ scrollTop: 0 }, 300);
  window.scroll(0, 0);

  function onSidebarClicked() {
    dispatch(setSidebarState(!sidebarState));
  }
  function onCartClicked() {
    dispatch(setCartState(!cartState));
  }
  function logHeandler(e: any) {
    console.log("stex");
    console.log(e.target.innerText);

    e.preventDefault();
    if (e.target.innerText === "Logout") {
      console.log("stex 2");

      dispatch(api_logout());
    }
  }

  return <>{isHomeWatches ? <HeaderHome /> : <HeaderOther />}</>;
};

export default Header;

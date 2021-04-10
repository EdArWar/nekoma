import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useRoutes } from "./../routes";
import { CSSTransition } from "react-transition-group";
import CartPanel from "../components/cart/CartPanel";
import Sidebar from "./homePage/sidebar/Sidebar";

export default function BasePage() {
  const routes = useRoutes();

  const cartSidebarState = useSelector(
    (state: any) => state.global.cartSidebarState
  );
  const sidebarState = useSelector((state: any) => state.global.sidebar);

  return (
    <div>
      <Header />
      <CSSTransition
        in={sidebarState}
        timeout={1000}
        classNames="my-node"
        unmountOnExit
      >
        <Sidebar />
      </CSSTransition>
      <CSSTransition
        in={cartSidebarState}
        timeout={1000}
        classNames="my-cart-node"
        unmountOnExit
      >
        <CartPanel />
      </CSSTransition>
      {routes}
      <Footer />
    </div>
  );
}

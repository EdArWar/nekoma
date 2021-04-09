import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useRoutes } from "./../routes";
import { CSSTransition } from "react-transition-group";
import Cart from "./../components/cart/Cart";

export default function BasePage() {
  const routes = useRoutes();

  const cartSidebarState = useSelector(
    (state: any) => state.global.cartSidebarState
  );

  return (
    <div>
      <Header />
      <CSSTransition
        in={cartSidebarState}
        timeout={1000}
        classNames="my-cart-node"
        unmountOnExit
      >
        <Cart />
      </CSSTransition>
      {routes}
      <Footer />
    </div>
  );
}

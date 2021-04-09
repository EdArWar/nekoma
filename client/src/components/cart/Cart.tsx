import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cart_empty } from "../../assets/image.assets";
import { setCartSidebarState, setCartState } from "../../redux/global.slice";
import CartItem from "./cartItem/CartItem";
import "./Cart.scss";
export default function Cart() {
  const cartData = useSelector((state: any) => state.global.cartData);
  let totalPrice = 0;
  let content = [];

  if (!!cartData && cartData.length > 0) {
    content = cartData.map((item: any, i: any) => {
      totalPrice += +item.price;
      if (i < 3) {
        return (
          <CartItem
            key={i}
            id={item.id}
            itemImg={item.img}
            itemName={item.name}
            itemPrice={item.price}
          />
        );
      }
    });
  } else {
    content.push(
      <div>
        <img srcSet={cart_empty} alt="" width="100%" />
      </div>
    );
  }
  const dispatch = useDispatch();
  function onCartHideClicked() {
    dispatch(setCartSidebarState(false));
  }

  return (
    <div
      className={`wrap-header-cart js-panel-cart show-header-cart`}
      style={{ zIndex: 5555 }}
    >
      <div
        className="s-full js-hide-cart"
        onClick={() => onCartHideClicked()}
      ></div>

      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Your Cart</span>

          <div
            className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart"
            onClick={() => onCartHideClicked()}
          >
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>

        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">{content}</ul>

          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              Total: {`$${totalPrice}`}
            </div>

            <div className="header-cart-buttons flex-w w-full">
              <Link
                to="shopping-cart"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
              >
                View Cart
              </Link>

              <Link
                to="shopping-cart"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

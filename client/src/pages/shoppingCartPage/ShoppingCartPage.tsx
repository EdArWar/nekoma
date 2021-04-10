import React from "react";
import { useDispatch } from "react-redux";
import { bg_01 } from "../../assets/image.assets";
import { setCartState } from "../../redux/global.slice";
import CartTotals from "./cartTotals/CartTotals";
import ShoppingTable from "./shoppingTable/ShoppingTable";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  dispatch(setCartState(false));

  return (
    <div>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${bg_01})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Cart</h2>
      </section>
      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <ShoppingTable />
            <CartTotals />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShoppingCartPage;

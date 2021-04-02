import React from "react";
import { useDispatch } from "react-redux";
import Cart from "../../components/cart/Cart";
import { setCartState } from "../../redux/global.slice";
import CartTotals from "./cartTotals/CartTotals";
import ShoppingTable from "./shoppingTable/ShoppingTable";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  dispatch(setCartState(false));

  return (
    <div>
      <Cart />
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

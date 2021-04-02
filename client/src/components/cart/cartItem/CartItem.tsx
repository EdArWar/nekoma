import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCartProduct } from "../../../redux/global.slice";

const CartItem: React.FC<any> = ({ id, itemImg, itemName, itemPrice }) => {
  const dispatch = useDispatch();

  function onRemoveCart() {
    console.log("onRemoveCart");
    console.log(id);
    dispatch(removeCartProduct(id));
  }

  return (
    <li className="header-cart-item flex-w flex-t m-b-12">
      <div className="header-cart-item-img" onClick={() => onRemoveCart()}>
        <img srcSet={itemImg[0]} alt="IMG" />
      </div>

      <div className="header-cart-item-txt p-t-8">
        <Link
          to="/shopping-cart"
          className="header-cart-item-name m-b-18 hov-cl1 trans-04"
        >
          {itemName}
        </Link>

        <span className="header-cart-item-info">{itemPrice}</span>
      </div>
    </li>
  );
};

export default CartItem;

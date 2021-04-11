import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProductDataConfig } from "../../../types/ProductType";
import { api_removeCart } from "./../../../api/API";

const CartItem: React.FC<IProductDataConfig> = ({ configs }) => {
  const token = useSelector((state: any) => state.user.token);

  const dispatch = useDispatch();

  function onRemoveCart() {
    dispatch(api_removeCart(token, configs._id));
  }

  return (
    <li className="header-cart-item flex-w flex-t m-b-12">
      <div className="header-cart-item-img" onClick={() => onRemoveCart()}>
        <img srcSet={configs.productImage[0].url} alt="IMG" />
      </div>

      <div className="header-cart-item-txt p-t-8">
        <Link
          to="/shopping-cart"
          className="header-cart-item-name m-b-18 hov-cl1 trans-04"
        >
          {configs.productName}
        </Link>

        <span className="header-cart-item-info">{configs.productPrice} $</span>
      </div>
    </li>
  );
};

export default CartItem;

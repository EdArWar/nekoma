import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ProductItem.scss";
import { IProductDataConfig } from "./../../../../types/ProductType";
const ProductItem: React.FC<IProductDataConfig> = ({ configs }) => {
  return (
    <div
      className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item  h_card_item_show ${configs.productTag.toLowerCase()}`}
    >
      <div className="block2">
        <NavLink
          to={`/singleProduct?id=${configs._id}`}
          className={
            configs._id <= "1"
              ? "block2-pic hov-img0 label-new"
              : "block2-pic hov-img0"
          }
          data-label={configs._id <= "1" ? "New" : ""}
        >
          <img srcSet={configs.productImage[0].url} alt="IMG-PRODUCT" />
          <NavLink
            to={`/singleProduct?id=${configs._id}`}
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
          >
            Quick View
          </NavLink>
        </NavLink>
        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <NavLink
              to={`/singleProduct?id=${configs._id}`}
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {configs.productTitle}
            </NavLink>
            <span className="stext-105 cl3">${configs.productPrice}</span>
          </div>
          <div className="block2-txt-child2 flex-r p-t-3">
            <NavLink
              to={`/singleProduct?id=${configs._id}`}
              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
            ></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

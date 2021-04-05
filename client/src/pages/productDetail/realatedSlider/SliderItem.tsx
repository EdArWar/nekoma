import React from "react";
import { IProduct, IProductDataConfig } from "./../../../types/ProductType";

//  _id,
//   productBrand,
//   date,
//   productDescription,
//   productImage,
//   productName,
//   productPrice,
//   quantity,
//   productTag,
//   productTitle,

const SliderItem = ({ configs }: IProductDataConfig) => {
  console.log("SliderItem");

  return (
    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
      <div className="block2">
        <div className="block2-pic hov-img0">
          <img
            srcSet={!!configs.productImage ? configs.productImage[0].url : ""}
            alt="IMG-PRODUCT"
          />

          <a
            href="!#"
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
          >
            Quick View
          </a>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <a
              href="product-detail.html"
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {configs.productPrice}
            </a>

            <span className="stext-105 cl3">{configs.productPrice}</span>
          </div>

          <div className="block2-txt-child2 flex-r p-t-3">
            <a
              href="!#"
              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;

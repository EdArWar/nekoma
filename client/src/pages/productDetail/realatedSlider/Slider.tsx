import React from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../../types/ProductType";
import SliderItem from "./SliderItem";

const Slider = () => {
  const productData = useSelector((state: any) => state.global.productData);
  const serverProductData = useSelector(
    (state: any) => state.global.serverProductData
  );
  let content = [];

  for (let i = 0; i < serverProductData.length / 2; i++) {
    content.push(<SliderItem configs={serverProductData[i]} />);
  }

  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="slick2">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

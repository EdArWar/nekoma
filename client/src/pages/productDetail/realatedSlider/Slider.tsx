import React from "react";
import { useSelector } from "react-redux";
import SliderItem from "./SliderItem";

const Slider = () => {
  const productData = useSelector((state: any) => state.global.productData);

  let content = [];

  for (let i = 0; i < productData.length / 2; i++) {
    content.push(<SliderItem key={i} productData={productData[i]} />);
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

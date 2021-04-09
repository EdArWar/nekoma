import React, { useEffect } from "react";
import { bg_01 } from "../../assets/image.assets";
import Cart from "../../components/cart/Cart";
import { loadAllScripts } from "../../utils/Utils";
import ProductDetail from "./productDetails/ProductDetail";

const ProductDetailsContainer = () => {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return (
    <div>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${bg_01})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Shop</h2>
      </section>
      <ProductDetail />
    </div>
  );
};

export default ProductDetailsContainer;

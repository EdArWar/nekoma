import React, { useEffect } from "react";
import Cart from "../../components/cart/Cart";
import { loadAllScripts } from "../../utils/Utils";
import ProductDetail from "./productDetails/ProductDetail";

const ProductDetailsContainer = () => {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return (
    <div>
      {/* <Cart /> */}
      <ProductDetail />
    </div>
  );
};

export default ProductDetailsContainer;

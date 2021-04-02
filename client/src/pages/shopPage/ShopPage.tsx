import React, { useEffect } from "react";
import Cart from "../../components/cart/Cart";
import { loadAllScripts } from "../../utils/Utils";
import ProductOverView from "../homePage/productOverview/ProductOverView";

const ShopPage = () => {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return (
    <div>
      <Cart />
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <ProductOverView page={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

import React, { useEffect } from "react";
import { bg_01 } from "../../assets/image.assets";
import CartPanel from "../../components/cart/CartPanel";
import { loadAllScripts } from "../../utils/Utils";
import ProductOverView from "../homePage/productOverview/ProductOverView";
import ProductBanner from "./../homePage/productOverview/productBunner/ProductBanner";

const ShopPage = () => {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return (
    <>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${bg_01})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Shop</h2>
      </section>
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52 m-t-70">
            <ProductOverView page={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;

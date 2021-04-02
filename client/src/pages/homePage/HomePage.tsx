import React, { useEffect } from "react";
import Cart from "../../components/cart/Cart";
import { loadAllScripts } from "../../utils/Utils";
import Banner from "./banner/Banner";
import ProductOverView from "./productOverview/ProductOverView";
import Sidebar from "./sidebar/Sidebar";
import Slider from "./slider/Slider";

const HomePage = () => {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return (
    <div>
      <Sidebar />
      <Cart />
      <Slider />
      <Banner />
      <ProductOverView page={true} />
    </div>
  );
};

export default HomePage;

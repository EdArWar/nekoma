import React, { useEffect } from "react";
import CartPanel from "../../components/cart/CartPanel";
import { loadAllScripts } from "../../utils/Utils";
import Banner from "./banner/Banner";
import ProductOverView from "./productOverview/ProductOverView";
import Sidebar from "./sidebar/Sidebar";
import Slider from "./slider/Slider";
import ProductBanner from "./productOverview/productBunner/ProductBanner";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./HomePage.scss";

const HomePage = () => {
  useEffect(() => {
    loadAllScripts();
  }, []);

  return (
    <div>
      <Slider />
      <Banner />
      <ProductBanner />
      <ProductOverView page={true} />
    </div>
  );
};

export default HomePage;

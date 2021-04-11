import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import FavoriteItemSlider from "./../favoriteItemSlider/FavoriteItemSlider";
import { IProductDataConfig } from "./../../../types/ProductType";
const FavoriteItem: React.FC<IProductDataConfig> = ({ configs }) => {
  return (
    <div
      className="col-md-4 col-sm-6 col-xs-12"
      style={{
        boxSizing: "border-box",
        overflowY: "hidden",
        marginBottom: "2%",
      }}
    >
      <FavoriteItemSlider configs={configs} />
    </div>
  );
};

export default FavoriteItem;

import React from "react";
import { favorite_empty_bg } from "../../../assets/image.assets";
import { FONTS } from "./../../../style/Fonts";
import { NEKOMA } from "./../../../style/Nekoma";
import "./FavoriteEmpty.scss";

const FavoriteEmpty = () => {
  return (
    <div
      className="favoriteEmpty_wrap container-fluid"
      style={{
        backgroundImage: `url(${favorite_empty_bg})`,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontFamily: FONTS.DOCK11,
        color: NEKOMA.ORANGE,
        textShadow: "3px 5px 2px #474747, 2px 5px 19px rgba(206,89,55,0.86)",
        marginTop: "-5%",
      }}
    >
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>OOPS !</h1>
          <h1>HERE IS EMPTY</h1>
          <h1>REGISTER AND ADD EVERYTHING YOU SEE</h1>
          <h1
            style={{
              textShadow: "none",
            }}
          >
            &#9786;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FavoriteEmpty;

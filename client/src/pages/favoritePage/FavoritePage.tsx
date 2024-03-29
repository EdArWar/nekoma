import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { bg_01 } from "../../assets/image.assets";
import { loadAllScripts } from "../../utils/Utils";
import { IProduct } from "./../../types/ProductType";
import FavoriteEmpty from "./favoriteEmpty/FavoriteEmpty";
import FavoriteItem from "./favoriteItem/FavoriteItem";
import "./FavoritePage.scss";

const FavoritePage = () => {
  const location = useLocation();
  let isHomeWatches: any;
  if (
    location.pathname === "/home" ||
    location.pathname === "/" ||
    location.pathname === "/index"
  ) {
    isHomeWatches = true;
  } else {
    isHomeWatches = false;
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, [isHomeWatches]);
  const userFavorites = useSelector((state: any) => state.user.favorites);

  useEffect(() => {
    loadAllScripts();
  }, []);

  useEffect(() => {
    $(".material-card > .mc-btn-action").click(function () {
      var card = $(this).parent(".material-card");
      var icon = $(this).children("i");
      icon.addClass("fa-spin-fast");

      if (card.hasClass("mc-active")) {
        card.removeClass("mc-active");

        window.setTimeout(function () {
          icon
            .removeClass("fa-arrow-left")
            .removeClass("fa-spin-fast")
            .addClass("fa-bars");
        }, 800);
      } else {
        card.addClass("mc-active");

        window.setTimeout(function () {
          icon
            .removeClass("fa-bars")
            .removeClass("fa-spin-fast")
            .addClass("fa-arrow-left");
        }, 800);
      }
    });
  }, []);

  return (
    <>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${bg_01})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Favorite</h2>
      </section>
      <section className="container" style={{ marginTop: "5%" }}>
        <div className="row active-with-click">
          {userFavorites?.map((item: IProduct, i: number) => {
            return <FavoriteItem configs={item} key={i} />;
          })}
        </div>
      </section>
      {userFavorites.length <= 0 && <FavoriteEmpty />}
    </>
  );
};

export default FavoritePage;

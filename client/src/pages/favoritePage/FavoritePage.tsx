import React, { useEffect } from "react";
import { bg_01 } from "../../assets/image.assets";
import "./FavoritePage.scss";

const FavoritePage = () => {
  useEffect(() => {
    $(function () {
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
        <h2 className="ltext-105 cl0 txt-center">Shop</h2>
      </section>
      <section className="container" style={{ marginTop: "5%" }}>
        <div className="row active-with-click">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Red">
              <h2>
                <span>Christopher Walken</span>
                <strong>
                  <i className="fa fa-fw fa-star"></i>
                  The Deer Hunter
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container">
                  <img
                    className="img-responsive"
                    src="https://material-cards.s3-eu-west-1.amazonaws.com/thumb-christopher-walken.jpg"
                  />
                </div>
                <div className="mc-description">
                  He has appeared in more than 100 films and television shows,
                  including The Deer Hunter, Annie Hall, The Prophecy trilogy,
                  The Dogs of War ...
                </div>
              </div>
              <a className="mc-btn-action">
                <i className="fa fa-bars"></i>
              </a>
              <div className="mc-footer">
                <h4>Social</h4>
                <a className="fa fa-fw fa-facebook"></a>
                <a className="fa fa-fw fa-twitter"></a>
                <a className="fa fa-fw fa-linkedin"></a>
                <a className="fa fa-fw fa-google-plus"></a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoritePage;

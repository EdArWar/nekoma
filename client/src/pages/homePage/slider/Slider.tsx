import React from "react";
import { Link } from "react-router-dom";
import { thumb_01, thumb_02, thumb_03 } from "../../../assets/image.assets";

const Slider = () => {
  return (
    <section className="section-slide">
      <div className="wrap-slick1 rs2-slick1">
        <div className="slick1">
          <div
            className="item-slick1 bg-overlay1"
            style={{
              backgroundImage: `url(${thumb_01})`,
            }}
            data-thumb={thumb_01}
            data-caption="Women’s Wear"
          >
            <div className="container h-full">
              <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="fadeInDown"
                  data-delay="0"
                >
                  <span className="ltext-202 txt-center cl0 respon2">
                    Women Collection 2021
                  </span>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="fadeInUp"
                  data-delay="800"
                >
                  <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                    New arrivals
                  </h2>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="zoomIn"
                  data-delay="1600"
                >
                  <Link
                    to="shop"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item-slick1 bg-overlay1"
            style={{
              backgroundImage: `url(${thumb_02})`,
            }}
            data-thumb={thumb_02}
            data-caption="Women’s Wear"
          >
            <div className="container h-full">
              <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="rollIn"
                  data-delay="0"
                >
                  <span className="ltext-202 txt-center cl0 respon2">
                    New-Season
                  </span>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="lightSpeedIn"
                  data-delay="800"
                >
                  <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                    Jeans & Shorts
                  </h2>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="slideInUp"
                  data-delay="1600"
                >
                  <Link
                    to="/shop"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item-slick1 bg-overlay1"
            style={{
              backgroundImage: `url(${thumb_03})`,
            }}
            data-thumb={thumb_03}
            data-caption="Women’s Wear"
          >
            <div className="container h-full">
              <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="rotateInDownLeft"
                  data-delay="0"
                >
                  <span className="ltext-202 txt-center cl0 respon2">
                    Woman Collection 2021
                  </span>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="rotateInUpRight"
                  data-delay="800"
                >
                  <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                    NEW SEASON
                  </h2>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="rotateIn"
                  data-delay="1600"
                >
                  <Link
                    to="/shop"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-slick1-dots p-lr-10"></div>
      </div>
    </section>
  );
};

export default Slider;

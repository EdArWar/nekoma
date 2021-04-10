import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  banner_04,
  banner_05,
  banner_07,
  banner_08,
  banner_09,
} from "../../../assets/image.assets";
import { updateFilterTag } from "../../../redux/global.slice";

const Banner = () => {
  const dispatch = useDispatch();

  return (
    <div className="sec-banner bg0 p-t-95 p-b-55">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img srcSet={banner_04} alt="IMG-BANNER" />

              <Link
                to="/shop"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                onClick={() => dispatch(updateFilterTag("dress"))}
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Dress
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    New Trend
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img srcSet={banner_05} alt="IMG-BANNER" />

              <Link
                to="/shop"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                onClick={() => dispatch(updateFilterTag("hats"))}
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Hats
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    New Trend
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img srcSet={banner_07} alt="IMG-BANNER" />

              <Link
                to="/shop"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                onClick={() => dispatch(updateFilterTag("jeans"))}
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Jeans
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img srcSet={banner_08} alt="IMG-BANNER" />

              <Link
                to="/shop"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                onClick={() => dispatch(updateFilterTag("shorts"))}
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Shorts
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img srcSet={banner_09} alt="IMG-BANNER" />

              <Link
                to="/shop"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                onClick={() => dispatch(updateFilterTag("masks"))}
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Masks
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

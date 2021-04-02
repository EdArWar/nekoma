import React from "react";
import {
  product_min_01,
  product_min_02,
  product_min_03,
} from "../../../assets/image.assets";

const BlogSideMenu = () => {
  return (
    <div className="col-md-4 col-lg-3 p-b-80">
      <div className="side-menu">
        <div className="bor17 of-hidden pos-relative">
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Search"
          />

          <button
            className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04"
            onClick={(e) => e.preventDefault()}
          >
            <i className="zmdi zmdi-search"></i>
          </button>
        </div>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

          <ul>
            <li className="bor18">
              <a
                href="!#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={(e) => e.preventDefault()}
              >
                Fashion
              </a>
            </li>

            <li className="bor18">
              <a
                href="!#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={(e) => e.preventDefault()}
              >
                Beauty
              </a>
            </li>

            <li className="bor18">
              <a
                href="!#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={(e) => e.preventDefault()}
              >
                Street Style
              </a>
            </li>

            <li className="bor18">
              <a
                href="!#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={(e) => e.preventDefault()}
              >
                Life Style
              </a>
            </li>

            <li className="bor18">
              <a
                href="!#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={(e) => e.preventDefault()}
              >
                DIY & Crafts
              </a>
            </li>
          </ul>
        </div>

        <div className="p-t-65">
          <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>

          <ul>
            <li className="flex-w flex-t p-b-30">
              <a
                href="!#"
                className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                onClick={(e) => e.preventDefault()}
              >
                <img srcSet={product_min_01} alt="PRODUCT" />
              </a>

              <div className="size-215 flex-col-t p-t-8">
                <a
                  href="!#"
                  className="stext-116 cl8 hov-cl1 trans-04"
                  onClick={(e) => e.preventDefault()}
                >
                  White Shirt With Pleat Detail Back
                </a>

                <span className="stext-116 cl6 p-t-20">$19.00</span>
              </div>
            </li>

            <li className="flex-w flex-t p-b-30">
              <a
                href="!#"
                className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                onClick={(e) => e.preventDefault()}
              >
                <img srcSet={product_min_02} alt="PRODUCT" />
              </a>

              <div className="size-215 flex-col-t p-t-8">
                <a
                  href="!#"
                  className="stext-116 cl8 hov-cl1 trans-04"
                  onClick={(e) => e.preventDefault()}
                >
                  Converse All Star Hi Black Canvas
                </a>

                <span className="stext-116 cl6 p-t-20">$39.00</span>
              </div>
            </li>

            <li className="flex-w flex-t p-b-30">
              <a
                href="!#"
                className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                onClick={(e) => e.preventDefault()}
              >
                <img srcSet={product_min_03} alt="PRODUCT" />
              </a>

              <div className="size-215 flex-col-t p-t-8">
                <a
                  href="!#"
                  className="stext-116 cl8 hov-cl1 trans-04"
                  onClick={(e) => e.preventDefault()}
                >
                  Nixon Porter Leather Watch In Tan
                </a>

                <span className="stext-116 cl6 p-t-20">$17.00</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-20">Archive</h4>

          <ul>
            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>July 2018</span>

                <span>(9)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>June 2018</span>

                <span>(39)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>May 2018</span>

                <span>(29)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>April 2018</span>

                <span>(35)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>March 2018</span>

                <span>(22)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>February 2018</span>

                <span>(32)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>January 2018</span>

                <span>(21)</span>
              </a>
            </li>

            <li className="p-b-7">
              <a
                href="!#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                onClick={(e) => e.preventDefault()}
              >
                <span>December 2017</span>

                <span>(26)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="p-t-50">
          <h4 className="mtext-112 cl2 p-b-27">Tags</h4>

          <div className="flex-w m-r--5">
            <a
              href="!#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              onClick={(e) => e.preventDefault()}
            >
              Fashion
            </a>

            <a
              href="!#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              onClick={(e) => e.preventDefault()}
            >
              Lifestyle
            </a>

            <a
              href="!#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              onClick={(e) => e.preventDefault()}
            >
              Denim
            </a>

            <a
              href="!#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              onClick={(e) => e.preventDefault()}
            >
              Streetstyle
            </a>

            <a
              href="!#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              onClick={(e) => e.preventDefault()}
            >
              Crafts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideMenu;

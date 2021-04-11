import React, { useEffect } from "react";
import { mask_banner } from "../../../../assets/image.assets";
import "./ProductBanner.scss";
import { FONTS } from "./../../../../style/Fonts";
const ProductBanner = () => {
  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12 product_banner_image_block"
          style={{
            backgroundImage: `url(${mask_banner})`,
          }}
        >
          <h3 className="glitch title" data-text="Glitchin!">
            FACE MASKS
          </h3>
          <p
            className=" title"
            style={{
              fontFamily: FONTS.DEJA_VU_SANS_BOLD,
              fontSize: window.innerWidth * 0.011 + "px",
            }}
          >
            Innovative styles, face-loving fabrics and colours for days and
            days.
          </p>
          <p
            className=" title"
            style={{
              fontFamily: FONTS.DEJA_VU_SANS_BOLD,
              fontSize: window.innerWidth * 0.011 + "px",
            }}
          >
            Available with or without a nose wire. Designed for a unisex fit and
            offered in 2 sizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;

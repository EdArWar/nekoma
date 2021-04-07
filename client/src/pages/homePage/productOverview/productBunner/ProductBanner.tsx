import React from "react";
import { mask_banner } from "../../../../assets/image.assets";
import "./ProductBanner.scss";
const ProductBanner = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12 product_banner_image_block"
          style={{
            backgroundImage: `url(${mask_banner})`,
          }}
        >
          <h3 className="glitch" data-text="Glitchin!">
            FACE MASKS
          </h3>
          <p>
            Innovative styles, face-loving fabrics and colours for days and
            days.
          </p>
          <p>
            Available with or without a nose wire. Designed for a unisex fit and
            offered in 2 sizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;

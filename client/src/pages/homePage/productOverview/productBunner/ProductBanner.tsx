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
          <h3 className="glitch title" data-text="Glitchin!">
            FACE MASKS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;

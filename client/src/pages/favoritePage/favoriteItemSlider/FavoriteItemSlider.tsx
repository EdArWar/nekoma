import React, { RefObject, useEffect, useState } from "react";

import Slider from "react-slick";
import {
  IProductDataConfig,
  IProductImage,
} from "./../../../types/ProductType";

const FavoriteItemSlider: React.FC<IProductDataConfig> = ({ configs }) => {
  const [state, setState] = useState(false);

  useEffect(() => {}, [state]);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <article className="material-card Blue">
        <h2>
          <span>{configs.productBrand}</span>
          <strong>
            <i className="fa fa-fw fa-star"></i>
            {configs.productTag}
          </strong>
        </h2>
        <div className="mc-content">
          <div className="img-container">
            <img
              style={{ width: "100%" }}
              className="img-responsive"
              srcSet={configs.productImage[0].url}
              alt=""
            />
          </div>
          <div className="mc-description">
            <div>
              {state && (
                <Slider {...settings}>
                  {configs.productImage?.map(
                    (item: IProductImage, i: number) => {
                      return (
                        <div key={i}>
                          <img
                            style={{
                              width: "85%",
                              height: "auto",
                              margin: "15px auto 0 auto",
                            }}
                            srcSet={item.url}
                            alt=""
                          />
                        </div>
                      );
                    }
                  )}
                </Slider>
              )}
            </div>
          </div>
        </div>
        <a className="mc-btn-action" onClick={() => setState(!state)}>
          <i className="fa fa-bars"></i>
        </a>
        <div className="mc-footer">
          <a className="fa fa-fw fa-facebook"></a>
          <a className="fa fa-fw fa-twitter"></a>
          <a className="fa fa-fw fa-linkedin"></a>
          <a className="fa fa-fw fa-google-plus"></a>
        </div>
      </article>
    </>
  );
};

export default FavoriteItemSlider;

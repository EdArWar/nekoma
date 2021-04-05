import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import imageLoader from "../../../../loaders/image.loader";
import { setProductId } from "../../../../redux/global.slice";

const ProductItem: React.FC<any> = ({ id, type, name, price, image }) => {
  const dispatch = useDispatch();
  console.log("image");
  console.log(image);

  function sss(id: any) {
    // dispatch(setProductId(id));
  }

  return (
    <div className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${type}`}>
      <div className="block2">
        <NavLink
          to={`/singleProduct?id=${id}`}
          className={
            id <= 1 ? "block2-pic hov-img0 label-new" : "block2-pic hov-img0"
          }
          data-label={id <= 1 ? "New" : ""}
        >
          <img srcSet={image[0].url} alt="IMG-PRODUCT" />

          <NavLink
            to={`/singleProduct?id=${id}`}
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
          >
            Quick View
          </NavLink>
        </NavLink>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <NavLink
              to={`/singleProduct?id=${id}`}
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
              onClick={() => sss(id)}
            >
              {name}
            </NavLink>

            <span className="stext-105 cl3">${price}</span>
          </div>

          <div className="block2-txt-child2 flex-r p-t-3">
            <NavLink
              to={`/singleProduct?id=${id}`}
              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              onClick={() => sss(id)}
            ></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

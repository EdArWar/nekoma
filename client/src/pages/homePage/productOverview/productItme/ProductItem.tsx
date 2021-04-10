import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ProductItem.scss";
import { IProductDataConfig } from "./../../../../types/ProductType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartPlus,
  faHeart,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { api_addToCart, api_removeCart } from "../../../../api/API";
import { CSSTransition } from "react-transition-group";
import {
  bg_01,
  load_effect,
  product_04,
} from "../../../../assets/image.assets";
const ProductItem: React.FC<IProductDataConfig> = ({ configs }) => {
  const dispatch = useDispatch();
  const isUser = useSelector((state: any) => state.global.isUser);

  const token = useSelector((state: any) => state.user.token);
  const [added, setAdded] = useState(false);
  const userCart = useSelector((state: any) => state.user.userCart);

  useEffect(() => {
    const isCard = userCart.find((item: any, i: number) => {
      return item._id === configs._id;
    });
    !isUser ? setAdded(false) : setAdded(isCard);
  }, [userCart, isUser]);

  function onAddCartClicked() {
    console.log("onAddCartClicked");

    if (!isUser) {
      console.log("Need To Registration");
    } else {
      dispatch(api_addToCart(token, configs._id));
      !isUser ? setAdded(false) : setAdded(!added);
    }
  }

  const [load, setLoad] = useState(true);

  function onRemoveCart(cartId: string) {
    dispatch(api_removeCart(token, cartId));
  }

  return (
    <div
      className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item  h_card_item_show ${configs.productTag.toLowerCase()}`}
      style={{
        height: "450px",
      }}
    >
      <div
        className="block2"
        style={{
          width: "100%",
          height: "450px",
        }}
      >
        <NavLink
          to={`/singleProduct?id=${configs._id}`}
          className={
            configs._id <= "1"
              ? "block2-pic hov-img0 label-new"
              : "block2-pic hov-img0"
          }
          data-label={configs._id <= "1" ? "New" : ""}
        >
          <img
            srcSet={configs.productImage[0].url}
            alt="IMG-PRODUCT"
            loading="lazy"
            onLoad={() => {
              setLoad(false);
            }}
          />
          <CSSTransition
            in={load}
            timeout={500}
            classNames="my-cart-item-node"
            onEntered={() => console.log("onEntered")}
            onEntering={() => console.log("onEntered")}
            onEnter={() => console.log("onEnter")}
            onExit={() => console.log("onExit")}
            onExiting={() => console.log("onExiting")}
            onExited={() => console.log("onExited")}
            unmountOnExit
            mountOnEnter
          >
            <img
              srcSet={load_effect}
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "450px",
                zIndex: 33333,
                top: "0%",
                left: "0%",
              }}
            />
          </CSSTransition>

          <NavLink
            to={`/singleProduct?id=${configs._id}`}
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04"
          >
            Quick View
          </NavLink>
        </NavLink>
        <div
          className="block2-txt flex-w flex-t p-t-14 row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div className="  col-lg-8 col-md-8 col-sm-8 col-xs-12 ">
            <NavLink
              to={`/singleProduct?id=${configs._id}`}
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {configs.productTitle}
            </NavLink>
            <p className="stext-105 cl3">${configs.productPrice}</p>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#717FDF", fontSize: "22px", cursor: "pointer" }}
            />
            {added ? (
              <FontAwesomeIcon
                icon={faCartArrowDown}
                style={{
                  color: "#00DA00",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                onClick={() => onRemoveCart(configs._id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faCartPlus}
                style={{
                  color: "#717FDF",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                onClick={() => onAddCartClicked()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

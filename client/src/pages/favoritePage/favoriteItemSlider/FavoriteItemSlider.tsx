import {
  faCartArrowDown,
  faCartPlus,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { api_addToCart, api_addToFavorite } from "../../../api/API";
import { api_removeCart, api_removeFavorite } from "./../../../api/API";
import { NEKOMA } from "./../../../style/Nekoma";
import {
  IProductDataConfig,
  IProductImage,
} from "./../../../types/ProductType";
import "./FavoriteItemSlider.scss";

const FavoriteItemSlider: React.FC<IProductDataConfig> = ({ configs }) => {
  const [state, setState] = useState(false);
  const userCart = useSelector((state: any) => state.user.userCart);
  const userFavorite = useSelector((state: any) => state.user.favorites);
  const [added, setAdded] = useState(false);
  const [addedFavorite, setAddedFavorite] = useState(false);
  const isUser = useSelector((state: any) => state.global.isUser);
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token);

  useEffect(() => {
    const isCard = userCart?.find((item: any, i: number) => {
      return item._id === configs._id;
    });
    const isFavorite = userFavorite?.find((item: any, i: number) => {
      return item._id === configs._id;
    });
    !isUser ? setAdded(false) : setAdded(isCard);
    !isUser ? setAddedFavorite(false) : setAddedFavorite(isFavorite);
  }, [userCart, isUser, userFavorite]);

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

  function onAddCartClicked() {
    if (!isUser) {
      alert("Need To Registration");
    } else {
      dispatch(api_addToCart(token, configs._id));
      !isUser ? setAdded(false) : setAdded(!added);
    }
  }
  function onAddFavoriteClicked() {
    if (!isUser) {
      alert("Need To Registration");
    } else {
      dispatch(api_addToFavorite(token, configs._id));
      !isUser ? setAddedFavorite(false) : setAddedFavorite(!added);
    }
  }

  const card = React.useRef<HTMLElement>(null);
  const icon = React.useRef<any>(null);

  function onRemoveCart(cartId: string) {
    dispatch(api_removeCart(token, cartId));
  }
  function onRemoveFavorite(e: any, cartId: string) {
    icon.current?.firstElementChild?.classList.add("fa-spin-fast");

    if (card.current?.className.indexOf("mc-active") !== -1) {
      card.current?.classList.remove("mc-active");
      // window.setTimeout(function () {
      icon.current?.firstElementChild?.classList.remove("fa-arrow-left");
      icon.current?.firstElementChild?.classList.remove("fa-spin-fast");
      icon.current?.firstElementChild?.classList.add("fa-bars");
      // }, 800);
    } else {
      card.current?.classList.add("mc-active");
      // window.setTimeout(function () {
      icon.current?.firstElementChild?.classList.remove("fa-bars");
      icon.current?.firstElementChild?.classList.remove("fa-spin-fast");
      icon.current?.firstElementChild?.classList.add("fa-arrow-left");
      // }, 800);
    }

    dispatch(api_removeFavorite(token, cartId));
    setState(false);
  }

  return (
    <>
      <article className="material-card Blue" ref={card}>
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
        <a
          className="mc-btn-action"
          ref={icon}
          onClick={() => setState(!state)}
        >
          <i className="fa fa-bars"></i>
        </a>
        <div
          className="mc-footer"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="btn-container">
            {addedFavorite ? (
              <FontAwesomeIcon
                icon={faHeartBroken}
                className="proxz-btn"
                style={{
                  color: NEKOMA.RED,
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                onClick={(e: any) => onRemoveFavorite(e, configs._id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeartBroken}
                className="proxz-btn"
                style={{
                  color: "#717FDF",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                onClick={() => onAddFavoriteClicked()}
              />
            )}
          </div>
          <div className="btn-container">
            {added ? (
              <FontAwesomeIcon
                icon={faCartArrowDown}
                className="proxz-btn"
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
                className="proxz-btn"
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
      </article>
    </>
  );
};

export default FavoriteItemSlider;

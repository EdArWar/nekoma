import {
  faCartArrowDown,
  faCartPlus,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  api_addToCart,
  api_addToFavorite,
  api_removeCart,
  api_removeFavorite,
} from "../../../api/API";
import { IProduct, IProductImage } from "../../../types/ProductType";
import { NEKOMA } from "./../../../style/Nekoma";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const productData: IProduct[] = useSelector(
    (state: any) => state.global.productData
  );
  const location = useLocation();
  const urlId = location.search.split("=")[1];
  const galleryRef = React.useRef<HTMLDivElement>(null);

  const [state, setState] = useState(false);
  const userCart = useSelector((state: any) => state.user.userCart);
  const userFavorite = useSelector((state: any) => state.user.favorites);
  const [added, setAdded] = useState(false);
  const [addedFavorite, setAddedFavorite] = useState(false);
  const isUser = useSelector((state: any) => state.global.isUser);
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token);

  useEffect(() => {}, [state]);

  useEffect(() => {
    const isCard = userCart?.find((item: any, i: number) => {
      return item._id === urlId;
    });
    const isFavorite = userFavorite?.find((item: any, i: number) => {
      return item._id === urlId;
    });
    !isUser ? setAdded(false) : setAdded(isCard);
    !isUser ? setAddedFavorite(false) : setAddedFavorite(isFavorite);
  }, [userCart, isUser, userFavorite]);

  function onAddCartClicked() {
    if (!isUser) {
      alert("Need To Registration");
    } else {
      dispatch(api_addToCart(token, urlId));
      !isUser ? setAdded(false) : setAdded(!added);
    }
  }
  function onAddFavoriteClicked() {
    if (!isUser) {
      alert("Need To Registration");
    } else {
      dispatch(api_addToFavorite(token, urlId));
      !isUser ? setAddedFavorite(false) : setAddedFavorite(!added);
    }
  }

  function onRemoveCart(cartId: string) {
    dispatch(api_removeCart(token, cartId));
  }

  function onRemoveFavorite(e: any, cartId: string) {
    dispatch(api_removeFavorite(token, cartId));
    setState(false);
  }

  useEffect(() => {
    window.scroll(0, 0);

    $(".gallery-lb").each(function () {
      //@ts-ignore
      $(this).magnificPopup({
        delegate: "a", // the selector for gallery item
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
      });
    });
  }, [location.pathname]);

  return (
    <section className="sec-product-detail bg0 p-t-65 p-b-60">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-7 p-b-30">
            <div className="p-l-25 p-r-30 p-lr-0-lg">
              <div className="wrap-slick3 flex-sb flex-w">
                <div className="wrap-slick3-dots"></div>
                <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
                <div className="slick3 gallery-lb" ref={galleryRef}>
                  {productData?.map((item: IProduct, i: number) => {
                    if (item._id === urlId) {
                      return item.productImage?.map(
                        (item: IProductImage, i: number) => {
                          return (
                            <div className="item-slick3" data-thumb={item.url}>
                              <div className="wrap-pic-w pos-relative">
                                <img srcSet={item.url} alt="IMG-PRODUCT" />
                                <a
                                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                  href={item.url}
                                >
                                  <i className="fa fa-expand"></i>
                                </a>
                              </div>
                            </div>
                          );
                        }
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 p-b-30">
            <div className="p-r-50 p-t-5 p-lr-0-lg">
              {productData?.map((item: IProduct, i: number) => {
                if (item._id === urlId) {
                  return (
                    <>
                      <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                        {item.productBrand}
                      </h4>
                      <h4 className=" js-name-detail p-b-14">
                        {item.productName}
                      </h4>

                      <span className="mtext-106 cl2">
                        {item.productPrice} $
                      </span>

                      <p className="stext-102 cl3 p-t-23">
                        {item.productTitle}
                      </p>
                    </>
                  );
                }
              })}

              <div className="p-t-33">
                <div
                  className="flex-w flex-r-m p-b-10"
                  style={{ opacity: 0.7, cursor: "no-drop" }}
                >
                  <div className="size-203 flex-c-m respon6">Size</div>

                  <div
                    className="size-204 respon6-next"
                    style={{
                      border: "2px solid gray",
                      height: "30px",
                      borderRadius: "50px",
                      textAlign: "center",
                      cursor: "no-drop",
                    }}
                  >
                    M
                  </div>
                </div>

                <div
                  className="flex-w flex-r-m p-b-10"
                  style={{ opacity: 0.7, cursor: "no-drop" }}
                >
                  <div className="size-203 flex-c-m respon6">Color</div>

                  <div
                    className="size-204 respon6-next"
                    style={{
                      border: "2px solid gray",
                      height: "30px",
                      borderRadius: "50px",
                      textAlign: "center",
                      cursor: "no-drop",
                    }}
                  >
                    White
                  </div>
                </div>

                <div className="flex-w flex-r-m p-b-10">
                  <div
                    className="mc-footer"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                      marginTop: "5%",
                    }}
                  >
                    <div className="prod_btn-container">
                      {addedFavorite ? (
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="prod_proxz-btn"
                          style={{
                            color: NEKOMA.RED,
                            fontSize: "22px",
                            cursor: "pointer",
                          }}
                          onClick={(e: any) => onRemoveFavorite(e, urlId)}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeartBroken}
                          className="prod_proxz-btn"
                          style={{
                            color: "#717FDF",
                            fontSize: "22px",
                            cursor: "pointer",
                          }}
                          onClick={() => onAddFavoriteClicked()}
                        />
                      )}
                    </div>
                    <div className="prod_btn-container">
                      {added ? (
                        <FontAwesomeIcon
                          icon={faCartArrowDown}
                          className="prod_proxz-btn"
                          style={{
                            color: "#00DA00",
                            fontSize: "22px",
                            cursor: "pointer",
                          }}
                          onClick={() => onRemoveCart(urlId)}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="prod_proxz-btn"
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
            </div>
            <div className="p-r-50 p-t-5 p-lr-0-lg">
              <ul className="p-lr-28 p-lr-15-sm">
                {productData?.map((item: IProduct, i: number) => {
                  if (item._id === urlId) {
                    let splitText = item.productDescription.split(":");
                    return splitText.map((text: string, i: number) => {
                      return (
                        <li className="flex-w flex-t p-b-7" key={i}>
                          {i === 0 ? (
                            <h5>{text}</h5>
                          ) : (
                            <span className="stext-102 cl3 size-405">
                              {text}
                            </span>
                          )}
                        </li>
                      );
                    });
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

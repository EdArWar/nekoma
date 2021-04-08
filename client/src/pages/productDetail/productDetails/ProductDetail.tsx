import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IProduct, IProductImage } from "../../../types/ProductType";

const ProductDetail = () => {
  const productData: IProduct[] = useSelector(
    (state: any) => state.global.productData
  );
  const location = useLocation();
  const urlId = location.search.split("=")[1];
  const galleryRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, [productData]);

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
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-204 flex-w flex-m respon6-next">
                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                      <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-minus"></i>
                      </div>

                      <input
                        className="mtext-104 cl3 txt-center num-product"
                        type="number"
                        name="num-product"
                        value="1"
                      />

                      <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-plus"></i>
                      </div>
                    </div>

                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                <div className="flex-m bor9 p-r-10 m-r-11">
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                    data-tooltip="Add to Wishlist"
                  >
                    <i className="zmdi zmdi-favorite"></i>
                  </a>
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

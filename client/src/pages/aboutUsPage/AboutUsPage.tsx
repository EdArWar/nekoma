import React from "react";
import { about_01, about_02, bg_01 } from "../../assets/image.assets";
import CartPanel from "../../components/cart/CartPanel";

const AboutUsPage = () => {
  return (
    <div>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${bg_01})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">About</h2>
      </section>
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">
                  Aritzia is an innovative design house and fashion boutique.
                </h3>

                <p className="stext-113 cl6 p-b-26">
                  We're about individual style. We're obsessed with quality. And
                  we think shopping should be fun. It's nice to meet you.
                </p>

                <p className="stext-113 cl6 p-b-26">
                  Any questions? Let us know in store at 8th floor, 379 Hudson
                  St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <img srcSet={about_01} alt="IMG" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">In the beginning</h3>

                <p className="stext-113 cl6 p-b-26">
                  The Hill family started Aritzia inside their 70-year-old
                  department store in Vancouver. When Brian Hill opened the
                  first standalone boutique in 1984, the idea was simple: offer
                  beautiful clothes in aspirational spaces with exceptional
                  service. Women seemed to like what we were doing, so we grew.
                  And we've kept on growing ever since
                </p>
              </div>
            </div>

            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img srcSet={about_02} alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

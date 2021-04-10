import React from "react";
import { bg_02 } from "../../assets/image.assets";
import CartPanel from "../../components/cart/CartPanel";
import BlogContent from "./blogContent/BlogContent";
import BlogSideMenu from "./blogSideMenu/BlogSideMenu";

const BlogPage = () => {
  return (
    <div>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${bg_02})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Blog</h2>
      </section>
      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <BlogContent />
            <BlogSideMenu />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

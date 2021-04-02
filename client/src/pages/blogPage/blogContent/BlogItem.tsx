import React from "react";
import { NavLink } from "react-router-dom";

const BlogItem: React.FC<any> = ({ itemId, itemTitle, itemImg }) => {
  return (
    <div className="p-b-63">
      <NavLink
        to={`/blog-detail?id=${itemId}`}
        className="hov-img0 how-pos5-parent"
      >
        <img srcSet={itemImg} alt="IMG-BLOG" />

        <div className="flex-col-c-m size-123 bg9 how-pos5">
          <span className="ltext-107 cl2 txt-center">22</span>

          <span className="stext-109 cl3 txt-center">Jan 2018</span>
        </div>
      </NavLink>

      <div className="p-t-32">
        <h4 className="p-b-15">
          <NavLink
            to={`/blog-detail?id=${itemId}`}
            className="ltext-108 cl2 hov-cl1 trans-04"
          >
            {itemTitle}
          </NavLink>
        </h4>

        <p className="stext-117 cl6">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
          sapien eu varius
        </p>

        <div className="flex-w flex-sb-m p-t-18">
          <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
            <span>
              <span className="cl4">By</span> Admin
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>

            <span>
              StreetStyle, Fashion, Couple
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>

            <span>8 Comments</span>
          </span>

          <NavLink
            to={`/blog-detail?id=${itemId}`}
            className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
          >
            Continue Reading
            <i className="fa fa-long-arrow-right m-l-9"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

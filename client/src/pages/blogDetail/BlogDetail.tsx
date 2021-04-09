import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import BlogSideMenu from "./../blogPage/blogSideMenu/BlogSideMenu";
import BlogDetailContent from "./BlogDetailContent";

const BlogDetail = () => {
  const blogData = useSelector((state: any) => state.global.blogData);
  const location = useLocation();

  let blog = blogData.filter((item: any) => {
    return +item.id === +location.search.split("=")[1];
  });
  return (
    <div>
      {/* <Cart /> */}
      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <BlogDetailContent
              itemImg={blog[0].img}
              itemTitle={blog[0].title}
            />
            <BlogSideMenu />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

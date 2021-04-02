import React from "react";
import { useSelector } from "react-redux";
import BlogItem from "./BlogItem";

const BlogContent = () => {
  const blogData = useSelector((state: any) => state.global.blogData);

  const content = blogData.map((item: any, i: any) => {
    return (
      <BlogItem
        key={i}
        itemId={item.id}
        itemTitle={item.title}
        itemImg={item.img}
      />
    );
  });

  return (
    <div className="col-md-8 col-lg-9 p-b-80">
      <div className="p-r-45 p-r-0-lg">{content}</div>
    </div>
  );
};

export default BlogContent;

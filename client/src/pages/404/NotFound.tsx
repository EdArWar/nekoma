import React from "react";
import { not } from "../../assets/image.assets";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div
      className="nor_wrap"
      style={{
        backgroundImage: `url(${not})`,
      }}
    ></div>
  );
};

export default NotFound;

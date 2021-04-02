import React from "react";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader_wrap">
      <div>
        <img
          srcSet="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt=""
        />
      </div>
    </div>
  );
}

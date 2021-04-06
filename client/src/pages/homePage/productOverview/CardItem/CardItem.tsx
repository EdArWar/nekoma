import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./sss.scss";

const CardItem = ({ type }: any) => {
  const filterTag = useSelector((state: any) => state.global.filterTag);

  return (
    <>
      <div className="col-lg-3 h_card_item_show">
        <div
          className="ddd"
          style={{
            backgroundColor: `${
              type === "dress" ? "pink" : type === "jeans" ? "blue" : "green"
            }`,
            border: "1px solid orangered",
            margin: "5px",
            boxSizing: "content-box",
            color: "white",
            fontSize: "32px",
          }}
        >
          {type}
        </div>
      </div>
    </>
  );
};

export default CardItem;

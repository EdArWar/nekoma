import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFilterTag } from "../../../../redux/global.slice";

const TabAndFilter = () => {
  const dispatch = useDispatch();

  function onTabClicked(e: any) {
    dispatch(updateFilterTag(e.target.innerText.toLowerCase()));
  }

  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
          data-filter="*"
          onClick={(e: any) => onTabClicked(e)}
        >
          All Products
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".dress"
          onClick={(e: any) => onTabClicked(e)}
        >
          Dress
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".shorts"
          onClick={(e: any) => onTabClicked(e)}
        >
          Shorts
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".jeans"
          onClick={(e: any) => onTabClicked(e)}
        >
          Jeans
        </button>
      </div>
    </div>
  );
};

export default TabAndFilter;

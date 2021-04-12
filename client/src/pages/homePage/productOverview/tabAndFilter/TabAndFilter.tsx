import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterTag } from "../../../../redux/global.slice";

const TabAndFilter = () => {
  const filterTag = useSelector(
    (state: any) => state.global.filterTag
  ).toLowerCase();
  const dispatch = useDispatch();

  function onTabClicked(e: any) {
    dispatch(updateFilterTag(e.target.innerText.toLowerCase()));
  }

  return (
    <div className="flex-w flex-sb-m p-b-20">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        {/* <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            filterTag === "all product" ? "how-active1" : ""
          }`}
          data-filter="*"
          onClick={(e: any) => onTabClicked(e)}
        >
          All Products
        </button> */}

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "dress" ? "how-active1" : ""
          }`}
          data-filter=".dress"
          onClick={(e: any) => onTabClicked(e)}
        >
          Dress
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "shorts" ? "how-active1" : ""
          }`}
          data-filter=".shorts"
          onClick={(e: any) => onTabClicked(e)}
        >
          Shorts
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "jeans" ? "how-active1" : ""
          }`}
          data-filter=".jeans"
          onClick={(e: any) => onTabClicked(e)}
        >
          Jeans
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "blouse" ? "how-active1" : ""
          }`}
          data-filter=".blouse"
          onClick={(e: any) => onTabClicked(e)}
        >
          Blouse
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "t-Shirt" ? "how-active1" : ""
          }`}
          data-filter=".t-Shirt"
          onClick={(e: any) => onTabClicked(e)}
        >
          T-Shirt
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "cardigan" ? "how-active1" : ""
          }`}
          data-filter=".cardigan"
          onClick={(e: any) => onTabClicked(e)}
        >
          Cardigan
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "long_Sleeve" ? "how-active1" : ""
          }`}
          data-filter=".long_Sleeve"
          onClick={(e: any) => onTabClicked(e)}
        >
          Long_Sleeve
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "masks" ? "how-active1" : ""
          }`}
          data-filter=".masks"
          onClick={(e: any) => onTabClicked(e)}
        >
          Masks
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5  ${
            filterTag === "hats" ? "how-active1" : ""
          }`}
          data-filter=".hats"
          onClick={(e: any) => onTabClicked(e)}
        >
          Hats
        </button>
      </div>
    </div>
  );
};

export default TabAndFilter;

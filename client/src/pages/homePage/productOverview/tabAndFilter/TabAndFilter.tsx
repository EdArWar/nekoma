import React, { useEffect } from "react";

const TabAndFilter = () => {
  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
          data-filter="*"
        >
          All Products
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".dress"
        >
          Dress
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".shorts"
        >
          Shorts
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".shoes"
        >
          Shoes
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".jeans"
        >
          Jeans
        </button>
      </div>
    </div>
  );
};

export default TabAndFilter;

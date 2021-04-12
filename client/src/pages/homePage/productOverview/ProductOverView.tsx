import React from "react";
import { useSelector } from "react-redux";
import { IProduct } from "./../../../types/ProductType";
import ProductItem from "./productItme/ProductItem";
import TabAndFilter from "./tabAndFilter/TabAndFilter";

const ProductOverView: React.FC<any> = ({ page }) => {
  const productData = useSelector((state: any) => state.global.productData);
  const filterTag = useSelector((state: any) => state.global.filterTag);

  let content = productData?.map((item: IProduct, i: number) => {
    if (filterTag === item.productTag?.toLowerCase()) {
      return <ProductItem key={i} configs={item} />;
    }
    // if (filterTag === "all products") {
    //   return <ProductItem key={i} configs={item} />;
    // }
  });

  return (
    <section className="bg0 p-t-23 p-b-130" style={{ width: "100%" }}>
      <div className="container">
        {page && (
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
        )}

        <TabAndFilter />
        <div className="row ">{content}</div>
      </div>
    </section>
  );
};

export default ProductOverView;

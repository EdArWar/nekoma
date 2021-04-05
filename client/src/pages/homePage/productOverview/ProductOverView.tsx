import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./productItme/ProductItem";
import TabAndFilter from "./tabAndFilter/TabAndFilter";
import { IProduct } from "./../../../types/ProductType";

const ProductOverView: React.FC<any> = ({ page }) => {
  const productData = useSelector((state: any) => state.global.productData);
  const serverProductData = useSelector(
    (state: any) => state.global.serverProductData
  );
  console.log("serverProductData");

  console.log(serverProductData);

  let content = serverProductData.map((item: IProduct, i: number) => {
    return (
      <ProductItem
        key={i}
        id={item._id}
        type={item.productTag}
        name={item.productName}
        price={item.productPrice}
        image={item.productImage}
      />
    );
  });
  // let content = productData.map((item: any) => {
  //   return (
  //     <ProductItem
  //       key={item.id}
  //       id={item.id}
  //       type={item.type}
  //       name={item.name}
  //       price={item.price}
  //       image={item.img}
  //     />
  //   );
  // });

  return (
    <section className="bg0 p-t-23 p-b-130" style={{ width: "100%" }}>
      <div className="container">
        {page && (
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
        )}

        <TabAndFilter />
        <div className="row isotope-grid">{content}</div>
      </div>
    </section>
  );
};

export default ProductOverView;

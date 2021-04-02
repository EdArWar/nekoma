import React from "react";
import { useSelector } from "react-redux";

const ShoppingTable = () => {
  const cartData = useSelector((state: any) => state.global.cartData);

  let content = cartData.map((item: any, i: any) => {
    return (
      <tbody className="table_row" key={i}>
        <tr>
          <td className="column-1">
            <div className="how-itemcart1">
              <img srcSet={item.img[0]} alt="IMG" />
            </div>
          </td>
          <td className="column-2">{item.name}</td>
          <td className="column-3">$ {item.price}</td>
          <td className="column-5">$ {item.price}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
      <div className="m-l-25 m-r--38 m-lr-0-xl">
        <div className="wrap-table-shopping-cart">
          <table className="table-shopping-cart">
            <thead>
              <tr className="table_head">
                <th className="column-1">Product</th>
                <th className="column-2"></th>
                <th className="column-3">Price</th>
                {/* <th className="column-4">Quantity</th> */}
                <th className="column-5">Total</th>
              </tr>
            </thead>
            {content}
          </table>
        </div>

        <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
          <div className="flex-w flex-m m-r-20 m-tb-5">
            <input
              className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
              type="text"
              name="coupon"
              placeholder="Coupon Code"
            />

            <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
              Apply coupon
            </div>
          </div>

          <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
            Update Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTable;

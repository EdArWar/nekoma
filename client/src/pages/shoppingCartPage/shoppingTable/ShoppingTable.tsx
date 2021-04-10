import React, { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartCountUpdate } from "../../../redux/user.slice";
import { IProduct } from "./../../../types/ProductType";
import { api_removeCart } from "./../../../api/API";
import { bg_01 } from "../../../assets/image.assets";

const ShoppingTable = () => {
  const cartData: IProduct[] = useSelector((state: any) => state.user.userCart);
  const token = useSelector((state: any) => state.user.token);

  const [total, setTotal] = React.useState<SetStateAction<string>>("");

  useEffect(() => {
    const getTotal = () => {
      const total = cartData.reduce((prev: any, item: any) => {
        return (
          parseInt(prev) + parseInt(item.productPrice) * parseInt(item.quantity)
        );
      }, 0);
      setTotal(`${total}`);
    };

    getTotal();
  }, [cartData]);

  const dispatch = useDispatch();

  function onStartRemoveCart(cartId: string) {
    dispatch(api_removeCart(token, cartId));
  }

  const onCartCountChange = (operator: string, id: string) => {
    dispatch(cartCountUpdate({ id, operator }));
  };

  let content = cartData?.map((item: IProduct, i: any) => {
    return (
      <>
        <tbody className="table_row" key={i}>
          <tr>
            <td className="column-1">
              <div
                className="how-itemcart1"
                onClick={() => onStartRemoveCart(item._id)}
              >
                <img srcSet={item.productImage[0].url} alt="IMG" />
              </div>
            </td>
            <td className="column-2">{item.productName}</td>
            <td className="column-3">$ {item.productPrice}</td>
            <td className="column-4">
              <div className="wrap-num-product flex-w m-l-auto m-r-0">
                <div
                  className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                  onClick={() => onCartCountChange("-", item._id)}
                >
                  <i className="fs-16 zmdi zmdi-minus"></i>
                </div>

                <input
                  className="mtext-104 cl3 txt-center num-product"
                  type="number"
                  name="num-product2"
                  value={item.quantity}
                />

                <div
                  className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                  onClick={() => onCartCountChange("+", item._id)}
                >
                  <i className="fs-16 zmdi zmdi-plus"></i>
                </div>
              </div>
            </td>
            <td className="column-5">
              $ {+item.quantity * +item.productPrice}
            </td>
          </tr>
        </tbody>
      </>
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
                <th className="column-4">Quantity</th>
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
              Apply coupon{total}
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

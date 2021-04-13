import React, { SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import PaypalButton from "./PaypalButton";

const CartTotals = () => {
  const cartData = useSelector((state: any) => state.user.userCart);
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

  return (
    <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
      <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
        <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

        <div className="flex-w flex-t p-t-27 p-b-33">
          <div className="size-208">
            <span className="mtext-101 cl2">Total:</span>
          </div>

          <div className="size-209 p-t-1">
            <span className="mtext-110 cl2">${total}</span>
          </div>
        </div>

        <PaypalButton total={total} />

        {/* <button
          className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
          onClick={(e) => e.preventDefault()}
        >
          Proceed to Checkout
        </button> */}
      </div>
    </div>
  );
};

export default CartTotals;

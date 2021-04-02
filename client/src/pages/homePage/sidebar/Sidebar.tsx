import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../../redux/global.slice";

const Sidebar = () => {
  const sidebarState = useSelector((state: any) => state.global.sidebar);

  const dispatch = useDispatch();

  function onSidebarWrapClicked() {
    dispatch(setSidebarState(!sidebarState));
  }

  return (
    <aside
      className={`wrap-sidebar js-sidebar ${
        sidebarState ? "show-sidebar" : ""
      } `}
    >
      <div
        className="s-full js-hide-sidebar"
        onClick={() => onSidebarWrapClicked()}
      ></div>

      <div className="sidebar flex-col-l p-t-22 p-b-25">
        <div className="flex-r w-full p-b-30 p-r-27">
          <div
            className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-sidebar"
            onClick={() => onSidebarWrapClicked()}
          >
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>

        <div className="sidebar-content flex-w w-full p-lr-65 js-pscroll">
          <ul className="sidebar-link w-full">
            <li className="p-b-13">
              <a
                href="index.html"
                className="stext-102 cl2 hov-cl1 trans-04"
                onClick={(e) => e.preventDefault()}
              >
                Home
              </a>
            </li>

            <li className="p-b-13">
              <a
                href="!#"
                className="stext-102 cl2 hov-cl1 trans-04"
                onClick={(e) => e.preventDefault()}
              >
                My Wishlist
              </a>
            </li>

            <li className="p-b-13">
              <a
                href="!#"
                className="stext-102 cl2 hov-cl1 trans-04"
                onClick={(e) => e.preventDefault()}
              >
                My Account
              </a>
            </li>

            <li className="p-b-13">
              <a
                href="!#"
                className="stext-102 cl2 hov-cl1 trans-04"
                onClick={(e) => e.preventDefault()}
              >
                Track Oder
              </a>
            </li>

            <li className="p-b-13">
              <a
                href="!#"
                className="stext-102 cl2 hov-cl1 trans-04"
                onClick={(e) => e.preventDefault()}
              >
                Refunds
              </a>
            </li>

            <li className="p-b-13">
              <a
                href="!#"
                className="stext-102 cl2 hov-cl1 trans-04"
                onClick={(e) => e.preventDefault()}
              >
                Help & FAQs
              </a>
            </li>
          </ul>

          <div className="sidebar-gallery w-full">
            <span className="mtext-101 cl5">About Us</span>

            <p className="stext-108 cl6 p-t-27">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              maximus vulputate hendrerit. Praesent faucibus erat vitae rutrum
              gravida. Vestibulum tempus mi enim, in molestie sem fermentum
              quis.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

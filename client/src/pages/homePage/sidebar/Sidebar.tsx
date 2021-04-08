import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../../redux/global.slice";
import LogAndRegisterPage from "../../loginAndregistrationPage/LogAndRegisterPage";
import Login from "../../loginAndregistrationPage/login/Login";
import "./Slider.scss";

const Sidebar = () => {
  const sidebarState = useSelector((state: any) => state.global.sidebar);

  const dispatch = useDispatch();

  function onSidebarWrapClicked() {
    console.log("onSidebarWrapClicked");

    dispatch(setSidebarState(!sidebarState));
  }

  useEffect(() => {}, [sidebarState]);

  return (
    <aside className={`wrap-sidebar js-sidebar show-sidebar `}>
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
        <LogAndRegisterPage />

        {/* <Login /> */}
      </div>
    </aside>
  );
};

export default Sidebar;

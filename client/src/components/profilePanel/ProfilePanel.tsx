import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../redux/global.slice";
import "./ProfilePanel.scss";
import { api_logout } from "./../../api/API";
const ProfilePanel = () => {
  const sidebarState = useSelector((state: any) => state.global.sidebar);
  const isUser = useSelector((state: any) => state.global.isUser);
  const userName = useSelector((state: any) => state.user.userName);
  const lastName = useSelector((state: any) => state.user.lastName);
  const userMail = useSelector((state: any) => state.user.userMail);
  const avatar = useSelector((state: any) => state.user.avatar);

  useEffect(() => {}, [userName]);

  const dispatch = useDispatch();
  function onSidebarWrapClicked() {
    dispatch(setSidebarState(!sidebarState));
  }

  function onLogoutClicked(e: any) {
    e.preventDefault();
    onSidebarWrapClicked();
    setTimeout(() => {
      dispatch(api_logout());
    }, 500);
  }

  return (
    <div className="user_profile">
      <div className="head">
        <div className="user_info">
          <h2>{`${userName} ${lastName}`}</h2>
          <small>User</small>
          <br />
          <small>{userMail}</small>
        </div>
        <div className="user_details">
          <figure style={{ width: "150px", height: "150px" }}>
            <img srcSet={avatar[0].url} width="100%" />
          </figure>
          <ul className="tracking">
            <li>
              <div className="count">165</div>
              <div className="items">Posts</div>
            </li>
            <li>
              <div className="count">934</div>
              <div className="items">Followers</div>
            </li>
            <li>
              <div className="count">120</div>
              <div className="items">Following</div>
            </li>
          </ul>
        </div>
        <div className="bar_tool">
          <span className="ui_btn b_lg b_primary">+ Follow</span>
        </div>
        <p className="user_intro">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
      </div>
      <ul className="sidebar-link w-full">
        <li className="p-b-13">
          <a href="index.html" className="stext-102 cl2 hov-cl1 trans-04">
            Home
          </a>
        </li>

        <li className="p-b-13">
          <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
            My Wishlist
          </a>
        </li>

        <li className="p-b-13">
          <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
            My Account
          </a>
        </li>

        <li className="p-b-13">
          <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
            Track Oder
          </a>
        </li>

        <li className="p-b-13">
          <a href="#" className="stext-102 cl2 hov-cl1 trans-04">
            Refunds
          </a>
        </li>

        <li className="p-b-13">
          <a
            href="#"
            className="stext-102 cl2 hov-cl1 trans-04"
            onClick={(e: any) => onLogoutClicked(e)}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePanel;

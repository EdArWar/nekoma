import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../redux/global.slice";
import { api_logout } from "./../../api/API";
import "./ProfilePanel.scss";
const ProfilePanel = () => {
  const sidebarState = useSelector((state: any) => state.global.sidebar);
  const isUser = useSelector((state: any) => state.global.isUser);
  const userName = useSelector((state: any) => state.user.userName);
  const lastName = useSelector((state: any) => state.user.lastName);
  const userMail = useSelector((state: any) => state.user.userMail);
  const avatar = useSelector((state: any) => state.user.avatar);
  const favorites = useSelector((state: any) => state.user.favorites);
  const userCart = useSelector((state: any) => state.user.userCart);

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
              <div className="count">{favorites?.length}</div>
              <div className="items">Favorites</div>
            </li>
            <li>
              <div className="count">{userCart?.length}</div>
              <div className="items">Cart</div>
            </li>
            <li>
              <div className="count">0</div>
              <div className="items">Buy</div>
            </li>
          </ul>
        </div>
      </div>
      <ul className="sidebar-link w-full" style={{ marginTop: "5%" }}>
        <li className="p-b-13">
          <a
            href="#"
            className="stext-102 cl2 hov-cl1 trans-04"
            onClick={(e: any) => e.preventDefault()}
            style={{ cursor: "no-drop" }}
          >
            My Wishlist
          </a>
        </li>

        <li className="p-b-13">
          <a
            href="#"
            className="stext-102 cl2 hov-cl1 trans-04"
            style={{ cursor: "no-drop" }}
            onClick={(e: any) => e.preventDefault()}
          >
            My Account
          </a>
        </li>

        <li className="p-b-13">
          <a
            href="#"
            className="stext-102 cl2 hov-cl1 trans-04"
            style={{ cursor: "no-drop" }}
            onClick={(e: any) => e.preventDefault()}
          >
            Track Oder
          </a>
        </li>

        <li className="p-b-13">
          <a
            href="#"
            className="stext-102 cl2 hov-cl1 trans-04"
            style={{ cursor: "no-drop" }}
            onClick={(e: any) => e.preventDefault()}
          >
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

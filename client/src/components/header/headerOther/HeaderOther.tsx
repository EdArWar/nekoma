import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { icon_close2, logo_01 } from "../../../assets/image.assets";
import {
  setCartSidebarState,
  setSidebarState,
} from "../../../redux/global.slice";
import { NEKOMA } from "./../../../style/Nekoma";

const HeaderOther = () => {
  const isUser = useSelector((state: any) => state.global.isUser);
  const wrapMenu = React.useRef<HTMLDivElement>(null);
  const sidebarState = useSelector((state: any) => state.global.sidebar);
  const cartCount = useSelector((state: any) => state.user.userCart.length);
  const favoriteCount = useSelector((state: any) => state.user.favorites);
  const cartSidebarState = useSelector(
    (state: any) => state.global.cartSidebarState
  );
  const dispatch = useDispatch();

  const location = useLocation();
  let isHomeWatches: any;
  if (
    location.pathname === "/home" ||
    location.pathname === "/" ||
    location.pathname === "/index"
  ) {
    isHomeWatches = true;
  } else {
    isHomeWatches = false;
  }
  const menuBurgerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    var wrapMenu = $(".wrap-menu-desktop");
    if (isHomeWatches) {
      //@ts-ignore
      wrapMenu.current?.classList.remove("transparent");
      //@ts-ignore
      wrapMenu.current?.classList.add("setBlack");
      //@ts-ignore
      !!wrapMenu.current && window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    var arrowMainMenu = $(".arrow-main-menu-m");

    for (var i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on("click", function () {
        $(this).parent().find(".sub-menu-m").slideToggle();
        $(this).toggleClass("turn-arrow-main-menu-m");
      });
    }

    $(window).resize(function () {
      //@ts-ignore
      if ($(window).width() >= 992) {
        if ($(".menu-mobile").css("display") == "block") {
          $(".menu-mobile").css("display", "none");
          $(".btn-show-menu-mobile").toggleClass("is-active");
        }

        $(".sub-menu-m").each(function () {
          if ($(this).css("display") == "block") {
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isUser, isHomeWatches]);

  useEffect(() => {
    menuBurgerRef.current?.classList.remove("is-active");
    $(".menu-mobile").slideUp();
  }, [location.pathname, sidebarState, cartSidebarState]);

  function onSidebarClicked() {
    dispatch(setSidebarState(!sidebarState));
  }
  function onCartClicked() {
    dispatch(setCartSidebarState(true));
  }

  function handleScroll() {
    if (window.scrollY > 0 || window.pageYOffset > 0) {
      !!wrapMenu.current && wrapMenu.current.classList.add("setBlack");
    } else {
      !!wrapMenu.current && wrapMenu.current.classList.add("transparent");
      !!wrapMenu.current && wrapMenu.current.classList.remove("setBlack");
    }
  }

  return (
    <header className="header-v3">
      <div className="container-menu-desktop trans-03">
        <div
          className="wrap-menu-desktop how-shadow1 "
          style={{ top: "0px", backgroundColor: "black" }}
        >
          <nav className="limiter-menu-desktop p-l-45 ">
            <Link
              to="/home"
              className="logo"
              style={{ fontFamily: "dock11", color: "white" }}
            >
              <h1>
                NE<span style={{ color: NEKOMA.ORANGE }}>KO</span>MA
              </h1>
            </Link>
            <div className="menu-desktop">
              <ul className="main-menu">
                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/shop">Shop</Link>
                </li>

                <li>
                  <Link to="/favorite">Favorite</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="wrap-icon-header flex-w flex-r-m h-full">
              <div
                className="flex-c-m h-full p-r-25 bor6"
                style={{
                  border: "1px solid rgba(100,100,100, 0.1)",
                }}
              >
                <div
                  className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 icon-header-noti"
                  data-notify={
                    favoriteCount?.length > 0 ? favoriteCount?.length : 0
                  }
                >
                  <Link to="/favorite">
                    {" "}
                    <i className="zmdi zmdi-favorite "></i>
                  </Link>
                </div>
              </div>
              <div
                className="flex-c-m h-full p-r-25 bor6"
                style={{
                  border: "1px solid rgba(100,100,100, 0.1)",
                }}
              >
                <div
                  className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                  data-notify={cartCount}
                  onClick={() => onCartClicked()}
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>
              </div>

              <div className="flex-c-m h-full p-lr-19">
                <div className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11">
                  {isUser ? (
                    <FontAwesomeIcon
                      style={{ color: NEKOMA.RED }}
                      icon={faSignOutAlt}
                      onClick={() => {
                        onSidebarClicked();
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faSignInAlt}
                      onClick={() => {
                        onSidebarClicked();
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="wrap-header-mobile">
        <div className="logo-mobile">
          <Link
            to="/home"
            className="logo"
            style={{ fontFamily: "dock11", color: "black" }}
          >
            <h4>
              NE<span style={{ color: NEKOMA.ORANGE }}>KO</span>MA
            </h4>
          </Link>
        </div>

        <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
          <div
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            data-notify={favoriteCount?.length > 0 ? favoriteCount?.length : 0}
          >
            <Link to="/favorite">
              {" "}
              <i className="zmdi zmdi-favorite "></i>
            </Link>
          </div>
          <div className="flex-c-m h-full p-r-5">
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
              data-notify={cartCount}
              onClick={() => onCartClicked()}
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>
          </div>
        </div>

        <div
          className="btn-show-menu-mobile hamburger hamburger--squeeze"
          onClick={(e: any) => {
            $(e.target).toggleClass("is-active");
            $(".menu-mobile").slideToggle();
          }}
        >
          <span className="hamburger-box" ref={menuBurgerRef}>
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      <div className="menu-mobile">
        <ul className="topbar-mobile">
          <li>
            <div
              className="right-top-bar flex-w h-full"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11">
                {isUser ? (
                  <FontAwesomeIcon
                    style={{ color: NEKOMA.RED }}
                    icon={faSignOutAlt}
                    onClick={() => {
                      onSidebarClicked();
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    onClick={() => {
                      onSidebarClicked();
                    }}
                  />
                )}
              </div>
            </div>
          </li>
        </ul>
        <ul className="main-menu-m">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/favorite">Favorite</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
        <div className="container-search-header">
          <button
            className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search"
            onClick={(e) => e.preventDefault()}
          >
            <img srcSet={icon_close2} alt="CLOSE" />
          </button>

          <div className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search"></i>
            </button>
            <input
              className="plh3"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOther;

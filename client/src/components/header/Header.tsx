import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { icon_close2, logo_01, logo_02 } from "../../assets/image.assets";
import { setCartState, setSidebarState } from "../../redux/global.slice";
import "./Header.scss";

const Header = () => {
  const jsShowCart = React.useRef<HTMLDivElement>(null);
  const wrapMenu = React.useRef<HTMLDivElement>(null);
  const sidebarState = useSelector((state: any) => state.global.sidebar);
  const cartState = useSelector((state: any) => state.global.cart);
  const cartCount = useSelector((state: any) => state.global.cartData.length);

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

  if (window.scrollY > 0) {
    // window.scrollY = 0;
  }
  // $("html, body").animate({ scrollTop: 0 }, 300);
  window.scroll(0, 0);

  useEffect(() => {
    if (isHomeWatches) {
      wrapMenu.current?.classList.remove("transparent");
      wrapMenu.current?.classList.add("setBlack");
      !!wrapMenu.current && window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    $(".btn-show-menu-mobile").on("click", function () {
      $(this).toggleClass("is-active");
      $(".menu-mobile").slideToggle();
    });

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
            console.log("hello");
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });

    $(".js-show-cart").on("click", function () {
      $(".js-panel-cart").addClass("show-header-cart");
    });

    $(".js-hide-cart").on("click", function () {
      $(".js-panel-cart").removeClass("show-header-cart");
    });

    $(".js-show-sidebar").on("click", function () {
      $(".js-sidebar").addClass("show-sidebar");
    });

    $(".js-hide-sidebar").on("click", function () {
      $(".js-sidebar").removeClass("show-sidebar");
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    console.log("handleScroll");
    if (window.scrollY > 0 || window.pageYOffset > 0) {
      !!wrapMenu.current && wrapMenu.current.classList.add("setBlack");
    } else {
      !!wrapMenu.current && wrapMenu.current.classList.add("transparent");
      !!wrapMenu.current && wrapMenu.current.classList.remove("setBlack");
    }
  }

  function onSidebarClicked() {
    dispatch(setSidebarState(!sidebarState));
  }
  function onCartClicked() {
    dispatch(setCartState(!cartState));
  }

  return (
    <>
      {isHomeWatches ? (
        <header className="header-v3">
          <div className="container-menu-desktop trans-03">
            <div ref={wrapMenu} className="wrap-menu-desktop">
              <nav className="limiter-menu-desktop p-l-45">
                <Link to="/home" className="logo">
                  <img srcSet={logo_02} alt="IMG-LOGO" />
                </Link>

                <div className="menu-desktop">
                  <ul className="main-menu">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>

                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>

                    <li className="label1" data-label1="hot">
                      <Link to="shopping-cart">Features</Link>
                    </li>

                    <li>
                      <Link to="blog">Blog</Link>
                    </li>

                    <li>
                      <Link to="about">About</Link>
                    </li>

                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                <div className="wrap-icon-header flex-w flex-r-m h-full">
                  <div className="flex-c-m h-full p-r-25 bor6">
                    <div
                      className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                      data-notify={cartCount}
                      onClick={() => onCartClicked()}
                    >
                      <i className="zmdi zmdi-shopping-cart"></i>
                    </div>
                  </div>

                  <div className="flex-c-m h-full p-lr-19">
                    <div
                      className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 js-show-sidebar"
                      ref={jsShowCart}
                      onClick={() => {
                        onSidebarClicked();
                      }}
                    >
                      <i className="zmdi zmdi-menu"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="wrap-header-mobile">
            <div className="logo-mobile">
              <Link to="/home">
                <img srcSet={logo_01} alt="IMG-LOGO" />
              </Link>
            </div>

            <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
              <div className="flex-c-m h-full p-r-5">
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                  data-notify={cartCount}
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>
              </div>
            </div>

            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>

          <div className="menu-mobile">
            <ul className="main-menu-m">
              <li>
                <Link to="/home">Home</Link>

                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li>

              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <Link
                  to="shopping-cart"
                  className="label1 rs1"
                  data-label1="hot"
                >
                  Features
                </Link>
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
            <button className="flex-c-m btn-hide-modal-search trans-04">
              <i className="zmdi zmdi-close"></i>
            </button>

            <div className="container-search-header">
              <div className="wrap-search-header">
                <input
                  className="plh0"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />

                <button
                  className="flex-c-m trans-04"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="zmdi zmdi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="header-v4">
          <div className="container-menu-desktop">
            <div className="top-bar">
              <div className="content-topbar flex-sb-m h-full container">
                <div className="left-top-bar">
                  Free shipping for standard order over $100
                </div>

                <div className="right-top-bar flex-w h-full">
                  <a
                    href="!#"
                    className="flex-c-m trans-04 p-lr-25"
                    onClick={(e) => e.preventDefault()}
                  >
                    Help & FAQs
                  </a>

                  <a
                    href="!#"
                    className="flex-c-m trans-04 p-lr-25"
                    onClick={(e) => e.preventDefault()}
                  >
                    My Account
                  </a>

                  <a
                    href="!#"
                    className="flex-c-m trans-04 p-lr-25"
                    onClick={(e) => e.preventDefault()}
                  >
                    EN
                  </a>

                  <a
                    href="!#"
                    className="flex-c-m trans-04 p-lr-25"
                    onClick={(e) => e.preventDefault()}
                  >
                    USD
                  </a>
                </div>
              </div>
            </div>

            <div className="wrap-menu-desktop how-shadow1">
              <nav className="limiter-menu-desktop container">
                <Link to="/home" className="logo">
                  <img srcSet={logo_01} alt="IMG-LOGO" />
                </Link>
                <div className="menu-desktop">
                  <ul className="main-menu">
                    <li>
                      <NavLink to="/home">Home</NavLink>
                    </li>

                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>

                    <li className="label1" data-label1="hot">
                      <NavLink to="shopping-cart">Features</NavLink>
                    </li>

                    <li>
                      <NavLink to="blog">Blog</NavLink>
                    </li>

                    <li>
                      <NavLink to="about">About</NavLink>
                    </li>

                    <li>
                      <NavLink to="contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="wrap-icon-header flex-w flex-r-m">
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                    <i className="zmdi zmdi-search"></i>
                  </div>

                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                    data-notify={cartCount}
                    onClick={() => onCartClicked()}
                  >
                    <i className="zmdi zmdi-shopping-cart"></i>
                  </div>
                  <a
                    href="#"
                    className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                    data-notify="0"
                  >
                    <i className="zmdi zmdi-favorite-outline"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="wrap-header-mobile">
            <div className="logo-mobile">
              <Link to="/home">
                <img srcSet={logo_02} alt="IMG-LOGO" />
              </Link>
            </div>

            <div className="wrap-icon-header flex-w flex-r-m m-r-15">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>

              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                data-notify={cartCount}
              >
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>
              <a
                href="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                data-notify="0"
              >
                <i className="zmdi zmdi-favorite-outline"></i>
              </a>
            </div>

            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>

          <div className="menu-mobile">
            <ul className="topbar-mobile">
              <li>
                <div className="left-top-bar">
                  Free shipping for standard order over $100
                </div>
              </li>

              <li>
                <div className="right-top-bar flex-w h-full">
                  <a
                    href="!#"
                    className="flex-c-m p-lr-10 trans-04"
                    onClick={(e) => e.preventDefault()}
                  >
                    Help & FAQs
                  </a>

                  <a
                    href="!#"
                    className="flex-c-m p-lr-10 trans-04"
                    onClick={(e) => e.preventDefault()}
                  >
                    My Account
                  </a>

                  <a
                    href="!#"
                    className="flex-c-m p-lr-10 trans-04"
                    onClick={(e) => e.preventDefault()}
                  >
                    EN
                  </a>

                  <a
                    href="!#"
                    className="flex-c-m p-lr-10 trans-04"
                    onClick={(e) => e.preventDefault()}
                  >
                    USD
                  </a>
                </div>
              </li>
            </ul>

            <ul className="main-menu-m">
              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <Link
                  to="shopping-cart"
                  className="label1 rs1"
                  data-label1="hot"
                >
                  Features
                </Link>
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
      )}
    </>
  );
};

export default Header;

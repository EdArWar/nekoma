import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logo_02 } from "../../../assets/image.assets";
import { setCartState, setSidebarState } from "../../../redux/global.slice";

const HeaderHome = () => {
  const jsShowCart = React.useRef<HTMLDivElement>(null);
  const isUser = useSelector((state: any) => state.global.isUser);
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

    var headerDesktop = $(".container-menu-desktop");
    var wrapMenu = $(".wrap-menu-desktop");

    if ($(".top-bar").length > 0) {
      var posWrapHeader = $(".top-bar").height();
    } else {
      //@ts-ignore
      var posWrapHeader = 0;
    }
    //@ts-ignore
    if ($(window).scrollTop() > posWrapHeader) {
      $(headerDesktop).addClass("fix-menu-desktop");
      $(wrapMenu).css("top", 0);
    } else {
      $(headerDesktop).removeClass("fix-menu-desktop");
      //@ts-ignore
      $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
    }

    if (isHomeWatches) {
      $(window).on("scroll", function () {
        //@ts-ignore
        if ($(this).scrollTop() > posWrapHeader) {
          $(headerDesktop).addClass("fix-menu-desktop");
          $(wrapMenu).css("top", 0);
        } else {
          $(headerDesktop).removeClass("fix-menu-desktop");
          //@ts-ignore
          $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isUser, isHomeWatches]);

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
    <header className="header-v3">
      <div className="container-menu-desktop trans-03">
        <div className="wrap-menu-desktop">
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
          <a href="index.html">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </div>

        <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
          <div className="flex-c-m h-full p-r-5">
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
              data-notify="2"
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
                {isUser ? "Logout" : "Login"}
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
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="shopping-cart" className="label1 rs1" data-label1="hot">
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
  );
};

export default HeaderHome;
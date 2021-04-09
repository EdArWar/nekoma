import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { api_logout } from "../../../api/API";
import { icon_close2, logo_01, logo_02 } from "../../../assets/image.assets";
import { setCartState } from "../../../redux/global.slice";

const HeaderOther = () => {
  const isUser = useSelector((state: any) => state.global.isUser);
  const wrapMenu = React.useRef<HTMLDivElement>(null);

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
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });

    // $(".js-show-cart").on("click", function () {
    //   $(".js-panel-cart").addClass("show-header-cart");
    // });

    // $(".js-hide-cart").on("click", function () {
    //   $(".js-panel-cart").removeClass("show-header-cart");
    // });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isUser, isHomeWatches]);

  function onCartClicked() {
    dispatch(setCartState(!cartState));
  }
  function logHeandler(e: any) {
    e.preventDefault();
    if (e.target.innerText === "Logout") {
      dispatch(api_logout());
    }
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
                onClick={(e) => logHeandler(e)}
              >
                {isUser ? "Logout" : "Login"}
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
            <NavLink to="/home">Home</NavLink>
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

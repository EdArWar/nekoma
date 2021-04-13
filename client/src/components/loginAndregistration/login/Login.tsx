import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api_login } from "../../../api/API";
import { loginUser, setSidebarState } from "../../../redux/global.slice";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState("jimdontcare@gmail.com");
  const [password, setPassword] = useState("jim123");

  const sidebar = useSelector((state: any) => state.global.sidebar);

  const dispatch = useDispatch();

  function onLoginHeandler(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();

    dispatch(
      api_login(email, password, disableForm, activateForm, successForm)
    );
  }

  function disableForm() {
    $(".login").addClass("test");
    setTimeout(function () {
      $(".login").addClass("testtwo");
    }, 300);
  }
  function activateForm() {
    setTimeout(function () {
      $(".login").removeClass("test");
      $(".login").removeClass("testtwo");
    }, 300);
  }
  function successForm() {
    setTimeout(function () {
      $(".login").removeClass("test");
      $(".login div").fadeOut(123);
    }, 2800);
    setTimeout(function () {
      $(".success").fadeIn();
    }, 3200);
    setTimeout(function () {
      dispatch(setSidebarState(false));
      dispatch(loginUser(true));
    }, 4000);
  }

  useEffect(() => {
    $('input[type="text"],input[type="password"]').focus(function () {
      $(this).prev().animate({ opacity: "1" }, 200);
    });
    $('input[type="text"],input[type="password"]').blur(function () {
      $(this).prev().animate({ opacity: ".5" }, 200);
    });
    $('input[type="text"],input[type="password"]').keyup(function () {
      //@ts-ignore
      if (!$(this).val() == "") {
        $(this).next().animate({ opacity: "1", right: "30" }, 200);
      } else {
        $(this).next().animate({ opacity: "0", right: "20" }, 200);
      }
    });
    $(".tab").click(function () {
      $(this).fadeOut(200, function () {
        $(this).parent().animate({ left: "0" });
      });
    });
  }, [sidebar]);

  return (
    <>
      <div className="login">
        <div
          className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart log_close_button"
          onClick={() => dispatch(setSidebarState(false))}
          style={{}}
        >
          <i className="zmdi zmdi-close"></i>
        </div>
        <div className="login_title">
          <span>Login to your account</span>
        </div>

        <div className="login_fields">
          <div className="login_fields__user">
            <div className="icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
            </div>
            <input
              placeholder="E-Mail"
              type="text"
              name="email"
              value={email}
              className="input-text"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="login_fields__password">
            <div className="icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
            </div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              className="input-text"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="login_fields__submit">
            <input
              type="submit"
              value="Log In"
              name="register"
              style={{
                margin: "0 auto",
              }}
              onClick={(e) => {
                onLoginHeandler(e);
              }}
            />
          </div>
        </div>
        <div className="success">
          <h2>Authentication Success</h2>
          <p>Welcome back</p>
        </div>
      </div>
      <div className="authent">
        <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg" />
        <p>Authenticating...</p>
      </div>
    </>
  );
};

export default Login;

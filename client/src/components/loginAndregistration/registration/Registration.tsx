import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api_registration } from "../../../api/API";
import { loginUser, setSidebarState } from "../../../redux/global.slice";
import "./Reagistration.scss";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [avatar, setAvatar] = useState("");

  const onChangeFile = (e: any) => {
    setAvatar(e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e: any) {
        $("#prev").attr("srcSet", e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const dispatch = useDispatch();

  const onRegisterHeandler = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    if (!!avatar) {
      formData.append("file", avatar);
    }
    dispatch(
      api_registration(formData, disableForm, activateForm, successForm)
    );
  };

  function disableForm() {
    $(".reg_login").addClass("reg_test");
    setTimeout(function () {
      $(".reg_login").addClass("reg_testtwo");
    }, 300);
  }
  function activateForm() {
    setTimeout(function () {
      $(".reg_login").removeClass("reg_testtwo");
    }, 300);
  }
  function successForm() {
    setTimeout(function () {
      $(".reg_login").removeClass("reg_test");
      $(".reg_login div").fadeOut(123);
    }, 2800);
    setTimeout(function () {
      $(".reg_success").fadeIn();
    }, 3200);
    setTimeout(function () {
      dispatch(setSidebarState(false));
      dispatch(loginUser(true));
    }, 4000);
  }
  const sidebar = useSelector((state: any) => state.global.sidebar);

  useEffect(() => {
    // $('input[type="submit"]').click(function () {
    //   $(".reg_login").addClass("test");
    //   setTimeout(function () {
    //     $(".reg_login").addClass("testtwo");
    //   }, 300);
    //   setTimeout(function () {
    //     $(".reg_login").removeClass("test");
    //     $(".reg_login div").fadeOut(123);
    //   }, 2800);
    //   setTimeout(function () {
    //     $(".reg_success").fadeIn();
    //   }, 3200);
    // });
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
    var open = 0;
    $(".tab").click(function () {
      $(this).fadeOut(200, function () {
        $(this).parent().animate({ left: "0" });
      });
    });
  }, [sidebar]);

  return (
    <>
      <div className="reg_login" style={{ height: "100%" }}>
        <div
          className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart log_close_button"
          onClick={() => dispatch(setSidebarState(false))}
          style={{}}
        >
          <i className="zmdi zmdi-close"></i>
        </div>
        <div className="reg_login_title">
          <span>Registration</span>
        </div>
        <div className="reg_login_fields">
          <div className="reg_login_fields__user">
            <div className="reg_icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
            </div>
            <input
              placeholder="User Name"
              type="text"
              name="userName"
              value={userName}
              className="reg_input-text"
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <div className="reg_validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="reg_login_fields__user">
            <div className="reg_icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
            </div>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              className="reg_input-text"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <div className="reg_validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="reg_login_fields__user">
            <div className="reg_icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
            </div>
            <input
              placeholder="E-Mail"
              type="text"
              name="email"
              value={email}
              className="reg_input-text"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="reg_validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>

          <div className="reg_login_fields__password">
            <div className="reg_icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
            </div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              className="reg_input-text"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="reg_validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="reg_login_fields__password">
            <div className="reg_icon">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
            </div>
            <input
              style={{ padding: "5px", paddingLeft: "15px" }}
              className="reg_input-text"
              type="file"
              multiple={false}
              name="avatar"
              onChange={onChangeFile}
            />
            <div className="reg_validation">
              <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                margin: "0 auto",
                marginTop: "15px",
              }}
            >
              <img
                id="prev"
                srcSet=""
                style={{ borderRadius: "50%", width: "100%" }}
              />
            </div>
          </div>
          <div className="reg_login_fields__submit">
            <input
              type="submit"
              value="Registration"
              name="register"
              style={{
                margin: "0 auto",
              }}
              onClick={(e) => {
                onRegisterHeandler(e);
              }}
            />
          </div>
        </div>
        <div className="reg_success">
          <h2>Registration Success</h2>
          <p>Welcome back</p>
        </div>
      </div>
      <div className="reg_authent">
        <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg" />
        <p>Authenticating...</p>
      </div>
    </>
  );
};

export default Registration;

import { AppBar, Tabs, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./LogAndRegisterPage.scss";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faSign,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../../redux/global.slice";
import "./LogAndRegisterPage.scss";

const LogAndRegisterPage = () => {
  useEffect(() => {
    $("#tile-1 .nav-tabs a").click(function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      //@ts-ignore
      $("#tile-1 .slider").css({ left: +position.left, width: width });
    });
    var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tile-1 .nav-tabs .active").position();
    //@ts-ignore
    $("#tile-1 .slider").css({ left: +actPosition.left, width: actWidth });
  }, []);

  return (
    <>
      <div className="tile" id="tile-1">
        <ul className="nav nav-tabs nav-justified" role="tablist">
          <div className="slider"></div>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <FontAwesomeIcon icon={faRegistered} /> Profile
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Login />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
};
export default LogAndRegisterPage;

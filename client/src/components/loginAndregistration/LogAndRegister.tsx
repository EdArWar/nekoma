import { AppBar, Tabs, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
import "./LogAndRegister.scss";

const LogAndRegister = () => {
  const [state, setState] = useState(true);

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
          <div className="slider" style={{ width: "50%" }}></div>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              onClick={() => setState(true)}
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
              onClick={() => setState(false)}
            >
              <FontAwesomeIcon icon={faRegistered} /> Profile
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <CSSTransition
            in={state}
            timeout={500}
            classNames="my_node_login"
            unmountOnExit
          >
            <div
              className="tab-pane show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <Login />
            </div>
          </CSSTransition>
          <CSSTransition
            in={!state}
            timeout={500}
            classNames="my_node_reg"
            unmountOnExit
          >
            <div
              className="tab-pane show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <Registration />
            </div>
          </CSSTransition>
        </div>
      </div>
    </>
  );
};
export default LogAndRegister;

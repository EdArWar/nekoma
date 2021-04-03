import { AppBar, Tabs, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import "./LogAndRegisterPage.scss";
import Registration from "./registration/Registration";
import Login from "./login/Login";

const LogAndRegisterPage = () => {
  function openCity(evt: any, cityName: any) {
    var i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      //@ts-ignore
      tabContent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    //@ts-ignore
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <>
      <div className="page-content">
        <div className="form-v8-content">
          <div className="form-right">
            <div className="tab">
              <div className="tab-inner">
                <button
                  className="tablinks"
                  id="defaultOpen"
                  onClick={(e) => openCity(e, "sign-up")}
                >
                  Sign Up
                </button>
              </div>
              <div className="tab-inner">
                <button
                  className="tablinks"
                  onClick={(e) => openCity(e, "sign-in")}
                >
                  Sign In
                </button>
              </div>
            </div>
            <Login />
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
};
export default LogAndRegisterPage;

import { AppBar, Tabs, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./LogAndRegisterPage.scss";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const LogAndRegisterPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="page-content">
        <div className="form-v8-content">
          <div className="form-right">
            <div className="tab">
              <div className="tab-inner">
                <button
                  className={`tablinks ${show ? "active" : ""}`}
                  onClick={() => setShow(!show)}
                >
                  Sign Up
                </button>
              </div>
              <div className="tab-inner">
                <button
                  className={`tablinks ${!show ? "active" : ""}`}
                  onClick={() => setShow(!show)}
                >
                  Sign In
                </button>
              </div>
            </div>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={show ? "Goodbye, world!" : "Hello, world!"}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                {show ? <Login /> : <Registration />}
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogAndRegisterPage;

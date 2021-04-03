import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { api_login } from "./../../../api/API";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function onLoginHeandler(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    dispatch(api_login(email, password));
    console.log("onLoginHeandler");
  }

  return (
    <div className="form-detail">
      <div className="tabcontent" id="sign-up">
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="text"
              name="email"
              value={email}
              className="input-text"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className="label">E-Mail</span>
            <span className="border"></span>
          </label>
        </div>

        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="password"
              name="password"
              value={password}
              className="input-text"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="label">Password</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row-last">
          <button
            name="register"
            className="register"
            style={{ padding: "15px 15px" }}
            onClick={(e) => {
              onLoginHeandler(e);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

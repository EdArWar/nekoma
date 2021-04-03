import React from "react";

const Login = () => {
  return (
    <form className="form-detail" action="#" method="post">
      <div className="tabcontent" id="sign-up">
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="input-text"
              required
            />
            <span className="label">Username</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="text"
              name="your_email"
              id="your_email"
              className="input-text"
              required
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
              id="password"
              className="input-text"
              required
            />
            <span className="label">Password</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row-last">
          <input
            type="submit"
            name="register"
            className="register"
            value="Register"
          />
        </div>
      </div>
    </form>
  );
};

export default Login;

import React, { useState } from "react";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const onChange = (e: any) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="form-detail">
      <div className="tabcontent" id="sign-in">
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="text"
              name="full_name_1"
              id="full_name_1"
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
              name="your_email_1"
              id="your_email_1"
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
              name="password_1"
              id="password_1"
              className="input-text"
              required
            />
            <span className="label">Password</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="password"
              name="comfirm_password_1"
              id="comfirm_password_1"
              className="input-text"
              required
            />
            <span className="label">Comfirm Password</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row">
          <label className="form-row-inner">
            <input
              className="form-control"
              type="file"
              multiple={true}
              name="avatar"
              onChange={onChange}
            />
            <span className="label">Comfirm Password</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row-last">
          <input
            type="submit"
            name="register"
            className="register"
            value="Sign In"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { api_registration } from "./../../../api/API";

const Registration = () => {
  const [userName, setUserName] = useState("Ed");
  const [lastName, setLastName] = useState("Vardanyan");
  const [email, setEmail] = useState("edgarcho@mail.ru");
  const [password, setPassword] = useState("ssssss");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const onChange = (e: any) => {
    setAvatar(e.target.files[0]);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("avatar", avatar);
    dispatch(api_registration(formData));
  };

  return (
    <div className="form-detail">
      <div className="tabcontent" id="sign-in">
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="text"
              name="userName"
              value={userName}
              className="input-text"
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <span className="label">Name</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="input-text"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <span className="label">Last Name</span>
            <span className="border"></span>
          </label>
        </div>
        <div className="form-row">
          <label className="form-row-inner">
            <input
              type="test"
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
          <button
            name="register"
            className="register"
            style={{ padding: "15px 15px" }}
            onClick={onSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;

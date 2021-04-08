import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api_registration } from "../../../api/API";
import "./Reagistration.scss";

const Registration = () => {
  const [userName, setUserName] = useState("Ed");
  const [lastName, setLastName] = useState("Vardanyan");
  const [email, setEmail] = useState("edgarcho@mail.ru");
  const [password, setPassword] = useState("ssssss");
  // const [userName, setUserName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const onChangeFile = (e: any) => {
    setAvatar(e.target.files[0]);
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

    dispatch(api_registration(formData));
  };

  return (
    <>
      <div className="reg_login" style={{ height: "85%" }}>
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
          <h2>Authentication Success</h2>
          <p>Welcome back</p>
        </div>
      </div>
      <div className="reg_authent">
        <img srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg" />
        <p>Authenticating...</p>
      </div>
    </>
    // <div className="form-detail">
    //   <div className="tabcontent" id="sign-in">
    //     <div className="form-row">
    //       <label className="form-row-inner">
    //         <input
    //           type="text"
    //           name="userName"
    //           value={userName}
    //           className="input-text"
    //           required
    //           onChange={(e) => {
    //             setUserName(e.target.value);
    //           }}
    //         />
    //         <span className="label">Name</span>
    //         <span className="border"></span>
    //       </label>
    //     </div>
    //     <div className="form-row">
    //       <label className="form-row-inner">
    //         <input
    //           type="text"
    //           name="lastName"
    //           value={lastName}
    //           className="input-text"
    //           required
    //           onChange={(e) => {
    //             setLastName(e.target.value);
    //           }}
    //         />
    //         <span className="label">Last Name</span>
    //         <span className="border"></span>
    //       </label>
    //     </div>
    //     <div className="form-row">
    //       <label className="form-row-inner">
    //         <input
    //           type="test"
    //           name="email"
    //           value={email}
    //           className="input-text"
    //           required
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //         />
    //         <span className="label">E-Mail</span>
    //         <span className="border"></span>
    //       </label>
    //     </div>
    //     <div className="form-row">
    //       <label className="form-row-inner">
    //         <input
    //           type="password"
    //           name="password"
    //           value={password}
    //           className="input-text"
    //           required
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //         />
    //         <span className="label">Password</span>
    //         <span className="border"></span>
    //       </label>
    //     </div>
    //     <div className="form-row">
    //       <label className="form-row-inner">
    //         <input
    //           className="form-control"
    //           type="file"
    //           multiple={true}
    //           name="avatar"
    //           onChange={onChange}
    //         />
    //         <span className="label">Comfirm Password</span>
    //         <span className="border"></span>
    //       </label>
    //     </div>
    //     <div className="form-row-last">
    //       <button
    //         name="register"
    //         className="register"
    //         style={{ padding: "15px 15px" }}
    //         onClick={onSubmit}
    //       >
    //         Sign In
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Registration;

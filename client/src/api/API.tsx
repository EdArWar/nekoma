import axios from "axios";
import {
  loginUser,
  logoutUser,
  setServerProductData,
} from "../redux/global.slice";
import { setToken, setUserData } from "../redux/user.slice";

import { API_URL } from "./API_URL";

export const api_registration = (formData: any) => {
  return async (dispatch: any) => {
    try {
      console.log("formData");
      console.log(formData);

      const response = await axios.post(
        `${API_URL}userAuth/registration`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.statusText === "OK") {
        const { id, userName, lastName, email, userCart } = response.data.user;
        const token: string = response.data.token;
        dispatch(setToken(token));
        dispatch(
          setUserData({
            userId: id,
            userName: userName,
            lastName: lastName,
            email: email,
            userCart: userCart,
          })
        );
        localStorage.setItem("token", response.data.token);
      }
      console.log("response");
      console.log(response);
    } catch (e) {
      alert(e.response.data.message);
      console.log(e, "api_registration");
    }
  };
};

export const api_login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}userAuth/login`, {
        email,
        password,
      });

      if (response.statusText === "OK") {
        const { id, userName, lastName, email, userCart } = response.data.user;
        const token: string = response.data.token;

        dispatch(loginUser(true));
        dispatch(setToken(token));
        dispatch(
          setUserData({
            userId: id,
            userName: userName,
            lastName: lastName,
            email: email,
            userCart: userCart,
          })
        );
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      alert(e.response.data.message);
      console.log(e, "api_login");
    }
  };
};

export const api_logout = () => {
  return async (dispatch: any) => {
    try {
      dispatch(logoutUser(false));
      localStorage.removeItem("token");
    } catch (e) {
      alert(e.response.data.message);
      console.log(e, "api_logout");
    }
  };
};

export const api_auth = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`${API_URL}userAuth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const { id, userName, lastName, email, userCart } = response.data.user;
      const token: string = response.data.token;

      if (response.statusText === "OK") {
        //global state
        dispatch(loginUser(true));
        //user state
        dispatch(setToken(token));
        dispatch(
          setUserData({
            userId: id,
            userName: userName,
            lastName: lastName,
            email: email,
            userCart: userCart,
          })
        );
        // const userData = response.data.user;
        // dispatch(setUserData(userData));
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      localStorage.removeItem("token");
      console.log(e, "api_auth");
    }
  };
};

export const api_getAllProducts = () => {
  return async (dispatch: any) => {
    try {
      console.log("api_getAllProducts");

      const response = await axios.get(`${API_URL}product`);
      console.log(response);

      dispatch(setServerProductData(response.data.products));
    } catch (e) {
      console.log(e, "api_getAllProducts");
    }
  };
};

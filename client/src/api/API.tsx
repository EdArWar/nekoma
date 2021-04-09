import axios from "axios";
import { loginUser, logoutUser, setProductData } from "../redux/global.slice";
import { setCartProduct, setToken, setUserData } from "../redux/user.slice";
import { API_URL } from "./API_URL";

export const api_registration = (
  formData: any,
  disableForm: () => void,
  activateForm: () => void,
  successForm: () => void
) => {
  return async (dispatch: any) => {
    disableForm();
    try {
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
        const {
          id,
          userName,
          lastName,
          email,
          avatar,
          userCart,
        } = response.data.user;
        const token: string = response.data.token;

        dispatch(setToken(token));
        dispatch(
          setUserData({
            userId: id,
            userName: userName,
            lastName: lastName,
            email: email,
            avatar: avatar,
            userCart: userCart,
          })
        );
        successForm();
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      alert(e.response.data.message);
      console.log(e, "api_registration");
      activateForm();
    }
  };
};

export const api_login = (
  email: string,
  password: string,
  disableForm: () => void,
  activateForm: () => void,
  successForm: () => void
) => {
  return async (dispatch: any) => {
    disableForm();
    try {
      const response = await axios.post(`${API_URL}userAuth/login`, {
        email,
        password,
      });

      if (response.statusText === "OK") {
        const {
          id,
          userName,
          lastName,
          email,
          avatar,
          userCart,
        } = response.data.user;
        const token: string = response.data.token;

        dispatch(setToken(token));
        dispatch(
          setUserData({
            userId: id,
            userName: userName,
            lastName: lastName,
            email: email,
            avatar: avatar,
            userCart: userCart,
          })
        );
        successForm();
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      alert(e.response.data.message);
      console.log(e, "api_login");
      activateForm();
    }
  };
};

export const api_logout = () => {
  return async (dispatch: any) => {
    try {
      dispatch(logoutUser(false));
      dispatch(setToken(null));
      dispatch(
        setUserData({
          userId: null,
          userName: null,
          lastName: null,
          email: null,
          avatar: null,
          userCart: null,
        })
      );
      localStorage.removeItem("token");
    } catch (e) {
      alert(e);
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

      const {
        id,
        userName,
        lastName,
        email,
        avatar,
        userCart,
      } = response.data.user;
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
            avatar: avatar,
            userCart: userCart,
          })
        );
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
      const response = await axios.get(`${API_URL}product`);

      dispatch(setProductData(response.data.products));
    } catch (e) {
      console.log(e, "api_getAllProducts");
    }
  };
};

export const api_addToCart = (token: string, cartId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}product/addCart`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cartId,
      });

      if (response.statusText === "OK") {
        dispatch(setCartProduct(response.data.userCart));
        console.log("------------");
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

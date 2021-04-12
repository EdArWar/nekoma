import axios from "axios";
import { loginUser, logoutUser, setProductData } from "../redux/global.slice";
import {
  onRemoveCart,
  removeFavorite,
  setCartProduct,
  setFavorites,
  setToken,
  setUserData,
} from "../redux/user.slice";
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
          favorites,
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
            favorites: favorites,
            userCart: userCart,
          })
        );
        successForm();
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      alert(e.response.data.message);
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
          favorites,
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
            favorites: favorites,
            userCart: userCart,
          })
        );
        successForm();
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      alert(e.response.data.message);
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
          favorites: [],
          userCart: [],
        })
      );
      localStorage.removeItem("token");
    } catch (e) {
      alert(e);
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
        favorites,
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
            favorites: favorites,
            userCart: userCart,
          })
        );
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      localStorage.removeItem("token");
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
          authorization: `Bearer ${token}`,
        },
        cartId,
      });

      if (response.statusText === "OK") {
        dispatch(setCartProduct(response.data.userCart));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const api_removeCart = (token: string, cartId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}product/removeCart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        cartId,
      });
      if (response.statusText === "OK") {
        dispatch(onRemoveCart(cartId));
      }
    } catch (error) {
      console.log(error, "api_removeCart");
    }
  };
};

export const api_addToFavorite = (token: string, favoriteId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}product/addFavorite`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        favoriteId,
      });

      if (response.statusText === "OK") {
        dispatch(setFavorites(response.data.favorites));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const api_removeFavorite = (token: string, favoriteId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${API_URL}product/removeFavorite`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        favoriteId,
      });
      if (response.statusText === "OK") {
        dispatch(removeFavorite(favoriteId));
      }
    } catch (error) {
      console.log(error, "api_removeCart");
    }
  };
};

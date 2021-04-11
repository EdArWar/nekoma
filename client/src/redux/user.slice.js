import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    userId: null,
    userName: null,
    lastName: null,
    userMail: null,
    avatar: null,
    userCart: [],
    favorites: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.lastName = action.payload.lastName;
      state.userMail = action.payload.email;
      state.avatar = action.payload.avatar;
      state.favorites = action.payload.favorites?.reverse();
      state.userCart = action.payload.userCart?.reverse();
    },
    setCartProduct: (state, action) => {
      console.log("setCartProduct");
      state.userCart.push(action.payload);
      state.userCart.reverse();
    },
    onRemoveCart: (state, action) => {
      state.userCart = state.userCart.filter((item, i) => {
        return item._id !== action.payload;
      });
    },
    setFavorites: (state, action) => {
      console.log("setCartProduct");
      state.favorites.push(action.payload);
      state.favorites.reverse();
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((item, i) => {
        return item._id !== action.payload;
      });
    },
    cartCountUpdate: (state, action) => {
      state.userCart.map((item, i) => {
        if (item._id === action.payload.id) {
          if (action.payload.operator === "+") {
            item.quantity += 1;
          } else {
            if (item.quantity < 2) {
              return;
            }
            item.quantity -= 1;
          }
        }
      });
    },
  },
});

export const {
  setToken,
  setUserData,
  setCartProduct,
  onRemoveCart,
  setFavorites,
  removeFavorite,
  cartCountUpdate,
} = userSlice.actions;

export default userSlice.reducer;

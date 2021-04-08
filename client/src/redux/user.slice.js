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
  },
  reducers: {
    setToken: (state, action) => {
      console.log("--------TOKEN--------");
      console.log(state.token);
      state.token = action.payload;
      console.log(state.token);
      console.log("--------TOKEN--------");
    },
    setUserData: (state, action) => {
      if (state.userId === null && state.userName === null) {
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.lastName = action.payload.lastName;
        state.userMail = action.payload.email;
        state.avatar = action.payload.avatar;
        state.userCart = action.payload.userCart.reverse();
      }
    },
    setCartProduct: (state, action) => {
      state.userCart.push(action.payload);
      state.userCart.reverse();
    },
    onRemoveCart: (state, action) => {
      state.userCart = state.userCart.filter((item, i) => {
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
  cartCountUpdate,
} = userSlice.actions;

export default userSlice.reducer;

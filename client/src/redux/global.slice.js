import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    locale: "en",
    isUser: false,
    initiated: false,
    productId: null,
    sidebar: false,
    cartSidebarState: false,
    filterTag: "jeans",
    cart: false,
    cartCount: 0,
    cartData: [],
    productData: null,
  },
  reducers: {
    changeLocale: (state, action) => {
      state.locale = action.payload;
    },
    navigate: (state, action) => {
      state.route = action.payload;
    },
    loginUser: (state, action) => {
      state.isUser = action.payload;
    },
    logoutUser: (state, action) => {
      state.isUser = action.payload;
    },
    addCartProduct: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeCartProduct: (state, action) => {
      state.cartData = state.cartData.filter((item) => {
        return item.id !== action.payload;
      });
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setSidebarState: (state, action) => {
      state.sidebar = action.payload;
    },
    setCartSidebarState: (state, action) => {
      state.cartSidebarState = action.payload;
    },
    setCartState: (state, action) => {
      state.cart = action.payload;
    },
    setInitiated: (state, action) => {
      state.initiated = !!action.payload;
    },
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    updateFilterTag: (state, action) => {
      state.filterTag = action.payload;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  setProductId,
  setSidebarState,
  setCartSidebarState,
  setCartState,
  changeLocale,
  navigate,
  setInitiated,
  addCartProduct,
  removeCartProduct,
  setProductData,
  updateFilterTag,
} = globalSlice.actions;

export default globalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { blog_04, blog_05, blog_06 } from "../assets/image.assets";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    locale: "en",
    isUser: false,
    initiated: false,
    productId: null,
    sidebar: false,
    filterTag: "jeans",
    blogData: [
      {
        id: 1,
        title: "8 Inspiring Ways to Wear Dresses in the Winter",
        img: blog_04,
      },
      {
        id: 2,
        title: "The Great Big List of Men’s Gifts for the Holidays",
        img: blog_05,
      },
      {
        id: 3,
        title: "5 Winter-to-Spring Fashion Trends to Try Now",
        img: blog_06,
      },
    ],
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

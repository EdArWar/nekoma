import { createSlice } from "@reduxjs/toolkit";
import {
  a_1,
  a_2,
  a_3,
  a_4,
  b_1,
  b_2,
  b_3,
  b_4,
  c1,
  c2,
  c3,
  c4,
  d1,
  d2,
  d3,
  d4,
  e1,
  e2,
  e3,
  e4,
  g1,
  g2,
  g3,
  h1,
  h2,
  h3,
  h4,
  j1,
  j2,
  j3,
  j4,
  m1,
  m2,
  m3,
  m4,
  mena1,
  mena2,
  mena3,
  mena4,
  shoos_a1,
  shoos_a2,
  shoos_a3,
  shoos_a4,
  shoos_a5,
  r1,
  r2,
  r3,
  r4,
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  z1,
  z2,
  z3,
  z4,
  menb1,
  menb2,
  menb3,
  menb4,
  menc1,
  menc2,
  menc3,
  menc4,
  watcha1,
  watcha2,
  watcha3,
  watcha4,
  watcha5,
  blog_04,
  blog_05,
  blog_06,
} from "../assets/image.assets";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    locale: "en",
    isUser: false,
    initiated: false,
    productId: null,
    sidebar: false,
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
    productData: [
      {
        id: 1,
        type: "women",
        name: "Comfortable casual wear",
        price: 16.64,
        img: [b_1, b_2, b_3, b_4],
      },
      {
        id: 2,
        type: "women",
        name: "Comfortable casual wear",
        price: 35.31,
        img: [a_1, a_2, a_3, a_4],
      },
      {
        id: 3,
        type: "men",
        name: "Comfortable casual wear",
        price: 63.16,
        img: [mena1, mena2, mena3, mena4],
      },
      {
        id: 4,
        type: "women",
        name: "Comfortable casual wear",
        price: 75.0,
        img: [d1, d2, d3, d4],
      },
      {
        id: 5,
        type: "women",
        name: "Comfortable casual wear",
        price: 34.75,
        img: [e1, e2, e3, e4],
      },
      {
        id: 6,
        type: "watches",
        name: "Watches",
        price: 93.2,
        img: [watch1, watch2, watch3, watch4, watch5],
      },
      {
        id: 7,
        type: "women",
        name: "Comfortable casual wear",
        price: 52.66,
        img: [g1, g2, g3],
      },
      {
        id: 8,
        type: "women",
        name: "Comfortable casual wear",
        price: 18.96,
        img: [h1, h2, h3, h4],
      },
      {
        id: 9,
        type: "shoes",
        name: "Shoos",
        price: 75.0,
        img: [shoos_a1, shoos_a2, shoos_a3, shoos_a4, shoos_a5],
      },
      {
        id: 10,
        type: "women",
        name: "Comfortable casual wear",
        price: 25.85,
        img: [j1, j2, j3, j4],
      },
      {
        id: 11,
        type: "men",
        name: "Comfortable casual wear",
        price: 63.16,
        img: [menb1, menb2, menb3, menb4],
      },
      {
        id: 12,
        type: "men",
        name: "Comfortable casual wear",
        price: 63.15,
        img: [menc1, menc2, menc3, menc4],
      },
      {
        id: 13,
        type: "women",
        name: "Comfortable casual wear",
        price: 18.49,
        img: [m1, m2, m3, m4],
      },

      {
        id: 14,
        type: "watches",
        name: "Watches",
        price: 86.85,
        img: [watcha1, watcha2, watcha3, watcha4, watcha5],
      },
      {
        id: 15,
        type: "women",
        name: "Comfortable casual wear",
        price: 29.64,
        img: [r1, r2, r3, r4],
      },
      {
        id: 16,
        type: "women",
        name: "Comfortable casual wear",
        price: 29.64,
        img: [z1, z2, z3, z4],
      },
    ],
    serverProductData: null,
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
    setServerProductData: (state, action) => {
      state.serverProductData = action.payload;
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
  setServerProductData,
} = globalSlice.actions;

export default globalSlice.reducer;

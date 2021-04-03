import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global.slice";
import userSlice from "./user.slice.js";

export default configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global.slice";

export default configureStore({
  reducer: {
    global: globalSlice,
  },
});

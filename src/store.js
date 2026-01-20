import authReducer from "./slice/auth-slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
}); 

export default store;
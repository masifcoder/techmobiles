// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
    cartState: cartReducer,
  },
});

export default store;

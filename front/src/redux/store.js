// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import generalSlice from "./counterSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    cartState: cartReducer
  },
});

export default store;

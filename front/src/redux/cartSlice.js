import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {cart: []},
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {

        },
        resetCart: (state) => {
            state.cart = [];
        }
    }
});

export const {addToCart, removeFromCart, resetCart} = cartSlice.actions
export default cartSlice.reducer;
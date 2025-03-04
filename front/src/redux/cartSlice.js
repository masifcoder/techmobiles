import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {

        },
        resetCart: (state) => {
            state.cart = [];
        },
        updateQuantity: (state, action) => {
            if (action.payload.newQty < 1) return;
            state.cart = state.cart.map(item =>
                item.id == action.payload.id ? { ...item, quantity: action.payload.newQty, totalProductPrice: item.price * action.payload.newQty } : item
            );
        }
    }
});

export const { addToCart, removeFromCart, resetCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer;
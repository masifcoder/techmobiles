import { createSlice } from '@reduxjs/toolkit';

const generalSlice = createSlice({
  name: 'counter',
  initialState: { soap: 10, shampo: 0 },
  reducers: {
    purchase: (state) => {
      state.soap += 1;
    },
    sale: (state) => {
      state.soap -= 1;
    },
    reset: (state) => {
      state.soap = 10;
    },
    bulkPurchase : (state, action) => {
        state.shampo += +action.payload;
    }
  },
});

export const { purchase, sale, reset, bulkPurchase } = generalSlice.actions;
export default generalSlice.reducer;
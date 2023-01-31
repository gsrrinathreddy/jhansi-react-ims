import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfFlowers: 50,
  noOfOrdered: 0,
};
const flowerSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.numOfFlowers < action.payload) {
        console.log("out of stack");
      } else {
        state.numOfFlowers -= action.payload.qty;
        state.noOfOrdered += parseInt(action.payload.qty);
      }
    },
    restock: (state, action) => {
      state.numOfFlowers += action.payload;
    },
  },
});
export default flowerSlice.reducer;
export const { ordered, restock } = flowerSlice.actions;

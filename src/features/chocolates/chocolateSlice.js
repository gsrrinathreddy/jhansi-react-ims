import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfChocolates: 50,
  noOfOrdered: 0,
};
const chocolateSlice = createSlice({
  name: "chocolates",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.numOfChocolates < action.payload) {
        console.log("out of stack");
      } else {
        state.numOfChocolates -= action.payload.qty;
        state.noOfOrdered += parseInt(action.payload.qty);
      }
    },
    restocked: (state, action) => {
      state.numOfChocolates += action.payload;
    },
  },
});
export default chocolateSlice.reducer;
export const { ordered, restocked } = chocolateSlice.actions;

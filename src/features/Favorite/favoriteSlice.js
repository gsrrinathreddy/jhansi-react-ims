import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favList: [],
  totalItems: 0,
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  extraReducers: {
    ["cake/wishlist"]: (state, action) => {
      console.log("favorite", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
  },
});
export default favoriteSlice.reducer;

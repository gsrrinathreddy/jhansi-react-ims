import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import flowerReducer from "../features/flowers/flowerSlice";
import chocolateReducer from "../features/chocolates/chocolateSlice";
import giftReducer from "../features/gifts/GiftSlice";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/Favorite/favoriteSlice";
import usersReducer from "../features/Users/usersSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    flowers: flowerReducer,
    chocolates: chocolateReducer,
    gifts: giftReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    user: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;

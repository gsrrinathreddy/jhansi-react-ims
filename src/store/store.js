import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import flowerReducer from '../features/flowers/flowerSlice';
import chocolateReducer from '../features/chocolates/chocolateSlice';
import giftReducer from '../features/gifts/GiftSlice';
import cartReducer from '../features/cart/cartSlice';
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        flowers:flowerReducer,
        chocolates:chocolateReducer,
        gifts:giftReducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;
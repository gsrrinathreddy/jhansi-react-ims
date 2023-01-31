import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartList:[],
    totalItems:0
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    extraReducers:{
        ['cake/ordered']:(state,action)=>{
            console.log('cart',action.payload)
            state.cartList.push(action.payload)
            state.totalItems += parseInt(action.payload.qty);
        },
        
        ['icecream/ordered']:(state,action)=>{
                console.log('cart',action.payload)
                state.cartList.push(action.payload)
                state.totalItems += parseInt(action.payload.qty);
        },
        ['chocolates/ordered']:(state,action)=>{
            console.log('cart',action.payload)
            state.cartList.push(action.payload)
            state.totalItems += parseInt(action.payload.qty);
        },
        ['flowers/ordered']:(state,action)=>{
            console.log('cart',action.payload)
            state.cartList.push(action.payload)
            state.totalItems += parseInt(action.payload.qty);
        },
        ['gifts/ordered']:(state,action)=>{
            console.log('cart',action.payload)
            state.cartList.push(action.payload)
            state.totalItems += parseInt(action.payload.qty);
        },
        
    }})
export default cartSlice.reducer;
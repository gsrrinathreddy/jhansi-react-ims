import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfGifts:50,
    noOfOrdered:0
    
}
const giftSlice = createSlice({
    name:'gifts',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.numOfGifts < action.payload){
                console.log('out of stack');
            }
            else{
            state.numOfGifts -= action.payload;
            state.noOfOrdered +=parseInt(action.payload)
            }
        },
        restocked:(state,action)=>{
            state.numOfGifts += action.payload
        }
    }
})
export default giftSlice.reducer;
export const {ordered,restocked} = giftSlice.actions;
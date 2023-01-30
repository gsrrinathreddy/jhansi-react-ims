import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfIcecream:50,
    noOfOrdered:0
}
const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.numOfIcecream < action.payload){
                console.log('out of stack');
            }
            else{
            state.numOfIcecream -= action.payload;
            state.noOfOrdered +=parseInt(action.payload)
            }
        },
        restock:(state,action)=>{
            state.numOfIcecream += action.payload
        }
    },
    
})
export default icecreamSlice.reducer;
export const {ordered,restock} = icecreamSlice.actions;
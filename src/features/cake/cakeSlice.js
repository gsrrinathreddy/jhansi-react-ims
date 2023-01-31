import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes : 50,
    noOfOrdered:0
    
}
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.numOfCakes < action.payload){
                console.log('out of stack');
            }
            else{
            state.numOfCakes -= action.payload.qty;
            state.noOfOrdered +=parseInt(action.payload.qty)
            }
        
        },
        restocked:(state,action)=>{
            state.numOfCakes += action.payload
        }
        
    }
})

export default cakeSlice.reducer;
export const {ordered,restocked} = cakeSlice.actions;
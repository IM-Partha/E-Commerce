import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[]
}
const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add : (state,actions)=>{
            let exist = state.cart.find(data=> data.id === actions.payload.id)
            if(exist){
                state.cart = state.cart.map((data)=>data.id === actions.payload.id? 
                {...data, qty : data.qty +1} : data)
            }
            else{
                state.cart.push({...actions.payload, qty:1})
            }
        },
        increment:(state,actions)=>{
            state.cart = state.cart.map((data)=>(
                data.id === actions.payload.id?
                {...data, qty : data.qty+1<=5? data.qty +1 : 5}: data
            ))
        },
        decrement:(state,actions)=>{
            state.cart = state.cart.map((data)=>(
                data.id === actions.payload.id?
                {...data, qty : data.qty-1>=1? data.qty-1 : 1}: data
            ))
        },
        remove:(state,actions)=>{
            state.cart = state.cart.filter((data)=>(
                data.id !== actions.payload.id
            ))
        }
    }
})

export const {add,increment,decrement,remove} = CartSlice.actions
export default CartSlice.reducer
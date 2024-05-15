import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice'
import SearchReducer from './SearchSlice'
const store = configureStore({
    reducer:{
        cart:CartReducer,
        search:SearchReducer
    }
})

export default store
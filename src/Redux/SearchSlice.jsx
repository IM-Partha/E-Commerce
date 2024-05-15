import { createSlice } from "@reduxjs/toolkit";

const initialState={
    search:""
}
const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearch :(state,actions)=>{
            state.search = actions.payload
        }
    }
})

export const {setSearch}= SearchSlice.actions
export default SearchSlice.reducer
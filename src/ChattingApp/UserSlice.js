import { createSlice } from "@reduxjs/toolkit";

const Name = ""

export const User = createSlice({
    name: "LoginUser",
    initialState: Name,
    reducers:{
        Add : (state,action)=>{
            return state = action.payload
        }
    }
})

export default User.reducer
export const {Add} = User.actions
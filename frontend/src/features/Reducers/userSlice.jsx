import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        user: null,
        isLoggedin:false
    },

    reducers:{
        addUser : (state, action)=>{
            state.user = action.payload,
            state.isLoggedin = true
            console.log("userSlice user data", state.user)
        },
        removeUser : (state)=>{
            state.user = null,
            state.isLoggedin = false
        }
    }
});

export const {addUser,isLoggedin, removeUser} = userSlice.actions;

export default userSlice.reducer;
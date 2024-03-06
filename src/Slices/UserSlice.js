import { createSlice } from "@reduxjs/toolkit";

export const UserSlice=createSlice(
    {
        name:'user',
        initialState:{
            user:null,
        },
        reducers:{
            loginFunc:(state,action)=>
            {
                state.user = {
                    eemail: action.payload.eemail,
                    password: action.payload.password,
                  };
            },
        }
    }
)

export const {loginFunc} =UserSlice.actions;
export default UserSlice.reducer;
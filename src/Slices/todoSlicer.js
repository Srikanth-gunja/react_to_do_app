import { createSlice } from "@reduxjs/toolkit";


export const initialState=[


]
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
            addtodo: (state,action)=>{
            state.push(action.payload)
        },
          deleteTodo:(state,action)=>{
               return state.filter((todo)=>todo.id !== action.payload.id)
          },

    }
})

export const {addtodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;
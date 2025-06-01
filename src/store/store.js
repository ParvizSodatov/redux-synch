import { configureStore } from "@reduxjs/toolkit";
import  todoListReducer  from "./reducers/todolist";


export const store=configureStore({
    reducer:{

        todo: todoListReducer
    }
    
})
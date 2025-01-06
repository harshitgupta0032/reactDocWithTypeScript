import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/TodoFeature/todoSlice"

export const store = configureStore({
    reducer: todoReducer
});
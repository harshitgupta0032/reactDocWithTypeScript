import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/TodoFeature/todoSlice"
import { productReducer } from "../feature/ReduxThunk/ReduxThunkSlice";
import sliderReducer from "../feature/ReduxThunk/ReduxSlideSlice"
export const store = configureStore({
    reducer: {
        todo: todoReducer,
        product: productReducer,
        slider: sliderReducer
    }
});
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 
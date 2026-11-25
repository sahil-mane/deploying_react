import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import nameSlice from "./slices/nameSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        name:nameSlice
    }
});

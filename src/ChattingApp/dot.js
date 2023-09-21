import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const Store =  configureStore({
    reducer: {
        Username : UserSlice
    },
});

export default Store
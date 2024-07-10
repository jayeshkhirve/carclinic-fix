import { configureStore } from "@reduxjs/toolkit";
import connectionSlice from "./slice/connection.slice";
import viewerSclice from "./slice/viewer.sclice";

export const store = configureStore({
    reducer: {
        connectionSlice,
        viewerSclice
    }
})

export default store;
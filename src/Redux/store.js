import { configureStore } from "@reduxjs/toolkit";
import singerSlice from "./Slices/singerSlice";

const store = configureStore({
    reducer: {
        singers: singerSlice,
    }
})

export default store;
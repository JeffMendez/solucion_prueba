import { configureStore } from "@reduxjs/toolkit";
import { personalSlice } from "./personalSlice";
import { vehiculosSlice } from "./vehiculosSlice";

export const store = configureStore({
    reducer: {
        'vehiculos': vehiculosSlice.reducer,
        'personal': personalSlice.reducer,
    },
})
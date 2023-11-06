import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import orderSlice from "@/features/order/orderSlice";

export const store = configureStore({
    reducer: {
        order: orderSlice,
        hero: findPlaceSlice,
    },
});

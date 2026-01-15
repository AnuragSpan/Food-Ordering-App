import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./slices/cart";


const store = configureStore({
        reducer: {
                cart: cartSlicer
        }
})

export default store;
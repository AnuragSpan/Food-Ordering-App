import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        addCart: []
    },
        reducers: {
        addToCart: (state, action) => {
            state.addCart.push(action.payload)
        }
    }

})
export const { addToCart } = cartSlice.actions;
const cartSlicer = cartSlice.reducer
export default cartSlicer;


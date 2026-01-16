import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
    const data = localStorage.getItem("cart");
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        addCart: getInitialCart(),
    },
    reducers: {
        addToCart: (state, action) => {
            state.addCart.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.addCart));
        },
        clearCart:(state)=>{
         state.addCart.push([])
         localStorage.setItem("cart",JSON.stringify([]))
        }
    }
});
export const { addToCart,clearCart } = cartSlice.actions;
const cartSlicer = cartSlice.reducer;
export default cartSlicer;


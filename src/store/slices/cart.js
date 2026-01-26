import { createSlice, current } from "@reduxjs/toolkit";

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
            state.addCart.push({ ...action.payload, quantity: 1 });
            localStorage.setItem("cart", JSON.stringify(state.addCart));
        },
        clearCart: (state) => {
            state.addCart = []
            localStorage.setItem("cart", JSON.stringify([]))
        },
        cartIncrement: (state, action) => {
            const incrementItem = state.addCart.find((item) => item.id === action.payload)
            console.log("incrementItem",current.incrementItem)
            if (incrementItem) {
                incrementItem.quantity += 1
            }
          localStorage.setItem("cart", JSON.stringify(state.addCart))

        }
    }
});
export const { addToCart, clearCart, cartIncrement } = cartSlice.actions;
const cartSlicer = cartSlice.reducer;
export default cartSlicer;


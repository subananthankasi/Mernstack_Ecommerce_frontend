import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        items: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },

    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const id = newItem._id || newItem.id;
            const existingItem = state.items.find(
                (i) => (i._id || i.id) === id
            );
            if (existingItem) {
                const addQty = newItem.quantity || 1;
                existingItem.quantity = Math.min(
                    existingItem.quantity + addQty,
                    existingItem.stock
                );
            } else {
                state.items.push({
                    ...newItem,
                    quantity: Math.min(newItem.quantity || 1, newItem.stock),
                });

            }

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => (i._id || i.id) === id);

            if (item && item.quantity < item.stock) {
                item.quantity += 1;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => (i._id || i.id) === id);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const id = action.payload;

            state.items = state.items.filter(
                i => (i._id || i.id) !== id
            );

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        saveShippingInfo: (state, action) => {
            state.shippingInfo = action.payload;
            localStorage.setItem(
                "shippingInfo",
                JSON.stringify(state.shippingInfo)
            );
        }

    }
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart, saveShippingInfo } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

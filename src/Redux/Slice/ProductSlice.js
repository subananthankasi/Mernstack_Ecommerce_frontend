import { createSlice } from "@reduxjs/toolkit";
import { productGetThunk } from "../Actions/ProductAction";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        data: {},
        error: null
    },
    extraReducers(builder) {
        builder.addCase(productGetThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(productGetThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        });
        builder.addCase(productGetThunk.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        });
    },
});
export const productReducer = productSlice.reducer

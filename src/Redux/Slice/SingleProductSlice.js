import { createSlice } from "@reduxjs/toolkit";
import { singleProductThunk } from "../Actions/SingleProductThunk";


const singleProductSlice = createSlice({
    name: 'singleProductSlice',
    initialState: {
        loading: false,
        data: {},
        error: null
    },
    extraReducers(builder) {
        builder.addCase(singleProductThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(singleProductThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        });
        builder.addCase(singleProductThunk.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        });
    },
});
export const singleProductReducer = singleProductSlice.reducer

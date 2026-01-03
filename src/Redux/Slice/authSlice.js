import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../Actions/authAction";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        data: [],
        error: null,
        loading: false
    },
    extraReducers(builder) {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const loginReducer = loginSlice.reducer
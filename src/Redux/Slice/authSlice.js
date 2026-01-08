import { createSlice } from "@reduxjs/toolkit";
import { forgotPasswordThunk, getProfileThunk, loginThunk, resetPasswordThunk, updatePasswordThunk, updateProfileThunk } from "../Actions/authAction";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
        isAuthenticate: false
    },
    extraReducers(builder) {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isAuthenticate = true
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const loginReducer = loginSlice.reducer

const registerSlice = createSlice({
    name: 'registerSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
        isAuthenticate: false
    },
    extraReducers(builder) {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isAuthenticate = true
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const registerReducer = registerSlice.reducer


const getProfileSlice = createSlice({
    name: 'getProfileSlice',
    initialState: {
        data: [],
        error: null,
        loading: true,
        isAuthenticate: false
    },
    extraReducers(builder) {
        builder.addCase(getProfileThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isAuthenticate = true
        });
        builder.addCase(getProfileThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const getProfileReducer = getProfileSlice.reducer

const logoutSlice = createSlice({
    name: 'logoutSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
    },
    extraReducers(builder) {
        builder.addCase(getProfileThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        });
        builder.addCase(getProfileThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const logoutReducer = logoutSlice.reducer

const updateProfileSlice = createSlice({
    name: 'updateProfileSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
        isUpdated: false
    },
    extraReducers(builder) {
        builder.addCase(updateProfileThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(updateProfileThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isUpdated = true
        });
        builder.addCase(updateProfileThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const updateProfileReducer = updateProfileSlice.reducer

const updatePasswordSlice = createSlice({
    name: 'updatePasswordSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
        isUpdated: false
    },
    extraReducers(builder) {
        builder.addCase(updatePasswordThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(updatePasswordThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isUpdated = true
        });
        builder.addCase(updatePasswordThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const updatePasswordReducer = updatePasswordSlice.reducer

const forgotPasswordSlice = createSlice({
    name: 'forgotPasswordSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
        isUpdated: false
    },
    extraReducers(builder) {
        builder.addCase(forgotPasswordThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(forgotPasswordThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isUpdated = true
        });
        builder.addCase(forgotPasswordThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const forgotPasswordReducer = forgotPasswordSlice.reducer

const resetPasswordSlice = createSlice({
    name: 'resetPasswordSlice',
    initialState: {
        data: [],
        error: null,
        loading: false,
        isUpdated: false
    },
    extraReducers(builder) {
        builder.addCase(resetPasswordThunk.pending, (state) => {
            state.loading = true
        });
        builder.addCase(resetPasswordThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
            state.isUpdated = true
        });
        builder.addCase(resetPasswordThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const resetPasswordReducer = resetPasswordSlice.reducer
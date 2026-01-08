import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../Api/Api";

export const loginThunk = createAsyncThunk('loginThunk/data', (
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "post",
                url: `${API_BASE_URL}/login`,
                data: {
                    email, password
                },
                withCredentials: true

            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const registerThunk = createAsyncThunk('registerThunk/data', (
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "post",
                url: `${API_BASE_URL}/register`,
                data: userData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const getProfileThunk = createAsyncThunk('getProfileThunk/data', (
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "get",
                url: `${API_BASE_URL}/myprofile`,
                withCredentials: true
            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const logoutThunk = createAsyncThunk('logoutThunk/data', (
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "get",
                url: `${API_BASE_URL}/logout`,
                withCredentials: true
            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const updateProfileThunk = createAsyncThunk('updateProfileThunk/data', (
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "put",
                url: `${API_BASE_URL}/update`,
                data: userData,
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const updatePasswordThunk = createAsyncThunk('updatePasswordThunk/data', (
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "put",
                url: `${API_BASE_URL}/password/change`,
                data: userData,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const forgotPasswordThunk = createAsyncThunk('forgotPasswordThunk/data', (
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "post",
                url: `${API_BASE_URL}/password/forgot`,
                data: userData,
                withCredentials: true,

            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))

export const resetPasswordThunk = createAsyncThunk('resetPasswordThunk/data', (
    async ({ token, password, confirmPassword }, { rejectWithValue }) => {

        try {
            const response = await axios({
                method: "post",
                url: `${API_BASE_URL}/password/reset/${token}`,
                data: { password, confirmpassword: confirmPassword },
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,

            });
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))
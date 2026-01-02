import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../Api/Api";

export const singleProductThunk = createAsyncThunk('singleProductThunk/data', (
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/product/${id}`)
            return response.data
        } catch (error) {
            if (error.response) {
                return rejectWithValue(error.response.data)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))
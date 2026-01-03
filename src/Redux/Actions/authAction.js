import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../Api/Api";

export const loginThunk = createAsyncThunk('loginThunk/data', (
    async ({email,password}, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "post",
                url: `${API_BASE_URL}/login`,
                data:{
                    email,password
                }
            });
            return response.data
        } catch (error) {
            if (error.response) {
                console.log("erroreee",error.response.data?.message)

                return rejectWithValue(error.response.data?.message)
            }
            return rejectWithValue({ message: 'An unexpected error occurred' })
        }
    }
))
import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_BASE_URL } from "../../Api/Api"
import axios from "axios"

export const productGetThunk = createAsyncThunk(
  'productGetThunk/data',
  async ({ keyword, price, getCategory,ratings,star } = {}, { rejectWithValue }) => {
    try {
      const params = {}
      if (keyword) {
        params.keyword = keyword
      }

      if (price && price.length === 2) {
        params['price[gte]'] = price[0]
        params['price[lte]'] = price[1]
      }
      if (getCategory) {
        params.category = getCategory
      }
      if (ratings) {
        params.ratings = ratings
      }
      if (getCategory) {
        params.category = getCategory
      }
      if (star) {
        params.ratings = star
      }

      const response = await axios.get(`${API_BASE_URL}/product`, {
        params
      })
      return response.data
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data)
      }
      return rejectWithValue({ message: 'An unexpected error occurred' })
    }
  }
)


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
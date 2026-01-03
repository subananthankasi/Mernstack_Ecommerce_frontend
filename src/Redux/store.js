import { configureStore } from "@reduxjs/toolkit";
import { productReducer, singleProductReducer } from "./Slice/ProductSlice";
import { loginReducer } from './Slice/authSlice';




export const store = configureStore({
 reducer:{
    productState:productReducer,
    singleData:singleProductReducer,
    login:loginReducer
 }

})
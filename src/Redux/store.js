import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Slice/ProductSlice";
import { singleProductReducer } from "./Slice/SingleProductSlice";



export const store = configureStore({
 reducer:{
    productState:productReducer,
    singleData:singleProductReducer,
 }

})
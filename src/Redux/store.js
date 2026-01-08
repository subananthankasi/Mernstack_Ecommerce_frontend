import { configureStore } from "@reduxjs/toolkit";
import { productReducer, singleProductReducer } from "./Slice/ProductSlice";
import { getProfileReducer, loginReducer, registerReducer } from './Slice/authSlice';
import { cartReducer } from "./Slice/CartSlice";




export const store = configureStore({
 reducer:{
    productState:productReducer,
    singleData:singleProductReducer,
    login:loginReducer,
    register:registerReducer,
    authState:getProfileReducer,
    cart: cartReducer,
 }

})
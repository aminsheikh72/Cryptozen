import { configureStore } from "@reduxjs/toolkit";
import coin from './coin/coinSlice'
import auth from './auth/AuthSlice'
import cart from './cart/cartSlice'
const store = configureStore({
    reducer : {
        auth,
        coin,
        cart
    }
})
export default store;
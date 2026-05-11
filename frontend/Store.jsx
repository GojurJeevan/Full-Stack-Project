import { configureStore } from "@reduxjs/toolkit";
import product from "./src/slice/ProductSlice";
import carts from "./src/slice/CartSlice";

export const Store =  configureStore({
    reducer:{
        products: product,
        cart: carts
    }
})
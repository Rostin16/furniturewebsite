import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductsSlice"

export const store=configureStore({reducer:{
    product:productReducer,
}
})

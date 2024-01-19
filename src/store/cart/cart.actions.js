import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, getCart } from "../../api/cart";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue }) => {
    try {
        const cart = await getCart();
        return cart
    } catch (error) {
        console.log("error", error)
        return rejectWithValue(error.message)
    }
});


export const addProductTocart = createAsyncThunk("cart/addProductTocart", async ({ productId, quantity }, { rejectWithValue }) => {
    console.log(productId, quantity)
    try {
        const cart = await addToCart(productId, quantity);
        return cart
    } catch (error) {
        console.log("error", error)
        return rejectWithValue(error.message)
    }
});
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, getCart, removeFromCart } from "../../api/cart";

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
    try {
        const cart = await addToCart(productId, quantity);
        return cart
    } catch (error) {
        console.log("error", error)
        return rejectWithValue(error.message)
    }
});

export const removeProductFromCart = createAsyncThunk("cart/removeProductFromCart", async ({ productId }, { rejectWithValue }) => {
    try {
        const cart = await removeFromCart(productId);
        return cart
    } catch (error) {
        console.log("error", error)
        return rejectWithValue(error.message)
    }
});
import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../data/shop.json';
import { getProductDetails, getProducts, getRelatedProducts } from '../../api/products';



export const fetchProducts = createAsyncThunk('products/fetchProducts', async (query, {rejectWithValue}) => {
    try {
        const res = await getProducts(query);
        return res
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const fetchProductDetails = createAsyncThunk("products/fetchProductDetails", async (slug, { rejectWithValue }) => {
    try {
        const res = await getProductDetails(slug);
        return res
    } catch (error) {
        return rejectWithValue(error.message)
    }
});


export const fetchRelatedProducts = createAsyncThunk("products/fetchRelatedProducts", async (id,  { rejectWithValue }) => {
    try {
        const res = await getRelatedProducts(id);
        return res
    } catch (error) {
        return rejectWithValue(error.message)
    }
});
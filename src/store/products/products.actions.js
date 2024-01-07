import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../data/shop.json';
import { getProductDetails, getProducts, getRelatedProducts } from '../../api/products';


const getProductsService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        }, 3000)
    });
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await getProducts();
        return res
    } catch (error) {
        return error.message
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
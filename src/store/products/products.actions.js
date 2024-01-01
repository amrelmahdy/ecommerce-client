import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../data/shop.json';


const getProductsService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        }, 3000)
    });
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await getProductsService();
        return res.products
    } catch (error) {
        return error.message
    }
})